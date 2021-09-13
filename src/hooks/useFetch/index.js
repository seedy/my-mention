import { useCallback, useMemo, useState } from 'react';

// CONSTANTS
export const LOADING = Symbol('LOADING');
export const DONE = Symbol('DONE');


// HOOKS
export default () => {
  const [status, setStatus] = useState();

  const onLoad = useCallback(
    () => {
      setStatus(LOADING);
    },
    [setStatus],
  );

  const onDone = useCallback(
    () => {
      setStatus(DONE);
    },
    [setStatus],
  );

  const callback = useCallback(
    async (resource, options) => {
      onLoad();
      const response = await fetch(resource, options);
      onDone();
      return response.json();
    },
    [onLoad, onDone],
  );

  return useMemo(
    () => [status, callback],
    [status, callback],
  );
};
