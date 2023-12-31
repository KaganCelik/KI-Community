import logo from '../../assets/logo.png';
import './Header.css';
import { Button } from '@mui/material';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"><a href='http://localhost:3000'><img className='logo' src={logo} alt='logo'></img></a></div>
            <div className='menu-container'>
                    <Button className='buttons' variant='text' color='secondary' ><p className='menu-p'>Articles</p></Button>
                    <Button className='buttons' variant='text' color='secondary' ><p className='menu-p'>Gallery</p></Button>
                    <Button className='buttons' variant='text' color='secondary' ><p className='menu-p'>About Us</p></Button>
                    <Button className='buttons' variant='text' color='secondary' ><p className='menu-p'>Other Links</p></Button>
            </div>
        </div>
    );
}
 
export default Header;