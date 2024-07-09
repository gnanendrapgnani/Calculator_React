import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText === 'AC'){
      const newDisplayValue=""
      setCalVal(newDisplayValue)
    }else if(buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    }else if(buttonText == "DE"){
      const DE = calVal.toString().slice(0,-1);
      setCalVal(DE)
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    </div>
  );
}

export default App;
