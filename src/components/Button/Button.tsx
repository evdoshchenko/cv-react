import { FC } from 'react';
import { Link } from 'react-router-dom';
import type {
  TButton
} from './types'

import './Button.scss';


export const Button: FC<TButton> = ({ to, children, modifier, blank }): JSX.Element => {
  return (
    <Link
      to={to}
      className={`link-button link-button_${modifier}`}
      target={blank ? '_blank' : '_self'}
    >
      {children}
    </Link>
  )
}
