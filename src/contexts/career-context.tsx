'use client';

import type { CareerPathRecommendationOutput } from '@/ai/flows/career-path-recommendation';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CareerContextType {
  recommendation: CareerPathRecommendationOutput | null;
  setRecommendation: Dispatch<SetStateAction<CareerPathRecommendationOutput | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider = ({ children }: { children: ReactNode }) => {
  const [recommendation, setRecommendation] = useState<CareerPathRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <CareerContext.Provider value={{ recommendation, setRecommendation, isLoading, setIsLoading, error, setError }}>
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = (): CareerContextType => {
  const context = useContext(CareerContext);
  if (context === undefined) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
