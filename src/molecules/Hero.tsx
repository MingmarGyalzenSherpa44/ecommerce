import Button from '../atoms/Button'
import Text from '../atoms/Text'

export default function Hero() {
  return (
    <div className='home-hero'>

      <div className="wrapper">
      <div className='home-hero__title'>
        <Text type='h1' color='white'>
          Your Cozy Era
        </Text>
     </div>
     <div className="home-hero__description">
        <Text type='h4' color='white'>
        Get peak comfy-chic 
        </Text>
        <Text type='h4' color='white'>
        with new winter essentials.
        </Text>
      
     </div>
     <div>
        <Button type='primary' paddingX='79.5px' paddingY='12px'>
          <Text type='h6'>
            SHOP NOW
          </Text>
        </Button>
     </div>
      </div>
    
    </div>
  )
}
