import React from 'react';
import Card from './components/Card/card';

const App = () => {
  return (
    <div>
      <Card 
        title="React Card"
        desc="This is a description of the card."
        imageUrl="https://tse1.mm.bing.net/th/id/OIP.4jx4t2JuBvL-EpgpblKdbQHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <Card 
        title="Next Card"
        desc="This is a description of the card."
        imageUrl="https://assets.awwwards.com/awards/element/2022/09/6313eaf4b41bd275260216.png"
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


