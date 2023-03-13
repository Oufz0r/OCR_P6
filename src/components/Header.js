import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

export default function Menu() {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : undefined)}>Accueil</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : undefined)}>À propos</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}