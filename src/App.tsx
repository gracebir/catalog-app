import styled from "styled-components";
import Badge from "./components/Badge";
import Navbar from "./components/Navbar";
import Searchinput from "./components/Searchinput";
import Seed4 from './assets/seed4.svg'
import { badgedata } from "./data";

const Main = styled.main`
  margin: 0 auto;
  width: 58%;
  padding: 1rem 0;
  border: 1px red solid;
`

const Div = styled.div`
display: flex;
gap: 2%;
`

function App() {
  return (
    <>
      <Navbar/>
      <Main>
        <Searchinput/>
        <Div>
          {badgedata.map((badge, i)=>(
            <Badge Icon={badge.Icon} text={badge.text}/>
          ))}
        </Div>
       
      </Main>
    </>
  );
}

export default App;
