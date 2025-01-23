import React from 'react';
import { Portal } from '../types/portal';
import { TrashIcon } from '@heroicons/react/24/outline';

interface PortalCardProps {
  portal: Portal;
  onDelete: (id: string) => void;
}

export function PortalCard({ portal, onDelete }: PortalCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the card link from being triggered
    if (window.confirm('Are you sure you want to delete this portal?')) {
      onDelete(portal.id);
    }
  };

  return (
    <a
      href={portal.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg 
                 border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300
                 hover:animate-glow transform hover:scale-105 hover:-translate-y-1
                 relative"
    >
      <button
        onClick={handleDelete}
        className="absolute top-4 right-4 p-2 rounded-full bg-red-500/10 hover:bg-red-500/20
                   text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 
                   transition-all duration-200 transform hover:scale-110"
        aria-label="Delete portal"
      >
        <TrashIcon className="h-5 w-5" />
      </button>

      <div className="flex items-center space-x-4">
        <span className="text-4xl group-hover:animate-pulse">{portal.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
            {portal.title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300">{portal.description}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-indigo-900/50 text-blue-300 text-sm rounded-full
                         border border-indigo-500/50">
            {portal.category}
          </span>
        </div>
      </div>
    </a>
  );
}