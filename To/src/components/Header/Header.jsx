import classes from './Header.module.scss';
import Logo from '../../assets/Logo.png';



const Header = () => {
    return (
        <header className={classes["Header"]}>
            <div className={classes["Title"]}>
                <figure>
                    <img src= { Logo } />
                </figure>

                <h1> To Ü</h1>
            </div>

            <div className={classes["Buttons"]}>

            </div>
        </header>
    );
}

export default Header;