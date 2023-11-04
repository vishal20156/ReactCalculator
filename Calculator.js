import React, { useEffect, useState } from 'react'

const Calculator = () => {

  const [input,setInput] = useState("");
  const isOperator = (char) => {
    return ['+', '-', '*', '/'].includes(char);
  };
  const handleClick = (e) => {
    if(e.target.value === "C") setInput("")
    else setInput(prev => prev + e.target.value)
  } 

  const handleSubmit = () => {
    let numberStack = [];
    let operatorStack =[];
    numberBuffer = '';
    for(let i = 0; i < input.length; i++){
        if(isOperator(input[i])){
            operatorStack.push(input[i])
            if(numberBuffer != ""){
                numberStack.push(parseFloat(numberBuffer));
                numberBuffer = "";
            }
        }
        else{
            
            numberBuffer+=input[i];
        }


    }
    if (numberBuffer !== "") {
        numberStack.push(parseFloat(numberBuffer));
      }
    
    let res = "";
    while(operatorStack.length > 0){
       let num1 = numberStack.shift();
       let operator = operatorStack.shift();
       let num2 = numberStack.shift();
    
       if(num1 ===undefined || num2 === undefined || operator === undefined ) {
            alert("WTf u doing?")
            break;
       }
       console.log({num1,num2,operator})
      if (operator === '+') {
        numberStack.unshift(num1 + num2);
      } else if (operator === '-') {
        numberStack.unshift(num1 - num2);
      } else if (operator === '*') {
        numberStack.unshift(num1 * num2);
      } else if (operator === '/') {
        numberStack.unshift(num1 / num2);
      } else if (operator == "~") {
        console.log(numberStack.pop())
        numberStack.unshift(numberStack.pop() * -1)
      }
    }

    if (numberStack.length > 0) {
      setInput(numberStack[0].toString());
    } else {
      setInput('');
    }
    
    console.log(res)
  }

  return (
    <div className='calc-box'>
        <div className='t-pane'>
            <span className='abort'></span>
            <span className='minimize'></span>
            <span className='showfull'></span>
        </div>
        <div className='input-section'>
            <input value={input}  disabled={true} className='input-text' type='text'></input>
        </div>
        <div className='keyboard-pane'>
            <div className='row-one'>
            <button onClick={handleClick} value="C">C</button>
            <button onClick={handleClick} value="~">+/-</button>
            <button onClick={handleClick} value="%">%</button>
            <button onClick={handleClick} value="/">/</button>
            </div>


            <div className='row-two'>
            <button onClick={handleClick} value="7">7</button>
            <button onClick={handleClick} value="8">8</button>
            <button onClick={handleClick} value="9">9</button>
            <button onClick={handleClick} value="*">*</button>
            </div>



            <div className='row-three'>
            <button onClick={handleClick} value="4">4</button>
            <button onClick={handleClick} value="5">5</button>
            <button onClick={handleClick} value="6">6</button>
            <button onClick={handleClick} value="-">-</button>
            </div>



            <div className='row-four'>
            <button onClick={handleClick} value="1">1</button>
            <button onClick={handleClick} value="2">2</button>
            <button onClick={handleClick} value="3">3</button>
            <button onClick={handleClick} value="+">+</button>
            </div>


            <div className='row-five'>
            <button onClick={handleClick} value="0">0</button>
            <button onClick={handleClick} value=".">.</button>
            <button onClick={handleSubmit} value="=">=</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Calculator;
