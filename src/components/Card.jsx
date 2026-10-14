export default function Card({ imagen, titulo, descripcion, onSuscribir }) {
  return (
    <article className="card">
      <img className="card__img" src={imagen} alt={titulo} />
      <div className="card__body">
        <h3 className="card__title">{titulo}</h3>
        <p className="card__desc">{descripcion}</p>
        <button className="btn" onClick={onSuscribir}>
          Suscribirse
        </button>
      </div>
    </article>
  );
}
