import style from "./business.module.scss";

const Business = () => {
  return (
    <div className={style.flex}>
      <div className={style.left_side}>
        <h1>Develope Your Business</h1>
        <p>Develope Your Business to one of our Services</p>
        <button>Join Now </button>
      </div>
      <div className={style.image}>
        <img
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8="
          alt=""
        />
      </div>
    </div>
  );
};

export default Business;
