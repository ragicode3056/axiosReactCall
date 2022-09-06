import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    hello
    {/* {
     fetch('https://jsonplaceholder.typicode.com/users').
     then((res)=>res.json()).
     then((data)=>console.log(data))
    } */}

    {
      fetch('https://jsonplaceholder.typicode.com/users').
      then((res) => {
        if(res.ok){
          return "SUCCESS"
        }else{
          return "Failed"
        }
      })
    }
   </div>
  );
}

export default App;
