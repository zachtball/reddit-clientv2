import { css } from '@emotion/react';
import { Theme } from '@material-ui/core/styles';

export const containerStyles = (theme: Theme) => css`
  background-color: ${theme.palette.primary.dark};
  padding: 0 ${theme.spacing(2)} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${theme.shadows[10]};
  margin-bottom: ${theme.spacing(2)};
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows[20]};
  }
`;

export const thumbnailStyles = css`
  height: 75px;
  width: 75px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const imageThumbnailStyles = css`
  height: 100px;
  width: 125px;
`;

export const iconContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const iconOverlapStyles = (theme: Theme) => css`
  position: absolute;
  color: ${theme.palette.primary.contrastText};
`;

export const imagePreviewStyles = css`
  opacity: 0.5;
`;

export const thumbnailContainerStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${theme.spacing(4)};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
