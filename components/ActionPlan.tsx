import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

export const ActionPlan: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm lg:col-span-2 flex flex-col">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-indigo-600" />
        GenAI Automated Recommendation & Action Plan
        <span className="ml-auto text-sm font-normal text-slate-400 hidden sm:block">ID: #REC-2025-001</span>
      </h2>

      <div className="p-5 rounded-lg bg-indigo-50 border border-indigo-100 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles className="w-24 h-24 text-indigo-600" />
        </div>
        <div className="relative z-10">
          <p className="text-sm font-bold text-indigo-900 mb-2">
            Supplier A (92.3%) is classified as a High-Potential Strategic Partner.
          </p>
          <p className="text-sm text-indigo-700 leading-relaxed">
            <span className="font-semibold">Insight:</span> High Innovation score (95%) driven by leadership in LLM partnerships (95/100) presents a key opportunity for TCS to accelerate its own GenAI offerings. The primary risk is ESG Compliance (80%) which requires immediate mitigation.
          </p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4 flex items-center gap-2">
        Priority Action Items
        <div className="h-px bg-slate-200 flex-grow"></div>
      </h3>

      <div className="space-y-4">
        {/* Action 1 */}
        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Contract Finalization</h4>
            <p className="text-sm text-slate-600 mt-1">
              Immediately proceed with the recommended Fixed-Price/Tiered Contract.
              <span className="text-xs text-slate-400 block mt-1">Due: Within 7 days</span>
            </p>
          </div>
        </div>

        {/* Action 2 */}
        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
          <div className="flex-shrink-0 mt-1">
            <AlertCircle className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Mitigation Plan (ESG)</h4>
            <p className="text-sm text-slate-600 mt-1">
              Mandate a formal action plan within 30 days to raise the ESG score above 85% (Net Zero goals & Supplier Diversity focus).
            </p>
          </div>
        </div>

        {/* Action 3 */}
        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
          <div className="flex-shrink-0 mt-1">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Strategic Leverage</h4>
            <p className="text-sm text-slate-600 mt-1">
              Initiate a "Co-Innovation Workshop" next quarter to explore joint IP development using their GenAI Refinery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};