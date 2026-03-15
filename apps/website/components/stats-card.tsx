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
        <div className="space-y-3">
          <div className="group/stat">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent group-hover/stat:scale-105 transition-transform font-mono">
              {stats.years.toFixed(10)}
            </div>
            <div className="text-sm text-muted">years and counting...</div>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-xl font-semibold font-mono">{stats.months}</div>
              <div className="text-xs text-muted">months</div>
            </div>
            <div>
              <div className="text-xl font-semibold font-mono">{stats.weeks}</div>
              <div className="text-xs text-muted">weeks</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
