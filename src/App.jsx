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
    return (
        <div className="App">
            <Wrapper>
                <Screen value="0"/>
                <ButtonsBox>
                    {
                        btnValue.flat().map((btn,i)=>{
                            return (
                                <Button 
                                key ={i}
                                className={btn === "=" ? "equals" : ""}
                                value ={btn}
                                onClick={()=>{
                                    console.log(`${btn} clicked`);
                                }}
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