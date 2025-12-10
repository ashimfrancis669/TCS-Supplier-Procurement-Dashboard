import React, { useState } from 'react';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { ScorecardTable } from './components/ScorecardTable';
import { PerformanceChart } from './components/PerformanceChart';
import { ActionPlan } from './components/ActionPlan';
import { Users, Lightbulb, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <Header />

        {/* Key Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Total Suppliers in Scope" 
            value="12" 
            icon={<Users className="w-6 h-6 text-indigo-500" />}
          />
          <MetricCard 
            title="Avg. Innovation Readiness" 
            value="82.5%" 
            valueColor="text-blue-600"
            icon={<Lightbulb className="w-6 h-6 text-blue-500" />}
          />
          <MetricCard 
            title="GenAI High Risk Flag" 
            subtitle="(Attrition/Compliance)"
            value="2 / 12" 
            valueColor="text-red-600"
            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
          />
        </div>

        {/* Main Comparative Scorecard Table */}
        <ScorecardTable hoveredId={hoveredId} onHover={setHoveredId} />

        {/* GenAI Insights & Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <ActionPlan />
          <PerformanceChart hoveredId={hoveredId} onHover={setHoveredId} />
        </div>

      </div>
    </div>
  );
};

export default App;