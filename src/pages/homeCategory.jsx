import "../styles/homeCategory.css";
import { FaGasPump, FaUsers, FaRegHeart } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { Link } from "react-router-dom";

// Images
import car1 from "../assets/image/car (1).png";
import car2 from "../assets/image/car (2).png";
import car3 from "../assets/image/car (3).png";
import car4 from "../assets/image/car (4).png";
import car5 from "../assets/image/car (5).png";
import car6 from "../assets/image/car (6).png";
import car7 from "../assets/image/car (7).png";
import car8 from "../assets/image/car (8).png";
import car9 from "../assets/image/car (9).png";
import car10 from "../assets/image/car (10).png";
import car11 from "../assets/image/car (11).png";

// Car List Data (with IDs)
const carList = [
  {
    id: "1",
    name: "Koenigsegg",
    type: "Sport",
    fuel: "90L",
    gear: "Manual",
    seats: "2 People",
    price: "$99.00",
    oldPrice: null,
    image: car1,
  },
  {
    id: "2",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car2,
  },
  {
    id: "3",
    name: "Rolls - Royce",
    type: "Sedan",
    fuel: "70L",
    gear: "Manual",
    seats: "4 People",
    price: "$96.00",
    oldPrice: null,
    image: car3,
  },
  {
    id: "4",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car4,
  },
  {
    id: "5",
    name: "Koenigsegg",
    type: "Sport",
    fuel: "90L",
    gear: "Manual",
    seats: "2 People",
    price: "$99.00",
    oldPrice: null,
    image: car5,
  },
  {
    id: "6",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car6,
  },
  {
    id: "7",
    name: "Rolls - Royce",
    type: "Sedan",
    fuel: "70L",
    gear: "Manual",
    seats: "4 People",
    price: "$96.00",
    oldPrice: null,
    image: car7,
  },
  {
    id: "8",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car8,
  },
  {
    id: "9",
    name: "Koenigsegg",
    type: "Sport",
    fuel: "90L",
    gear: "Manual",
    seats: "2 People",
    price: "$99.00",
    oldPrice: null,
    image: car9,
  },
  {
    id: "10",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car10,
  },
  {
    id: "11",
    name: "Rolls - Royce",
    type: "Sedan",
    fuel: "70L",
    gear: "Manual",
    seats: "4 People",
    price: "$96.00",
    oldPrice: null,
    image: car11,
  },
  {
    id: "12",
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    image: car4,
  },
];

const HomeCategory = () => {
  return (
    <div className="cars-categories section">
      <h3 className="heading">Popular Cars</h3>
      <div className="car-cards-container">
        {carList.map((item, index) => (
          <div className="car-card" key={item.id} id={item.id}>
            <div className="card-header">
              <div>
                <h3>{item.name}</h3>
                <p>{item.type}</p>
              </div>
              <FaRegHeart className="heart" />
            </div>

            <img src={item.image} alt={item.name} className="car-img" />

            <div className="car-info">
              <span>
                <FaGasPump /> {item.fuel}
              </span>
              <span>
                <GiGearStickPattern /> {item.gear}
              </span>
              <span>
                <FaUsers /> {item.seats}
              </span>
            </div>

            <div className="car-footer">
              <div className="price">
                <h3>
                  {item.price} <span>/ day</span>
                </h3>
                {item.oldPrice && <p className="old-price">{item.oldPrice}</p>}
              </div>
              <Link to={`/car/${item.id}`}>
                <button
                  className={`rent-btn ${index % 2 === 0 ? "r-btn" : ""}`}
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <a href="./category">
        <button className="btn1">Show More</button>
      </a>
    </div>
  );
};

export default HomeCategory;
