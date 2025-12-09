import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = () => api.get('/projects');
export const getProject = (id) => api.get(`/projects/${id}`);
export const createProject = (formData) => api.post('/projects', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const updateProject = (id, formData) => api.put(`/projects/${id}`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Clients API
export const getClients = () => api.get('/clients');
export const getClient = (id) => api.get(`/clients/${id}`);
export const createClient = (formData) => api.post('/clients', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const updateClient = (id, formData) => api.put(`/clients/${id}`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteClient = (id) => api.delete(`/clients/${id}`);

// Contact Forms API
export const getContacts = () => api.get('/contacts');
export const createContact = (data) => api.post('/contacts', data);
export const deleteContact = (id) => api.delete(`/contacts/${id}`);

// Newsletter API
export const getNewsletters = () => api.get('/newsletter');
export const createNewsletter = (data) => api.post('/newsletter', data);
export const deleteNewsletter = (id) => api.delete(`/newsletter/${id}`);

export default api;
