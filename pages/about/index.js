import Application from 'pages/_app';

import GreetingSection from './ContentSection/GreetingSection';
import SkillsSection from './ContentSection/SkillSections';
import Navigation from 'pages/Navigation/Navigation';
import Footer from 'pages/Footer/Footer';

function AboutMe() {
    return (
        <>
            <Navigation />
            <Application Component={GreetingSection} />
            <Application Component={SkillsSection} />
            <Footer />
        </>

    )
}

export default AboutMe;