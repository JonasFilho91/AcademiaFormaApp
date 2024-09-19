// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
//Import styles
import './styles/index.css';
import AppRoutes from './AppRoutes.jsx';
/*import Cabecalho from './componentes/layouts/Cabecalho';
import TesteOn from './componentes/TesteOn.js';*/

  //import { PersonComponent } from './PersonComponent';

   // Your Parse initialization configuration goes here
   const PARSE_APPLICATION_ID = 'O44FbeKcZNWC2JOxOQrqZWA8YIPmIBRqvFH0hPfg';
   const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
   const PARSE_JAVASCRIPT_KEY = 'Yx33QNOULeOkegwqW9zIQvxkR9nnk7WljZDlnjba';
   Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
   Parse.serverURL = PARSE_HOST_URL;


function App() {
  return (
    <AppRoutes/>
  );
}

export default App;
