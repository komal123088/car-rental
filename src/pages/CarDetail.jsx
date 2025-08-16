import "../styles/category.css";
import "../styles/detail.css";
import { FaStar } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import carData from "../carData";
import view1 from "../assets/image/view1.png";
import view2 from "../assets/image/view2.png";
import view3 from "../assets/image/view3.png";

import { useState } from "react";
function CarDetail() {
  const { id } = useParams();
  const car = carData.find((item) => item.id === parseInt(id));
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? "Hide SideBar" : "Show SideBar"}
      </button>
      <aside className={`sidebar ${sidebarVisible ? "" : "closed"}`}>
        <div className="filter-group">
          <h4>TYPE</h4>
          <label className="option">
            <input type="radio" name="type" />
            Sport (10)
          </label>
          <label className="option">
            <input type="radio" name="type" />
            SUV (12)
          </label>
          <label className="option">
            <input type="radio" name="type" />
            MPV (6)
          </label>
          <label className="option">
            <input type="radio" name="type" />
            Sedan (20)
          </label>
          <label className="option">
            <input type="radio" name="type" />
            Coupe (14)
          </label>
          <label className="option">
            <input type="radio" name="type" />
            Hatchback (14)
          </label>
        </div>

        <div className="filter-group">
          <h4>CAPACITY</h4>
          <label className="option">
            <input type="radio" name="capacity" />2 Person (10)
          </label>
          <label className="option">
            <input type="radio" name="capacity" />4 Person (14)
          </label>
          <label className="option">
            <input type="radio" name="capacity" />6 Person (12)
          </label>
          <label className="option">
            <input type="radio" name="capacity" />8 or More (16)
          </label>
        </div>

        <div className="filter-group">
          <h4>PRICE</h4>
          <p>Max. $100.00</p>
          <div className="price-bar"></div>
        </div>
      </aside>
      <div className="car-detail-page">
        <div className="car-detail-container">
          <div className="left-panel">
            <div className="left-panel-detail">
              <h2 className="car-type">
                {car.type} car with the best design and acceleration
              </h2>
              <p className="car-subtext">
                Safety and comfort while driving a futuristic and elegant{" "}
                {car.type} car.
              </p>
              <img src={car.image} className="main-car-img" />
            </div>
            <div className="car-thumbnails">
              <img src={view1} className="thumb active" />
              <img src={view2} className="thumb" />
              <img src={view3} className="thumb" />
            </div>
          </div>

          <div className="right-panel">
            <h2 className="car-name">{car.name}</h2>
            <div className="ratings">
              <span>
                <FaStar /> 4.8 • 45 Reviews
              </span>
            </div>
            <p className="car-desc">{car.description}</p>

            <div className="car-info">
              <div>
                <strong>Type Car:</strong> {car.type}
              </div>
              <div>
                <strong>Steering:</strong> {car.steering}
              </div>
              <div>
                <strong>Capacity:</strong> {car.capacity}
              </div>
              <div>
                <strong>Gasoline:</strong> {car.fuel}
              </div>
            </div>

            <div className="rent-section">
              <div className="price">
                <strong>${car.price}.00</strong>
                <span>/ day</span>
              </div>
              <Link to={`/payment/${car.id}`}>
                <button className="rent-btn2" style={{ marginTop: "10px" }}>
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h3>Reviews</h3>
        </div>
      </div>
    </>
  );
}

export default CarDetail;
