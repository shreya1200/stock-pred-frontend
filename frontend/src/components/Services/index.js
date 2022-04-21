import React from 'react'
import Icon1 from '../../images/img2.png'
import Icon2 from '../../images/img4.png'
import Icon3 from '../../images/img-6.png'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServiceElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Get Predictions</ServicesH2>
          <ServicesP>
            We help you understand the stock market hjshkl ajdioeio akl;OIWJDKMC
            GHDYENSAIE jkdjj, jdfkjie alodkokc gngldlc, fjklfl toeioikm skflskm
            kjfklkfl jgieokm
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Follow Trends</ServicesH2>
          <ServicesP>
            We help you understand the stock market hjshkl ajdioeio akl;OIWJDKMC
            GHDYENSAIE jkdjj, jdfkjie alodkokc gngldlc, fjklfl toeioikm skflskm
            kjfklkfl jgieokm
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Stay Updated</ServicesH2>
          <ServicesP>
            We help you understand the stock market hjshkl ajdioeio akl;OIWJDKMC
            GHDYENSAIE jkdjj, jdfkjie alodkokc gngldlc, fjklfl toeioikm skflskm
            kjfklkfl jgieokm
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
