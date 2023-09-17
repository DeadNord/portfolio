import s from './Education.module.scss';

import data from '../../../db/education.json';

// const data = [
//   {
//     title: 'KNUTE',
//     specialisation: 'MAnagment',
//     date: {
//       from: '2019',
//       till: 'Present',
//     },
//   },
//   {
//     title: 'KNUTE',
//     specialisation: 'MAnagment',
//     date: {
//       from: '2019',
//       till: 'Present',
//     },
//   },
// ];

const Education = () => {
  return (
    <div className={s.group}>
      {data.map(item => (
        <div>
          <ul>
            <li className={s.item}>
              <div className={s.title}>{item.title}</div>
              <div className={s.desc}>
                <p>{item.specialisation}</p>
              </div>
              <div className={s.date}>
                <span>{item.date.from}</span>-<span>{item.date.till}</span>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
