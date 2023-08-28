import s from './Container.module.scss';
import React from 'react';

type Props = {
  children: JSX.Element;
  title: string;
};

const Container: React.FC<Props> = ({ children, title }) => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Container;
