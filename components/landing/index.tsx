import * as React from 'react'
import { ScrollContext } from './helpers/scroll-observer'

export const Landing = () => {
  const refContainer = React.useRef<HTMLDivElement>(null)
  const { scrollY } = React.useContext(ScrollContext)
  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col justify-between items-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 50}vh)`,
      }}>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/videos/matrix-like.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col justify-between items-center h-screen z-10 pb-8 pt-4">
        <img alt="sp-logo" src="./logo.webp" width={100} height={100} />
        <div>
          <p className="text-white font-bold text-4xl md:text-5xl  text-center tracking-tighter drop-shadow-xl">AimanCorp.</p>
          <p className="text-white font-bold text-2xl md:text-3xl text-center pt-3 tracking-tight drop-shadow-xl">
            Business platform, done right.
          </p>
        </div>
        <p className="font-bold text-white text-xl md:text-2xl tracking-tight drop-shadow-md">www.mrizkiaiman.com</p>
      </div>
    </div>
  )
}

export default Landing
