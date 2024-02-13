import { LOGO_URL } from "../utils/constants";
import LoginButton from "./login";


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
        </ul>
      </div>
     <LoginButton/>
    </div>
  );
};

export default header;