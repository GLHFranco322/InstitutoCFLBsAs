import './SectionTwo.css';
import Sticker from '../Sticker.jsx';
import AllCurses from '../AllCurses.jsx';

const SectionTwo = () => {
    return (
        <section id='section-two'>
            <article className="container-section-two">
                <ul className="stickers-container">
                    <Sticker number={1} tittle={'Auxiliar de Farmacia'} marginLeft={'5rem'}/>
                    <Sticker number={3} tittle={'Extraccionista con manejo de laboratorio'} marginLeft={'-3rem'}/>
                    <Sticker number={2} tittle={'Acompañante terapeutico'} marginLeft={'-7rem'}/>
                    <Sticker number={4} tittle={'Integración escolar'} marginLeft={'-7rem'}/>
                    <Sticker number={5} tittle={'Reparación y programación de celulares'} marginLeft={'-3rem'}/>
                    <Sticker number={6} tittle={'Electricidad domiciliaria'} marginLeft={'5rem'}/>
                </ul>
                <AllCurses />
                <ul className="stickers-container">
                    <Sticker number={7} tittle={'Aire acondicionado y refrigeración'} marginRight={'5rem'}/>
                    <Sticker number={8} tittle={'Barbería'} marginRight={'-3rem'}/>
                    <Sticker number={9} tittle={'Tatuajes'} marginRight={'-7rem'}/>
                    <Sticker number={10} tittle={'Manicuría'} marginRight={'-7rem'}/>
                    <Sticker number={11} tittle={'Masoterapia'} marginRight={'-3rem'}/>
                    <Sticker number={12} tittle={'Cosmetología, cejas y pestañas'} marginRight={'5rem'}/>
                </ul>
            </article>
        </section>
    );
}

export default SectionTwo