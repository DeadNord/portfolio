import s from './Info.module.scss';
import sprite from '../../../assets/svg/sprite.svg';
import data from '../../../db/info.json';
import photo from '../../../assets/images/personal_photo.jpg';

const Info = () => {
  return (
    <>
      {/* <h1 className={s.title}>About Me</h1> */}
      <div className={s.container}>
        <div className={s.desc}>
          <p className={s.name}>{data.name}</p>
          <p className={s.position}>{data.position}</p>
          <div className={s.bio}>
            <p>{data.desk}</p>
          </div>
          <div className={s.resumeContainer}>
            <a href={data.cvLink} download className={s.resume}>
              Download CV
            </a>
          </div>
        </div>
        <div>
          <div>
            <img className={s.img} src={data.img} alt="Personal Photo" />
          </div>
          <div className={s.contacts}>
            <div>
              <ul className={s.list}>
                {data.links.map(i => (
                  <li className={s.item}>
                    {/* <div className={s.svg}></div> */}
                    <a className={s.link} href={i.url}>
                      <svg className={s.svg}>
                        <use href={sprite + `#${i.img}`}></use>
                      </svg>
                      <p>{i.name}</p>
                    </a>
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
