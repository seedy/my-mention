import { useMentionsContext } from 'components/context/mentions';
import { useMemo } from 'react';

import isNil from 'helpers/isNil';

import List from '@material-ui/core/List';
import ListItemMention from 'components/dumb/ListItem/Mention';

// COMPONENTS
const ListMentions = (props) => {
  const { mentions } = useMentionsContext();

  const hasMentions = useMemo(
    () => !isNil(mentions),
    [mentions],
  );

  return (
    <List {...props}>
      {hasMentions && mentions
        .map(({
          id, publishedAt, sourceUrl, sourceType, title, description, pictureUrl, offsets }) => (
            <ListItemMention
              key={id}
              date={publishedAt}
              src={pictureUrl}
              type={sourceType}
              textPrimary={sourceUrl}
              textSecondary={title}
              textTertiary={description}
              textTertiaryOffsets={offsets.description}
            />
        ))}
    </List>
  );
};

export default ListMentions;
