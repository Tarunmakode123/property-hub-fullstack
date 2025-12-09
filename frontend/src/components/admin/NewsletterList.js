import React, { useState, useEffect } from 'react';
import { getNewsletters, deleteNewsletter } from '../../api/api';
import './AdminComponents.css';

const NewsletterList = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await getNewsletters();
      setNewsletters(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      try {
        await deleteNewsletter(id);
        setMessage({ type: 'success', text: 'Subscription deleted successfully!' });
        fetchNewsletters();
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete subscription.' });
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div className="loading">Loading subscriptions...</div>;

  return (
    <div className="admin-component">
      <h2>Newsletter Subscriptions</h2>
      
      {message.text && (
        <div className={message.type === 'success' ? 'success' : 'error'}>
          {message.text}
        </div>
      )}

      {newsletters.length === 0 ? (
        <p>No newsletter subscriptions yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email Address</th>
                <th>Subscribed On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {newsletters.map((newsletter) => (
                <tr key={newsletter._id}>
                  <td>{newsletter.email}</td>
                  <td>{formatDate(newsletter.createdAt)}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(newsletter._id)}
                      className="btn btn-danger btn-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
