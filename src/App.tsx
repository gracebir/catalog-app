import styled from "styled-components";
import Circle from "./components/Circle";
import Navbar from "./components/Navbar";
import Searchinput from "./components/Searchinput";
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import Circlebasket from "./components/CircleBasket";
import { products } from "./data";
import ShoppingCard from "./components/Shoppingcard";
import SideCard from "./components/SideCard";
import SideCategory from "./components/SideCategory";
import CheckBox from "./components/CheckBox";
import Dropdown from "./components/Dropdown";

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
        <CheckBox label="Нертус"/>
        <Dropdown/>
        <ShoppingCard
        productName={products[0].productName}
        price={products[0].price}
        detail={products[0].detail}
        image={products[0].image}   
        /> 
        <SideCard/>
        <SideCategory/>
      </Main>
    </>
  );
}

export default App;
