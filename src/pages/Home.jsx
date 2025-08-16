import "../styles/home.css";
import car1 from "../assets/image/car.png";
import car2 from "../assets/image/image8.png";
import { LuArrowDownUp } from "react-icons/lu";
import HomeCategory from "./homeCategory";

const headerSections = [
  {
    id: "header1",
    heading: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price",
    buttonText: "Rent a car",
    imgSrc: car1,
    boxClass: "box",
    imgClass: "",
    btnClass: "",
  },
  {
    id: "header2",
    heading: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price",
    buttonText: "Rent a car",
    imgSrc: car2,
    boxClass: "box box1",
    imgClass: "car2",
    btnClass: "btn",
  },
];

const bookingSections = [
  {
    id: "pickup",
    title: "Pick - Up",
    fields: [
      {
        id: "pickup-location",
        label: "Locations",
        options: ["Select your city"],
      },
      { id: "pickup-date", label: "Date", options: ["Select your date"] },
      { id: "pickup-time", label: "Time", options: ["Select your time"] },
    ],
  },
  {
    id: "dropoff",
    title: "Drop - Off",
    fields: [
      {
        id: "dropoff-location",
        label: "Locations",
        options: ["Select your city", "Pakistan", "India"],
      },
      { id: "dropoff-date", label: "Date", options: ["Select your date"] },
      { id: "dropoff-time", label: "Time", options: ["Select your time"] },
    ],
  },
];

function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="header section">
        {headerSections.map((item) => (
          <div key={item.id} className={item.boxClass}>
            <div className="header-text">
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <a href="#">
                <button className={item.btnClass}>{item.buttonText}</button>
              </a>
            </div>
            <div className="header-image">
              <img src={item.imgSrc} className={item.imgClass} alt={item.id} />
            </div>
          </div>
        ))}
      </div>

      {/* Booking Section */}
      <div className="booking-container section">
        <div className="form-section">
          <h4>{bookingSections[0].title}</h4>
          <div className="form-group">
            {bookingSections[0].fields.map((item) => (
              <div key={item.id} className="form-item">
                <label htmlFor={item.id}>{item.label}</label>
                <select id={item.id}>
                  {item.options.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="swap-button">
          <LuArrowDownUp />
        </div>

        <div className="form-section">
          <h4>{bookingSections[1].title}</h4>
          <div className="form-group">
            {bookingSections[1].fields.map((item) => (
              <div key={item.id} className="form-item">
                <label htmlFor={item.id}>{item.label}</label>
                <select id={item.id}>
                  {item.options.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomeCategory />
    </>
  );
}

export default Home;
