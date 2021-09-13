import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useMemo } from 'react';

// HOOKS
const useStyles = makeStyles((theme) => ({
  titleBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  borderedBox: {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

// COMPONENTS
const ListItemMention = ({ src, date, textPrimary, textSecondary, textTertiary }) => {
  const classes = useStyles();

  const dateReadable = useMemo(
    () => new Date(date).toLocaleDateString(
      'en-gb',
      {
        day: 'numeric',
        month: 'short',
      },
    ),
    [date],
  );

  return (
    <Box overflow="hidden" className={classes.borderedBox}>
      <Box m={2} display="flex">
        <Avatar alt="Source picture" src={src} />
        <Box ml={2} display="flex" flexDirection="column" overflow="hidden">
          <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
            <Typography color="textSecondary" variant="h6">{textPrimary}</Typography>
            <Typography color="textSecondary" variant="h6">{dateReadable}</Typography>
          </Box>
          <Typography className={classes.titleBold} color="textPrimary" variant="h6" noWrap>{textSecondary}</Typography>
          <Typography color="textSecondary" variant="h6">{textTertiary}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

ListItemMention.propTypes = {
  src: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  textPrimary: PropTypes.string.isRequired,
  textSecondary: PropTypes.string.isRequired,
  textTertiary: PropTypes.string.isRequired,
};

export default ListItemMention;
