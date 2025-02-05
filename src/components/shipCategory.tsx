import ships from "@/data/ships.json"
const ShipCategory = () => {
    const uniqueCategories = [...new Set(ships.map((ship) => ship.category))]
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {uniqueCategories.map((category, index) => (
          <div key={index} className="border rounded-lg h-12 w-60">
            <h2 className="text-xl font-semibold">{category}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShipCategory;