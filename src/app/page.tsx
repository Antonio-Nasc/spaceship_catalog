"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h2 className="text-yellow-400 text-3xl pb-2">Conheça as Naves do Universo Star Wars</h2>
      <Link
        href="/spaceships"
        className="border border-gray-200 rounded-md w-52 p-1 hover:border-gray-400 cursor-pointer block"
      >
        Ver Todas
      </Link>
    </main>
  );
}
