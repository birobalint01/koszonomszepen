import { useState } from "react";
import { Route, Routes } from "react-router";
import { Container, Nav, Navbar } from "react-bootstrap";
import Esemenyek from "./esemenyek";
import Terkep from "./terkep";


function App() {

  const [count, setCount] = useState(0);


  return (

<div className="App">

      <Navbar bg="light" expand="lg">

        <Container>

          <Nav className="me-auto">

            <Nav.Link href="/">Események</Nav.Link>

            <Nav.Link href="/terkep">Térkép</Nav.Link>

          </Nav>

        </Container>

      </Navbar>

      <Routes>

        <Route path="/" element={<Esemenyek />} />

        <Route path="/terkep" element={<Terkep />} />

      </Routes>

    </div>

);

}

export default App;