import { FC } from 'react';

import './Bottom.scss';


export const Bottom: FC = (): JSX.Element => {
  return (
    <div className="content-bottom">
      <div className="social__line">
        <a href="mailto:ev8ko@protonmail.com" target="_blank" className="social__icon">
          <i className="ri-at-line" /></a>&nbsp;
        <a href="https://www.instagram.com/ev8ko" target="_blank" className="social__icon">
          <i className="ri-instagram-fill" /></a>&nbsp;
        <a href="https://github.com/evdoshchenko" target="_blank" className="social__icon">
          <i className="ri-github-fill" /></a>
      </div>
      <div className='copywrite'>
        <p>2022 <i className="icons md-18 ri-copyright-line"></i> <a href="./../../../">Danilynx</a></p>
      </div>
    </div>
  )
}
