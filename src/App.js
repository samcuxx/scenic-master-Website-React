import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ServiceSingle from './pages/ServiceSingle';
import BlogSingle from './pages/BlogSingle';
import PortfolioSingle from './pages/PortfolioSingle';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Faq from './pages/Faq';



function App() {
  return (
    
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blogSingle' element={<BlogSingle/>} />
          <Route path='/serviceSingle' element={<ServiceSingle/>} />
          <Route path='/portfolioSingle' element={<PortfolioSingle/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/gallery' element={<Gallery/>} />
          {/* <Route exact path="/" component={Home}/> */}
        </Routes>
        <Footer />
      </Router>
      
    
  );
}

export default App;
