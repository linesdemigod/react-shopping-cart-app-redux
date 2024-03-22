function CartItems({ item, handleRemoveFromCart }) {
  //multiple item.price and item.quantity to get the subtotal
  const subTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div>
      <table className="w-3/4 table-fixed">
        <tbody>
          <tr key={item.id}>
            <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover"
              />
            </td>
            <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
              <p className="font-semibold">{item.name}</p>
              <p className="text-base font-light text-gray-600 mb-3">
                {item.description}
              </p>
            </td>
            <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
              <p className=" font-semibold ">
                <span>Price: </span> $ {item.price}
              </p>
              <p>
                Qty: <span>{item.quantity}</span>
              </p>
            </td>
            <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
              <p>
                Subtotal: <span className="font-semibold">$ {subTotal}</span>
              </p>
            </td>

            <td className="border-b border-[#eee] py-2 px-4 text-gray-600">
              <button
                className="mt-3 px-3 py-2 rounded-md text-white bg-red-600 hover:bg-orange-500"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
