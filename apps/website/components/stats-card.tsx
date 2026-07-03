"use client";

import { Card, CardHeader, CardContent } from "./card";
import { useEffect, useState } from "react";

export const StatsCard = () => {
  const [stats, setStats] = useState({
    years: 0,
    months: 0,
    weeks: 0,
  });

  useEffect(() => {
    const startDate = new Date("2020-01-01"); // Adjust this to when you started coding
    
    const updateStats = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = diff / (1000 * 60 * 60 * 24 * 365.25);
      const months = diff / (1000 * 60 * 60 * 24 * 30.44);
      const weeks = diff / (1000 * 60 * 60 * 24 * 7);

      setStats({
        years: parseFloat(years.toFixed(10)),
        months: parseFloat(months.toFixed(0)),
        weeks: parseFloat(weeks.toFixed(0)),
      });
    };

    // Initial update
    updateStats();
    
    // Update every 100ms for smooth real-time counting
    const interval = setInterval(updateStats, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>Coding Journey ⏱️</CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="group/stat">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground/90 tabular-nums">
              {stats.years.toFixed(10)}
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1.5 font-sans">
              Years and counting
            </div>
          </div>
          
          <div className="flex items-center gap-6 border-t border-border/40 pt-5">
            <div>
              <div className="text-2xl font-semibold tracking-tight text-foreground/90">
                {stats.months}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans mt-0.5">
                Months
              </div>
            </div>
            
            <div className="h-8 w-px bg-border/40 self-center" />
            
            <div>
              <div className="text-2xl font-semibold tracking-tight text-foreground/90">
                {stats.weeks}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans mt-0.5">
                Weeks
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
