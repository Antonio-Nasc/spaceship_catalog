"use client"

import Link from "next/link";
import { useParams } from "next/navigation"
import spaceships from "@/data/spaceships.json"

export default function Page() {
    const params = useParams();
  
    if (typeof params.category !== 'string') return null;
  
    const category = params.category.replace('_', ' ')
    const categorySpaceships = spaceships.filter(ship => ship.category === category)
  
    return (
      <main>
        <h1>{category}</h1>
  
        <ul>
          {categorySpaceships.map(ship => (
            <li key={ship.id}>
              <Link
                className="border-2 border-solid cursor-pointer text-base font-bold grid place-content-center min-h-[3rem]"
                href={`/spaceships/${ship.id}`}
              >
                {ship.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    )
  }