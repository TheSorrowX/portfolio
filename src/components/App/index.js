import './styles.scss';
import Navbar from '../Navbar';
import Banner from '../Banner';
import About from '../About';
import Projects from '../Projects';
import { useEffect, useState } from 'react';
import {client} from '../../client';
function App() {

  const [projects,setProjects] = useState([]);

  useEffect( () =>{
    client.getEntries()
    .then((res)  =>{
      console.log(res);
      setProjects(res.items);
    })
    .catch(console.error)
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Projects projects={projects}/>
    </div>
  );
}

export default App;
