
type HSTableHeader = {
  id?: string|number,
  raw: string,
  display?: string,
  bool?: HSBool,
  join?: string,
  type?: string,
  onClick?: (data: any) => void,
}

type HSTableValues = {
  id: string|number,
  values: HSItem[]
}

type HSItem = {
  id?: string|number,
  category?: string,
  display?: string,
  raw: string,
  value?: string|number,
  selectItems?: HSItem[]
}

type Clickable = {
  display: string | JSX.Element,
  onClick: () => void
}

type Toggleable = {
  display: string | JSX.Element,
  on: () => void,
  off: () => void,
  default: boolean
}

type HSKV = {
  key: string,
  value: string,
  keyDisplay?: string,
  valueDisplay?: string
}

type HSTableSort = {
  target: HSTableColumn|null,
  direction: boolean
}

type HSTableColumn = {
  join: string,
  raw: string,
}

type HSBool = {
  true: string,
  false: string
}

type HSSort = {
  target: string,
  direction: boolean
}

type WrapperProp = {
  children: JSX.Element
}

type WrapperWithTitle = {
  title: string,
  children: JSX.Element
}

type HSSubShelfItem = {
  text: string,
  onClick: () => void
}
type HSShelfItem = {
  icon?: string,
  text: string,
  sub: HSSubShelfItem[]
}

type HSFooterCategory = {
  title: string,
  items: HSFooterItem[]
}
type HSFooterItem = {
  text: string,
  link: string
}

type HSClickableCategory = {
  title: string,
  items: Clickable[]
}

type HSColors = {
  normal: HSColor,
  deep: HSColor,
  light: HSColor,
  typo: HSColor,
  background?: HSColor,
}
type HSColor = {
  red: number,
  green: number,
  blue: number
}