import shirts from '@/public/data/shirts.json';
import { Shirt } from '../lib/definitions';
import { shuffle } from '../lib/utilities';
import Card from '../components/card';

export default async function Page () {
  // Check if shirts is an array before mapping to avoid errors
  if (!Array.isArray(shirts)) {
    return <p>No products available.</p>;
  }
  let resultArray: Array<Shirt> = [];
  let headingText = "";
  shirts.forEach((shirt) => {
    resultArray.push(shirt);
  });
  resultArray = shuffle(resultArray);
  headingText = "Shirts in inventory: " + resultArray.length;
  
  if(resultArray && resultArray.length > 0) {
    return (
      <div>
        <h2 className="mb-3">{headingText}</h2>
        <div className="flex gap-3 items-center flex-row flex-wrap">
          {resultArray.map((shirt) => {
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
      <div><p>No results at all.</p></div>
    )
  }
}