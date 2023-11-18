import Header from "./components/header-section/Header";
import './App.css'
import Hero from "./components/hero-section/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";


function App() {
    return (
      <Router>
        <div className="App">
          {/* <div>
              <div className="wite-gradient" />
              <Header />
              <Hero />
          </div> */}
          <Routes>
            <Route exact path="/" element={[
              <div className="nav-hero">
                <div className="wite-gradient" />
                <Header />
                <Hero />
             </div>,
              <Companies />,
              <Residencies />,
              <Value />,
              <Contact />,
              <GetStarted />,
              <Footer />
            ]} />

            <Route path="/login" element={[<Header />, <Login />, <Footer />]} />
            <Route path="/residence" element={[<Header />, <Residencies />, <Footer />]} />
            <Route path="/value" element={[<Header />, <Value />, <Footer />]} />
            <Route path="/contact" element={[<Header />, <Contact />, <Footer />]} />
            
            
            {/* <Route exact path="/">
             
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <GetStarted />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
           </Route> */}
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  