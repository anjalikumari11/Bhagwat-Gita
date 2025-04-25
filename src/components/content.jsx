
import React, { useState } from 'react';
import './Content.css';

const Content = () => {

  return (
    <div className='contentPage'>
      <h1>BHAGAVAD GEETA</h1>
      <p>भगवद्गीता</p>
      <h4>Information</h4>
      <div className='info'>
        <div>
          <li>Religion</li>
          <li>Author</li>
          <li>Language</li>
          <li>Chapters</li>
          <li>Verses</li>
        </div>
        <div>
        <li>Hinduism</li>
        <li>Traditionally attributed to Vyasa</li>
        <li>Sanskrit</li>
        <li>18</li>
        <li>700</li>
        
        </div>
        </div>
    </div>
  );
};

export default Content;
