import { LOGO_URL } from "../utils/constants";


const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="Food Logo" />
  </a>
);

const header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Food Order</li>
          <li>Settings</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;