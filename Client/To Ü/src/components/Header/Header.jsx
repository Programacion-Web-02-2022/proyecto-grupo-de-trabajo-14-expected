import classes from "./Header.module.scss";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <div className={classes["logo-container"]}>
        <figure>
          <img src={Logo} width="50px" />
        </figure>
        <h1>To Ü</h1>
      </div>
      
      <div className={classes["btn-container"]}>
        <a>Log in</a>
        <button>Try To Ü</button>
      </div>
    </header>
  );
};

export default Header;
