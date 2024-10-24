import Header from './header/Header';
import './index.css';
import Home from '../src/home/Home'
import Section from './section/Section';
import Footer from './footer/Footer';
import MyRoutes from './routes/MyRoutes'

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Section/>
     <Footer/>
     <MyRoutes/>
    </>
  );
}

export default App;
