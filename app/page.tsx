'use client'; // Marks the component as a Client Component
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import Swatches from "./components/swatches";
import colors from '@/public/data/colors.json';
import {Suspense} from "react";

export function ParamTest() {
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');
  
  if (colorParam?.length) {
    let colorName;
    colors.forEach((color) => {
      if(color.value == colorParam) {
        colorName = color.name;
      }
    });
    return <div>Filter is set to {colorName}</div>;
  } else {
    return <div>No filter detected</div>
  }
}

export default function Home() {
  return (
    <div className="flex">
     <main>
      <section id="test">
        <Suspense>
          <ParamTest></ParamTest>
        </Suspense>
      </section>
      <section id="browse"></section>
      <section id="chips"></section>
      <section id="swatches">
        <Swatches></Swatches>
      </section>
     </main>
    </div>
  );
}
