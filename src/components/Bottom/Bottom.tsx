import { FC } from 'react';

import './Bottom.scss';


export const Bottom: FC = (): JSX.Element => {
  return (
    <div className="content-bottom">
      <div className="social__line">
        <a href="https://t.me/ev8ko" target="_blank" className="social__icon">
          <i className="ri-telegram-fill"/></a>&nbsp;
        <a href="https://github.com/evdoshchenko" target="_blank" className="social__icon">
          <i className="ri-github-fill"/></a>&nbsp;
        <a href="mailto:ev8ko@icloud.com" target="_blank" className="social__icon">
          <i className="ri-at-line"/></a> 
      </div>
      <div className='copywrite'>
        <p>Developed by&nbsp;<i className="icons md-18 ri-copyright-line"></i>
          <a href="https://www.danilynx.app" target="_blank">Danilynx</a>&nbsp;2023</p>
      </div>
    </div>
  )
}
