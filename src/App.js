// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import TabelaView from './componentes/TABELA/TabelaView';
import Navbar from './componentes/layouts/Navbar';
import './styles/index.css';
//import { PersonComponent } from './PersonComponent';


   // Your Parse initialization configuration goes here
   const PARSE_APPLICATION_ID = 'O44FbeKcZNWC2JOxOQrqZWA8YIPmIBRqvFH0hPfg';
   const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
   const PARSE_JAVASCRIPT_KEY = 'Yx33QNOULeOkegwqW9zIQvxkR9nnk7WljZDlnjba';
   Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
   Parse.serverURL = PARSE_HOST_URL;


function App() {
  return (
    
    <div>
    
    <div className='ConteinerPrincipal'>
      <TabelaView/>
    </div>
    </div>
  );
}

export default App;
