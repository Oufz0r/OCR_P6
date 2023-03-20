export default function Section(props) {
    // on récupère la route active pour appliquer une class mobile à la bannière, qui lui donnera plus de hauteur
    const routeActive = window.location.pathname;
    return (
        <div className={`${routeActive === '/about' ? 'aboutMobileBanner' : ''} banner`}>
            <div className="banner-image" style={{ backgroundImage: `url(/images/${ props.url })` }}></div>
            <div className="banner-voile"></div>
            <div className="banner-texte">
                { props.children }
            </div>
        </div>
    )
}