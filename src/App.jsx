import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonsBox from "./components/ButtonsBox"

const App = () =>{
    return (
        <div className="App">
            <Wrapper>
                <Screen value="0"/>
                <ButtonsBox>
                    aqui botones
                </ButtonsBox>
            </Wrapper>
        </div>
    )

}
export default App