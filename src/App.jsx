import React, {useState} from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonsBox from "./components/ButtonsBox";
import Button from "./components/Button";

const btnValue =[
    ["C","+-","%","/"],
    [7,8,9,"X"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","="],
];


const App = () =>{
    const [calc,setCalc] = useState({
        sing:"",
        num:0,
        res:0,
    })
    const numClickHandler = (e) =>{
        e.preventDefault();
        const value = e.target.innerHTML;
        if(calc.num.length < 16){
            setCalc({
            ...calc,
            num:
                calc.num=== 0 && value ==="0"
                ?"0"
                :calc.num % 1 === 0
                ?Number(calc.num + value)
                :calc.num +value,
            res:!calc.sing ? 0 : calc.res,
    
            })
        }
    }
    const commaClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
        })
    }
   
    

    return (
        <div className="App">
            <Wrapper>
                <Screen value= {calc.num ? calc.num : calc.res}/>
                <ButtonsBox>
                    {
                        btnValue.flat().map((btn,i)=>{
                            return (
                                <Button 
                                key ={i}
                                className={btn === "=" ? "equals" : ""}
                                value ={btn}
                                onClick={
                                    btn === "C"
                                    ? resetClickHandler
                                    : btn === "+-"
                                    ?invertClickHandler
                                    :btn === "%"
                                    ?percentClickHandler
                                    :btn === "="
                                    ?equalsClickHandler
                                    :btn ==="/"|| btn ==="X"|| btn ==="-"|| btn ==="+"
                                    ?signClickHandler
                                    :btn ==="."
                                    ?commaClickHandler
                                    :numClickHandler
                                }
                                />
                            )
                        })
                    }
                </ButtonsBox>
            </Wrapper>
        </div>
    )

}
export default App