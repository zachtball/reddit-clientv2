import { Skeleton, ListItem, Theme } from '@material-ui/core';
import { css } from '@emotion/react';

const margin = (theme: Theme) => css`
  margin-left: ${theme.spacing(1)};
`;

export const SideNavSkeleton = () => {
  const numberOfSkeletons = Array.from(Array(20).keys());

  return (
    <>
      {numberOfSkeletons.map((num) => (
        <ListItem
          css={css`
            min-width: 100px;
          `}
          key={num}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton css={margin} variant="rectangular" width={160} height={14} />
        </ListItem>
      ))}
    </>
  );
};
