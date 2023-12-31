import './Footer.css';
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillPhone, AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='left-footer-container'>
                <div className='footer-menus'>
                    <div className='location'>
                        <div className='location-interior'>
                            <HiLocationMarker className='location-icon' size={50}/>
                            <h3>01548 Garfield Street <br/>New York, U.S.A</h3>
                        </div>
                    </div>
                    <div className='phone'>
                        <div className='phone-interior'>
                            <AiFillPhone className='phone-icon' size={50}/>
                            <h3>+1 (555) 1542</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-footer-container'>
                <div className='right-footer-title'>
                    <h3>About Our Community!</h3>
                </div>
                <div className='right-footer-desc'>
                    <h2 className='footer-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet urna egestas, elementum leo.</h2>
                </div>

                <div className='right-footer-social'>
                    <AiFillInstagram className='insta-icon' size={50} />
                    <AiFillTwitterCircle className='twitter-icon' size={50} />
                    <BiLogoLinkedin className='linked-icon' size={50} />
                    <AiFillGithub className='git-icon' size={50} />
                </div>
            </div>
        </div>
    );
}
 
export default Footer;