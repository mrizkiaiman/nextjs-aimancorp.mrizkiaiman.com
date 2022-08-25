import * as React from 'react'
import { ScrollContext } from '../landing/helpers/scroll-observer'
import styles from './skills.module.css'

const opacityForBlock = (selectionProgress: number, blockNo: number) => {
  const progress = selectionProgress - blockNo
  // console.log(progress, blockNo)
  if (progress >= 0 && progress < 1) {
    return 1
  }

  return 0.2
}

export const Skills = () => {
  const { scrollY } = React.useContext(ScrollContext)
  const refContainer = React.useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div ref={refContainer} className="bg-black md:p-20 w-full h-full">
      <div className="min-h-screen flex flex-col md:px-60 w-full">
        <p
          className={`${styles.opacityAnimatedText} leading-tight font-bold text-4xl p-6 md:text-7xl w-full text-white`}
          style={{ opacity: opacityForBlock(progress, 0) }}>
          Create a professional business website in fastest way.
        </p>
        <p
          className={`${styles.opacityAnimatedText} leading-tight font-semibold text-4xl p-6 md:text-7xl w-full md:mt-3 text-white inline-block after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 1) }}>
          Our team has created hundreds of high-quality professional business site, powering thousands of business worldwide.
        </p>
        <p
          className={`${styles.opacityAnimatedText} leading-tight font-semibold text-4xl p-6 md:text-7xl w-full md:mt-3 text-white inline-block`}
          style={{ opacity: opacityForBlock(progress, 2) }}>
          We also provide a service to boost your business platform. Trusted by over 100 companies in the world.
        </p>
      </div>
    </div>
  )
}

export default Skills
