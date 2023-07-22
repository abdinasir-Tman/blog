import style from "./card.module.scss";
const DataDisplay = ({ card }) => {
  return (
    <div className={style.card}>
      <img src={card.image} alt="" />
      <h1 className={style.title}>{card.title}</h1>
      <p className={style.desc}>{card.desc}</p>
      <button className={style.btn}>{card.link}</button>
    </div>
  );
};

export default DataDisplay;
