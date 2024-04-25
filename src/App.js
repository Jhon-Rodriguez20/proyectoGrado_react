import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'moment/locale/es';
import { Navegacion } from './layouts/Navegacion';
import { Footer } from './layouts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OfertasCreadas } from './pages/ofertas/OfertasCreadas';
import { OfertaDetalle } from './pages/ofertas/OfertaDetalle';
import { Signup } from './pages/usuario/Signup';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { Signin } from './pages/usuario/Signin';
import { getAutenticacionToken } from './connections/helpers/token';
import { RutaPrivada } from './routes/RutaPrivada';
import { MisOfertas } from './pages/ofertas/MisOfertas';
import { MisRespuestasOfertas } from './pages/ofertas/MisRespuestasOfertas';
import { MiDescripcion } from './pages/usuario/MiDescripcion';
import { UsuarioDetalle } from './pages/usuario/UsuarioDetalle';
import { ActualizarDescripcion } from './pages/usuario/EditarDescripcionUsuario';
import { CrearOferta } from './pages/ofertas/CrearOferta';
import { EditarOferta } from './pages/ofertas/EditarOferta';
import { CrearRespuesta } from "./pages/ofertas/AplicarOferta";

getAutenticacionToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/" element={<OfertasCreadas/>}/>
          <Route path="/oferta/:id" element={<OfertaDetalle />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route element={<RutaPrivada />}>
            <Route path="/misofertas" element={<MisOfertas/>}/>
            <Route path="/respuestasofertas/:id" element={<MisRespuestasOfertas/>}/>
            <Route path='/midescripcion' element={<MiDescripcion/>}/>
            <Route path='/usuario/:id' element={<UsuarioDetalle/>}/>
            <Route path='/crearoferta' element={<CrearOferta/>}/>
            <Route path='/editaroferta/:id' element={<EditarOferta/>}/>
            <Route path='/editardescripcion/:id' element={<ActualizarDescripcion/>}/>
            <Route path='/oferta/aplicar/:id' element={<CrearRespuesta/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
