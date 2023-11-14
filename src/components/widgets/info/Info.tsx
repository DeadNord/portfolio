import s from './Info.module.scss';
import sprite from '../../../assets/svg/sprite.svg';
import data from '../../../db/info.json';
import classNames from 'classnames';

const Info = () => {
  return (
    <>
      <div className={s.center}>
        <div className={s.mainInfo}>
          <p className={s.position}>{data.position}</p>
          <p className={s.name}>{data.name}</p>
        </div>
        <div className={s.imgContainer}>
          <img className={s.img} src={data.img} alt="Personal Photo" />
          <a href="#hire" className={classNames(s.titleNav, s.navHire)}>
            Hire me
          </a>
          <a href="#about" className={classNames(s.titleNav, s.navAbout)}>
            About me
          </a>
        </div>
      </div>
      <div className={classNames(s.desc, s.center)}>
        <div className={s.bioWrapper}>
          <div className={s.bio} id="about">
            {data.desk.map(i => (
              <p>{i}</p>
            ))}
          </div>
          <div id="hire">
            <h1 className={s.title}>About me</h1>
          </div>
        </div>
        <div className={s.infoWrapper}>
          <div className={s.resumeContainer}>
            <a href={data.cvLink} download className={s.resume}>
              Download CV
            </a>
          </div>
          <div className={s.contacts}>
            <ul>
              <div className={s.infoWrap}>
                <svg className={s.svg}>
                  <use href={sprite + `#${data.email.img}`}></use>
                </svg>
                <p className={s.infoText}>{data.email.name}</p>
              </div>
              {data.links.map(i => (
                <li className={s.item} key={i.id}>
                  <a className={s.infoWrap} href={i.url}>
                    <svg className={s.svg}>
                      <use href={sprite + `#${i.img}`}></use>
                    </svg>
                    <p className={classNames(s.infoText, s.link)}>{i.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
