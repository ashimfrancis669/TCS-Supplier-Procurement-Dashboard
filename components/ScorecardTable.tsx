import React from 'react';
import { ScorecardRow, Status } from '../types';

const scorecardData: ScorecardRow[] = [
  { id: '1', dimension: 'Technical Capability', description: '% Certified Staff, Security', weight: 0.25, scoreA: 94, scoreB: 78, threshold: 90 },
  { id: '2', dimension: 'Quality Performance', description: 'SLA Uptime, Fix Rate', weight: 0.25, scoreA: 96, scoreB: 85, threshold: 90 },
  { id: '3', dimension: 'Financial Health', description: 'Current Ratio, Credit Score', weight: 0.15, scoreA: 92, scoreB: 95, threshold: 90 },
  { id: '4', dimension: 'ESG Compliance', description: 'Net Zero Target, Attrition', weight: 0.15, scoreA: 80, scoreB: 65, threshold: 90 },
  { id: '5', dimension: 'Innovation Capability', description: 'GenAI Readiness, IP Relevance', weight: 0.20, scoreA: 95, scoreB: 70, threshold: 90 },
];

const getStatus = (score: number): Status => {
  if (score >= 90) return Status.PASS;
  if (score >= 70) return Status.REVIEW;
  return Status.HIGH_RISK;
};

const getStatusStyles = (status: Status) => {
  switch (status) {
    case Status.PASS:
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case Status.REVIEW:
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case Status.HIGH_RISK:
      return 'bg-rose-100 text-rose-800 border-rose-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

interface ScorecardTableProps {
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

export const ScorecardTable: React.FC<ScorecardTableProps> = ({ hoveredId, onHover }) => {
  // Calculate weighted final score
  const finalScoreA = scorecardData.reduce((acc, row) => acc + (row.scoreA * row.weight), 0);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-10">
      <div className="px-6 py-5 border-b border-slate-100 bg-indigo-50/50 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">
          Supplier Comparison: Weighted Scorecard
        </h2>
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Target: 85%+</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Evaluation Dimension</th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Weightage</th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Supplier A</th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Supplier B</th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Status (A)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {scorecardData.map((row, index) => {
              const status = getStatus(row.scoreA);
              const isHovered = hoveredId === row.id;
              
              return (
                <tr 
                  key={row.id} 
                  className={`transition-colors cursor-pointer duration-200 ${isHovered ? 'bg-indigo-50 ring-1 ring-inset ring-indigo-200' : 'hover:bg-slate-50'}`}
                  onMouseEnter={() => onHover(row.id)}
                  onMouseLeave={() => onHover(null)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`font-bold transition-colors ${isHovered ? 'text-indigo-700' : 'text-slate-800'}`}>
                      {index + 1}. {row.dimension}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{row.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-slate-600 font-semibold">
                    {(row.weight * 100).toFixed(0)}%
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-center font-medium transition-transform duration-200 ${isHovered ? 'scale-110 text-indigo-700 font-bold' : 'text-slate-800'}`}>
                    {row.scoreA}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-slate-800">
                    {row.scoreB}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyles(status)}`}>
                      {status}
                    </span>
                  </td>
                </tr>
              );
            })}
            
            {/* Final Score Row */}
            <tr className="bg-indigo-50/60 border-t-2 border-indigo-100">
              <td className="px-6 py-5 whitespace-nowrap font-extrabold text-indigo-900">
                WEIGHTED FINAL SCORE
              </td>
              <td className="px-6 py-5 whitespace-nowrap text-center font-bold text-indigo-900">
                100%
              </td>
              <td colSpan={2} className="px-6 py-5 whitespace-nowrap text-center text-xl font-black text-indigo-700">
                {finalScoreA.toFixed(2)}%
              </td>
              <td className="px-6 py-5 whitespace-nowrap text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-200 text-indigo-900 shadow-sm border border-indigo-300">
                  STRATEGIC PARTNER
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};