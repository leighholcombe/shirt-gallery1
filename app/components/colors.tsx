'use client';
import colors from '@/public/data/colors.json';
import { ColorProps } from '../lib/definitions';

export default function Color({ colorParam, selected }: ColorProps) {
  let colorClasses = "block w-8 h-8 custom-swatch hover:scale-125 transition-transform border";
  let colorValue;
  let colorName;
  if(selected) {
    colorClasses += " ring-3 ring-sky-300";
  }

  {colors.map((color) => {
    if(color.value == colorParam) {
      colorValue = color.value;
      colorName = color.name;
      colorClasses += " bg-" + color.class;
    }
  })};

  return (
    <a href={`/?color=${colorValue}`} key={colorParam} className={colorClasses} aria-label={`color ${colorName}`}>
      &nbsp;
    </a>
  );
}