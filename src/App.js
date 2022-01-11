import React,{useState} from 'react'
import './App.css'
import CalculatorContainer from './component/CalculatorContainer'
import History from './component/History'
import Icon from './component/Icon'
import historyIconUrl from './history.png'
import backIconUrl from './back.png'

function App() {
  const[history, setHistory] = useState([]);
  const[historyClicked,setHistoryClicked]= useState(false)
  const historyEvent = (Result) =>{
    setHistory(oldArray => [...oldArray,Result]);
    console.log(history)
  }
  const clearHistory = () =>{
    setHistory(0);
    console.log(history)
  }
  const historyClick = () =>{
    setHistoryClicked(true);
  }
  const backToCalculator = () =>{
    setHistoryClicked(false);
  }
  return (
    <div className='container'>
      {
        historyClicked ? 
            <>
              <Icon name="back" imgsrc={backIconUrl} methodname={backToCalculator}/>
              <History data={history} /> 
            </> : 
            <>
              <Icon name="history" imgsrc={historyIconUrl} methodname={historyClick}/>
              <CalculatorContainer historyEvent={historyEvent} clearHistory={clearHistory} setHistoryClicked={setHistoryClicked}/>
            </>
      }
    </div>
  )
}

export default App

