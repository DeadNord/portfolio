import s from './Stack.module.scss';
import sprite from '../../../assets/svg/sprite.svg';

import data from '../../../db/skills.json';
import classNames from 'classnames';

const Stack = () => {
  return (
    <div>
      <div className={s.group}>
        <div className={s.leftTitleWrapper}>
          <h2 className={classNames(s.title, s.leftTitle)}>Skills</h2>
        </div>
        <div className={s.rightTitleWrapper}>
          <h2 className={classNames(s.title)}>Hard</h2>
          <ul className={s.skillsWrapper}>
            {data.hardSkills.map(item => (
              <li className={s.categoryWrapper} key={item.id}>
                <p className={s.category}>{item.category}</p>
                <ul className={s.list}>
                  {item.technology.map(item => (
                    <li className={s.item} key={item.id}>
                      <svg className={s.logo}>
                        <use href={sprite + `#${item.logo}`}></use>
                      </svg>
                      <p className={s.desc}>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.groupSoft}>
        <div className={classNames(s.softFlexWrapper)}>
          <div className={s.softTitleWrapper}>
            <div>
              <h2 className={classNames(s.softText, s.softTitle)}>Soft</h2>
              <h2 className={classNames(s.softText, s.softTitle)}>Skills</h2>
            </div>
          </div>
          <ul className={classNames(s.softWrapper, s.softSkillsWrapper)}>
            {data.softSkills.map(item => (
              <li key={item}>
                <p className={s.softText}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul className={s.softFlexLanguageWrapper}>
          <h2 className={classNames(s.softText, s.softTitle)}>Languages</h2>
          <div className={classNames(s.softWrapper, s.languageWrapper)}>
            {data.languages.map(item => (
              <li key={item.id}>
                <p className={classNames(s.softText, s.languageText)}>{item.language}</p>
                <p className={classNames(s.softText, s.languageText)}>{item.level}</p>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Stack;
