import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ["Rofic", "shofik", "Jobbar" , "rakib"]

  const products =[
    {name:'Laptop',price:'$90.99'},
    {name:'Phone', price:'$30.50'},
    {name:'Watch', price:'$20.50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>

        {/* <Product product={products[0]}></Product> */}
        <Person name="Gowtam kumar" nayika="Poly" age="22"></Person>
        <Users></Users>

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    
  },[])
  return (
    <div>
      <h3>Daynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
          
        }
       
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const heandleIncrease = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={()=> setCount(count -1)}>Decrease -</button>
      <button onClick={heandleIncrease}>Increase +</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    backgroundColor:'green',
    border:'2px solid gray',
    color:'yellow',
    margin:'5px'
  }
 
  const {name, price} = props.product;
  
  return (
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h4>Price:{price}</h4>
      
    </div>
  )
}
function Person(props) {
  const testStyle = {
    border:'2px solid red',
  }
  console.log(props);
  return (
    <div style={testStyle}>
      <h1>Hello{props.name}</h1>
      <h2>I am learning react js</h2>
    </div>
  )
}

export default App;
