import s from './Info.module.scss';

const Info = () => {
  return (
    <>
      {/* <h1 className={s.title}>About Me</h1> */}
      <div className={s.container}>
        <div className={s.desc}>
          <p className={s.name}>Yegor Osipov</p>
          <p className={s.position}>Full-Stack Developer</p>
          <div className={s.bio}>
            <p>
              Junior Full-Stack(React, Node.js). Graduated FullStack Dev courses, Im have done
              several successful projects (single and teams) and work experience on Freelance. I am
              passionate about programming, my goal is to use my skills for what I love and build a
              good and stable career.
            </p>
          </div>
          <div className={s.resume}>
            <button>Download CV</button>
          </div>
        </div>
        <div>
          <div className={s.img}>
            <img src="" alt="" />
          </div>
          <div className={s.contacts}>
            <div>
              <ul className={s.list}>
                <li className={s.item}>Link1</li>
                <li className={s.item}>Link1</li>
              </ul>
              <p>eosipopo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
