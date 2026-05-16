import shirts from '@/public/data/shirts.json';
import { Shirt } from '../lib/definitions';
import Image from "next/image";
import colors from '@/public/data/colors.json';
import Color from '../components/colors';
import tags from '@/public/data/tags.json';
import Tag from '../components/tags';

export default async function Page( {params}:any ) {
  const { id } = await params;

  if (!Array.isArray(shirts)) {
    return <p>No products available.</p>;
  }
  let result: Array<Shirt> = [];
  shirts.forEach((shirt) => {
    if (shirt.id == id) {
      result.push(shirt);
    }
  });

  if (result.length > 0) {
    const item = result[0];
    const archive = (item.archived) ? "yes" : "no";
    const tag_array = item.tag_array;
    
    return (
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-3">{item.title}</h2>
          <div className="relative h-[60vh] w-3xl mb-3">
            <Image
              src={item.image}
              fill={true}
              alt={item.title}
              objectFit={"contain"}
            />
          </div>
          <p className="text-xl">{item.description}</p>
          <p>Sleeve: {item.sleeves}</p>
          <p className="mb-3">Archived: {archive}</p>
          <div>
            {colors.map((swatch) => {
              if(swatch.value == item.color) {
                return (
                  <Color
                    key={swatch.value}
                    colorParam={swatch.value}
                    selected={false}
                  />
                )
              }
            })}
          </div>
          <div className="flex gap-3 flex-wrap mt-3">
            {tags.map((cat) => {
              if(tag_array.includes(cat.value)) {
                return (
                  <Tag
                    key={cat.value}
                    tagParam={cat.value}
                    selected={false}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    )

  } else {
    return <p>Product unavailable</p>
  }
}