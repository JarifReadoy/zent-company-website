import React from 'react';
import {
  Cloud, Shield, BarChart3, Workflow,
  GraduationCap, Building, Briefcase,
  ShoppingCart, Globe, FileText,
  CreditCard, Users, BrainCircuit,
  Database, Laptop, Network,
  type LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  Shield,
  BarChart3,
  Workflow,
  GraduationCap,
  Building,
  Briefcase,
  ShoppingCart,
  Globe,
  FileText,
  CreditCard,
  Users,
  BrainCircuit,
  Database,
  Laptop,
  Network,
};

export const ICON_NAMES = Object.keys(ICON_MAP);

export function getIcon(name: string): React.ElementType {
  if (name?.startsWith('/') || name?.startsWith('http')) {
    return (props: any) => React.createElement('img', {
      src: name,
      alt: '',
      className: props.className,
      style: { width: '1em', height: '1em', objectFit: 'contain', ...props.style }
    });
  }
  return ICON_MAP[name] ?? Building;
}
