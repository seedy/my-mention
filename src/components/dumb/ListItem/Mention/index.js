import PropTypes from 'prop-types';

import chunk from 'helpers/chunk';
import stringReplaceJsx from 'helpers/stringReplaceJsx';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { useMemo } from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconSourceType from 'components/smart/Icon/SourceType';

// HELPERS
// we filter out utf-16 code units, then group offsets by pair (start-length)
const filterPairOffsets = (offsets) => chunk(offsets.filter((_, index) => {
  const indexModulo = index % 4;
  return indexModulo === 0 || indexModulo === 2;
}), 2);

// HOOKS
const useStyles = makeStyles((theme) => ({
  titleBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  borderedBox: {
    border: `1px solid ${theme.palette.divider}`,
  },
  iconAvatarSmall: {
    width: 24,
    height: 24,
  },
  markBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

// COMPONENTS
const ListItemMention = ({
  src, type, date, textPrimary, textSecondary, textTertiary, textTertiaryOffsets,
}) => {
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

  const highlightedText = useMemo(
    () => {
      const filteredPairedOffsets = filterPairOffsets(textTertiaryOffsets);
      return filteredPairedOffsets
        .reduce((aggr, [start, length]) => {
          const substring = aggr.substring(start, start + length);
          return stringReplaceJsx(aggr, substring, (match, i) => (
            <mark className={classes.markBold} key={i}>{match}</mark>
          ));
        }, textTertiary);
    },
    [textTertiary, textTertiaryOffsets, classes],
  );

  return (
    <Box overflow="hidden" className={classes.borderedBox}>
      <Box m={2} display="flex" alignItems="flex-start">
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={(
            <Avatar classes={{ root: classes.iconAvatarSmall }}>
              <IconSourceType type={type} />
            </Avatar>
        )}
        >
          <Avatar alt="Source picture" src={src} />
        </Badge>
        <Box ml={2} display="flex" flexDirection="column" overflow="hidden">
          <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
            <Typography color="textSecondary" variant="h6">{textPrimary}</Typography>
            <Typography color="textSecondary" variant="h6">{dateReadable}</Typography>
          </Box>
          <Typography className={classes.titleBold} color="textPrimary" variant="h6" noWrap>{textSecondary}</Typography>
          <Typography color="textSecondary" variant="h6">{highlightedText}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

ListItemMention.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  textPrimary: PropTypes.string.isRequired,
  textSecondary: PropTypes.string.isRequired,
  textTertiary: PropTypes.string.isRequired,
  textTertiaryOffsets: PropTypes.arrayOf(PropTypes.number),
};

ListItemMention.defaultProps = {
  src: null,
  textTertiaryOffsets: [],
};

export default ListItemMention;
