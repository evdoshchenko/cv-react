import { 
  GIT_MESSENGER_LINK,
  GIT_GAME_LINK,
  GIT_CV_LINK,
} from '@/pages/routes';
import { 
  Top,
  Bottom,
  Button
} from '@/components'

import './startPage.scss'


export const StartPage = () => {
  return (
    <div className='start-page'>
      <Top/>
      <div className='content'>
        <div className='title-on-black_emoji'>👋</div>
        <div className='title-on-black_main'>Hey, I'm Danil!</div>
        <p className='title-on-black__description'>I create apps for the web and make life easier and smarter</p>

        <div className='title-on-black'>My favorite tech stack:</div>
        <div className='tech-stack'>
          <p className='tech-stack__item'>TypeScript</p>
          <p className='tech-stack__item'>React</p>
          <p className='tech-stack__item'>Redux</p>
          <p className='tech-stack__item'>HTML5</p>
          <p className='tech-stack__item'>SASS</p>
          <p className='tech-stack__item'>Node.JS</p>
          <p className='tech-stack__item'>Docker</p>
          <p className='tech-stack__item'>Vite</p>
          <p className='tech-stack__item'>Git</p>
          <p className='tech-stack__item'>Figma</p>
        </div>

        <div className='title-on-black'>Open source projects:</div>
        <p className='title-on-black__description'>The last code I wrote. Take a look at what's new right now:</p>
        <div className='projects'>
          <div className='project'>
            <Button to={GIT_GAME_LINK} modifier='git' blank={true}>
              <i className={`icons md-24 ri-github-fill`}/>
              Game
            </Button>
          </div>
          <div className='project'>
            <Button to={GIT_MESSENGER_LINK} modifier='git' blank={true}>
              <i className={`icons md-24 ri-github-fill`}/>
              Messenger
            </Button>
          </div>
          <div className='project'>
            <Button to={GIT_CV_LINK} modifier='git' blank={true}>
              <i className={`icons md-24 ri-github-fill`}/>
              CV
            </Button>
          </div>
        </div>
      </div>
      <Bottom/>
    </div>
  );
}
