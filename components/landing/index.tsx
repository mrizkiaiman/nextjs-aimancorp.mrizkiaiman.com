import * as React from 'react'
import Image from 'next/image'
import { ScrollContext } from './helpers/scroll-observer'
import Link from 'next/link'

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
        <Image alt="sp-logo" src="/logo.webp" width={120} height={100} />
        <div>
          <p className="text-white font-bold text-4xl md:text-5xl  text-center tracking-tighter drop-shadow-xl">AimanCorp.</p>
          <p className="text-white font-bold text-2xl md:text-3xl text-center pt-3 tracking-tight drop-shadow-xl">
            Business platform, done right.
          </p>
        </div>
        <Image src="/icons/arrow-down.webp" height={80} width={80} alt="arrow-down" />
      </div>
    </div>
  )
}

export default Landing
