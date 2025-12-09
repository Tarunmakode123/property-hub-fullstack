import React, { useState, useEffect } from 'react';
import { getClients } from '../api/api';
import './Clients.css';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await getClients();
      if (response.data && response.data.length > 0) {
        setClients(response.data);
      } else {
        setClients([
          {
            _id: '1',
            name: 'Rowhan Smith',
            designation: 'CEO, Foreclosure',
            description: 'Working with this team was exceptional. They understood our requirements perfectly and delivered a property solution that exceeded our expectations. The attention to detail and professional approach made the entire process smooth.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
          },
          {
            _id: '2',
            name: 'Shipra Kayak',
            designation: 'Brand Designer',
            description: 'Outstanding service from start to finish. The team was responsive, knowledgeable, and helped us find exactly what we were looking for. Their market expertise and negotiation skills saved us both time and money.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
          },
          {
            _id: '3',
            name: 'John Lepore',
            designation: 'CEO, Foreclosure',
            description: 'Highly professional and results-oriented. They took care of everything from property search to final paperwork. Their dedication and transparency throughout the process made us feel confident in our investment decision.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
          },
          {
            _id: '4',
            name: 'Marry Freeman',
            designation: 'Marketing Manager at Mixit',
            description: 'The best real estate experience we have had. Their team provided valuable insights into market trends and helped us make an informed decision. Communication was excellent and they were always available to answer our questions.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            _id: '5',
            name: 'Lucy Chen',
            designation: 'Sales Rep at Alibaba',
            description: 'Incredible support throughout our property journey. The team went above and beyond to ensure we found our dream home. Their professionalism, market knowledge, and commitment to client satisfaction are truly commendable.',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80'
          }
        ]);
      }
      setLoading(false);
    } catch (err) {
      setClients([
        {
          _id: '1',
          name: 'Rowhan Smith',
          designation: 'CEO, Foreclosure',
          description: 'Working with this team was exceptional. They understood our requirements perfectly and delivered a property solution that exceeded our expectations. The attention to detail and professional approach made the entire process smooth.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
        },
        {
          _id: '2',
          name: 'Shipra Kayak',
          designation: 'Brand Designer',
          description: 'Outstanding service from start to finish. The team was responsive, knowledgeable, and helped us find exactly what we were looking for. Their market expertise and negotiation skills saved us both time and money.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
        },
        {
          _id: '3',
          name: 'John Lepore',
          designation: 'CEO, Foreclosure',
          description: 'Highly professional and results-oriented. They took care of everything from property search to final paperwork. Their dedication and transparency throughout the process made us feel confident in our investment decision.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
        }
      ]);
      setLoading(false);
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('http') 
      ? imagePath 
      : `http://localhost:5000${imagePath}`;
  };

  if (loading) return <div className="loading">Loading testimonials...</div>;

  return (
    <section id="clients" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }} className="animate-fade-in">
          <div style={{ width: '80px', height: '80px', backgroundColor: '#fed7aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <svg style={{ width: '40px', height: '40px', color: '#f97316' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
            </svg>
          </div>
          <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '1rem' }}>
            Happy Clients
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f97316', margin: '1rem auto 0' }}></div>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {clients.map((client, index) => (
            <div
              key={client._id}
              style={{ backgroundColor: '#f9fafb', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', animationDelay: `${index * 0.1}s` }}
              className="card-hover animate-fade-in"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <svg style={{ width: '28px', height: '28px', color: '#f97316', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.7', flex: 1 }}>
                  {client.description || "Professional service with exceptional results. The team demonstrated expertise and dedication throughout the entire process."}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                <img
                  src={getImageUrl(client.image)}
                  alt={client.name}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontFamily: '"Playfair Display", serif', fontWeight: '600', color: '#1e3a5f', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    {client.name}
                  </h4>
                  <p style={{ color: '#f97316', fontSize: '0.875rem', fontWeight: '500' }}>
                    {client.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
