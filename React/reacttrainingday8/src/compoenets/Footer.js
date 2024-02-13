const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="" target="_blank">
S        </a>Sriyamini Jayakrishnan
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>App</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;