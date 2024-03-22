import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ cartCount }) {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const toggleNav = () => {
    setshowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="relative mx-auto py-3 bg-orange-400 shadow">
      <div className="container flex flex-row gap-3 items-center justify-between z-10">
        <div className="flex flex-row gap-3 justify-between items-center">
          <Link to="/" className="text-2xl">
            <img src="" alt="Shop" className="h-10" />
          </Link>
        </div>
        <div className="hidden gap-5 justify-start items-start md:flex">
          <Link to="/" className=" text-white hover:text-black">
            Home
          </Link>
          <Link to="/add-item" className=" text-white hover:text-black">
            Add Item
          </Link>
          <Link to="/cart" className=" text-white hover:text-black">
            Cart{" "}
            <small className="bg-black text-white rounded-full px-2 py-1">
              {cartCount} {/* the cart item is supposed to be here */}
            </small>
          </Link>
        </div>
        {/* {{-- mobile button --}} */}
        <button
          id="menu-toggle"
          className="block md:hidden text-black hover:text-gray-100"
          onClick={() => toggleNav()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${showMobileMenu ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="open-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${showMobileMenu ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      {/* {{-- mobile menu --}} */}
      <div
        className={`${showMobileMenu ? "block" : "hidden"} md:hidden`}
        id="menu"
      >
        <div className="absolute flex flex-col items-start right-0 top-[4rem] py-8 px-10 bg-orange-400 sm:flex gap-3 sm:w-auto sm:self-center w-full overflow-hidden z-10 transition-transform duration-500">
          <Link to="/" className=" text-white hover:text-black">
            Home
          </Link>
          <Link to="/add-item" className=" text-white hover:text-black">
            Add Item
          </Link>
          <Link to="/cart" className=" text-white hover:text-black">
            Cart
          </Link>
          <Link to="/cart" className=" text-white hover:text-black">
            Cart{" "}
            <small className="bg-black text-white rounded-full px-2 py-1">
              {cartCount} {/* the cart item is supposed to be here */}
            </small>
          </Link>
        </div>
      </div>
    </nav>
  );
}

//count  the number of items in cart and display
const mapStateToProps = state => ({
  cartCount: state.carts.cartCount,
});

export default connect(mapStateToProps)(Navbar);
