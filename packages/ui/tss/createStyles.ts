import { createMakeAndWithStyles } from 'tss-react';
import { useTheme } from './theme';

export const { makeStyles: createStyles } = createMakeAndWithStyles({
  useTheme,
});
export type StylesProps = {
  m?: number;
  p?: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  borderWidth?: number;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
};
