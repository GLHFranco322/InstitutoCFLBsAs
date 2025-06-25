import { ArtcileSectionThree } from "../ArtcileSectionThree";
import "./SectionThree.css";

export const SectionThree = () => {
    return (
        <section id="section-three">
            <article id="container-section-three">
                <div className="title-container">
                    <div className="img-container">
                        <img src="/icons/mapicon.png" alt="Mapa de sedes" />
                    </div>
                    <h2 className="title-section-three"><strong>Nuestras<br />Sedes</strong></h2>
                </div>
                <div className="arcicle-section-three-container">
                    <ArtcileSectionThree
                        img={"/icons/officeicon.png"}
                        title={"Moreno"}
                        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                    <ArtcileSectionThree
                        img={"/icons/officeicon.png"}
                        title={"San Miguel"}
                        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                    <ArtcileSectionThree
                        img={"/icons/officeicon.png"}
                        title={"Morón"}
                        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                </div>
            </article>
        </section>
    )
}