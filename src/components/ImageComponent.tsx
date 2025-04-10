// import image from '../assets/backGroundImage.jpg';
import HeroSection from './HeroSection/HeroSection';
import MouseCircle from './MouseCircle';
import Header from './Header/Header';
import SkillCardSection from './About/SkillCardSection';
import AboutUS from './About/AboutUS';
import Contact from './Contact/Contact';
import NewsLetter from './newsLetter/NewsLetter';
import SkillSection from './SkillsSection/SkillSection';
import ServiceSection from './services/ServiceSection';
import Testimonials from './testimonial/Testimonials';
import Blog from './Blog/Blog';
import backGroundImage from '../assets/backGroundImage.jpg';
function ImageComponent() {
 

  return (
    <div
      className="w-full h-auto flex flex-col items-center"
       style={{ backgroundImage: `url(${backGroundImage})`, width: "100%", backgroundSize: "fit", height: 'auto' }}
    >

      <div className='w-full'>
      <Header />
      </div>
  
      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] justify-center items-center'>
      <HeroSection />
      </div>

      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] h-auto'>
        <SkillCardSection />
      </div>

      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] '>
        <AboutUS />
      </div>

       <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] '>
        <SkillSection />
      </div> 
    
      {/* <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] justify-center items-center'>
      <PortfolioSection />
      </div> */}

      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <ServiceSection /> 
      </div>  

      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Testimonials />
      </div>  

     
      <div className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]">
        <Blog />
      </div>
   

      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Contact />
      </div> 
      
      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] flex justify-center py-10 w-[95%]'>
        <NewsLetter />
      </div> 
      

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 ">
        <MouseCircle />
      </div>
    </div>
  )
}

export default ImageComponent
