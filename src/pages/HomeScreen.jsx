import Header from '../components/Home/Header';
import Services from '../components/Home/Services';
import FAQs from "../components/FAQ/FAQ";
//import Section from '../components/Section';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import ProductSection from '../components/Home/ProductSection';
import CallToActionSection from '../components/Home/CallToActionSection';
import Description from '../components/Home/Description';
import History from '../components/Home/History';
import TerritorySection from '../components/Home/TerritorySection';
import BlogSection from '../components/Home/BlogSection';
import OurStorySection from '../components/Home/OurStorySection';

import TestimonialCard from '../components/Home/TestimonialCard';


function HomeScreen() {
 
  return (
      <div>
        <Header/>
        {/*<About />*/}
        
        <History />
        <OurStorySection />

        <Description />
        <ProductSection />
        
        <CallToActionSection />

        
        <BlogSection />

        <TerritorySection />
        <TestimonialCard />
        <Contact />
        
        {/*<ProductSection />
        <Services />
        <PlatesCarousel />
        */}
      </div>
  )
}
 


export default HomeScreen


