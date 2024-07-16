import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import { useState } from 'react';

function App() {

  // APIkey = cd18484a3a834cf08776ab4c6ade607e;

  const [category,setCategory] = useState("general")

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      
    </>
  )
}

export default App
