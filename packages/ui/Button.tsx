import * as React from 'react';
import { StylesProps, createStyles } from 'styles';

const useStyles = createStyles<Partial<ButtonProps>>()((theme, params) => ({
  button: {
    margin: params.m,
    padding: params.p,
  },
}));

interface ButtonProps extends StylesProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...styleProps }: ButtonProps) => {
  const { classes } = useStyles(styleProps);
  return (
    <button className={classes.button} onClick={() => alert('boop')}>
      Boop
    </button>
  );
};
