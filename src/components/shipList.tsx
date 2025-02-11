import ships from "@/data/spaceships.json"
import Link from "next/link";
const ShipList = () => {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {ships.map((ship) => (
          <li key={ship.id} className="border rounded-lg h-12">
            <Link className="text-xl font-semibold" href={`/spaceship/${ship.id}`}>{ship.name}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ShipList;