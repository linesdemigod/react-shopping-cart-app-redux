import { Link } from "react-router-dom";

function ItemList({ item }) {
  //format the name for the url
  //replace whitespace with hypen -
  const formatName = item.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="py-3 px-4 rounded-md overflow-hidden ">
      <div className="space-x-2">
        <Link to={`item/${formatName}/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover"
          />
        </Link>
      </div>
      <div className="px-2 py-4">
        <p className="text-xl font-semibold ">$ {item.price}</p>
        <p>{item.name}</p>
        <small className="text-gray-600">{item.description}</small>
      </div>
    </div>
  );
}

export default ItemList;
