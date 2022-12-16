import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";

const Main = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  width: 60%;
`

function App() {
  return (
    <>
      <Navbar/>
      <Main>
        <Header/>
      </Main>
      <Catalog/>
    </>
  );
}

export default App;
