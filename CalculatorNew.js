import React, { useEffect, useState } from 'react'

const CalculatorNew = () => {
  const evaluate = (state) => {
    console.log(state)
    if(isNaN(state.previousOperand) || isNaN(state.currentOperand)) return "";
    let computation = "";
    switch (state.operation) {
      case "+":
        computation =  parseInt(state.previousOperand) + parseInt(state.currentOperand)   
        break;
      case "-":
        computation =  parseInt(state.previousOperand) - parseInt(state.currentOperand)  
        break;
      case "*":
          computation =  parseInt(state.previousOperand) * parseInt(state.currentOperand) 
          break;
      case "/":
          if(state.currentOperand === "0") return ""
          else computation =  parseInt(state.previousOperand) / parseInt(state.currentOperand) 
          break;
      case "%":
          computation = parseInt(state.previousOperand) % parseInt(state.currentOperand);
          break;
      default:
        break;
    }
    return computation;
  }
  const [input,setInput] = useState({currentOperand:"",previousOperand:"",operation:""})

  const handleCalculate = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        currentOperand:evaluate(input),
        previousOperand:"",
        overwrite:true,
        operation:""
      }
    })
  }
  const handleClick = (e) => {

    if(input.overwrite) {
      if(e.target.value == "C") setInput({currentOperand:"",previousOperand:"",operation:"",overwrite:false})
   
      else {

        setInput((prev ) => {
          return {
            ...prev,
            currentOperand:e.target.value,
            overwrite:false
          }
        })
    }

     
    }
    else {

    
    if(e.target.value === "C") setInput({currentOperand:"",previousOperand:"",operation:"",overwrite:false})
    else {
    setInput((prevState) => {
        return {...prevState,currentOperand:`${prevState['currentOperand'] || "" }${e.target.value}`}
    })
  }

  }



  
  }
  const handleOperation = (e) => {

      if(input.currentOperand == ""){
        console.log(input)
        setInput((prevState) => {
          return {...prevState,
            operation:e.target.value,
          }
        })
      }

      if(input.previousOperand == ""){
        setInput((prevState) => {
          return {...prevState,
            previousOperand:prevState.currentOperand,
            operation:e.target.value,
            currentOperand:""
          }
        })
      }
      else if(input.currentOperand!="" && input.previousOperand!=""){

        // console.log(evaluate(input))
        setInput((prevState) => {
          return {...prevState,
            previousOperand:evaluate(prevState),
            operation:e.target.value,
            currentOperand:""
          }
        })
      }

      
    
  }

  return (
    <div className='calc-box'>
        <div className='top-pane' style={{textAlign:"center"}}>
            <span className='abort'>X</span>
            <span className='minimize'>-</span>
            <span className='showfull'>+</span>
        </div>
        <div className='input-section'>
            <div className='input-calculated'>{input.previousOperand} {input.operation} </div>
            <div className='input-calculated'>{input.currentOperand}</div>
        </div>
        <div className='keyboard-pane'>
            <div className='row-one'>
            <button value="C" onClick={handleClick}>C</button>
            <button value="~">+/-</button>
            <button onClick={handleOperation} value="%">%</button>
            <button onClick={handleOperation} value="/">/</button>
            </div>


            <div className='row-two'>
            <button onClick={handleClick} value="7">7</button>
            <button onClick={handleClick} value="8">8</button>
            <button onClick={handleClick} value="9">9</button>
            <button onClick={handleOperation} value="*">*</button>
            </div>



            <div className='row-three'>
            <button onClick={handleClick} value="4">4</button>
            <button onClick={handleClick} value="5">5</button>
            <button onClick={handleClick} value="6">6</button>
            <button onClick={handleOperation} value="-">-</button>
            </div>



            <div className='row-four'>
            <button onClick={handleClick} value="1">1</button>
            <button onClick={handleClick} value="2">2</button>
            <button onClick={handleClick} value="3">3</button>
            <button onClick={handleOperation} value="+">+</button>
            </div>


            <div className='row-five'>
            <button onClick={handleClick} value="0">0</button>
            <button onClick={handleClick} value=".">.</button>
            <button value="=" onClick={handleCalculate}>=</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default CalculatorNew;
