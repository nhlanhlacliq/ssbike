import Container from "./ui/container"
import Logo from "./ui/logo"
import Navbar from "./ui/navbar"

const Header = () => {
  return (
    <nav className="" >
      <Container className="py-1 shadow-sm" >
        <Logo/>

        <Navbar/>        
      </Container>
    </nav>
  )
}

export default Header