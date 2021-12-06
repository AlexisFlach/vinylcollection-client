import { Button, Container, Nav, Navbar } from "react-bootstrap";

interface Props {
  openForm: () => void;
}
const Header = ({ openForm }: Props) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">VinylCollection</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">Vinyls</Nav.Link>
            <Nav.Link href="#">Artists</Nav.Link>
            <Button onClick={() => openForm()}>Create Vinyl</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
