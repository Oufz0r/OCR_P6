import LogoFooter from '../logo_white.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content"><img src={ LogoFooter } alt="Logo" /></div>
            <div className="footer-content">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}