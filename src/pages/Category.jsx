import "../styles/category.css";
import car1 from "../assets/image/car (1).png";
import car2 from "../assets/image/car (2).png";
import car3 from "../assets/image/car (3).png";
import car4 from "../assets/image/car (4).png";
import car5 from "../assets/image/car (5).png";
import car6 from "../assets/image/car (6).png";
import car7 from "../assets/image/car (7).png";
import car8 from "../assets/image/car (8).png";
import car9 from "../assets/image/car (9).png";
import { LuArrowDownUp } from "react-icons/lu";
import { useState } from "react";

const Category = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="car-listing">
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? "Hide SideBar" : "Show SideBar"}
      </button>
      {/* Sidebar */}
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

      {/* Content */}
      <div className="content">
        <div className="booking-container1 ">
          {/* Pick-Up */}
          <div className="form-section1">
            <h4>Pick - Up</h4>
            <div className="form-group1">
              <div className="form-item1">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                </select>
              </div>
              <div className="form-item1">
                <label>Date</label>
                <select>
                  <option>Select your date</option>
                </select>
              </div>
              <div className="form-item1">
                <label>Time</label>
                <select>
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="swap-button1">
            <LuArrowDownUp />
          </div>

          {/* Drop-Off */}
          <div className="form-section1">
            <h4>Drop - Off</h4>
            <div className="form-group1">
              <div className="form-item1">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                  <option>Pakistan</option>
                  <option>India</option>
                </select>
              </div>
              <div className="form-item1">
                <label>Date</label>
                <select>
                  <option>Select your date</option>
                </select>
              </div>
              <div className="form-item1">
                <label>Time</label>
                <select>
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Car Cards */}
        <div className="card-grid1">
          <div className="car-card1">
            <div className="car-top1">
              <h3>Koenigsegg</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car1} />
            </div>
            <div className="car-info1">
              <span>90L</span>
              <span>Manual</span>
              <span>2 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$99.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>Nissan GT-R</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car2} />
            </div>
            <div className="car-info1">
              <span>80L</span>
              <span>Manual</span>
              <span>2 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$80.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>Rolls-Royce</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car3} />
            </div>
            <div className="car-info1">
              <span>70L</span>
              <span>Manual</span>
              <span>4 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$96.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>All New Rush</h3>
              <span>SUV</span>
            </div>
            <div className="car-image1">
              <img src={car4} />
            </div>
            <div className="car-info1">
              <span>70L</span>
              <span>Manual</span>
              <span>6 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$72.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>CR - V</h3>
              <span>SUV</span>
            </div>
            <div className="car-image1">
              <img src={car5} />
            </div>
            <div className="car-info1">
              <span>80L</span>
              <span>Manual</span>
              <span>6 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$80.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>All New Terios</h3>
              <span>SUV</span>
            </div>
            <div className="car-image1">
              <img src={car6} />
            </div>
            <div className="car-info1">
              <span>74L</span>
              <span>Manual</span>
              <span>6 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$74.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>Koenigsegg</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car7} />
            </div>
            <div className="car-info1">
              <span>90L</span>
              <span>Manual</span>
              <span>2 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$99.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>Nissan GT-R</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car8} />
            </div>
            <div className="car-info1">
              <span>80L</span>
              <span>Manual</span>
              <span>2 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$80.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="car-card1">
            <div className="car-top1">
              <h3>Rolls-Royce</h3>
              <span>Sport</span>
            </div>
            <div className="car-image1">
              <img src={car9} />
            </div>
            <div className="car-info1">
              <span>70L</span>
              <span>Manual</span>
              <span>4 People</span>
            </div>
            <div className="car-bottom1">
              <div className="price1">$96.00 / day</div>
              <button>Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
