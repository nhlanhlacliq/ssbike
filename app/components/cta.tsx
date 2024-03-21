import Container from './ui/container'
import Section from './ui/section'

import image from "~/assets/images/12.jpeg"
import { Button } from './ui/button'

function CTA() {
  return (
    <Section>
      <Container>
        <div className='relative w-full h-96 sm:h-72'>
          <img src={image} alt="" className='absolute inset-0 w-full h-full object-cover -z-10'/>
          <div className='flex text-white mx-0 py-auto flex-col h-full justify-center p-4 md:p-8 bg-black/20 backdrop-blur-[6px] '>
            <h1 className=' text-balance' >Stay Updated with Our Adventures</h1>
            <p className='text-balance' >
              Subscribe to receive weekly updates on our exciting mountain biking adventures.
            </p>
            <Container className='mx-0 mt-8 gap-4' >
              <Button className='text-primary-foreground' >Subscribe</Button>
              <Button variant="outline" className='bg-transparent text-white border-white'>Learn More</Button>
            </Container>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CTA