import tags from '@/public/data/tags.json';
import Tag from './tags';
import { ParamProps } from '../lib/definitions';

export default async function Chips(props: PageProps<any>) {
  // Check if tags is an array before mapping to avoid errors
  if (!Array.isArray(tags)) {
    return <p>No tags available.</p>;
  }
  const searchParams = await props.searchParams;
  const cat = searchParams.cat;

  return (
    <div>
      <h2>Filter by category:</h2>
      <div className="flex gap-3 flex-wrap">
        {tags.map((chip) => {
          if(chip.value == cat) {
            return (
              <Tag
                key={chip.value}
                tagParam={chip.value}
                selected={true}
              />
            )
          } else {
            return (
              <Tag
                key={chip.value}
                tagParam={chip.value}
                selected={false}
              />
            )
          }
        })}
      </div>
    </div>
  );
};