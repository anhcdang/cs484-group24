import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import Categories from "./Categories";
import "../static/styles.css";
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';

const startButton = useCallback(() => {
  navigate('/carousel');
}, [navigate]);

export default function App() {
  return (
    <div className="container">
      <div className="circle-container">
        <Button className='Start-Button' size='lg' onclick={startButton}> Start </Button>
          <div className="circle">
          </div>
      </div>
      <div>
        <div className="text-large">Hello</div>
        <div className="text-small">Move your hand to view campus events</div>
      </div>
    </div>
  );
}


