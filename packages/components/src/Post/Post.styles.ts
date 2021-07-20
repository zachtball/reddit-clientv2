import { css } from '@emotion/react';
import { Theme } from '@material-ui/core/styles';

export const containerStyles = (theme: Theme) => css`
  background-color: ${theme.palette.primary.dark};
  padding: ${theme.spacing(2)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${theme.shadows[10]};
  margin-bottom: ${theme.spacing(2)};
`;

export const thumbnailStyles = css`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

export const thumbnailContainerStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin-right: ${theme.spacing(4)};
  border-radius: 10px;
`;
