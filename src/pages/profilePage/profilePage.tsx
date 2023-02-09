import { Block } from '@/components/Block'
import { 
  Top,
  Bottom 
} from '@/components'

import profileRightData from '@/data/profileRight.json'
import profileLeftData from '@/data/profileLeft.json'

import './profilePage.scss'


export const ProfilePage = () => {
  return (
    <div className='profile-page'>
      <Top/>

      <div className="content">
        <div className="columns">
          <div className="column-left">
            {profileLeftData.map((block, i) => {
              const { main, image, title, icon, type, data } = block
              return (
                <Block key={`block-left-${i}`}
                  icon={icon}
                  main={main}
                  image={image}
                  title={title}
                  type={type}
                  data={data}
                />
              )
            })}
          </div>
          <div className="column-right">
            {profileRightData.map((block, i) => {
              const { title, icon, type, data } = block
              return (
                <Block key={`block-right-${i}`}
                  icon={icon}
                  title={title}
                  type={type}
                  data={data}
                />
              )
            })}
          </div>
        </div>  
      </div>
      <Bottom/>
    </div>
  );
}
