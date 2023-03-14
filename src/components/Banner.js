// import image from './bannerBG.png';

export default function Section(props) {
    return (
        <div className="banner">
            <div className="banner-image" style={{ backgroundImage: `url(/${ props.url })` }}></div>
            <div className="banner-voile"></div>
            <div className="banner-texte">
                { props.children }
            </div>
        </div>
    )
}