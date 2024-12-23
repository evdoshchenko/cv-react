export type TBlock = {
  main?: boolean
  image?: string
  icon?: string
  title: string
  type: string
  data?: TSummary | TProfile | TPercentLines | TSoftSkills | TTechStack | TExperience
}

export type TTechStack = Array<TTechStackField>

export type TTechStackField = {
  title: string
  text: string
}

export type TSoftSkills = {
  emojies: Array<TEmojiesField>
  text: string
}

export type TEmojiesField = string

export type TSummary = Array<TSummaryField>

export type TSummaryField = {
  icon: string
  text?: string
  link?: string
  linkText?: string
}

export type TProfile = {
  text: string
}

export type TExperience = Array<TExperienceField>

export type TExperienceField = {
  title: string
  workLinkText?: string
  workLink?: string
  city?: string
  dateStart: string
  dateEnd: string
  text?: TBullets
}

export type TBullets = Array<string>

export type TPercentLines = Array<TPercentLinesField>

export type TPercentLinesField = {
  text: string
  percent: number
}


