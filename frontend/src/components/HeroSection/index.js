import React, { useState } from 'react'
import Video from '../../videos/Video.mp4'
import { Button } from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='Video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Stock Market Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and get into the world of stock market
          and get an idea of the trend the stock will follow
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='/signin'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
