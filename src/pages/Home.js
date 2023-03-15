// import Section from '../components/Banner';
import Banner from '../components/Banner';
import Tag from '../components/Tag';
// import Thumb from '../components/Thumb';
import ThumbBox from '../components/ThumbBox';
import Showbox from '../components/Showbox';
import LocationsHome from '../components/LocationsHome';

export default function Home() {
    return (
        <div className="home">
            <Banner url="bannerHome.png">
                <span>Chez vous,&nbsp;</span>
                <span>partout et ailleurs</span>
            </Banner>
            {/* <Galerie /> */}

            <ThumbBox>
                <LocationsHome />
                {/* <Thumb>YOLO</Thumb>
                <Thumb>YOLO</Thumb>
                <Thumb>YOLO</Thumb>
                <Thumb>YOLO</Thumb> */}
            </ThumbBox>

            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Tag>tag-name</Tag>
            {/* <Thumb>Test</Thumb> */}
        </div>
    )
}