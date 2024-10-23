import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loader from './Components/Loader.jsx';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

// Lazy load the App component
// const LazyApp = React.lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
{/* 
    <Suspense fallback={<Loader />}>
      <LazyApp />
    </Suspense> */}
    <App/>
    
    </BrowserRouter>
  </StrictMode>,
);
