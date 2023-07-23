import style from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={style.videoContainer}>
      <video autoPlay muted playsInline loop className={style.backgroundStyle}>
        <source
          src="https://player.vimeo.com/external/461514127.sd.mp4?s=4269b3bbb5d80e6c311ca574654d7a1e9e080176&profile_id=164&oauth2_token_id=57447761"
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
