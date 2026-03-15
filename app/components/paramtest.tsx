import tags from '@/public/data/tags.json';
import colors from '@/public/data/colors.json';
import type { ParamProps } from '@/app/lib/definitions';

export default function ParamTest({colorParam, tagParam}: ParamProps) {
  console.log(colorParam, tagParam);
  let message;
  if (colorParam !== null) {
    colors.forEach((color) => {
      if(color.value == colorParam) {
        message = "Filter is set to color " + color.name;
      }
    });
  } else if (tagParam !== null) {
    tags.forEach((tag) => {
      if(tag.value == tagParam) {
        message = "Filter is set to tag " + tag.name;
      }
    });
  } else {
    message = "No filter detected";
  }
  return (
    <div>{message}</div>
  )
}
