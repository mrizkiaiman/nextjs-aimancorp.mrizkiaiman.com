import * as React from 'react'
import { WithChildren } from '../../../types'
import { ScrollContext } from '../../landing/helpers/scroll-observer'

interface WrapperProps extends WithChildren {
  numOfPages: number
}

interface TileContextValue {
  numOfPages: number
  currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
})

export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPages }) => {
  const { scrollY } = React.useContext(ScrollContext)
  const refContainer = React.useRef<HTMLDivElement>(null)
  let currentPage = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    currentPage = percentY * numOfPages
  }

  return (
    <div ref={refContainer} className="relative bg-black text-white">
      {children}
    </div>
  )
}

export const TileBackground: React.FC<WithChildren> = ({ children }) => <div className="absolute h-full w-full">{children}</div>

export const TileContent: React.FC<WithChildren> = ({ children }) => <div className="sticky top-0 h-screen overflow-hidden">{children}</div>

interface TileProps {
  page: number
  renderContent: (props: { progress: number }) => any
}

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = React.useContext(TileContext)
  const refContainer = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={refContainer} className="absolute top-0 w-full">
      {/* {renderContent({progress})} */}
    </div>
  )
}
