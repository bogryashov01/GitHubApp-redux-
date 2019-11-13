import React from 'react';
import './style.css'
import { Navbar} from 'react-bootstrap';
import SearchForm from '../SearchForm/searchForm';
import AwesomeComponent from '../spinner/Spinner';

const Header = (props) => {
    const {onChange, value, onClick,loading,toggle, onKeyPress}=props;
    return (
        <div>
        <Navbar bg="light" expand="lg" className="mr-auto">
            <Navbar.Brand href="/"><img src='https://icons-for-free.com/download-icon-git+hub+github+logo+square+version+control+icon-1320086772348925994_512.png' className="img" alt='logo'/></Navbar.Brand>
            <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='ml-auto'>
            <SearchForm onChange={onChange} value={value} onClick={onClick} onKeyPress={onKeyPress} />

                </div>
            </Navbar.Collapse>
        </Navbar>
         <AwesomeComponent loading={loading}/>
         </div>
    )
}
export default Header;