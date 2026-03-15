export type ColorSwatch = {
  name: string;
  value: string;
  class: string;
};

export interface ParamProps {
  colorParam: string | null;
  tagParam: string | null;
}

export interface Selected {
  selected: string | null;
}