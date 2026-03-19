'use client';

import { useState } from 'react';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  applyUrl?: string;
  published: boolean;
}

export function JobList({ positions }: { positions: Job[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  if (positions.length === 0) {
    return <div className="text-center text-muted-foreground p-8">No open positions at the moment. Check back later!</div>;
  }

  return (
    <div className="space-y-4">
      {positions.map((job) => {
        const isExpanded = expandedId === job.id;
        
        return (
          <div 
            key={job.id} 
            className={cn(
              "flex flex-col rounded-xl border bg-card transition-colors overflow-hidden",
              isExpanded ? "border-primary/50 shadow-md" : "hover:border-primary/30"
            )}
          >
            {/* Header (Clickable snippet) */}
            <button 
              onClick={() => toggle(job.id)}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 text-left cursor-pointer w-full focus:outline-none"
            >
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="hidden sm:flex pointer-events-none">
                  {isExpanded ? 'Hide Details' : 'View Details'}
                </Button>
                {isExpanded ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
              </div>
            </button>

            {/* Expanded Content (Details & Apply Button) */}
            {isExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div 
                  className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground mb-8"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
                <div className="flex justify-start">
                  <Button asChild size="lg">
                    <Link href={job.applyUrl && job.applyUrl.trim() !== '' ? job.applyUrl : "/contact"}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
