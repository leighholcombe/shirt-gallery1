'use client'; // Marks the component as a Client Component
import Image from "next/image";
import Swatches from "./components/swatches";
import Chips from "./components/chips";
import ParamTest from "./components/paramtest";

export default function Home() {
  const searchParams = new URLSearchParams(window.location.search);
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
