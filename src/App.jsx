import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonsBox from "./components/ButtonsBox"
import Button from "./components/Button"

const App = () =>{
    return (
        <div className="App">
            <Wrapper>
                <Screen value="0"/>
                <ButtonsBox>
                    <Button 
                        className=""
                        value ="0"
                        onClick={()=>{
                            console.log("Button clicker")
                        }}
    
                    />
                </ButtonsBox>
            </Wrapper>
        </div>
    )

}
export default App