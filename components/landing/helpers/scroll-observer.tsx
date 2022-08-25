import * as React from 'react'
import { WithChildren } from '../../../types/index'

interface ScrollValueProps {
  scrollY: number
}

export const ScrollContext = React.createContext<ScrollValueProps>({
  scrollY: 0,
})

export const ScrollObserver: React.FC<WithChildren> = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0)
  const handleScroll = React.useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>
}

export default ScrollObserver
