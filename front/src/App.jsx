import { ContactForm } from "./components/ContactForm/ContactForm"
import { Education } from "./components/Education/Education"
import { HeroImg } from "./components/HeroImg/HeroImg"
import { MobileNavBar } from "./components/MobileNavBar/MobileNavBar"
import { NavBar } from "./components/NavBar/NavBar"
import { Projects } from "./components/Projects/Projects"
import { TechStack } from "./components/TechStack/TechStack"

function App() {

  return (
    <>
    <NavBar/>
    <MobileNavBar/>
    <HeroImg/>
    <Projects/>
    <TechStack/>
    <Education/>
    <ContactForm/>
    </>
  )
}

export default App
