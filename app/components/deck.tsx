import tags from '@/public/data/tags.json';
import colors from '@/public/data/colors.json';
import Card from './card';
import shirts from '@/public/data/shirts.json';
import { shuffle } from '../lib/utilities';
import { Shirt } from '../lib/definitions';

export default async function Deck(props: PageProps<any>) {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(shirts)) {
    return <p>No products available.</p>;
  }
  const arrayLimit = 20;
  const searchParams = await props.searchParams;
  let color = searchParams.color;
  let cat = searchParams.cat;
  let productCounter = 0;
  let limitedArray: Array<any> = [];
  let resultArray: Array<Shirt> = [];
  let errorMessage = "";
  shirts.forEach((shirt) => {
    if(cat) {
      if(Array.isArray(cat)) {
        cat = cat[0];
      }
      if(shirt.tag_array.includes(cat)) {
        resultArray.push(shirt);
      }
      if(resultArray.length == 0) {
        errorMessage = "No results found for the selected category";
      }
    } else if(color) {
      if(shirt.color == color) {
        resultArray.push(shirt);
      }
      if(resultArray.length == 0) {
        errorMessage = "No results found for the selected color";
      }
    } else {
      resultArray.push(shirt);
    }
    resultArray = shuffle(resultArray);
    limitedArray = resultArray.slice(0, arrayLimit);
  })

  if(limitedArray && limitedArray.length > 0) {
    return (
      <div>
        <h2 className="mb-2">Shirts in inventory (limit {arrayLimit})</h2>
        <div className="flex gap-3 items-center flex-row flex-wrap">
          {limitedArray.map((shirt) => {
            return (
              <Card
                key={shirt.id}
                id={shirt.id}
                title={shirt.title}
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