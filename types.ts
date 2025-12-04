import React from 'react';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string; // e.g., "/mês", "único"
  description?: string;
  features: string[];
  recommended?: boolean;
}

export interface PricingCategory {
  id: 'local' | 'automation' | 'dealership';
  title: string;
  description: string;
  note?: string; // For setup fees etc
  plans: PricingPlan[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}