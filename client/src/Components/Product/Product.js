import React from "react";
// import { useLocation } from "react-router-dom";
function Product() {
  //   let { state } = useLocation();
  let product = {
    image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
    title: "Handmade bugs",
    description:
      "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living",
    category: "Decoration",
    price: 20,
  };
  console.log(product);

  return (
    <div className="product">
      <div
        className="row prod-div m-5 p-5 mx-auto rounded"
        style={{
          width: "80%",
          minHeight: "80vh",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="col-6 Col">
          <img
            src={product.image}
            alt="image"
            className="d-block w-50 mx-auto"
          />
        </div>
        <div className="col-6 Col p-4">
          <h4 className="fs-5">Title: </h4>
          <p className="fs-5">{product.title}</p>

          <h4 className="fs-5">Category: </h4>
          <p className="fs-5">{product.category}</p>

          <h4 className="fs-5">Description: </h4>
          <p className="fs-5">{product.description}</p>

          <h4>Price: {product.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
