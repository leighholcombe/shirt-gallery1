'use client';
import colors from '@/public/data/colors.json';
import { useSearchParams } from 'next/navigation';


export default function Swatches() {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(colors)) {
    return <p>No colors available.</p>;
  }
  let swatchClasses;
  let swatch_selected = false;
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');

  return (
    <div>
      <h2>Filter by color:</h2>
      <div className="flex gap-3 items-center h-14">
        {colors.map((color) => {
          swatchClasses = "block w-8 h-8 custom-swatch hover:scale-125 transition-transform border bg-" + color.class;
          if(color.value == colorParam) {
            swatch_selected = true;
            swatchClasses += " ring-3 ring-sky-300";
          }
          return (
            <a href={`/?color=${color.value}`} key={color.value} className={swatchClasses} aria-label={`color ${color.name}`}>
              &nbsp;
            </a>
          )
        })}
      </div>
    </div>
  );
};