import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Tovar from "./pages/Tovar";
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
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/tovar/:id" element={<Tovar/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
