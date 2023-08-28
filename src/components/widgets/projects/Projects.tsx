import s from './Projects.module.scss';

const data = [
  {
    img: '',
    title: 'Title',
    desc: {
      text: 'Dada',
      type: 'Student',
    },
    stack: ['React', 'JS', 'Node.js'],
    links: [
      {
        git: '123',
        livePage: '321',
      },
    ],
  },
  {
    img: '',
    title: 'Title',
    desc: {
      text: 'Dada',
      type: 'Student',
    },
    stack: ['React', 'JS', 'Node.js'],
    links: [
      {
        git: '123',
      },
    ],
  },
  {
    img: '',
    title: 'Title',
    desc: {
      text: 'Dada',
      type: 'Student',
    },
    stack: ['React', 'JS', 'Node.js'],
    links: [
      {
        livePage: '321',
      },
    ],
  },
  {
    img: '',
    title: 'Title',
    desc: {
      text: 'Dada',
      type: 'Student',
    },
    stack: ['React', 'JS', 'Node.js'],
    links: [
      {
        git: '',
        livePage: '',
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className={s.group}>
      {data.map(item => (
        <div className={s.projects}>
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.img}></div>
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
              <div className={s.links}>
                {item?.links.map(i => (
                  <div>
                    {i?.git && <button className={s.link}>{i?.git}</button>}
                    {i?.livePage && <button className={s.link}>{i?.livePage}</button>}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
