import Container from "./ui/container"
import Logo from "./ui/logo"
import Navbar from "./ui/navbar"

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 bg-background" >
      <Container className="mx-0 px-4 py-1 shadow-sm" >
        <Logo/>
        <Navbar/>        
      </Container>
    </nav>
  )
}

export default Header