
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';
import HomePage from './page/HomePage';
import ServicePage from './page/ServicePage';
import PricingPage from './page/PricingPage';
import BlogPage from './page/BlogPage';
import CarouselPage from './page/CarouselPage';
import WorkingProcessPage from './page/WorkingProcessPage';
import TestimonialPage from './page/TestimonialPage';
import About from './page/About';
import ContactPages from './page/ContactPage';
import LoginPage from './page/loginPages';
import PaymentPage from './page/paymentPage';
import PrivateRoutes from './page/routes/privateRoutes';
import SignUp from './page/Registration/SignUp';



function App() {
  return (
  <>
  <Header />
  <Navbar/>
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/service' element={<ServicePage />}/>
  <Route path='/pricing' element={<PricingPage />}/>
  <Route path='/blog' element={<BlogPage />} />
  <Route path='/carousal' element={<CarouselPage />} />
  <Route path='/workingprocess' element={<WorkingProcessPage />}/>
  <Route path='/testimonials' element={<TestimonialPage />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element= {<ContactPages />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/registration' element={<SignUp />} />
  <Route path='/payment' element={<PrivateRoutes>
    <PaymentPage/>
  </PrivateRoutes>}/>
  </Routes>
  <Footer/>

  </>
  );
}

export default App;
