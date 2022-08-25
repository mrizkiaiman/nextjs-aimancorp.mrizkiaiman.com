import * as React from 'react'
import { TileBackground, TileContent, TileWrapper } from './helpers/tile'

export const Projects = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <p>Foo</p>
    </TileContent>
    <TileContent>
      <p>Bar</p>
    </TileContent>
    <TileContent>
      <p>asd</p>
    </TileContent>
  </TileWrapper>
)

export default Projects
