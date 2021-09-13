import { TOKEN, ACCOUNT_ID, ALERT_ID } from 'secrets';

import { useCallback, useMemo } from 'react';
import useFetch, { DONE, LOADING } from 'hooks/useFetch';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// COMPONENTS
const ButtonLoadMentions = (props) => {
  const [status, callback] = useFetch();

  const onClick = useCallback(
    () => {
      callback(`https://web.mention.com/api/accounts/${ACCOUNT_ID}/alerts/${ALERT_ID}/mentions`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      });
    },
    [callback],
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
