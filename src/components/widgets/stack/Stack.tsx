import s from './Stack.module.scss';
import sprite from '../../../assets/svg/sprite.svg';

import data from '../../../db/skills.json';
import classNames from 'classnames';

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
        <div className={s.leftTitleWrapper}>
          <h2 className={classNames(s.title, s.leftTitle)}>Skills</h2>
        </div>
        <div className={s.rightTitleWrapper}>
          <h2 className={classNames(s.title)}>Hard</h2>
          <div className={s.skillsWrapper}>
            {data.hardSkills.map(item => (
              <div className={s.categoryWrapper}>
                <p className={s.category}>{item.category}</p>
                <ul>
                  {item.technology.map(item => (
                    <li className={s.item}>
                      <svg className={s.logo}>
                        <use href={sprite + `#${item.logo}`}></use>
                      </svg>
                      <p className={s.desc}>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.groupSoft}>
        <div className={classNames(s.softFlexWrapper)}>
          <div>
            <h2 className={classNames(s.softText, s.softTitle)}>Soft</h2>
            <h2 className={classNames(s.softText, s.softTitle)}>Skills</h2>
          </div>
          <div className={classNames(s.softWrapper, s.softSkillsWrapper)}>
            {data.softSkills.map(item => (
              <div>
                <p className={s.softText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(s.softWrapper, s.languageWrapper)}>
          {data.languages.map(item => (
            <div>
              <p className={s.softText}>{item.language}</p>
              <p className={s.softText}>{item.level}</p>
            </div>
          ))}
          <h2 className={classNames(s.softText, s.softTitle)}>Languages</h2>
        </div>
      </div>
    </div>
  );
};

export default Stack;
