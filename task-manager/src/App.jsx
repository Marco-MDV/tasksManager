import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Home from './routes/home/Home';
import ErrorPage from './routes/errorPage/ErrorPage';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
