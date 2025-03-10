"use client"

import { useParams } from "next/navigation";
import spaceships from "@/data/spaceships.json"
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { id } = useParams();
  if (!id || typeof id !== 'string') return null;

  const ship = spaceships.find(ship => ship.id === +id)
  if (!ship) return null;

  return (
      <main className="p-4 sm:p-8">
          <h1 className="text-xl text-yellow-300 text-center sm:text-left">{ship.name}</h1>

          <p className="flex justify-center sm:justify-start py-4">
              <Image
                  src={ship.imageUrl}
                  alt={ship.name}
                  width={250}
                  height={200}
                  className="rounded-lg"
              />
          </p>

          <p className="py-1">
              <strong>Modelo: </strong>
              {ship.model}
          </p>

          <p className="py-1">
              <strong>Categoria: </strong>
              {ship.category}
          </p>

          <p>{ship.description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
              <Link
                  href="/spaceships"
                  className="bg-background border-2 border-foreground rounded-lg cursor-pointer text-base font-bold grid place-content-center min-h-12 px-5 py-2.5 w-full sm:w-max min-w-[12rem] hover:text-gray-400 transition-colors text-center"
              >
                  Voltar para Espaçonaves
              </Link>

              <div className="flex gap-4">
                  <Link
                      href={`/spaceships/${+id - 1}`}
                      className="bg-background border-2 border-foreground rounded-lg cursor-pointer text-base font-bold grid place-content-center min-h-12 px-5 py-2.5 w-max min-w-[12rem] hover:text-gray-400 transition-colors"
                      style={{ display: +id === 1 ? 'none' : 'block' }}
                  >
                      Anterior
                  </Link>
                  <Link
                      href={`/spaceships/${+id + 1}`}
                      className="bg-background border-2 border-foreground rounded-lg cursor-pointer text-base font-bold grid place-content-center min-h-12 px-5 py-2.5 w-max min-w-[12rem] hover:text-gray-400 transition-colors"
                      style={{ display: +id === spaceships.length ? 'none' : 'block' }}
                  >
                      Próxima
                  </Link>
              </div>
          </div>
      </main>
  );
}