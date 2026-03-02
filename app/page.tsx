'use client'; // Marks the component as a Client Component
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import Swatches from "./components/swatches";
import Chips from "./components/chips";
import colors from '@/public/data/colors.json';
import { Suspense } from "react";
import tags from '@/public/data/tags.json';

export function ParamTest() {
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');
  const tagParam = searchParams.get('cat');
  let filterName
  
  if (colorParam?.length) {
    colors.forEach((color) => {
      if(color.value == colorParam) {
        filterName = color.name;
      }
    });
    return <div>Filter is set to color {filterName}</div>;
  } else if (tagParam?.length) {
    tags.forEach((tag) => {
      if(tag.value == tagParam) {
        filterName = tag.name;
      }
    });
    return <div>Filter is set to tag {filterName}</div>; 
  } else {
    return <div>No filter detected</div>
  }
}

export default function Home() {
  return (
    <div className="flex">
     <main>
      <section id="test" className="my-6">
        <Suspense>
          <ParamTest></ParamTest>
        </Suspense>
      </section>
      <section id="browse" className="my-6"></section>
      <section id="chips" className="my-6">
        <Chips></Chips>
      </section>
      <section id="swatches" className="my-6">
        <Swatches></Swatches>
      </section>
     </main>
    </div>
  );
}
