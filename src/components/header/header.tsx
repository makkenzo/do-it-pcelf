import './header.css'

import Logo from '../img/logo.png'
import Search from '../img/search.png'
import Profile from '../img/profile.png'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <header className="Header">
        <img src={Logo.src}/>
        <div className="header-links">
            <a>Главная</a>
            <a>Каталог</a>
            <a>Корзина</a>
        </div>
        <div className="tools">
            <img src={Search.src}/>
            <img src={Profile.src}/>
        </div>
    </header>
    );
};

export default Header;
