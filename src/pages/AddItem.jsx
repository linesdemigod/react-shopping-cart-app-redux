import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../features/action";

function AddItem() {
  //generate random number
  const generateRandom = () => Math.floor(Math.random() * 104);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: generateRandom(),
    category: "",
    name: "",
    price: 0,
    unit: "",
    description: "",
    image: "",
  });

  const { id, category, name, price, unit, description, image } = formData;

  const error = useSelector(state => state.error);

  const onChange = async e => {
    if (!e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      name === "" ||
      category === "" ||
      description === "" ||
      price === "" ||
      image === ""
    ) {
      toast.error("Fill all fields");
      return;
    }

    dispatch(addItem(formData));

    if (!error) {
      toast.success("Added successfully!");
      setFormData({
        id: generateRandom(),
        category: "",
        name: "",
        price: 0,
        unit: "",
        description: "",
        image: "",
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-zinc-100 py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10">
            Add Item
          </h2>
          <form action="" className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1">
                <input
                  name="category"
                  type="text"
                  id="category"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={category}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1">
                <input
                  name="price"
                  type="text"
                  id="price"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={price}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Unit
              </label>
              <div className="mt-1">
                <input
                  name="unit"
                  type="text"
                  id="unit"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={unit}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <input
                  name="description"
                  type="text"
                  id="description"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={description}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Image
              </label>
              <div className="mt-1">
                <input
                  name="image"
                  type="text"
                  id="image"
                  className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  value={image}
                  onChange={onChange}
                />
                <small className="text-small">Image Url</small>
              </div>
            </div>
            <div>
              <button
                type="submit"
                name="submit"
                className="w-full cursor-pointer rounded-lg  bg-orange-600 hover:bg-orange-500 p-2 font-medium text-white transition hover:bg-opacity-90"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
