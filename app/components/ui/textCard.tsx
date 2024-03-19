import { Card, CardTitle, CardContent } from "./card";

type Props = {
  title: string;
  content: string;
  variant?: null | "header";
};

const TextCard = ({ title, content, variant, ...props }: Props) => {
  return (
    <Card className="border-0 shadow-none" {...props}>
      <CardTitle className="h-max">
        {variant === "header" ? (
          <h2 className="text-balance my-4">{title}</h2>
        ) : (
          <h4 className="text-balance my-2">{title}</h4>
        )}
      </CardTitle>
      <CardContent className="px-0">
        <p className="text-pretty sm:pr-1">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TextCard;
