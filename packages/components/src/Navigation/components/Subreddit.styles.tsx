import { css } from '@emotion/react';
import { Theme } from '@material-ui/core';

export const textStyle = (theme: Theme) => css`
  margin-left: ${theme.spacing(1)};
  .MuiTypography-root {
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
