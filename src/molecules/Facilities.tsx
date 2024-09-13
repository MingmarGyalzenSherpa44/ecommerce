
import Image from '../atoms/Image'
import Facility1Img from '/images/facility1.png'
import Facility2Img from '/images/facility2.png'
import Facility3Img from '/images/facility3.png'


export default function Facilities() {
    return (
        <div className='facilities'>
            <Image alt='' width='411px' height='157px' src={Facility1Img} />
            <Image alt='' width='411px' height='157px' src={Facility2Img} />
            <Image alt='' width='411px' height='140px' src={Facility3Img} />

        </div>
    )
}
