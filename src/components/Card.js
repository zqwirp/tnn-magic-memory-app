import "./Card.css"

export default function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  }

  return (
    <div className="card" >
      <div>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="back card"
        />
      </div>
    </div>
  );
}
