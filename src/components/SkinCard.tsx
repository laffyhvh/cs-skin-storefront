import { Card, CardContent } from "@/components/ui/card";

interface SkinCardProps {
  name: string;
  price: number;
  image: string;
  wear: string;
}

export function SkinCard({ name, price, image, wear }: SkinCardProps) {
  return (
    <Card className="bg-card border-gray-700 hover:border-primary transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative group">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-white truncate">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">{wear}</span>
            <span className="text-primary font-bold">${price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}