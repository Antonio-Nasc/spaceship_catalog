"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h2 className="text-yellow-400 text-3xl pb-2">Conheça as Naves do Universo Star Wars</h2>
      <button className="border border-gray-200 rounded-md w-52 p-1 hover:border-gray-400"><Link href="/spaceship">Ver Todas</Link></button>
    </div>
  );
}
