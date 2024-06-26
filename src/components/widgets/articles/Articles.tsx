import s from './Articles.module.scss';
import data from '../../../db/articles.json';
import Slider from 'react-slick';
import classNames from 'classnames';
import { useEffect } from 'react';

const Articles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: classNames(s.sliderContainer),
    dotsClass: classNames('slick-dots', s.sliderDots),
    arrows: false,
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#articles') {
        const articlesElement = document.getElementById('articles');
        if (articlesElement) {
          window.scrollTo({
            top: articlesElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Вызовите обработчик хэша сразу после монтирования компонента

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id="articles">
      <div className={s.titleWrapper}>
        <h1 className={s.title}>ARTICLES</h1>
      </div>
      <div className={s.container}>
        <ul>
          <Slider {...settings}>
            {data.map(item => (
              <li className={s.item} key={item.id}>
                <div className={s.descTextMobile}>
                  <p>{item.desc}</p>
                </div>
                <div className={s.itemFlex}>
                  <div>
                    <img className={s.img} src={item.img} alt="Project Photo" />
                  </div>
                  <div className={s.descWrapper}>
                    <div className={s.descTitle}>{item.title}</div>
                    <div className={s.descTextDesk}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className={s.linksWrapper}>
                  <a className={s.link} href={item.link}>
                    <p>Medium</p>
                  </a>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Articles;
