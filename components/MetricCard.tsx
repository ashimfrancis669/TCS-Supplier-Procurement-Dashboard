import React, { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  subtitle?: string;
  value: string;
  valueColor?: string;
  icon?: ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  valueColor = 'text-slate-900', 
  icon 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{title}</p>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
        {icon && <div className="p-2 bg-slate-50 rounded-full">{icon}</div>}
      </div>
      <p className={`text-4xl font-extrabold mt-2 ${valueColor}`}>{value}</p>
    </div>
  );
};