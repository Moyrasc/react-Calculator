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
    const signClickHandler = (e) =>{
        e.preventDefault();
        const value = e.target.innerHTML;
        setCalc({
            ...calc,
            sing: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num:0,
        })
    }
    const equalsClickHandler = () =>{
        if(calc.sing && calc.num){
            const math = (a,b,sing) =>
            sing === "+"
            ? a + b
            : sing === "-"
            ? a - b
            : sing === "X"
            ? a * b
            : a / b;
        setCalc({
            ...calc,
            res:
            calc.num === "0" && calc.sing === "/"
            ? "Can´t divide with 0"
            : math(Number(calc.res),Number(calc.num), calc.sing),
            sing:"",
            num:0,
        })    
        }
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