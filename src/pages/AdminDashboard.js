import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css"; // Your custom CSS
import "boxicons/css/boxicons.min.css";
import logo from "../assets/logo-icon.png";
import qr from "../assets/qr-images.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import reward from "../assets/reward.png";
import medal from "../assets/medal.png";
import giftcard from "../assets/gift-card.png";

const AdminDashboard = () => {

   const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [showThemeOptions, setShowThemeOptions] = useState(false);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setShowThemeOptions(false);
  };

  const toggleThemeOptions = () => {
    setShowThemeOptions(!showThemeOptions);
  };

  // Apply theme to body + save to localStorage
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sidebar collapse handling
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar toggle / active link handling
  useEffect(() => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show-side-bar");
          toggle.classList.toggle("bx-x");
          bodypd.classList.toggle("admin-body-pd");
          headerpd.classList.toggle("admin-body-pd");
        });
      }
    };

    showNavbar("header-toggle", "nav-bar", "admin-body-pd", "header");

    const linkColor = document.querySelectorAll(".nav_link");
    const colorLink = function () {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    };

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    return () => {
      linkColor.forEach((l) => l.removeEventListener("click", colorLink));
    };
  }, []);


  // useEffect(() => {
  //   const showNavbar = (toggleId, navId, bodyId, headerId) => {
  //     const toggle = document.getElementById(toggleId);
  //     const nav = document.getElementById(navId);
  //     const bodypd = document.getElementById(bodyId);
  //     const headerpd = document.getElementById(headerId);

  //     if (toggle && nav && bodypd && headerpd) {
  //       toggle.addEventListener("click", () => {
  //         nav.classList.toggle("show-side-bar");
  //         toggle.classList.toggle("bx-x");
  //         bodypd.classList.toggle("admin-body-pd");
  //         headerpd.classList.toggle("admin-body-pd");
  //       });
  //     }
  //   };

  //   showNavbar("header-toggle", "nav-bar", "admin-body-pd", "header");

  //   const linkColor = document.querySelectorAll(".nav_link");

  //   function colorLink() {
  //     if (linkColor) {
  //       linkColor.forEach((l) => l.classList.remove("active"));
  //       this.classList.add("active");
  //     }
  //   }

  //   linkColor.forEach((l) => l.addEventListener("click", colorLink));
  //   return () => {
  //     linkColor.forEach((l) => l.removeEventListener("click", colorLink));
  //   };
  // }, []);

  return (
    <section className="admin" id="admin-body-pd">
      {/* <header className="header admin-body-pd" id="header">
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
      </header> */}

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
              <a href="#" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="#" className="nav_link">
                <i className="fa-solid fa-coins"></i>
                <span className="nav_name">Points History</span>
              </a>
              <a href="#" className="nav_link">
                <i className="fa-solid fa-gift"></i>
                <span className="nav_name">Rewards History</span>
              </a>
              <a href="#" className="nav_link">
                <i className="fa-solid fa-file-invoice"></i>
                <span className="nav_name">Transaction History</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">Support</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Profile</span>
              </a>
            </div>
          </div>

          <a href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Sign Out</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main-content pt-4">
        <h1 className="mb-4" style={{ fontSize: "1.8rem" }}>
          Customer Dashboard – Loyalty Scheme
        </h1>

        {/* Welcome Card */}
        <div className="custom-card mb-3">
          <div className="row">
            <div className="col-md-6 mb-3 mb-4 mb-md-0">
              <div className="d-flex rounded p-3">
                <div className="profile-img-wrapper mr-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <p className="mb-1 text-light small">Welcome back</p>
                  <h4 className="mb-0 text-white font-weight-bold">
                    Jhon Anderson!
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3 text-center">
              <img
                className="img-fluid"
                src="https://codervent.com/maxton/demo/vertical-menu/assets/images/gallery/welcome-back-3.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="custom-card">
              <img
                className="img-fluid mb-3"
              src={reward}
                alt="reward"
              />
              <h4>Points Issued</h4>
              <h6>15,800</h6>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="custom-card">
              <img
                className="img-fluid mb-3"
                src={medal}
                alt="medal"
              />
              <h4>Rewards Redeemed</h4>
              <h6>64</h6>
            </div>
          </div>

          <div className="col-md-12 mb-3">
            <div className="custom-card">
              <img
                className="img-fluid mb-3"
                src={giftcard}
                alt="gift"
              />
              <h4>Active Rewards</h4>
              <h6>5</h6>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="custom-card mb-4">
          <div style={{ marginTop: "18px" }}>
            <h4 className="mb-2">
              <img
                className="img-fluid"
                src="../assets/images/qr-code.png"
                alt=""
              />{" "}
              Unique QR for scanning
            </h4>
            <div className="qr-block" style={{ marginTop: "10px" }}>
              <div className="qr-img card" id="qrWrap">
                <img
                  id="qrImg"
                  src={qr}
                  alt="QR code"
                  width="200"
                  height="200"
                  style={{ display: "block", borderRadius: "8px" }}
                />
              </div>

              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div className="qr-code-code" id="uniqueCode">
                  !@#$%^&*()-_=+[ ]&#123;&#123;&#125;&#125;;:,.&lt;&gt;?/&lt;
                </div>

                <button
                  className="btn alt-btn-b custom-btn mt-0 border"
                  id="copyBtn"
                >
                  Copy
                </button>
              </div>

              <div className="btn-row controls">
                <button
                  className="btn alt-btn-b custom-btn mt-0 border"
                  id="downloadBtn"
                >
                  Download
                </button>
                <button
                  className="btn alt-btn-b custom-btn mt-0 border"
                  id="printBtn"
                >
                  Print
                </button>
                <button
                  className="btn alt-btn-b custom-btn mt-0 border"
                  id="refreshBtn"
                >
                  Regenerate
                </button>
              </div>

              <div className="download-note">
                Show this QR at checkout or have staff scan it from your device.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

