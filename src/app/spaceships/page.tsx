"use client"

import ShipList from "@/components/shipList"

export default function Page() {
    return (
        <main className="flex flex-col">
            <h2 className="text-yellow-400 text-3xl pb-2">Todas as Espaçonaves</h2>
            <ShipList />
        </main>
    )
}