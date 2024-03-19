type Props = {
  children: string
}

export function TypographyLead({children}: Props) {
  return <p className="text-xl text-muted-foreground mb-2">{children}</p>;
}

export function TypographyLarge({children}: Props) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({children}: Props) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export function TypographyMuted({children}: Props) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
