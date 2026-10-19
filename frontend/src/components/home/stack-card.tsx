import type { StackItem } from "@/lib/content/stack-content";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pixelact-ui/card";

export const StackCard: React.FC<StackItem> = ({
  version,
  title,
  description,
  iconClass: Icon,
  iconColorClass,
}) => {
  const isCssVar = iconColorClass.startsWith("var(");
  return (
    <Card>
     {/* className="border-primary-foreground/50 bg-card transition-all duration-300 hover:border-primary-foreground/80 shadow-md shadow-black/20 dark:shadow-none dark:drop-shadow-md dark:drop-shadow-primary-foreground/25" */}
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <Icon
            className={`text-4xl text-${iconColorClass}`}
            style={isCssVar ? { color: iconColorClass } : undefined}
             aria-hidden="true"
          />
          <span>{title}</span>
          {version && (
            <span className={`text-sm font-medium text-${iconColorClass}40`}>{version}</span>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};