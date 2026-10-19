import type { StackItem } from "@/lib/content/stack-content";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const StackCard: React.FC<StackItem> = ({
  version,
  title,
  description,
  iconClass: Icon,
  iconColorClass,
}) => {
  return (
    <Card className="border-primary-foreground/50 bg-card transition-all duration-300 hover:border-primary-foreground/80">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <Icon className={`text-4xl ${iconColorClass}`} aria-hidden="true" />
          <span>{title}</span>
          {version && (
            <span className="text-sm font-medium text-foreground/40">{version}</span>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-foreground/30">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};