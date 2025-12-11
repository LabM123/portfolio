import { useState } from "react"
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import FadeInSection from "./components/FadeInSection/FadeInSection"
import { HeroImg } from "./components/HeroImg/HeroImg"
import { NavBar } from "./components/NavBar/NavBar"
import { Projects } from "./components/Projects/Projects"
import { TechStack } from "./components/TechStack/TechStack"
import translations from './t.json';

function App() {
  document.title = "Luis Alberto Becerril | Portfolio"
  const [language, setLanguage] = useState("english")
  function t(text) {
    try {
        const finalLanguage = language || 'english';
        
        if (translations[finalLanguage] && translations[finalLanguage][text]) {
            return translations[finalLanguage][text];
        }
        
        console.warn(`Translation not found for key "${text}" in "${finalLanguage}". Returning original text.`);
        return text;
    } catch (error) {
        console.error('Error in translation function:', error);
        return text;
    }
}
  return (
    <>
    <NavBar language={language} setLanguage={setLanguage} t={t}/>
    <HeroImg t={t} language={language}/>
    <FadeInSection>
      <Experience t={t}/>
    </FadeInSection>
    <FadeInSection percentageInToShow={0.1}>
      <Projects t={t}/>
    </FadeInSection>
    <FadeInSection percentageInToShow={0.1}>
      <TechStack t={t}/>
    </FadeInSection>
    <FadeInSection>
      <Education t={t}/>
    </FadeInSection>
    <FadeInSection>
      <ContactForm t={t}/>
    </FadeInSection>
    </>
  )
}

export default App
