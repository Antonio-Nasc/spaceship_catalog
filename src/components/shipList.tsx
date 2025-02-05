import ships from "@/data/ships.json"
const ShipList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {ships.map((ship) => (
          <div key={ship.id} className="border rounded-lg h-12">
            <h2 className="text-xl font-semibold">{ship.name}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShipList;