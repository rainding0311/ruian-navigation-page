import React, { useState, useEffect } from 'react';
import { PortalCard } from './PortalCard';
import { ConfigModal } from './ConfigModal';
import { Portal } from '../types/portal';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { portals as initialPortals } from '../data/portals';

export function PortalGrid() {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [portals, setPortals] = useState<Portal[]>(() => {
    const savedPortals = localStorage.getItem('portals');
    return savedPortals ? JSON.parse(savedPortals) : initialPortals;
  });

  useEffect(() => {
    localStorage.setItem('portals', JSON.stringify(portals));
  }, [portals]);

  const handleSavePortal = (newPortal: Portal) => {
    setPortals([...portals, newPortal]);
  };

  const handleDeletePortal = (id: string) => {
    setPortals(portals.filter(portal => portal.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-400">Your Portals</h2>
        <button
          onClick={() => setIsConfigOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 
                   rounded-lg text-white transition-colors duration-200"
        >
          <Cog6ToothIcon className="h-5 w-5" />
          <span>Configure</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portals.map((portal) => (
          <PortalCard 
            key={portal.id} 
            portal={portal} 
            onDelete={handleDeletePortal}
          />
        ))}
      </div>

      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        onSave={handleSavePortal}
      />
    </div>
  );
}