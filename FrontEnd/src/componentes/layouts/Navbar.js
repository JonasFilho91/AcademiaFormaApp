import {Link} from 'react-router-dom';
import '../../styles/index.css';
//import './Navbar.css';
function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;