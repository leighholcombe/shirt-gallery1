export type ColorSwatch = {
  name: string;
  value: string;
  class: string;
};

export interface ParamProps {
  colorParam: string | null;
  tagParam: string | null;
}

export interface TagProps {
  tagParam: string;
  selected: boolean;
}

export interface ColorProps {
  colorParam: string;
  selected: boolean;
}

export interface Shirt {
  id: number;
  image: string;
  description: string;
  color: string;
  sleeves: string;
  tag_array: Array<string>;
  archived: boolean;
}