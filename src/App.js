import Comentarios from "./pages/Comentarios";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import {DataProvider} from "./context/DataContext";
function App() {
  return (
      <BrowserRouter>
      <DataProvider>
      <div>
        <Routes>
          <Route path="/" index element={<Login/>}/>
          <Route path="comentarios"  element={ <Comentarios/>}/>
        </Routes>
       
      </div>
      </DataProvider>
      </BrowserRouter>
   
  );
}

export default App;
