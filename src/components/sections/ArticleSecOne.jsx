import "./ArticleSecOne.css";
import { ButtonBlue } from "../ButtonBlue";

export const ArticleSecOne = ({ duracion, titulo, descripcion, imagen }) => {
    return (
        <article
            id="article-warpper"
            style={{ "--imagen-background": `url(${imagen})` }}
        >
            <div className="logo-container">
                <img src="./icons/logoInstituto.svg" alt="logo" />
            </div>
            <h4>{duracion}</h4>
            <h2>{titulo}</h2>
            <p className="paragraph">{descripcion}</p>
            <ButtonBlue />
        </article>
    );
}