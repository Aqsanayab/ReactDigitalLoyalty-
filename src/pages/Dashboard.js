import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaEnvelope, FaBookmark, FaFolder, FaChartBar, FaThLarge, FaSignOutAlt } from "react-icons/fa";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/44.jpg";
import user from "../assets/user.png";
import reward from "../assets/reward.png";
import medal from "../assets/medal.png";
import giftcard from "../assets/gift-card.png";
import lock from "../assets/lock.png";
import logo from "../assets/logo-icon.png";
import championship from "../assets/championship.png";
import exchange from "../assets/exchange.png";

  const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);

const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
const [showThemeOptions, setShowThemeOptions] = useState(false);

const changeTheme = (newTheme) => {
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.body.className = newTheme;
  setShowThemeOptions(false);
};
const toggleThemeOptions = () => {
  setShowThemeOptions(!showThemeOptions);
};
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mydashboard">
      


<header className="header admin-body-pd" id="header">
  <div className="header_toggle">
    <i className="bx bx-menu" id="header-toggle"></i>
  </div>

  <div className="theme-dropdown">
    {/* Main Theme Circle */}
       <div
      className="theme-circle main-circle"
      style={{
        background:
          theme === "dark" ? "#060b28" :
          theme === "light" ? "#f5f5f5" :
          theme === "blue" ? "#004aad" :
          theme === "green" ? "#198754" :
          theme === "purple" ? "#7209b7" :
          "#060b28"
      }}
      onClick={() => setShowThemeOptions(!showThemeOptions)}
    ></div>
    {showThemeOptions && (
      <div className="theme-options">
        <div className="theme-circle dark" onClick={() => changeTheme("dark")}></div>
        <div className="theme-circle light" onClick={() => changeTheme("light")}></div>
        <div className="theme-circle blue" onClick={() => changeTheme("blue")}></div>
        <div className="theme-circle green" onClick={() => changeTheme("green")}></div>
        <div className="theme-circle purple" onClick={() => changeTheme("purple")}></div>
      </div>
    )}
  </div>
</header>


      <div className="admin-l-navbar show-side-bar" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <img
                className="img-fluid"
                src={logo}
                alt="Logo"
                style={{ width: "26px" }}
              />
              <span className="nav_logo-name">Digital Loyalty</span>
            </a>
             <div className="nav_list">
            <a href="adminDashboard" className="nav_link active">
              
                 <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Admin Dashboard</span>
              </a>
              <a href="#" className="nav_link">
                <FaUser className="nav_icon" />
                <span className="nav_name">Users</span>
              </a>
              <a href="#" className="nav_link">
                <FaEnvelope className="nav_icon" />
                <span className="nav_name">Messages</span>
              </a>
              <a href="#" className="nav_link">
                <FaBookmark className="nav_icon" />
                <span className="nav_name">Bookmark</span>
              </a>
              <a href="#" className="nav_link">
                <FaFolder className="nav_icon" />
                <span className="nav_name">Files</span>
              </a>
              <a href="#" className="nav_link">
                <FaChartBar className="nav_icon" />
                <span className="nav_name">Stats</span>
              </a>
            </div>
          </div>

          <a href="Login" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Log In</span>
          </a>
        </nav>
      </div>
    
        <main className={`mymain-content ${isCollapsed ? "collapsed" : ""}`}>
        <h2>Admin Dashboard – Loyalty Scheme</h2>

        <div className="welcome-card">
          <div className="profile-container">
            <img src={girl} alt="Profile" className="profile-img" />
            <div className="welcome-text">
              <p>Welcome back</p>
              <h2>Jhon Anderson!</h2>
            </div>
          </div>
          <div className="welcome-right">
            <img
              src="https://codervent.com/maxton/demo/vertical-menu/assets/images/gallery/welcome-back-3.png"
              alt="Welcome"
              className="welcome-img"
            />
          </div>
        </div>

        <div className="cards-grid">
          <div className="info-card">
            <img src={user} alt="user" />
            <h1>Total Users</h1>
            <h2>203</h2>
          </div>
          <div className="info-card">
            <img src={reward} alt="reward" />
            <h1>Points Issued</h1>
            <h2>15,800</h2>
          </div>
        </div>

        <div className="cards-grid">
          <div className="info-card">
            <img src={medal} alt="medal" />
            <h1>Rewards Redeemed</h1>
            <h2>64</h2>
          </div>
          <div className="info-card">
            <img src={giftcard} alt="gift" />
            <h1>Active Rewards</h1>
            <h2>5</h2>
          </div>
        </div>

        <div className="data-card">
          <h1>
            <img src={lock} alt="icon" /> Registered Customers
          </h1>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Points</th>
                  <th>Last Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sara Khan</td>
                  <td>sara@example.com</td>
                  <td>180</td>
                  <td>2025-08-06</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ali Raza</td>
                  <td>ali@example.com</td>
                  <td>240</td>
                  <td>2025-08-05</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mehreen Akhtar</td>
                  <td>mehreen@example.com</td>
                  <td>90</td>
                  <td>2025-08-03</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="data-card">
          <h1>
            <img src={championship} alt="icon" /> Rewards List
          </h1>
          <ul className="list-group">
            <li>£5 Off Voucher <span>150 Points</span></li>
            <li>Free Haircut <span>300 Points</span></li>
            <li>Free Coffee <span>80 Points</span></li>
          </ul>
        </div>

        <div className="data-card">
          <h1>
            <img src={exchange} alt="icon" /> Recent Transactions
          </h1>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Type</th>
                  <th>Points</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1001</td>
                  <td>Sara Khan</td>
                  <td>Earned</td>
                  <td>+40</td>
                  <td>2025-08-06</td>
                </tr>
                <tr>
                  <td>1002</td>
                  <td>Ali Raza</td>
                  <td>Redeemed</td>
                  <td>-150</td>
                  <td>2025-08-05</td>
                </tr>
                <tr>
                  <td>1003</td>
                  <td>Mehreen Akhtar</td>
                  <td>Earned</td>
                  <td>+30</td>
                  <td>2025-08-03</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
