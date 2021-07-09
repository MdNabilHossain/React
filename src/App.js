import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const products = [
    { name: "photoshop", price: "$199" },
    { name: "Illustrator", price: "$99" },
    { name: "pdf", price: "$19" },
  ];

  const friends = [
    { name: "kamal", study: "CSE" },
    { name: "Rakib", study: "CSSE" },
    { name: "Nakib", study: "CSSE" },
    { name: "Tanim", study: "CSE" },
    { name: "Ratul", study: "TEXT" },
    { name: "Fahad", study: "SE" },
  ];
  // const productName= products.map(product => products.name)
  // console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>

        <Users></Users>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[0]}></Product>
    <Product product={products[1]}></Product>
    <Product product={products[2]}></Product> */}

        {/* {
      products.map(product=> <Product product={product}></Product>)
    } */}

        {friends.map((fr) => (
          <Friend friends={fr}></Friend>
        ))}
      </header>
    </div>
  );
}

// function Product(props){
//   const productStyle={
//     border:'1px solid gray',
//     borderRadius:'5px',
//     backgroundColor:'lightgrey',
//     height:'200px',
//     width:'200px',
//     float:'left',
//     marginTop:'10px',
//     marginBottom:'10px',
//   }

// const{name, price}=props.product;
//   return (
//      <div style={productStyle}>
//        <h3>{name}</h3>
//        <h5>{price}</h5>
//        <button>Buy now</button>
//      </div>

//   )
// }
function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => setCount(count - 1);
 
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}



function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])

  return(
    <div>
      <h2>Users: {users.length}</h2>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}
function Friend(props) {
  const friendtStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "200px",
    width: "200px",
    float: "left",
    marginTop: "10px",
    marginBottom: "10px",
  };
  const { name, study } = props.friends;
  return (
    <div style={friendtStyle}>
      <h2>{name}</h2>
      <h4>{study}</h4>
    </div>
  );
}
export default App;
