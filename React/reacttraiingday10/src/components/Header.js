import { LOGO_URL } from "../utils/constants";



const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="Food Logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="menus">
          <li>
          <a href="/">Home</a>
     </li>
          <li>
          <a href="/foodOrder"> Food Order</a>
         </li>
          <li>
          <a href="/settings"> Settings</a>
</li>
          <li>          <a href="/about"> About</a>
</li>
          <li>          <a href="/contact"> Contact</a>
</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;