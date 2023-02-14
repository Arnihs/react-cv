import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <>
           <main id="app">
            <header>
        <div className="header">
            <div className="header__image">
                {/* <div> < a href "https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON"></div> */}
            </div>
            <h1 className="header__name">Jon SIMPSON</h1>
        </div>
        <nav>
            <ul>
                <li> < Link to = {"/accueil"}><span className="material-symbols-outlined">home</span><span className="link">Accueil</span></Link>
                </li>
                <li>< Link to = {"/Experience"}><span className="material-symbols-outlined">person</span><span className="link">Experience</span></Link>
                </li>
                <li>< Link to = {"/Portfolio"}><span className="material-symbols-outlined">image</span><span className="link">Portfolio</span></Link>
                </li>
                <li>< Link to = {"Contact"}><span className="material-symbols-outlined">alternate_email</span><span className="link">Contact</span></Link>
                </li>
            </ul>
        </nav>
    </header>
    </main> 
           
        </>
)
}
    


export default Header
