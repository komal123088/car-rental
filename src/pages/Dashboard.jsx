import "../styles/dashboard.css";
import carImage1 from "../assets/image/car.png";
import carImage2 from "../assets/image/car (4).png";
import carImage3 from "../assets/image/car (5).png";
import carImage4 from "../assets/image/car (6).png";

import {
  MdDashboard,
  MdCarRental,
  MdInsights,
  MdAttachMoney,
  MdEmail,
  MdCalendarToday,
  MdSettings,
  MdHelp,
  MdOutlineDarkMode,
  MdLogout,
} from "react-icons/md";

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

// Chart.js registration
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const labelss = ["Sport car", "SUV", "Coupe ", "MPV", "BMW"];
  const values = [12, 12, 12, 12, 12];

  const doughnutData = {
    labels: labelss,
    datasets: [
      {
        label: "Votes",
        data: values,
        backgroundColor: [
          "rgb(13, 53, 89)",
          "rgb(23, 93, 156)",
          "rgb(32, 132, 222)",
          "rgb(99, 169, 232)",
          "rgb(13, 53, 219)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const defaultProps = {
    center: { lat: 10.99835602, lng: 77.01502627 },
    zoom: 11,
  };

  const mainMenuItems = [
    { id: "dashboard", icon: <MdDashboard />, label: "Dashboard" },
    { id: "car-rent", icon: <MdCarRental />, label: "Car Rent" },
    { id: "insight", icon: <MdInsights />, label: "Insight" },
    { id: "reimburse", icon: <MdAttachMoney />, label: "Reimburse" },
    { id: "inbox", icon: <MdEmail />, label: "Inbox" },
    { id: "calendar", icon: <MdCalendarToday />, label: "Calendar" },
  ];

  const preferencesItems = [
    { id: "settings", icon: <MdSettings />, label: "Settings" },
    { id: "help", icon: <MdHelp />, label: "Help & Center" },
    { id: "dark-mode", icon: <MdOutlineDarkMode />, label: "Dark Mode" },
  ];

  const transactions = [
    {
      id: 1,
      name: "Nissan GT - R",
      type: "Sport Car",
      price: "$80.00",
      date: "20 July",
      carImage: carImage1,
    },
    {
      id: 2,
      name: "Koenigsegg",
      type: "Sport Car",
      price: "$99.00",
      date: "17 July",
      carImage: carImage2,
    },
    {
      id: 3,
      name: "Rolls - Royce",
      type: "Sport Car",
      price: "$96.00",
      date: "16 July",
      carImage: carImage3,
    },
    {
      id: 4,
      name: "CR - V",
      type: "SUV",
      price: "$80.00",
      date: "17 July",
      carImage: carImage4,
    },
  ];

  return (
    <div className="dashboard-container section">
      {/* Sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? "Hide SideBar" : "Show SideBar"}
      </button>
      <div className={`sidebar ${sidebarVisible ? "" : "closed"}`}>
        <div className="menu-section">
          <h4>Main Menu</h4>
          <ul>
            {mainMenuItems.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className={item.id === "dashboard" ? "active" : ""}
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="preferences-section">
          <h4>Preferences</h4>
          <ul>
            {preferencesItems.map((item) => (
              <li key={item.id} id={item.id}>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="logout" id="logout">
          <MdLogout /> Log Out
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Section */}
        <div className="top-section">
          <div className="map-box">
            Details Rental
            <div style={{ height: "200px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>

          <div className="chart-box">
            Top 5 Car Rental
            <div style={{ width: "150px", marginTop: "10px" }}>
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Rental Card */}
          <div className="rental-box">
            <div className="car-info">
              <img src={carImage1} alt="car" />
              <div>
                <h3>Nissan GT - R</h3>
                <p>Sport Car</p>
              </div>
              <span className="rental-id">#7961</span>
            </div>

            <div className="pickup-drop">
              {/* Pick-Up Section */}
              <div className="checkbox-card" id="pickup">
                <label>
                  <input type="checkbox" defaultChecked />
                  <span>Pick - Up</span>
                </label>
                <div className="dropdowns">
                  <select>
                    <option>Kota Semarang</option>
                  </select>
                  <input type="date" defaultValue="2022-07-20" />
                  <input type="time" defaultValue="07:00" />
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="checkbox-card" id="dropoff">
                <label>
                  <input type="checkbox" defaultChecked />
                  <span>Drop - Off</span>
                </label>
                <div className="dropdowns">
                  <select>
                    <option>Kota Semarang</option>
                  </select>
                  <input type="date" defaultValue="2022-07-21" />
                  <input type="time" defaultValue="01:00" />
                </div>
              </div>
            </div>

            <div className="total-price" id="total-price">
              <span>Total Rental Price</span>
              <h2>$80.00</h2>
            </div>
          </div>

          {/* Recent Transaction */}
          <div className="transaction-box">
            <div className="transaction-header">
              <h4>Recent Transaction</h4>
              <a href="#">View All</a>
            </div>
            <ul className="transaction-list">
              {transactions.map((item) => (
                <li key={item.id}>
                  <img src={item.carImage} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.type}</p>
                  </div>
                  <span>{item.price}</span>
                  <p>{item.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
