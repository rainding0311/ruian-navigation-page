import React from 'react';
import { Header } from './components/Header';
import { PortalGrid } from './components/PortalGrid';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <Header />
        <main className="py-8">
          <PortalGrid />
        </main>
      </div>
    </div>
  );
}

export default App;