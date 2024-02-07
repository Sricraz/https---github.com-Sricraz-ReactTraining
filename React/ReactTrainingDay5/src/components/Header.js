import {LOGO_URL} from '../utils/constants';
 
export const Header = () => {
    return (
        <div className="header">
                <img
            src={LOGO_URL}
            alt="logo" width={100} height={100} />          
            <div className="nav-items"><ul>
                            
          <li>Home</li>
          <li>Food Order</li>
          <li>Settings</li>
          
        </ul>
      </div>
        </div>
       
    )
 }
 
 export default Header;