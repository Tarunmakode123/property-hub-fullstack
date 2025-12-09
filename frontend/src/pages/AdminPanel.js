import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectManagement from '../components/admin/ProjectManagement';
import ClientManagement from '../components/admin/ClientManagement';
import ContactList from '../components/admin/ContactList';
import NewsletterList from '../components/admin/NewsletterList';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="container">
          <h1>Admin Panel</h1>
          <Link to="/" className="btn btn-home">Back to Home</Link>
        </div>
      </header>

      <div className="admin-content">
        <div className="container">
          <div className="admin-tabs">
            <button
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`tab-btn ${activeTab === 'clients' ? 'active' : ''}`}
              onClick={() => setActiveTab('clients')}
            >
              Clients
            </button>
            <button
              className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
              onClick={() => setActiveTab('contacts')}
            >
              Contact Forms
            </button>
            <button
              className={`tab-btn ${activeTab === 'newsletter' ? 'active' : ''}`}
              onClick={() => setActiveTab('newsletter')}
            >
              Newsletter
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'projects' && <ProjectManagement />}
            {activeTab === 'clients' && <ClientManagement />}
            {activeTab === 'contacts' && <ContactList />}
            {activeTab === 'newsletter' && <NewsletterList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
