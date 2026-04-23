import Image from "next/image";
import { Shirt } from "../lib/definitions";
import Link from 'next/link';

export default function Card({ id, title, image, description, color, sleeves, tag_array, archived }: Shirt) {
  return (
    <div className="border-2 p-4 relative w-1/5 aspect-square bg-white">
      <Link
        href={`/${id}`}
      >
        <Image
          src={image}
          fill={true}
          alt={title}
          objectFit={"contain"}
        />
      </Link>
    </div>
  )
}