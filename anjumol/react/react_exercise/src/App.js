

import React ,{useState} from 'react';
import './App.css';
 function App() {
    
  const [counter,setCounter] = useState(0);
  const [text1,setText1]=useState('');
  const [text2,setText2]=useState('');
 
  
  function clickAddHandler (event){
     setCounter(counter=>counter+1);
  
  }
  function clickSubHandler (event){
    setCounter(counter=>counter-1);
  }
  function clickAddByNumber(event){
    setCounter(Number(counter)+Number(text1));
  }
  function clickSubByNumber(event){
    setCounter(Number(counter)-Number(text2));
  }
  function valueOnChange1(event){
    setText1(event.target.value);
   
   }
   function valueOnChange2(event){
    
    setText2(event.target.value);
   }

  
  return (
    <div>
      <p id="counter">{counter}</p>
      <div id="btnClass">
      <button class="btn" onClick={clickAddHandler}>Increment</button>
      
      <button class="btn" onClick={clickSubHandler} >Decrement</button>
     
      <button class="btn"  onClick={clickAddByNumber} >Increment By </button>
      <input type="Number"onChange={valueOnChange1} value={text1} />
   
      <button class="btn" onClick={clickSubByNumber}>Decrement By </button>
      <input class="in" type="Number" onChange={valueOnChange2} value={text2}/>
      </div>
    </div>
  );
};
export default App;