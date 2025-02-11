import ships from "@/data/spaceships.json"
import Link from "next/link";
const ShipCategory = () => {
    const uniqueCategories = [...new Set(ships.map((ship) => ship.category))]
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {uniqueCategories.map((category) => (
          <li key={category} className="border rounded-lg h-12 w-60">
            <Link href={`/categories/${category.replace(' ', '_')}`} className="text-xl font-semibold block h-full w-full p-2 hover:text-gray-400 transition-colors">{category}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ShipCategory;