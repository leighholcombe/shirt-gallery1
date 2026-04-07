import tags from '@/public/data/tags.json';
import { useSearchParams } from 'next/navigation';
import colors from '@/public/data/colors.json';
import Card from './card';
import shirts from '@/public/data/shirts.json';
import { CachedRouteKind } from 'next/dist/server/response-cache';
import { Shirt } from '../lib/definitions';

export default function Deck() {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(shirts)) {
    return <p>No products available.</p>;
  }
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');
  const tagParam = searchParams.get('cat');
  let productCounter = 0;
  let resultArray: Array<Shirt> = [];
  let errorMessage = "";
  shirts.forEach((shirt) => {
    if(tagParam) {
      if(shirt.tag_array.includes(tagParam)) {
        resultArray.push(shirt);
      }
      if(resultArray.length == 0) {
        errorMessage = "No results found for the selected category";
      }
    } else if(colorParam) {
      if(shirt.color == colorParam) {
        resultArray.push(shirt);
      }
      if(resultArray.length == 0) {
        errorMessage = "No results found for the selected color";
      }
    } else {
      resultArray.push(shirt);
    }
  })

  if(resultArray && resultArray.length > 0) {
    return (
      <div>
        <h2>Shirts in inventory</h2>
        <div className="flex gap-3 items-center flex-row flex-wrap">
          {resultArray.map((shirt) => {
            return (
              <Card
                key={shirt.id}
                id={shirt.id}
                image={shirt.image}
                description={shirt.description}
                color={shirt.color}
                sleeves={shirt.sleeves}
                tag_array={shirt.tag_array}
                archived={shirt.archived}
              />
            )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div><p>{errorMessage}</p></div>
    )
  }
}