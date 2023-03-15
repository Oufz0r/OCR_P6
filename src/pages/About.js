// import Section from '../components/Banner';
import Banner from '../components/Banner';
import Showboxlong from '../components/Showboxlong';

export default function About() {
    return (
        <div className="about">
            <Banner url="bannerAbout.png" />
            <br />
            <Showboxlong title="Fiabilité">
                <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées  par nos équipes.</span>
            </Showboxlong>
            <Showboxlong title="Respect">
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de notre plateforme.</span>
            </Showboxlong>
            <Showboxlong title="Service">
                <span>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez
                    la moindre question.</span>
            </Showboxlong>
            <Showboxlong title="Sécurité">
                <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis
                    par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
            </Showboxlong>
        </div>
    )
}