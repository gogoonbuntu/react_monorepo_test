import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/page2">
        <Button>Next</Button>  
      </Link>
    </div>
  );
}