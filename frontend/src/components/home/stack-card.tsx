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
    <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-neutral-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white">
          <Icon className={`text-4xl ${iconColorClass}`} aria-hidden="true" />
          <span>{title}</span>
          {version && (
            <span className="text-sm font-medium text-neutral-400">{version}</span>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-neutral-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};