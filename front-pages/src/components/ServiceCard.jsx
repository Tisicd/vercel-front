import React from 'react';

const ServiceCard = ({ name, url }) => (
  <div className="service-card">
    <h3>{name}</h3>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Ir al servicio
    </a>
  </div>
);

export default ServiceCard;