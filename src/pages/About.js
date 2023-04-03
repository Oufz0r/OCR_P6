import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

export default function About() {
    return (
        <div className="about">
            <Banner url="bannerAbout.webp" />
            <br />
            {/* l'attribut "look" permet d'ajouter une classe */}
            <Collapse title="Fiabilité" look="collapse-about-style">
                <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées par nos équipes.</span>
            </Collapse>
            <Collapse title="Respect" look="collapse-about-style">
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de notre plateforme.</span>
            </Collapse>
            <Collapse title="Service" look="collapse-about-style">
                <span>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez
                    la moindre question.</span>
            </Collapse>
            <Collapse title="Sécurité" look="collapse-about-style">
                <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis
                    par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
            </Collapse>
        </div>
    )
}