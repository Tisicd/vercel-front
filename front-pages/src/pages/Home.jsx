import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { name: 'Heroku App', url: 'https://tu-app-en-heroku.herokuapp.com' },
  { name: 'Railway App', url: 'https://tu-app-en-railway.up.railway.app' },
  { name: 'DigitalOcean App', url: 'https://tu-app-digitalocean.com' },
  { name: 'Vercel Front', url: 'https://tufront.vercel.app' },
  { name: 'SaaS 1 (ej: Auth0)', url: 'https://manage.auth0.com/' },
  { name: 'SaaS 2 (ej: Firebase)', url: 'https://console.firebase.google.com/' },
];

const Home = () => (
  <div className="container">
    <h1 className="text-center py-2">Dashboard de Servicios</h1>
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard key={index} name={service.name} url={service.url} />
      ))}
    </div>
  </div>
);

export default Home;