import React from 'react';
import { StylesProps, createStyles } from './tss';

const useStyles = createStyles<CreateStylesProps>()((theme, params) => ({
  button: {
    margin: params.m,
    padding: params.p,
  },
}));

type ButtonClasses = Partial<ReturnType<typeof useStyles>['classes']>;

type CreateStylesProps = StylesProps & {
  classes?: ButtonClasses;
};

interface ButtonProps extends CreateStylesProps {
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
