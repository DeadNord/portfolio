import s from './Projects.module.scss';
import sprite from '../../../assets/svg/sprite.svg';
import data from '../../../db/projects.json';

import Slider from 'react-slick';
import classNames from 'classnames';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: s.sliderContainer,
  dotsClass: classNames('slick-dots slick-thumb', s.sliderDots),
};

const Projects = () => {
  return (
    <div>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>PROJECTS</h1>
      </div>
      <div className={s.container}>
        <ul>
          <Slider {...settings}>
            {data.map(item => (
              <li className={s.item} key={item.id}>
                <div className={s.itemFlex}>
                  <div>
                    <img className={s.img} src={item.img} alt="Project Photo" />
                  </div>
                  <div className={s.descWrapper}>
                    <div>
                      <div className={s.descTitle}>{item.title}</div>
                      <div className={s.descText}>
                        <p>{item.desc.text}</p>
                      </div>
                    </div>
                    <div className={s.stack}>
                      {item.stack.map(i => (
                        <span className={s.stackItem} key={i}>
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={s.linksWrapper}>
                  <div className={s.projectType}>
                    <p>@{item.desc.type} Project</p>
                  </div>
                  <div>
                    <ul className={s.links}>
                      {item?.links.map(i => (
                        <li className={s.itemLink} key={i.id}>
                          <a className={s.link} href={i.link}>
                            {/* <svg className={s.svg}>
                              <use href={sprite + `#${i.img}`}></use>
                            </svg> */}
                            <p>{i.title}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
