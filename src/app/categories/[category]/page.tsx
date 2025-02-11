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
        <h1 className="text-xl text-yellow-300">{category}</h1>
  
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {categorySpaceships.map(ship => (
            <li key={ship.id} className="border rounded-lg h-12 w-60">
              <Link
                className="text-xl font-semibold block h-full w-full p-2 hover:text-gray-400 transition-colors"
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