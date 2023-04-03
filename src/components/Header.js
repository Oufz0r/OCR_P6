import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="header">
            <div>
                <img src="/images/logo.png" alt="Logo" className="logo" />
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