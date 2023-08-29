import s from './Info.module.scss';

import info from '../../../db/info.json';

const Info = () => {
  return (
    <>
      {/* <h1 className={s.title}>About Me</h1> */}
      <div className={s.container}>
        <div className={s.desc}>
          <p className={s.name}>{info.name}</p>
          <p className={s.position}>{info.position}</p>
          <div className={s.bio}>
            <p>{info.desk}</p>
          </div>
          <div className={s.resume}>
            <button type="button" className={s.resumeBtn}>
              Download CV
            </button>
          </div>
        </div>
        <div>
          <div className={s.img}>
            <img src="" alt="" />
          </div>
          <div className={s.contacts}>
            <div>
              <ul className={s.list}>
                {info.links.map(i => (
                  <li className={s.item}>
                    <div className={s.svg}></div>
                    <p>{i.name}</p>
                  </li>
                ))}
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
