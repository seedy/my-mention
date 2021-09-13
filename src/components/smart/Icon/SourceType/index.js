import PropTypes from 'prop-types';

import ForumsIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';
import BlogsIcon from '@material-ui/icons/Face';
import WebIcon from '@material-ui/icons/Language';
import NewsIcon from '@material-ui/icons/Announcement';
import { useMemo } from 'react';

// CONSTANTS
const ICON_TYPE = {
  twitter: TwitterIcon,
  web: WebIcon,
  blogs: BlogsIcon,
  forums: ForumsIcon,
  news: NewsIcon,
};

const IconSourceType = ({ type, ...props }) => {
  const Icon = useMemo(
    () => ICON_TYPE[type] || null,
    [type],
  );

  return <Icon {...props} />;
};

IconSourceType.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICON_TYPE)).isRequired,
};

export default IconSourceType;
