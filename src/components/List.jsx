import { useState } from "react";
import Loading from "@/components/Loading.jsx";
import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";

export default function List({ product }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="relative w-full h-48 rounded-md overflow-hidden bg-gray-100">
          {imgLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
              <Loading />
            </div>
          )}
          <img
            src={product?.imageUrl}
            alt={product.name}
            onLoad={() => setImgLoading(false)}
            onError={() => setImgLoading(false)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imgLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <CardTitle className="mt-4">{product.name}</CardTitle>
        <CardDescription>{product?.category}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>

      <CardFooter className="justify-between text-sm font-medium">
        <span>${product.price}</span>
        <span className="flex items-center gap-1">
          {product.location}
          <MapPin className="w-4 h-4" />
        </span>
      </CardFooter>
    </Card>
  );
}
