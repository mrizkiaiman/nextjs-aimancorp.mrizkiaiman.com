import * as React from 'react'
import { TileBackground, TileContent, TileWrapper, Tile } from './helpers/tile'
import { ProjectBackground, ProjectContainer, ProjectLeft, ProjectRight, ProjectLink } from './components/Project'
import Image from 'next/image'

export const Projects = () => (
  <TileWrapper numOfPages={6.3}>
    <TileBackground>
      <ProjectBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <p className="text-2xl text-center md:text-left md:text-3xl pb-1">We built</p>
              <div className="flex items-center">
                <ProjectLink href="https://www.mrizkiaiman.com">
                  <p className="text-3xl md:text-5xl font-bold">mrizkiaiman.com</p>
                </ProjectLink>
                <p className="pl-2 pt-1 text-3xl md:text-5xl font-bold">site.</p>
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image src="/projects/mrizkiaiman.png" width={700} height={700} alt="mrizkiaiman.com" />
            </ProjectRight>
          </ProjectContainer>
        )}></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <p className="text-2xl text-center md:text-left md:text-3xl pb-1">We made</p>
              <div className="flex items-center">
                <ProjectLink href="https://github.com/mrizkiaiman/react-native-yarukoto">
                  <p className="text-3xl md:text-5xl font-bold">Yarukoto-app</p>
                </ProjectLink>
                <p className="pl-2 pt-1 text-3xl md:text-5xl font-bold">faster.</p>
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image src="/projects/yarukoto.png" width={450} height={870} className="h-screen" alt="Yarukoto" />
            </ProjectRight>
          </ProjectContainer>
        )}></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <p className="text-2xl text-center md:text-left md:text-3xl pb-1">We created</p>
              <div className="flex items-center">
                <ProjectLink href="https://github.com/mrizkiaiman/react-native-yarukoto">
                  <p className="text-3xl md:text-5xl font-bold">a VR-app </p>
                </ProjectLink>
                <p className="pl-2 pt-1 text-3xl md:text-5xl font-bold">from web.</p>
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image src="/projects/webXR.png" width={700} height={700} className="h-screen" alt="Yarukoto" />
            </ProjectRight>
          </ProjectContainer>
        )}></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <p className="text-2xl text-center md:text-left md:text-3xl pb-1">And we also create</p>
              <div className="flex items-center">
                <ProjectLink href="https://github.com/mrizkiaiman/react-native-yarukoto">
                  <p className="text-3xl md:text-5xl font-bold">an AR-app </p>
                </ProjectLink>
                <p className="pl-2 pt-1 text-3xl md:text-5xl font-bold">from scratch.</p>
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image src="/projects/webAR.png" width={700} height={700} className="h-screen" alt="Yarukoto" />
            </ProjectRight>
          </ProjectContainer>
        )}></Tile>
    </TileContent>
  </TileWrapper>
)

export default Projects
