import { css } from '@emotion/react';
import { Theme } from '@material-ui/core/styles';

export const containerStyles = (theme: Theme) => css`
  background-color: ${theme.palette.primary.dark};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
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
  border-radius: 10px;
`;

export const imageThumbnailStyles = css`
  width: 100px;
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
  height: 85px;
  width: 85px;
  margin-right: ${theme.spacing(4)};
  border-radius: 10px;
`;
