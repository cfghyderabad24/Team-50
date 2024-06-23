// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   let [search, setSearch] = useState("");
//   let [products, setProducts] = useState([
//     {
//       image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
//       title: "Handmade bugs",
//       description:
//         "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living",
//       category: "Decoration",
//       price: 20,
//     },
//     {
//       image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
//       title: "Handmade bugs",
//       description:
//         "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living",
//       category: "Decoration",
//       price: 20,
//     },
//     {
//       image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
//       title: "Handmade bugs",
//       description:
//         "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living",
//       category: "Decoration",
//       price: 20,
//     },
//   ]);

//     let navigate = useNavigate();

//   function handleDetails(itemId) {
//     let product = products.find((prod) => prod.id === itemId);
//     console.log(product)
//     navigate("/product", { state: product });
//   }

//   function handleSearch(searchEvent) {
//     setSearch(searchEvent.target.value);
//   }

//   return (
//     <div className="app-div">
//       <div className="pt-3">
//         <input
//           type="text"
//           className="form-control w-50 mx-auto Shadow fs-3 mb-3"
//           placeholder="🔍Our Products"
//           onChange={handleSearch}
//         />
//         {search === "" ? (
//           <div className="row m-2">
//             {
//               //iterating through the products array
//               products.map((item) => (
//                 <div
//                   key={item.id}
//                   className="col-md-4 mb-4 d-grid justify-content-space-around"
//                   style={{ minHeight: "50vh" }}
//                 >
//                   <div className="card Card bg-white p-3 Shadow">
//                     <img
//                       src={item.image}
//                       className="card-img w-50"
//                       alt={item.title}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <h6>{item.category}</h6>
//                     </div>
//                     <div
//                       className="btn details mx-auto"
//                       onClick={() => handleDetails(item.id)}
//                     >
//                       Details
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         ) : (
//           <div className="row">
//             {products.map(
//               (item) =>
//                 item.title.toLowerCase().includes(search.toLowerCase()) ===
//                   true && (
//                   <div
//                     key={item.id}
//                     className="col-md-4 mb-4 d-grid justify-content-space-around"
//                     style={{ minHeight: "50vh" }}
//                   >
//                     <div className="card Card bg-white p-3 shadow">
//                       <img
//                         src={item.image}
//                         className="card-img w-50"
//                         alt={item.title}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{item.title}</h5>
//                       </div>
//                       <div
//                         className="btn details mx-auto"
//                         onClick={() => handleDetails(item.id)}
//                       >
//                         Details
//                       </div>
//                     </div>
//                   </div>
//                 )
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
      title: "Handmade Bugs",
      description:
        "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Decoration",
      price: 20,
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
      title: "Handmade Bugs",
      description:
        "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Decoration",
      price: 20,
    },
    {
      id: 3,
      image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
      title: "Handmade Bugs",
      description:
        "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Decoration",
      price: 20,
    },
  ]);

  const navigate = useNavigate();

  function handleDetails(itemId) {
    const product = products.find((prod) => prod.id === itemId);
    navigate("/product", { state: product });
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="app-div">
      <div className="pt-3">
        <input
          type="text"
          className="form-control w-50 mx-auto Shadow fs-3 mb-3"
          placeholder="🔍Our Products"
          onChange={handleSearch}
        />
        <div className="row m-2">
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                key={item.id}
                className="col-md-4 mb-4 d-flex justify-content-center"
                style={{ minHeight: "50vh" }}
              >
                <div className="card Card bg-white p-3 Shadow">
                  <img
                    src={item.image}
                    className="card-img"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6>{item.category}</h6>
                  </div>
                  <div
                    className="btn details mx-auto"
                    onClick={() => handleDetails(item.id)}
                  >
                    Details
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
