import React from 'react';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Newsletter from '../components/Newsletter';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header/Navigation */}
      <header style={{ position: 'fixed', width: '100%', top: 0, backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
        <div className="container-custom" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '1.75rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f' }}>PropertyHub</h1>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#home" style={{ color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a>
            <a href="#about" style={{ color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>About</a>
            <a href="#projects" style={{ color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</a>
            <a href="#clients" style={{ color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>Testimonials</a>
            <a href="#contact" style={{ color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
            <a href="/admin" className="btn-primary" style={{ fontSize: '0.875rem' }}>Admin Panel</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Contact Form */}
      <section id="home" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '80px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 58, 95, 0.85)' }}></div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left side - Hero Text */}
            <div className="animate-slide-in-left">
              <h1 style={{ fontSize: '4rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: 'white', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                Consultation,<br />
                Design,<br />
                <span style={{ color: '#f97316' }}>& Marketing</span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.95)', marginBottom: '2.5rem', maxWidth: '550px' }}>
                We help you find your dream home with expert consultation, stunning design, and strategic marketing that delivers results.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="#projects" className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Explore Properties</a>
                <a href="#about" style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '600', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'all 0.2s', border: '2px solid white' }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Contact Form Card */}
            <div className="animate-fade-in" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '0.75rem' }}>Get a Free Consultation</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Fill out the form and our team will get back to you within 24 hours.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="input-field"
                  style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                />
                <input 
                  type="email" 
                  placeholder="Enter Email Address" 
                  className="input-field"
                  style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                />
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="input-field"
                  style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                />
                <input 
                  type="text" 
                  placeholder="Area, City" 
                  className="input-field"
                  style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                />
                <button type="submit" className="btn-accent" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left side - Image */}
            <div className="animate-fade-in" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-2rem', left: '-2rem', width: '200px', height: '200px', backgroundColor: '#fed7aa', borderRadius: '50%', zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                alt="Real estate professionals" 
                style={{ 
                  width: '100%', 
                  height: '500px', 
                  objectFit: 'cover', 
                  borderRadius: '1rem', 
                  position: 'relative', 
                  zIndex: 1,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            
            {/* Right side - Content */}
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Not Your Average Realtor
                <div style={{ width: '80px', height: '4px', backgroundColor: '#f97316', marginTop: '1rem' }}></div>
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We're not just selling houses – we're building dreams. Our team of expert realtors combines decades of experience with cutting-edge technology to deliver exceptional results for our clients.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Whether you're buying your first home, upgrading to your dream property, or looking for the best return on your investment, we have the expertise and dedication to make it happen.
              </p>
              <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', backgroundColor: '#2c5282', border: 'none', cursor: 'pointer' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
        <div className="container-custom">
          <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', textAlign: 'center', marginBottom: '1rem' }}>
            Why Choose Us?
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f97316', margin: '1rem auto 0' }}></div>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginTop: '4rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }} className="card-hover">
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', backgroundColor: '#fed7aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '50px', height: '50px', color: '#f97316' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: '"Playfair Display", serif', fontWeight: '600', marginBottom: '1rem', color: '#1e3a5f' }}>Potential ROI</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', fontSize: '1.05rem' }}>We analyze market trends to maximize your return on investment with data-driven strategies.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }} className="card-hover">
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', backgroundColor: '#fed7aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '50px', height: '50px', color: '#f97316' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: '"Playfair Display", serif', fontWeight: '600', marginBottom: '1rem', color: '#1e3a5f' }}>Design</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', fontSize: '1.05rem' }}>Our design experts help stage and present properties to attract the right buyers.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }} className="card-hover">
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', backgroundColor: '#fed7aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '50px', height: '50px', color: '#f97316' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: '"Playfair Display", serif', fontWeight: '600', marginBottom: '1rem', color: '#1e3a5f' }}>Marketing</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', fontSize: '1.05rem' }}>Strategic marketing campaigns that put your property in front of qualified buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '1rem' }}>
            About Us
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f97316', margin: '1rem auto 0' }}></div>
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '900px', margin: '2rem auto 3rem', padding: '0 2rem' }}>
            Fifteen years of experience in real estate, combined with a passion for helping people find their perfect home. We've built lasting relationships and a trusted reputation in the industry.
          </p>
          <button style={{ 
            backgroundColor: 'white', 
            color: '#1e3a5f', 
            border: '2px solid #e5e7eb',
            padding: '1rem 2.5rem', 
            borderRadius: '0.5rem', 
            fontSize: '1rem', 
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Learn More
          </button>
        </div>
      </section>

      <Projects />
      <Clients />
      <Newsletter />

      <footer style={{ backgroundColor: '#1e3a5f', color: 'white', padding: '3rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg style={{ width: '32px', height: '32px', color: '#f97316' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h3 style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}>
                Property<span style={{ color: '#f97316' }}>Hub</span>
              </h3>
            </div>

            {/* Copyright */}
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              © 2025 PropertyHub. All rights reserved.
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
