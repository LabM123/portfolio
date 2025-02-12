import { ContactForm } from "./components/ContactForm/ContactForm"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import { HeroImg } from "./components/HeroImg/HeroImg"
import { NavBar } from "./components/NavBar/NavBar"
import { Projects } from "./components/Projects/Projects"
import { TechStack } from "./components/TechStack/TechStack"

function App() {

  return (
    <>
    <NavBar/>
    <HeroImg/>
    <Experience/>
    <Projects/>
    <TechStack/>
    <Education/>
    <ContactForm/>
    </>
  )
}

export default App
