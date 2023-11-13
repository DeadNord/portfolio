import s from './Education.module.scss';

import data from '../../../db/education.json';
import classNames from 'classnames';

const Education = () => {
  return (
    <div className={s.group}>
      <div>
        <h1 className={s.titleSection}>EDUCATION</h1>
      </div>
      <div>
        <ul className={s.listWrapper}>
          {data.map(item => (
            <li className={s.item} key={item.id}>
              <div className={s.text}>
                <span>{item.date.from}</span>-<span>{item.date.till}</span>
              </div>
              <div className={classNames(s.text, s.title)}>{item.title}</div>
              <div className={classNames(s.text, s.desk)}>
                <p>{item.specialisation}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
