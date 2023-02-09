import { FC } from 'react';
import { 
  START_ROUTE,
  PROFILE_ROUTE
} from '@/pages/routes';
import { 
  Button
} from '@/components'

import './Top.scss';


export const Top: FC = (): JSX.Element => {
  return (
    <div className="content-top">
      <Button to={START_ROUTE} modifier='game-btn'>Evdoshchenko</Button>
      <Button to={PROFILE_ROUTE} modifier='game-btn'>Resume</Button>
    </div>
  )
}
