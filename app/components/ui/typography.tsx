import { cn } from "~/lib/utils";

type Props = {
  children: string
  className?: string
}

export function TypographyLead({children}: Props) {
  return <p className="text-xl text-muted-foreground dark:text-accent-foreground mb-2">{children}</p>;
}

export function TypographyLarge({children}: Props) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({children}: Props) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export function TypographyMuted({children, className, ...props}: Props) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props}>{children}</p>;
}
