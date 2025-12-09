import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      if (response.data && response.data.length > 0) {
        setProjects(response.data);
      } else {
        setProjects([
          {
            _id: '1',
            name: 'Skyline Residences, Manhattan',
            description: 'Luxury apartments with stunning city views',
            category: 'Consultation',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            _id: '2',
            name: 'Ocean View Towers, Miami',
            description: 'Modern beachfront living at its finest',
            category: 'Design',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            _id: '3',
            name: 'Green Valley Estate, Austin',
            description: 'Sustainable living in beautiful surroundings',
            category: 'Marketing & Design',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80'
          },
          {
            _id: '4',
            name: 'Urban Lofts, Seattle',
            description: 'Contemporary design in the heart of the city',
            category: 'Consultation & Marketing',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            _id: '5',
            name: 'Sunset Hills, Los Angeles',
            description: 'Hillside homes with breathtaking views',
            category: 'Consultation',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80'
          }
        ]);
      }
      setLoading(false);
    } catch (err) {
      setProjects([
        {
          _id: '1',
          name: 'Skyline Residences, Manhattan',
          description: 'Luxury apartments with stunning city views',
          category: 'Consultation',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
          _id: '2',
          name: 'Ocean View Towers, Miami',
          description: 'Modern beachfront living at its finest',
          category: 'Design',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
          _id: '3',
          name: 'Green Valley Estate, Austin',
          description: 'Sustainable living in beautiful surroundings',
          category: 'Marketing & Design',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80'
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

  if (loading) return <div className="loading">Loading projects...</div>;

  return (
    <section id="projects" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '1rem' }}>
            Our Projects
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f97316', margin: '1rem auto 0' }}></div>
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '900px', margin: '2rem auto 0', padding: '0 2rem' }}>
            We know what buyers are looking for and suggest projects that will bring creative top dollar for the sale of their homes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div
              key={project._id}
              style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', animationDelay: `${index * 0.1}s` }}
              className="card-hover animate-fade-in"
            >
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={getImageUrl(project.image)}
                  alt={project.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: '#f97316', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                  {project.category || 'Consultation'}
                </p>
                <h3 style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display", serif', fontWeight: '600', color: '#1e3a5f', marginBottom: '1.5rem' }}>
                  {project.name}
                </h3>
                <button className="btn-accent" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem' }}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
