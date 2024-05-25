import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Analytics from "./Pages/Analytics/Analytics";

function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/analytics' element={ <Analytics /> } />
    </Routes>
    </>
  )
}

export default App;