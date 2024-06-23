// import React from "react";
// import { useLocation } from "react-router-dom";
// function Product() {
//     let { state } = useLocation();
//     console.log("state",state);
//     let product = state;
//     console.log(product)

//   return (
//     <div className="product">
//       <div
//         className="row prod-div m-5 p-5 mx-auto rounded"
//         style={{
//           width: "80%",
//           minHeight: "80vh",
//           boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//         }}
//       >
//         <div className="col-6 Col">
//           <img
//             src={product.image}
//             alt="image"
//             className="d-block w-50 mx-auto"
//           />
//         </div>
//         <div className="col-6 Col p-4">
//           <h4 className="fs-5">Title: </h4>
//           <p className="fs-5">{product.title}</p>

//           <h4 className="fs-5">Category: </h4>
//           <p className="fs-5">{product.category}</p>

//           <h4 className="fs-5">Description: </h4>
//           <p className="fs-5">{product.description}</p>

//           <h4>Price: {product.price}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;




import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";

function Product() {
  const { state } = useLocation();
  const product = state;

  return (
    <div className="product">
      <p>USe</p>
      <div
        className="row prod-div m-5 p-5 mx-auto rounded"
        style={{
          width: "80%",
          minHeight: "80vh",
        }}
      >
        <div className="col-12 col-md-6 Col">
          <img style={{height:'320px'}}
            src={product.image}
            alt={product.title}
            className="d-block w-50 mx-auto"
          />
        </div>
        <div className="col-12 col-md-6 Col prod-details">
          <h4 className="fs-5">Title: </h4>
          <p className="fs-5">{product.title}</p>

          <h4 className="fs-5">Category: </h4>
          <p className="fs-5">{product.category}</p>

          <h4 className="fs-5">Description: </h4>
          <p className="fs-5">{product.description}</p>

          <h4 className="prod-price">Price: ${product.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Product;

