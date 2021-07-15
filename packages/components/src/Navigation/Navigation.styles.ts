import { css } from '@emotion/react';
import { Theme } from '@material-ui/core/styles';

const drawerWidth = '300';

export const root = css`
  display: flex;
`;

export const drawer = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    width: ${drawerWidth};
    flex-shrink: 0;
  }
`;

export const appBar = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth};
  }
`;

export const menuButton = (theme: Theme) => css`
  margin-right: ${theme.spacing(2)};
  ${theme.breakpoints.up('sm')} {
    display: none;
  }
`;

export const toolbar = (theme: Theme) => css`
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

export const drawerPaper = css`
  paper {
    width: ${drawerWidth};
  }
`;

export const content = (theme: Theme) => css`
  flex-grow: 1;
  padding: ${theme.spacing(3)};
`;

export const appBarContent = css`
  flex-grow: 1;
`;

export const list = css`
  padding: 0;
  margin-top: 1rem;
`;
