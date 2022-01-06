import React,{useState} from 'react'

function Calculator() {
  const[Result, setResult] = useState("")
  const validate = (input) =>{
    if(input === "*" || input === "+" || input === "-" || input === "/" || input === "."){
      if(input === Result.slice(-1)){
        return true
      }
      else if(Result.slice(-1) === "*" || Result.slice(-1) === "+" || Result.slice(-1) === "-" || Result.slice(-1) === "/" || Result.slice(-1) === "."){
          return false;
      }
    }
    else{
      return false
    }
  } 
  const handleClick = (e) =>{
    if(validate(e.target.name.toString())){
      setResult(Result)
    }
    else{
      setResult(Result.concat(e.target.name))
    }
  }
  const clear = () =>{
    setResult("")
  }
  const backspace = () =>{
    // console.log("back");
    // setResult(Result.slice(0, Result.length - 1))
    setResult(previous => previous.slice(0, previous.length - 1));
  }
  const calculate = () =>{
    try{
      setResult(eval(Result).toString())
    }catch(err){
      setResult("Error!!")
    }
  }
  return (
    <>
      <div className='container'>
        <form>
          <input type="text" value={Result}/>
        </form>
        <div className="keypad">
          <button onClick={clear} id="Clear">Clear</button>
          <button onClick={backspace} id='backspace'>C</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button id="result" onClick={calculate}>=</button>
        </div>
      </div>
    </>
  )
}

export default Calculator

