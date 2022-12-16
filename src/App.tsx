import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Titles from "./components/Titles";

const Main = styled.main`
  margin: 0 auto;
  width: 60%;
  padding: 1rem 0;
`

function App() {
  return (
    <>
      <Navbar/>
      <Main>
        <Header/>
        <Titles isSubtitle={true}/>
      </Main>
    </>
  );
}

export default App;
