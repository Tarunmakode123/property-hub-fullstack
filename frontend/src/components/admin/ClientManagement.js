import React, { useState, useEffect } from 'react';
import { getClients, createClient, deleteClient } from '../../api/api';
import './AdminComponents.css';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await getClients();
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('designation', formData.designation);
      data.append('description', formData.description);
      data.append('image', formData.image);

      await createClient(data);
      setMessage({ type: 'success', text: 'Client added successfully!' });
      setFormData({ name: '', designation: '', description: '', image: null });
      document.getElementById('client-image').value = '';
      fetchClients();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add client.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteClient(id);
        setMessage({ type: 'success', text: 'Client deleted successfully!' });
        fetchClients();
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete client.' });
      }
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('http') 
      ? imagePath 
      : `http://localhost:5000${imagePath}`;
  };

  return (
    <div className="admin-component">
      <h2>Client Management</h2>
      
      {message.text && (
        <div className={message.type === 'success' ? 'success' : 'error'}>
          {message.text}
        </div>
      )}

      <div className="admin-form-section">
        <h3>Add New Client</h3>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Client Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter client name"
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              placeholder="e.g., CEO, Web Developer, Designer"
            />
          </div>

          <div className="form-group">
            <label>Description/Testimonial</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter client testimonial"
            />
          </div>

          <div className="form-group">
            <label>Image (will be cropped to 450x350)</label>
            <input
              type="file"
              id="client-image"
              name="image"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Client'}
          </button>
        </form>
      </div>

      <div className="admin-list-section">
        <h3>Existing Clients</h3>
        {clients.length === 0 ? (
          <p>No clients yet.</p>
        ) : (
          <div className="admin-grid">
            {clients.map((client) => (
              <div key={client._id} className="admin-card">
                <img src={getImageUrl(client.image)} alt={client.name} />
                <div className="admin-card-content">
                  <h4>{client.name}</h4>
                  <p className="designation">{client.designation}</p>
                  <p>{client.description}</p>
                  <button
                    onClick={() => handleDelete(client._id)}
                    className="btn btn-danger btn-small"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientManagement;
