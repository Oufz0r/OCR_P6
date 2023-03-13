import Section from '../components/Section';
import Tag from '../components/Tag';
import Thumb from '../components/Thumb';
import Showbox from '../components/Showbox';

export default function Home() {
    return (
        <div className="home">
            <Section />
            {/* <Galerie /> */}

            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Tag>tag-name</Tag>
            <Thumb>Test</Thumb>
        </div>
    )
}