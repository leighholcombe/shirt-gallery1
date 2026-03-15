'use client'; // Marks the component as a Client Component
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import Swatches from "./components/swatches";
import Chips from "./components/chips";
import ParamTest from "./components/paramtest";
import colors from '@/public/data/colors.json';
import { Suspense } from "react";
import tags from '@/public/data/tags.json';

let selectedItem: any;


export default function Home() {
  const searchParams = useSearchParams();
  const colorParam = searchParams.get('color');
  const tagParam = searchParams.get('cat');

  return (
    <div className="flex">
     <main>
      <section id="test" className="my-6">
        <ParamTest
          colorParam = {colorParam}
          tagParam = {tagParam}
        >
        </ParamTest>
      </section>
      <section id="browse" className="my-6"></section>
      <section id="chips" className="my-6">
        <Chips selected={tagParam}></Chips>
      </section>
      <section id="swatches" className="my-6">
        <Swatches selected={colorParam}></Swatches>
      </section>
     </main>
    </div>
  );
}
