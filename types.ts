export interface ScorecardRow {
  id: string;
  dimension: string;
  description: string;
  weight: number;
  scoreA: number;
  scoreB: number;
  threshold: number;
}

export enum Status {
  PASS = 'PASS',
  REVIEW = 'REVIEW',
  HIGH_RISK = 'HIGH RISK'
}

export interface ChartDataPoint {
  id: string;
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}