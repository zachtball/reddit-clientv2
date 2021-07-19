import { css } from '@emotion/react';
import { Theme } from '@material-ui/core/styles';

export const drawerWidth = '240';

export const username = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    @media (orientation: landscape) {
      min-height: 48px;
    }
  }
  ${theme.breakpoints.up('sm')} {
    min-height: 64px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const topToolbar = css`
  justify-content: space-between;
`;

export const drawer = css`
  width: ${drawerWidth}px;
`;

export const list = css`
  padding: 0;
  margin-top: 0;
  max-width: 240px;
  overflow: hidden;
`;
