import React from 'react';
import { WorkshopLocation } from '../components/WorkshopLocation';

interface WorkshopPageProps {
  onOpenQuote: () => void;
}

export const WorkshopPage: React.FC<WorkshopPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-20 pb-16 bg-[#090D14]">
      <WorkshopLocation onOpenQuote={onOpenQuote} />
    </div>
  );
};
