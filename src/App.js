
import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import ShowDetails from './Components/ShowDetails';

function App() {

  const [check , setCheck] = useState(false);

  return (
    <>
     {/* <Home setCheck={setCheck}/>  */}
     {check ? <ShowDetails /> : <Home setCheck={setCheck}/>}
    </>
  );
}

export default App;
