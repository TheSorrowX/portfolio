import './styles.scss';
import Navbar from '../Navbar';
import Banner from '../Banner';
import About from '../About';
import Projects from '../Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
