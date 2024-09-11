import Text from '../atoms/Text'
import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className="footer-top__content">
                    <div className="footer-top__content__title">
                        <Text type='h5'>
                            Account
                        </Text>
                    </div>
                    <ul className='footer-top__content__list'>
                        <li>
                            <Text type='h6'>
                                Login
                            </Text>
                        </li>
                        <li><Text type='h6'>
                            Signup
                        </Text></li>
                        <li><Text type='h6'>
                            Reedem a Gift Card
                        </Text></li>
                    </ul>

                </div>
                <div className="footer-top__content">
                    <div className="footer-top__content__title">
                        <Text type='h5'>
                            About
                        </Text>
                    </div>
                    <ul className='footer-top__content__list'>
                        <li><Text type='h6'>
                            About
                        </Text></li>
                        <li><Text type='h6'>
                            Environmental Initiatives
                        </Text></li>
                        <li><Text type='h6'>
                            Factories
                        </Text></li>
                        <li><Text type='h6'>
                            DEI
                        </Text></li>
                        <li><Text type='h6'>
                            Careers
                        </Text></li>
                        <li><Text type='h6'>
                            International
                        </Text></li>
                        <li><Text type='h6'>
                            Accessibility
                        </Text></li>

                    </ul>
                </div>
                <div className="footer-top__content">
                    <div className="footer-top__content__title">
                        <Text type='h5'>
                            Get Help
                        </Text>
                    </div>
                    <ul className='footer-top__content__list'>
                        <li><Text type='h6'>
                            Help Center
                        </Text></li>
                        <li><Text type='h6'>
                            Return Policy
                        </Text></li>

                        <li><Text type='h6'>
                            Shipping Info
                        </Text></li>
                        <li><Text type='h6'>
                            Bulk Orders
                        </Text></li>
                    </ul>
                </div>
                <div className="footer-top__content">
                    <div className="footer-top__content__title">
                        <Text type='h5'>
                            Connect
                        </Text>
                    </div>
                    <ul className='footer-top__content__list'>
                        <li>
                            <Text type='h6'>
                                Facebook
                            </Text>
                        </li>
                        <li><Text type='h6'>
                            Instagram
                        </Text>
                        </li>
                        <li><Text type='h6'>
                            Twitter
                        </Text></li>
                        <li><Text type='h6'>
                            Affiliates
                        </Text></li>
                        <li><Text type='h6'>
                            Out Stores
                        </Text></li>

                    </ul>
                </div>
                <div className="footer-top__content searchbar-container">
                    <TextInput placeholder='Email Address' />
                    <Button>
                        &#x2192;
                    </Button>
                </div>

            </div>
            <div className='footer-bottom'>
                <ul className='footer-bottom__list'>
                    <li><Text type='p'>
                        Privacy Policy
                    </Text></li>
                    <li><Text type='p'>
                        Terms of Service
                    </Text></li>
                    <li><Text type='p'>
                        Do Not Sell or Share My Personal Information
                    </Text></li>
                    <li><Text type='p'>
                        CS Supply Chain Transparency
                    </Text></li>
                    <li><Text type='p'>
                        Vendor Code of Conduct
                    </Text></li>
                    <li><Text type='p'>
                        Sitemap Pages
                    </Text></li>
                    <li><Text type='p'>
                        Sitemap Products
                    </Text></li>
                </ul>
                <div className='footer-bottom__rights'>
                    <Text type='p'>
                        &copy; All Rights Reserved
                    </Text>
                </div>
            </div>
        </div >
    )
}
