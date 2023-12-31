import React from "react";

function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}

      className="px-4 py-1 m-1 text-[16px] transition ease-in duration-200 uppercase rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white border border-gray-700 "
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
