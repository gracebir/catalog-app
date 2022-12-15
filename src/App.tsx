import styled from "styled-components";
import Circle from "./components/Circle";
import Navbar from "./components/Navbar";
import Searchinput from "./components/Searchinput";
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import Circlebasket from "./components/CircleBasket";

const Main = styled.main`
  margin: 0 auto;
  width: 58%;
  padding: 1rem 0;
`

function App() {
  return (
    <>
      <Navbar/>
      <Main>
        <Searchinput/>
        <Circle isShadow={false} Icon={FaBalanceScaleLeft} size="2.5rem"/>   
        <Circlebasket isBasket={false} Icon={SlBasket} checkout={1}/>    
      </Main>
    </>
  );
}

export default App;
