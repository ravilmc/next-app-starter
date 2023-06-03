import { createMakeAndWithStyles } from 'tss-react';
import { useTheme } from './theme';

export const {
  makeStyles: createStyles,
  useStyles,
  withStyles,
} = createMakeAndWithStyles({
  useTheme,
});
export type StylesProps = {
  m?: number;
  p?: number;
  color?: string;
  backgroundColor?: string;
};
