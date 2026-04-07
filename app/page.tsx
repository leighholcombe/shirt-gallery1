import Image from "next/image";
import Swatches from "./components/swatches";
import Chips from "./components/chips";
import ParamTest from "./components/paramtest";
import Deck from "./components/deck";
import { Suspense } from "react";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex px-8">
      <main className="pb-12">
        <section id="gallery" className="my-6">
          <Suspense>
            <Deck></Deck>
          </Suspense>
        </section>
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
        <section id="reset" className="my-6">
          <Link
            href="/"
            className="text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300 bg-sky-200 max-w-min"
          >
            Reset
          </Link>
        </section>
      </main>
    </div>
  );
}
