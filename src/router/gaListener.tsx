/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-undef */
import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router-dom'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS!)

function GAListener({ children, history }: any) {
  const sendPageView = (location: any) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  }

  useEffect(() => {
    sendPageView(history.location)
    history.listen(sendPageView)
  }, [])

  return children
}

const gaListener = withRouter(GAListener)

export { gaListener as GAListener }
