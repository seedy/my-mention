import { TOKEN, ACCOUNT_ID, ALERT_ID } from 'secrets';

import objectToCamelCase from 'helpers/objectToCamelCase';

import { useCallback, useMemo } from 'react';
import useFetch, { DONE, LOADING } from 'hooks/useFetch';
import { useMentionsContext } from 'components/context/mentions';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// HELPERS
const mapMentionsToCamelCase = ({ mentions }) => mentions.map(objectToCamelCase);

// COMPONENTS
const ButtonLoadMentions = (props) => {
  const [status, callback] = useFetch(mapMentionsToCamelCase);

  const { onReceive } = useMentionsContext();

  const onClick = useCallback(
    async () => {
      const mentions = await callback(`https://web.mention.com/api/accounts/${ACCOUNT_ID}/alerts/${ALERT_ID}/mentions`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      });
      onReceive(mentions);
    },
    [callback, onReceive],
  );

  const loading = useMemo(
    () => status === LOADING,
    [status],
  );

  const done = useMemo(
    () => status === DONE,
    [status],
  );

  return (
    <Button
      variant="contained"
      startIcon={loading ? <CircularProgress size={24} /> : null}
      color="primary"
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {done ? 'Done!' : 'Load mentions!'}
    </Button>
  );
};

export default ButtonLoadMentions;
