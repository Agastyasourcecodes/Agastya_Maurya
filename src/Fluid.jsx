import React, { useEffect } from 'react';

export default function Fluid() {
  useEffect(() => {
    // 1. Strict Mode Fix: Prevent React from injecting this twice
    if (document.getElementById('fluid-script')) return;

    const script = document.createElement('script');
    script.id = 'fluid-script'; 
    
    // 2. 404 Fix: Corrected the path to match where you actually saved the file!
    script.src = '/assets/fluidInit.js'; 
    
    script.async = true;
    
    document.body.appendChild(script);
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
        pointerEvents: 'none', 
      }}
    />
  );
}