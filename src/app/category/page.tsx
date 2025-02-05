"use client"

import ShipCategory from "@/components/shipCategory"

export default function Page() {
    return (
        <div className="flex flex-col">
            <h2 className="text-yellow-400 text-3xl pb-2">Categorias</h2>
            <ShipCategory />
        </div>
    )
}