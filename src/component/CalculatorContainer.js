import React, {useState} from 'react'
import Keypad from './keypad';
import Display from './display'
import num from './button'

const CalculatorContainer = (props) => {
    const[Result, setResult] = useState("");
    
    const handleClick = (e) => {
        switch (e.target.name) {
            case "Clear":
              setResult("")
              props.clearHistory();
              break;
            case "C":
              setResult(previous => previous.slice(0, previous.length - 1));
              break;
            case "/":
            case "*":
            case "-":
            case "+":
            case ".":
                if(e.target.name === Result.slice(-1)){
                    setResult(Result)
                }
                else if(Result.slice(-1) === "*" || Result.slice(-1) === "+" || Result.slice(-1) === "-" || Result.slice(-1) === "/" || Result.slice(-1) === "."){
                    setResult(previous => previous.slice(0, previous.length - 1).concat(e.target.name))
                }else{
                    setResult(Result.concat(e.target.name))
                }
              break;
            case "=":
              try{
                props.historyEvent(Result);
                  setResult(eval(Result).toString());
                }catch(err){
                  setResult("Error!!")
              }
              break;
            default:
                setResult(Result.concat(e.target.name))
          }

    }
    return (
        <>
            <Display result={Result}/>
            <div className="keypad">
                {num.map((btn) => (
                    <Keypad key={btn.id} id={btn.id} name={btn.name} handleClick={handleClick}/>
                ))}
            </div> 
        </>
    )
}

export default CalculatorContainer
