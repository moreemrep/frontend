import Rollbar from 'rollbar';

export const rollbar = new Rollbar({
  // eslint-disable-next-line no-undef
  accessToken: process.env.REACT_APP_ROLLBAR,
  captureUncaught: true,
  captureUnhandledRejections: true
});

export function useRollbar() {
  return rollbar;
}
