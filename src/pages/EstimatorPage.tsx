import React from 'react';
import { Estimator } from '../components/Estimator';

interface EstimatorPageProps {
  onOpenQuote: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-20 pb-16 bg-[#070A0F]">
      <Estimator onQuoteRequestedWithData={() => onOpenQuote()} />
    </div>
  );
};
