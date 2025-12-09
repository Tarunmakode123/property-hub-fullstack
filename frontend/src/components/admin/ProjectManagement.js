import React, { useState, useEffect } from 'react';
import { getProjects, createProject, deleteProject } from '../../api/api';
import './AdminComponents.css';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
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
      data.append('description', formData.description);
      data.append('image', formData.image);

      await createProject(data);
      setMessage({ type: 'success', text: 'Project added successfully!' });
      setFormData({ name: '', description: '', image: null });
      document.getElementById('project-image').value = '';
      fetchProjects();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add project.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setMessage({ type: 'success', text: 'Project deleted successfully!' });
        fetchProjects();
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete project.' });
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
      <h2>Project Management</h2>
      
      {message.text && (
        <div className={message.type === 'success' ? 'success' : 'error'}>
          {message.text}
        </div>
      )}

      <div className="admin-form-section">
        <h3>Add New Project</h3>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter project name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter project description"
            />
          </div>

          <div className="form-group">
            <label>Image (will be cropped to 450x350)</label>
            <input
              type="file"
              id="project-image"
              name="image"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Project'}
          </button>
        </form>
      </div>

      <div className="admin-list-section">
        <h3>Existing Projects</h3>
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <div className="admin-grid">
            {projects.map((project) => (
              <div key={project._id} className="admin-card">
                <img src={getImageUrl(project.image)} alt={project.name} />
                <div className="admin-card-content">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <button
                    onClick={() => handleDelete(project._id)}
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

export default ProjectManagement;
