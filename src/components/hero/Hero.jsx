import style from "./hero.module.scss";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "750px",
        background: "rgba(0,0,0,0.4)",
      }}
    >
      <video autoPlay muted playsInline loop className={style.backgroundStyle}>
        <source
          src="https://sharafdin.com/wp-content/uploads/2023/07/sharafdin-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className={style.contentStyle}>
        <h1 className={style.h1}>
          Download RAS App To Develop Your Restaurant
        </h1>
        <p className={style.paragraph}>
          You Can Develop And Manage Your Restaurant Income. <br /> You Can able
          To Increase Your Income And Decrease Your Staffs.
        </p>
        <button className={style.bt}>Download</button>
      </div>
    </div>
  );
};

export default Hero;
