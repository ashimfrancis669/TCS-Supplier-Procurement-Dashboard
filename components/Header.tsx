import React from 'react';
import { Activity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-indigo-600 rounded-lg shadow-sm">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Strategic Supplier Performance
        </h1>
      </div>
      <p className="text-base text-slate-500 font-medium flex items-center ml-1">
        <span className="font-bold text-indigo-600 mr-2">TCS</span> 
        <span className="text-slate-300 mx-2">|</span> 
        IT Services Category (FY2025)
      </p>
    </header>
  );
};