'use client';
import tags from '@/public/data/tags.json';
import { useSearchParams } from 'next/navigation';

export default function Chips() {
  // Check if tags is an array before mapping to avoid errors
  if (!Array.isArray(tags)) {
    return <p>No tags available.</p>;
  }
  let chipClasses;
  let chip_selected = false;
  const searchParams = useSearchParams();
  const tagParam = searchParams.get('cat');

  return (
    <div>
      <h2>Filter by category:</h2>
      <div className="flex gap-3 flex-wrap">
        {tags.map((chip) => {
          chipClasses = "text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-400";
          if(chip.value == tagParam) {
            chip_selected = true;
            chipClasses += " bg-sky-300";
          } else {
            chipClasses += " bg-sky-200";
          }
          return (
            <a href={`/?cat=${chip.value}`} key={chip.value} className={chipClasses}>
              {chip.name}
            </a>
          )
        })}
      </div>
    </div>
  );
};