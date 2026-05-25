import React, { useEffect } from 'react';

export default function Fluid() {
  useEffect(() => {
    const script = document.createElement('script');
    
    // The leading slash tells Vite to look in the public folder
    script.src = '/assets/js/fluidInit.js'; 
    script.async = true;
    // Removed type='module' because fluidInit is standard vanilla JS, not an ES module
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <canvas 
      className="fluid-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none', // Prevents the canvas from blocking your form/buttons!
      }}
    />
  );
}