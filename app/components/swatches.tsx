'use client';
import colors from '@/public/data/colors.json';
import type { Selected } from '@/app/lib/definitions';
// import type { ColorSwatch } from '@/app/lib/definitions';


export default function Swatches({selected}:Selected) {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(colors)) {
    return <p>No colors available.</p>;
  }
  let swatchClasses;
  let swatch_selected = false;

  return (
    <div>
      <h2>Filter by color:</h2>
      <div className="flex gap-3">
        {colors.map((color) => {
          swatchClasses = "block w-8 h-8 custom-swatch hover:mt-1 bg-" + color.class;
          if(color.value == selected) {
            swatch_selected = true;
            swatchClasses += " border-3";
          } else {
            swatchClasses += " border";
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