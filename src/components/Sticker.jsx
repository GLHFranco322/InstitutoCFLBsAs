import './Sticker.css';

const Sticker = ({number, tittle, marginLeft, marginRight}) => {
  return (
    <article className="sticker" style={{marginLeft: marginLeft, marginRight: marginRight}}>
        <h4>.{number}</h4>
        <p>{tittle}</p>
    </article>
  )
}

export default Sticker
