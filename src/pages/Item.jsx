import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleItem, addToCart } from "../features/action";
import SingleItem from "../components/SingleItem";

function Item() {
  const item = useSelector(state => state.item.item); // get data from the store
  const loading = useSelector(state => state.loading);

  //get the id of the url
  const { id } = useParams();
  // dispatch function to call action creator
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleItem(id));
  }, [dispatch]);

  //add to cart
  const handleAddToCart = item => {
    //if item  is already in the carts array then just update
    const newItem = { id: item, quantity: 1 };
    dispatch(addToCart(newItem));
  };

  return (
    <div className="container py-10">
      {loading ? (
        <div className="">Loading</div>
      ) : item && item.length > 0 ? (
        <div className="">
          {item.map(item => (
            <SingleItem
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="">Item does not exist</div>
      )}
    </div>
  );
}

export default Item;
