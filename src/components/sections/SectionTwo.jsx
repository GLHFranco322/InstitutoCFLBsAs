import './SectionTwo.css';
import Sticker from '../Sticker.jsx';
import AllCurses from '../AllCurses.jsx';

const SectionTwo = () => {
    return (
        <section id='section-two'>
            <article className="container-section-two">
                <ul className="stickers-container">
                    <Sticker number={1} tittle={'Auxiliar de Farmacia'} marginLeft={'10rem'}/>
                    <Sticker number={3} tittle={'Auxiliar de Farmacia'} marginLeft={'0'}/>
                    <Sticker number={2} tittle={'Auxiliar de Farmacia'} marginLeft={'-5rem'}/>
                    <Sticker number={4} tittle={'Auxiliar de Farmacia'} marginLeft={'-5rem'}/>
                    <Sticker number={5} tittle={'Auxiliar de Farmacia'} marginLeft={'0'}/>
                    <Sticker number={6} tittle={'Auxiliar de Farmacia'} marginLeft={'10rem'}/>
                </ul>
                <AllCurses />
                <ul className="stickers-container">
                    <Sticker number={7} tittle={'Auxiliar de Farmacia'} marginRight={'10rem'}/>
                    <Sticker number={8} tittle={'Auxiliar de Farmacia'} marginRight={'0'}/>
                    <Sticker number={9} tittle={'Auxiliar de Farmacia'} marginRight={'-5rem'}/>
                    <Sticker number={10} tittle={'Auxiliar de Farmacia'} marginRight={'-5rem'}/>
                    <Sticker number={11} tittle={'Auxiliar de Farmacia'} marginRight={'0rem'}/>
                    <Sticker number={12} tittle={'Auxiliar de Farmacia'} marginRight={'10rem'}/>
                </ul>
            </article>
        </section>
    );
}

export default SectionTwo