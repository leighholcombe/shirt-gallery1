import tags from '@/public/data/tags.json';
import colors from '@/public/data/colors.json';
import { useSearchParams } from 'next/navigation';

export default function ParamTest() {
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');
  const tagParam = searchParams.get('cat');
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
