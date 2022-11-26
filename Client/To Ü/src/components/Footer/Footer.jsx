import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classes["container"]}>
        <div className={classes["content-links"]}>
          <a>Company</a>
          <a>Help & Support</a>
          <a>Legal</a>
        </div>
        <div className={classes["content-links-v2"]}>
          <a>About Us</a>
          <a>Contact Us</a>
          <a>Terms & Conditions</a>
        </div>
        <div className={classes["container-logo"]}>
          <figure>
            <img src="src/assets/Logo.png" width="30px"></img>
          </figure>

          <h1>To Ü</h1>
        </div>

        <div className={classes["content-span"]}>
          <span>
            All right reserver. Copyright &copy; 2022 To Ü BY OSCAR JEJE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
