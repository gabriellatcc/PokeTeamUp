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
  const iconColor =
    iconColorClass.startsWith("var(") ||
    iconColorClass.startsWith("oklch")
      ? iconColorClass
      : `var(--color-${iconColorClass.replace(/^text-/, "")})`;

  return (
    <Card className="h-full min-w-0 overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
      <CardHeader>
        <CardTitle className="flex min-h-[3.25rem] items-start gap-3 min-w-0 text-lg sm:text-xl font-bold text-foreground">
          <Icon
            className="mt-0.5 shrink-0 text-3xl"
            style={{ color: iconColor }}
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 break-words leading-tight">{title}</span>
          {version && (
            <span className="shrink-0 text-xs font-medium opacity-70">
              {version}
            </span>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="text-sm leading-relaxed text-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};