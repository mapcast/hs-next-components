export {HSModal} from './components/common/HSModal';
export {HSSearchPanel} from './components/common/HSSearchPanel';
export {HSSimpleLoading} from './components/common/HSSimpleLoading';
export {HSStepper} from './components/common/HSStepper';
export {HSTabs} from './components/common/HSTabs';

export {HSPicketProgressBar} from './components/common/chart/HSPicketProgressBar';
export {HSProgressBar} from './components/common/chart/HSProgressBar';

export {HSDevider} from './components/common/frame/HSDevider';
export {HSFrameWithTitle} from './components/common/frame/HSFrameWithTitle';
export {HSAccordion} from './components/common/frame/HSAccordion';
export {HSSimpleFrame} from './components/common/frame/HSSimpleFrame';

export {HSBigInput} from './components/common/input/HSBigInput';
export {HSButton} from './components/common/input/HSButton';
export {HSFloatButton} from './components/common/input/HSFloatButton';
export {HSInput} from './components/common/input/HSInput';
export {HSKeyValue} from './components/common/input/HSKeyValue';
export {HSLink} from './components/common/input/HSLink';
export {HSRadio} from './components/common/input/HSRadio';
export {HSSelectBox} from './components/common/input/HSSelectBox';
export {HSSwitch} from './components/common/input/HSSwitch';
export {HSTextArea} from './components/common/input/HSTextArea';
export {HSToggler} from './components/common/input/HSToggler';
export {HSBigButton} from './components/common/input/HSBigButton';
export {HSCard} from './components/common/input/HSCard';
export {HSBigKeyValues} from './components/common/input/HSBigKeyValues';
export {HSIconKeyValue} from './components/common/input/HSIconKeyValue';


export {HSHelp} from './components/common/item/HSHelp';
export {HSMiniMenu} from './components/common/item/HSMiniMenu';
export {HSTooltip} from './components/common/item/HSTooltip';
export {HSSimpleTitle} from './components/common/item/HSSimpleTitle';
export {HSSimpleToast} from './components/common/item/HSSimpleToast';
export {HSParagraph} from './components/common/item/HSParagraph';


export {HSDrawer} from './components/common/menu/drawer/HSDrawer';
export {HSHeader} from './components/common/menu/HSHeader';

export {HSPagination} from './components/common/table/HSPagination';
export {HSTable} from './components/common/table/HSTable';


export interface HSTableHeader {
  id?: string|number,
  raw: string,
  display?: string,
  bool?: HSBool,
  join?: string,
  type?: string,
  onClick?: (data: any) => void,
}

export interface HSTableValues {
  id: string|number,
  values: HSItem[]
}

export interface HSItem {
  id?: string|number,
  category?: string,
  display?: string,
  raw: string,
  value?: string|number,
  selectItems?: HSItem[]
}

export interface Clickable {
  display: string | JSX.Element,
  onClick: () => void
}

export interface Toggleable {
  display: string | JSX.Element,
  on: () => void,
  off: () => void,
  default: boolean
}

export interface HSKV {
  key: string,
  value: string,
  keyDisplay?: string,
  valueDisplay?: string
}

export interface HSTableSort {
  target: HSTableColumn|null,
  direction: boolean
}

export interface HSTableColumn {
  join: string,
  raw: string,
}

export interface HSBool {
  true: string,
  false: string
}

export interface HSSort {
  target: string,
  direction: boolean
}

export interface WrapperProp {
  children: JSX.Element
}

export interface WrapperWithTitle {
  title: string,
  children: JSX.Element
}

export interface HSSubShelfItem {
  text: string,
  onClick: () => void
}
export interface HSShelfItem {
  icon?: string,
  text: string,
  sub: HSSubShelfItem[]
}

export interface HSFooterCategory {
  title: string,
  items: HSFooterItem[]
}
export interface HSFooterItem {
  text: string,
  link: string
}

export interface HSClickableCategory {
  title: string,
  items: Clickable[]
}

export interface HSColors {
  normal: HSColor,
  deep: HSColor,
  light: HSColor,
  typo: HSColor,
  background?: HSColor,
}
export interface HSColor {
  red: number,
  green: number,
  blue: number
}