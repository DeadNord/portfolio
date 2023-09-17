import s from './Projects.module.scss';
import sprite from '../../../assets/svg/sprite.svg';
import data from '../../../db/projects.json';

// const data = [
//   {
//     img: '',
//     title: 'Title',
//     desc: {
//       text: 'Dada',
//       type: 'Student',
//     },
//     stack: ['React', 'JS', 'Node.js'],
//     links: [
//       {
//         git: '123',
//         livePage: '321',
//       },
//     ],
//   },
//   {
//     img: '',
//     title: 'Title',
//     desc: {
//       text: 'Dada',
//       type: 'Student',
//     },
//     stack: ['React', 'JS', 'Node.js'],
//     links: [
//       {
//         git: '123',
//       },
//     ],
//   },
//   {
//     img: '',
//     title: 'Title',
//     desc: {
//       text: 'Dada',
//       type: 'Student',
//     },
//     stack: ['React', 'JS', 'Node.js'],
//     links: [
//       {
//         livePage: '321',
//       },
//     ],
//   },
//   {
//     img: '',
//     title: 'Title',
//     desc: {
//       text: 'Dada',
//       type: 'Student',
//     },
//     stack: ['React', 'JS', 'Node.js'],
//     links: [
//       {
//         git: '',
//         livePage: '',
//       },
//     ],
//   },
// ];

const Projects = () => {
  return (
    <div className={s.group}>
      {data.map(item => (
        <div className={s.projects}>
          <ul className={s.list}>
            <li className={s.item}>
              <img className={s.img} src={item.img} alt="Project Photo" />
              <div className={s.title}>{item.title}</div>
              <div className={s.desc}>
                <p>{item.desc.text}</p>
                <p>@{item.desc.type} Project</p>
              </div>
              <div className={s.stack}>
                {item.stack.map(i => (
                  <span className={s.stackItem}>{i}</span>
                ))}
              </div>
              <ul className={s.links}>
                {item?.links.map(i => (
                  <li className={s.itemLink}>
                    <a className={s.link} href={i.link}>
                      <svg className={s.svg}>
                        <use href={sprite + `#${i.img}`}></use>
                      </svg>
                      <p>{i.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
