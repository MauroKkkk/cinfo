
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main';
import Docentes from './pages/Docentes/Docentes';
function App(){
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Docentes" element={<Docentes/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;