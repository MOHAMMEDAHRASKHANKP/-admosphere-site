import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Keep the original stylesheet for now
import './styles.css';
import "./styles/design-system.css";
// New modular styles (currently empty)
import './styles/base.css';
import './styles/navbar.css';
import './styles/loader.css';
import './styles/cursor.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/hero.css';
import './styles/work.css';
import './styles/process-visual.css';
import './styles/platforms-visual.css';
// Existing section styles
import './services.css';
import './styles/Why-admosphere.css';
import './process-enhancements.css';

createRoot(document.getElementById('root')).render(
  <App />
);