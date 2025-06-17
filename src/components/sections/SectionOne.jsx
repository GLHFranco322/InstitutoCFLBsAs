import { ArticleSecOne } from './ArticleSecOne';
import './SectionOne.css';

export const SectionOne = () => {
  return (
    <>
      <section id="section-one">
        <div className="container">
          <div className="arrow-container arrow-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <ArticleSecOne
            imagen={"./carousel/manicuria.jpg"}
            duracion="6 meses"
            titulo="Manicuría"
            descripcion="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
          />
          <div className="arrow-container arrow-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </section>
    </>
  )
}
