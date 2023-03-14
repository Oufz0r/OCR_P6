// import Section from '../components/Banner';
import Banner from '../components/Banner';
import Tag from '../components/Tag';
import Thumb from '../components/Thumb';
import Showbox from '../components/Showbox';

export default function Home() {
    return (
        <div className="home">
            <Banner url="bannerBG.png">
                <span>Chez vous,&nbsp;</span>
                <span>partout et ailleurs</span>
            </Banner>
            {/* <Galerie /> */}

            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Tag>tag-name</Tag>
            <Thumb>Test</Thumb>
        </div>
    )
}