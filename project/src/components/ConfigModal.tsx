import React, { useState } from 'react';
import { Portal } from '../types/portal';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (portal: Portal) => void;
}

export function ConfigModal({ isOpen, onClose, onSave }: ConfigModalProps) {
  const [formData, setFormData] = useState<Omit<Portal, 'id'>>({
    title: '',
    url: '',
    description: '',
    icon: '',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPortal: Portal = {
      ...formData,
      id: Date.now().toString()
    };
    onSave(newPortal);
    onClose();
    setFormData({ title: '', url: '', description: '', icon: '', category: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-indigo-500/30 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Add New Portal</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-blue-300 mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-gray-800 border border-indigo-500/30 rounded p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-blue-300 mb-1">URL</label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full bg-gray-800 border border-indigo-500/30 rounded p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-blue-300 mb-1">Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-800 border border-indigo-500/30 rounded p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-blue-300 mb-1">Icon (emoji)</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full bg-gray-800 border border-indigo-500/30 rounded p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-blue-300 mb-1">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-gray-800 border border-indigo-500/30 rounded p-2 text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
                     transition-colors duration-200 mt-4"
          >
            Add Portal
          </button>
        </form>
      </div>
    </div>
  );
}