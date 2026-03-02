import tags from '@/public/data/tags.json';

export default function Chips() {
  // Check if tags is an array before mapping to avoid errors
  if (!Array.isArray(tags)) {
    return <p>No tags available.</p>;
  }

  return (
    <div>
      <h2>Filter by category:</h2>
      <div className="flex gap-3 flex-wrap">
        {tags.map((chip) => {
          return (
            <a href={`/?cat=${chip.value}`} key={chip.value} className="bg-sky-300 text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-indigo-300">
              {chip.name}
            </a>
          )
        })}
      </div>
    </div>
  );
};