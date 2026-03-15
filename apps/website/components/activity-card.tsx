"use client";

import { Card, CardHeader, CardContent } from "./card";

type Activity = {
  title: string;
  subtitle: string;
  image?: string;
  link?: string;
  emoji?: string;
};

type ActivityCardProps = {
  title: string;
  activity: Activity;
};

export const ActivityCard = ({ title, activity }: ActivityCardProps) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        {activity.image && (
          <div className="mb-3 rounded-lg overflow-hidden bg-muted/20">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-32 object-cover"
            />
          </div>
        )}
        <div className="flex items-start gap-3">
          {activity.emoji && (
            <span className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{activity.emoji}</span>
          )}
          <div className="flex-1 min-w-0">
            {activity.link ? (
              <a
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors block truncate underline decoration-primary/30 hover:decoration-primary underline-offset-2"
              >
                {activity.title}
              </a>
            ) : (
              <div className="font-semibold truncate">{activity.title}</div>
            )}
            <div className="text-sm text-muted truncate">{activity.subtitle}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
