function SingleItem({ item, handleAddToCart }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:flex-col lg:flex-row xl:flex-row">
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="">
        <p className="text-4xl font-semibold">{item.name}</p>
        <p className="text-xl font-semibold ">$ {item.price}</p>
        <p className="text-base text-gray-600 mb-3">{item.description}</p>
        <hr />
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <th className="border-b py-2 px-4 font-medium ">Category: </th>
              <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
                {item.category}
              </td>
            </tr>
            <tr>
              <th className="border-b py-2 px-4 font-medium">Unit: </th>
              <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
                {item.unit}
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="mt-3 px-3 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-500"
          onClick={() => handleAddToCart(item.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
