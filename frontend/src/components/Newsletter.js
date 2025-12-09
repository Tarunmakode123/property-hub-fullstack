import React, { useState } from 'react';
import { createNewsletter } from '../api/api';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await createNewsletter({ email });
      setMessage({ type: 'success', text: 'Successfully subscribed to our newsletter!' });
      setEmail('');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to subscribe. Please try again.';
      setMessage({ type: 'error', text: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 58, 95, 0.9)' }}></div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontFamily: '"Playfair Display", serif', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '2rem',
            lineHeight: '1.4',
            maxWidth: '900px',
            margin: '0 auto 2rem'
          }}>
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Learn More
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#1e3a5f' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>
                Subscribe Us
              </h3>
            </div>
            
            {message.text && (
              <div style={{ 
                width: '100%',
                padding: '1rem', 
                borderRadius: '0.5rem', 
                backgroundColor: message.type === 'success' ? '#d1fae5' : '#fee2e2',
                color: message.type === 'success' ? '#065f46' : '#991b1b',
                marginBottom: '1rem'
              }}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', flex: 2, minWidth: '300px', alignItems: 'center' }}>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '1rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn-accent"
                disabled={loading}
                style={{ padding: '1rem 2rem', fontSize: '1rem', whiteSpace: 'nowrap' }}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
