import colors from '@/public/data/colors.json';
import { useSearchParams } from 'next/navigation';
import Color from './colors';

export default function Swatches() {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(colors)) {
    return <p>No colors available.</p>;
  }
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');

  return (
    <div>
      <h2>Filter by color:</h2>
      <div className="flex gap-3 items-center h-14">
        {colors.map((color) => {
          if(color.value == colorParam) {
            return (
              <Color
                key={color.value}
                colorParam={color.value}
                selected={true}
              />
            )
          } else {
            return (
              <Color
                key={color.value}
                colorParam={color.value}
                selected={false}
              />
            )
          }
        })}
      </div>
    </div>
  );
};