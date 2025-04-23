import { ContactForm } from "./components/ContactForm/ContactForm"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import FadeInSection from "./components/FadeInSection/FadeInSection"
import { HeroImg } from "./components/HeroImg/HeroImg"
import { NavBar } from "./components/NavBar/NavBar"
import { Projects } from "./components/Projects/Projects"
import { TechStack } from "./components/TechStack/TechStack"

function App() {
  document.title = "Luis Alberto Becerril | Portfolio"
  return (
    <>
    <NavBar/>
    <HeroImg/>
    <FadeInSection>
      <Experience/>
    </FadeInSection>
    <FadeInSection percentageInToShow={0.1}>
      <Projects/>
    </FadeInSection>
    <FadeInSection percentageInToShow={0.1}>
      <TechStack/>
    </FadeInSection>
    <FadeInSection>
      <Education/>
    </FadeInSection>
    <FadeInSection>
      <ContactForm/>
    </FadeInSection>
    </>
  )
}

export default App
