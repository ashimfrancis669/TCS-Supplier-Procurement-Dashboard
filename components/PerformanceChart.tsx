import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { id: '1', subject: 'Technical', A: 94, B: 78, fullMark: 100 },
  { id: '2', subject: 'Quality', A: 96, B: 85, fullMark: 100 },
  { id: '3', subject: 'Financial', A: 92, B: 95, fullMark: 100 },
  { id: '4', subject: 'ESG', A: 80, B: 65, fullMark: 100 },
  { id: '5', subject: 'Innovation', A: 95, B: 70, fullMark: 100 },
];

interface PerformanceChartProps {
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

// Custom tick component for interactivity
const InteractiveTick = ({ payload, x, y, textAnchor, hoveredId, onHover, dataItems }: any) => {
  const index = payload.index;
  const item = dataItems[index];
  const isActive = item.id === hoveredId;

  return (
    <g 
      className="recharts-layer recharts-polar-angle-axis-tick"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      <text
        x={x}
        y={y}
        dy={5}
        textAnchor={textAnchor}
        fill={isActive ? '#4f46e5' : '#64748b'}
        fontSize={isActive ? 14 : 11}
        fontWeight={isActive ? 800 : 600}
        className="transition-all duration-200"
      >
        {payload.value}
      </text>
      {isActive && (
        <circle cx={x} cy={y} r={3} fill="#4f46e5" className="animate-pulse" />
      )}
    </g>
  );
};

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ hoveredId, onHover }) => {
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null);

  const handleLegendMouseEnter = (o: any) => {
    setHoveredSeries(o.dataKey);
  };

  const handleLegendMouseLeave = () => {
    setHoveredSeries(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <h2 className="text-xl font-bold text-slate-800 mb-4">
        Performance Visualization
      </h2>
      
      <div className="flex-grow min-h-[300px] flex items-center justify-center -ml-4">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={(props) => (
                <InteractiveTick 
                  {...props} 
                  hoveredId={hoveredId} 
                  onHover={onHover} 
                  dataItems={data} 
                />
              )}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={{ fill: '#94a3b8', fontSize: 10 }} 
              axisLine={false}
            />
            <Radar
              name="Supplier A (Strategic)"
              dataKey="A"
              stroke="#2563eb"
              strokeWidth={hoveredSeries === 'A' ? 3 : 2}
              strokeOpacity={hoveredSeries && hoveredSeries !== 'A' ? 0.1 : 1}
              fill="#3b82f6"
              fillOpacity={hoveredSeries === 'A' ? 0.6 : (hoveredSeries ? 0.1 : 0.4)}
              isAnimationActive={true}
            />
            <Radar
              name="Supplier B (Review)"
              dataKey="B"
              stroke="#ea580c"
              strokeWidth={hoveredSeries === 'B' ? 3 : 2}
              strokeOpacity={hoveredSeries && hoveredSeries !== 'B' ? 0.1 : 1}
              fill="#f97316"
              fillOpacity={hoveredSeries === 'B' ? 0.6 : (hoveredSeries ? 0.1 : 0.4)}
              isAnimationActive={true}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px', cursor: 'pointer' }}
              onMouseEnter={handleLegendMouseEnter}
              onMouseLeave={handleLegendMouseLeave}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3 pt-4 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">KPI Health Legend</h3>
        
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm border border-emerald-500"></div>
          <span className="text-xs text-slate-600 font-medium">
            <strong className="text-slate-800">Green (≥90%)</strong>: Low Risk, Exceeds Expectation
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm border border-amber-500"></div>
          <span className="text-xs text-slate-600 font-medium">
            <strong className="text-slate-800">Yellow (70-89%)</strong>: Review, Meets Expectation
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm border border-rose-500"></div>
          <span className="text-xs text-slate-600 font-medium">
            <strong className="text-slate-800">Red (&lt;70%)</strong>: High Risk, Action Mandatory
          </span>
        </div>
      </div>
    </div>
  );
};