import styled from "styled-components";
import Navbar from "./components/Navbar";
import Searchinput from "./components/Searchinput";

const Main = styled.main`
  margin: 0 auto;
  width: 58%;
  padding: 1rem 0;
  border: 1px red solid;
`

function App() {
  return (
    <>
      <Navbar/>
      <Main>
        <Searchinput/>       
      </Main>
    </>
  );
}

export default App;
