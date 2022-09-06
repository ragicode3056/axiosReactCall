import logo from './logo.svg';
import './App.css';
import {axios} from 'axios'
import { LoginModal } from './components/LogInModal';
import { Table } from './components/Table';
import { useState } from 'react';

function App() {
 const [isModalClicked,setisModalClicked] = useState(false);
 
 const submitHandler = () =>{
  setisModalClicked(true);
 }
  return (
  <div>
  
 {!isModalClicked ? <LoginModal onSubmit = {submitHandler}/>: <Table/>  }

  </div>
  );
}

export default App;
