/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';

// eslint-disable-next-line no-undef
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS!);

export const GAListener: React.FC = ({ children }) => {
  const history = useHistory();

  const sendPageView = (location: Location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  };

  useEffect(() => {
    sendPageView(history.location);
    return history.listen(sendPageView);
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
