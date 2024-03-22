import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "./../features/action";
import HeroSection from "../components/HeroSection";
import ItemList from "../components/ItemList";

function Home() {
  const items = useSelector(state => state.items.items); // get data from the store
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="">Loading</div>
          ) : items && items.length > 0 ? (
            <div className="grid grid-cols-1 justify-between items-center gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-5 2xl:grid-5">
              {items.map(item => (
                <ItemList key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="">No grocery</div>
          )}
        </div>
      </section>
    </>
  );
}
export default Home;
