'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TestAPI() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      // Test Next.js API
      const response = await axios.get('/api/submit-property-search');
      setStatus('✅ Next.js API is working!');
      
      // Test Laravel connection
      const laravelTest = await axios.get('http://localhost:8000/api/test');
      setStatus(prev => prev + '\n✅ Laravel API is working!');
      
    } catch (error: any) {
      setStatus('❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">API Connection Test</h1>
      <button 
        onClick={testConnection}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </button>
      {status && (
        <pre className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap">
          {status}
        </pre>
      )}
    </div>
  );
}