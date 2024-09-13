
import TestimonialImg from '/images/testimonialImg.png'
import Image from '../atoms/Image'
import StarImg from '/images/Star.png'
import Text from '../atoms/Text'

export default function Testimonial() {
    return (
        <div className='testimonial'>

            <div className="testimonial__detail">
                <div className="testimonial__detail__title">
                    <Text type='h5'>
                        People Are talking
                    </Text>
                </div>
                <div className="testimonial__detail__rating">
                    <Image alt='' width='14px' height='14px' src={StarImg} />
                    <Image alt='' width='14px' height='14px' src={StarImg} />
                    <Image alt='' width='14px' height='14px' src={StarImg} />
                    <Image alt='' width='14px' height='14px' src={StarImg} />
                    <Image alt='' width='14px' height='14px' src={StarImg} />


                </div>
                <div className="testimonial__detail__quote">
                    <Text type='h4'>
                        “Love this shirt! Fits perfectly and the fabric is thick without
                        being stiff.”
                    </Text>

                </div>
                <div className="testimonial__detail__author">
                    <Text type='h6'>
                        -- JonSnSF,<span className='underline'>The Heavyweight Overshirt</span>
                    </Text>
                </div>
            </div>
            <Image alt='' src={TestimonialImg} width='530px' height='695px' />
        </div>
    )
}
