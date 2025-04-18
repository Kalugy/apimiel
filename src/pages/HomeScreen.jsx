import Header from '../components/Home/Header';
import PlatesCarousel from '../components/Home/PlatesCarousel';
import Services from '../components/Home/Services';
import FAQs from "../components/FAQ/FAQ";
//import Section from '../components/Section';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Team from '../components/Home/Team';
import CallToActionSection from '../components/Home/CallToActionSection';
import Description from '../components/Home/Description';
import History from '../components/Home/History';



function HomeScreen() {
 
  return (
      <div>
        <Header/>
        <About />
        <History />
        <Description />
        <Contact />
        
        {/*<Team />
        <Services />
        <PlatesCarousel />
        <CallToActionSection />
        */}
      </div>
  )
}
 


export default HomeScreen


