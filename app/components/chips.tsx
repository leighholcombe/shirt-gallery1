'use client';
import tags from '@/public/data/tags.json';
import { useSearchParams } from 'next/navigation';
import Tag from './tags';

export default function Chips() {
  // Check if tags is an array before mapping to avoid errors
  if (!Array.isArray(tags)) {
    return <p>No tags available.</p>;
  }
  const searchParams = useSearchParams();
  const tagParam = searchParams.get('cat');

  return (
    <div>
      <h2>Filter by category:</h2>
      <div className="flex gap-3 flex-wrap">
        {tags.map((chip) => {
          if(chip.value == tagParam) {
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