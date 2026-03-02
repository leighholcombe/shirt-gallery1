import colors from '@/public/data/colors.json';
// import type { ColorSwatch } from '@/app/lib/definitions';


export default function Swatches() {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(colors)) {
    return <p>No colors available.</p>;
  }

  return (
    <div>
      <h2>Filter by color:</h2>
      <div className="flex gap-3">
        {colors.map((color) => {
          return (
            <a href={`/?color=${color.value}`} key={color.value} className={`bg-${color.class} block w-8 h-8 border custom-swatch`} aria-label={`color ${color.name}`}>
              &nbsp;
            </a>
          )
        })}
      </div>
    </div>
  );
};