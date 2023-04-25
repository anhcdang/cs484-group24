import React, { useEffect, useCallback } from 'react';
import "../static/styles.css";
import {useNavigate } from 'react-router-dom';
import { frames } from '../sketch';

const UP = "UP"
export default function App() {
  const navigate = useNavigate();
  const startButton = useCallback(() => {
    navigate('/categories');
  }, [navigate]);

  const sendWristCommand = useCallback((command) => {
    switch (command) {
      case UP:
        console.log(UP);
        startButton();
        break;
      default:
        break;
    }
  }, [startButton]);

  useEffect(() => {
    frames.start()
  })

  useEffect(() => {
    setInterval(() => {
      sendWristCommand(frames.command)
    }, 500);
  },[sendWristCommand])
  return (
    <div className="container">
      <div className="circle-container">
          <div className="circle" onClick={startButton}>
              Start
          </div>
      </div>
      <div>
        <div className="text-large">Hello</div>
        <div className="text-small">Move your hand to view campus events</div>
      </div>
    </div>
  );
}


