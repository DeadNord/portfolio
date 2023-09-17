import s from './Stack.module.scss';
import sprite from '../../../assets/svg/sprite.svg';

import data from '../../../db/skills.json';

// const data = [
//   {
//     category: 'Core',
//     technology: [
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//     ],
//   },
//   {
//     category: 'Front-End Skills',
//     technology: [
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//     ],
//   },
//   {
//     category: 'Back-End Skills',
//     technology: [
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//     ],
//   },
//   {
//     category: 'Tools',
//     technology: [
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//       {
//         logo: '',
//         desc: 'React',
//       },
//     ],
//   },
// ];

// const data2 = ['Int', 'Tet', 'Dad'];

// const data3 = [
//   {
//     language: 'English',
//     level: 'Intermediate',
//   },
//   {
//     language: 'Russian',
//     level: 'Native',
//   },
//   {
//     language: 'Ukrainian',
//     level: 'Native',
//   },
// ];

const Stack = () => {
  return (
    <div>
      <div className={s.group}>
        <h2 className={s.title}>Hard Skills</h2>
        {data.hardSkills.map(item => (
          <div className={s.stack}>
            <p className={s.category}>{item.category}</p>
            <ul className={s.list}>
              {item.technology.map(item => (
                <li className={s.item}>
                  {/* <div className={s.logo}></div> */}
                  <svg className={s.logo}>
                    <use href={sprite + `#${item.logo}`}></use>
                  </svg>
                  <div className={s.desc}>{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={s.groupSoft}>
        <h2 className={s.title}>Soft Skills</h2>
        <div className={s.stackSoft}>
          {data.softSkills.map(item => (
            <div className={s.itemSoft}>
              <p className={s.category}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.groupSoft}>
        <h2 className={s.title}>Languages</h2>
        <div className={s.stackLanguage}>
          {data.languages.map(item => (
            <div>
              <div className={s.language}>
                <p className={s.category}>{item.language}</p>
                <p className={s.category}>{item.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
