import './MainPage.css';
import image from '../../assets/image.jpg'
import {BsChevronDoubleDown} from 'react-icons/bs';

const MainPage = () => {
    return (
        <div className='main-div'>
            <div className='title'>
                <h1>Welcome, to KI Community</h1>
                <h2>Our site is interested in everything related to the world of the web, such as articles about software world, providing technical services, providing multimedia, and providing information on global technical events.</h2>
            </div>
            <div className='image-div'>
                <img className='image' src={image} alt="img"></img>
            </div>
            <div className='down-button'>
                <a href='null'><BsChevronDoubleDown className='down' /></a>
            </div>
        </div>
    );
}
 
export default MainPage ;