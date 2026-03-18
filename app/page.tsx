'use client'; // Marks the component as a Client Component
import Image from "next/image";
import Swatches from "./components/swatches";
import Chips from "./components/chips";
import ParamTest from "./components/paramtest";
import { Suspense } from "react";

export default function Home() {

  return (
    <div className="flex px-4">
      <main>
        <section id="test" className="my-6">
          <Suspense>
            <ParamTest></ParamTest>
          </Suspense>
        </section>
        <section id="browse" className="my-6"></section>
        <section id="chips" className="my-6">
          <Suspense>
            <Chips></Chips>
          </Suspense>
        </section>
        <section id="swatches" className="my-6">
          <Suspense>
            <Swatches></Swatches>
          </Suspense>
        </section>
      </main>
    </div>
  );
}
