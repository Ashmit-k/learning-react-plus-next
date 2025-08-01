import React from 'react';
import Card from './components/Card/card';

const App = () => {
  return (
    <div>
      <Card 
        title="React Card"
        desc="This is a description of the card."
        imageUrl="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
      />
      <Card 
        title="Next Card"
        desc="This is a description of the card."
        imageUrl="https://via.placeholder.com/100"
      />
    </div>
  );
};

export default App;


// import React from 'react';
// import Card from './components/Card/card';


// const App = () => {
//   // const [count, setCount] = useState(0)
//   // const Increment = () =>{
//   //   setCount(count + 1);
//   // }
//   // const Decrement = () =>{
//   //   setCount(count - 1);
//   // }
//   // return (
//   //   <>
//   //     <h1>Count: {count}</h1>
//   //     <button onClick={Increment}>Increment</button>
//   //     <button onClick={Decrement}>Decrement</button>

//   //   </>
//   // )
// }

// export default App


