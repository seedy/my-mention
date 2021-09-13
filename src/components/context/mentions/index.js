import PropTypes from 'prop-types';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// CONTEXT
export const MentionsContext = createContext({
  mentions: null,
  onReceive: null,
});

// HOOKS
export const useMentionsContext = () => useContext(MentionsContext);

// COMPONENTS
const MentionsContextProvider = ({ children, ...props }) => {
  const [mentions, setMentions] = useState(null);

  const onReceive = useCallback(
    (next) => setMentions(next),
    [setMentions],
  );

  const value = useMemo(
    () => ({
      mentions,
      onReceive,
    }),
    [mentions, onReceive],
  );

  return (
    <MentionsContext.Provider {...props} value={value}>
      {children}
    </MentionsContext.Provider>
  );
};

MentionsContextProvider.propTypes = {
  children: PropTypes.node,
};

MentionsContextProvider.defaultProps = {
  children: null,
};

export default MentionsContextProvider;
