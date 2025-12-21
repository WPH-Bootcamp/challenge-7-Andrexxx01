import Hero from "./components/container/HeroSection";
import Navbar from "./components/container/Navbar";
import Content from "./components/container/Content";
import Main from "./components/container/Main";
import ProcessSection from "./components/container/ProcessSection";
import ServicesSection from "./components/container/ServicesSection";
import IndustrySection from "./components/container/IndustrySection";
import Portfolios from "./components/container/Portfolios";
import Testimonials from "./components/container/Testimonials";
import FAQSection from "./components/container/FAQSection";
import InputForm from "./components/container/InputForm";
import Footer from "./components/container/Footer";

//Dark Mode by adding dark class on html tag in index.html
function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Content /> 
      <Main />
      <ProcessSection />
      <ServicesSection />
      <IndustrySection />
      <Portfolios />
      <Testimonials />
      <FAQSection />
      <InputForm />
      <Footer />
    </>
  );
}

export default App;
