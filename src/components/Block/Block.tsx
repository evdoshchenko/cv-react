import { FC } from 'react'
import type {
  TBlock,
  TTechStack,
  TTechStackField,
  TSoftSkills,
  TEmojiesField,
  TSummary,
  TSummaryField,
  TProfile,
  TExperience,
  TExperienceField,
  TBullets,
  TPercentLines,
  TPercentLinesField
} from './types'

import './Block.scss'


export const Block: FC<TBlock> = ({ main, image, title, icon, type, data }) => {
  return (
    <div className="block">
      {image && <img className="avatar" src={image} alt="Avatar"></img>}

      {main ? <div className='title_main'>
        {title}
      </div> : <div className='title'>
        <i className={`icons md-28 ${icon}`} />
        {title}
      </div>
      }

      <div className="info">
        {(type === 'techStack') && (
          (data as TTechStack).map((field, i) => {
            const { title, text } = (field as TTechStackField)
            return (
              <div className="info__list" key={`tech-stack-field-${i}`}>
                <div className="info__list__title">
                  {title}:
                </div>
                <div className="info__list__text">
                  {text}
                </div>
              </div>
            )
          })
        )}

        {(type === 'softSkills') && (
          <div className="info__emojies">
            {(data as TSoftSkills).emojies.map((field, i) => {
              return (
                <div className="info__emojies__line" key={`emojies__line-${i}`}>
                  {(field as TEmojiesField)}
                </div>
              )
            })}
          </div>
        )}

        <div className="info__data">
          <div className="info__data__description">
            {(type === 'summary') && (
              (data as TSummary).map((field, i) => {
                const { icon, text, link, linkText } = (field as TSummaryField)
                return (
                  <p key={`summary-field-${i}`}>
                    <i className={`icons md-24 ${icon}`} />
                    {text}&nbsp;
                    <a href={link} target="_blank">
                      {linkText}
                    </a>
                  </p>
                )
              })
            )}
            {(type === 'profile') && (
              (data as TProfile).text
            )}
            {(type === 'softSkills') && (
              (data as TSoftSkills).text
            )}
          </div>
        </div>

        {(type === 'experience') && (
          (data as TExperience).map((field, i) => {
            const { title, workLink, workLinkText, city, dateStart, dateEnd, text } = (field as TExperienceField)
            return <div key={`experience-field-${i}`}>
              <div className="info__data" >
                <div className="info__data__title">
                  {title}
                  {(workLink) && <>
                    {`${' /\ '}`}
                    <a href={workLink} target="_blank"> {workLinkText}</a>
                  </>}
                  {(city) && <>
                    {`${' - '}`}
                    {city}
                  </>}
                </div>
                <div className="info__data__date"><i className={`icons ri-calendar-2-line`} />
                  {dateStart}
                  {`${' - '}`}
                  {(dateEnd === 'Current') ? (
                    <span className="info__data__date__tag">Current</span>
                  ) : (
                    dateEnd
                  )}
                </div>
                <div className="info__data__description">
                  {text && (text as TBullets).map((bullet, i) => {
                    return <p key={`bullet-${i}`}>
                      {bullet}
                    </p>
                  })}
                </div>
                {(i !== (data as TExperience).length - 1) && (
                  <div className="info__line" />
                )}
              </div>
            </div>
          })
        )}

        {(type === 'percentLines') && (
          <div className="bars">
            {(data as TPercentLines).map((field, i) => {
              const { text, percent } = (field as TPercentLinesField)
              return (
                <div className="bar" key={`hard-skills-field-${i}`}>
                  <div className="bar__description">
                    {text}
                  </div>
                  <div className="bar__out">
                    <div className="bar__in" style={{ width: `${percent}%` }}>
                      {percent}%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
