import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
