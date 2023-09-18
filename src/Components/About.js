import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "./images/Rectangle -1.png";
import img2 from "./images/Rectangle -2.png";
import img3 from "./images/Rectangle -3.png";
import img4 from "./images/Rectangle -4.png";
import img5 from "./images/Rectangle -5.png";
import img6 from "./images/test-1.png";
import img7 from "./images/test-2.png";
import img8 from "./images/test-3.png";
import { RiStarSFill } from "react-icons/ri";

import { HiOutlineBookOpen } from "react-icons/hi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Footer from "./Footer";
const About = () => {
  return (
    <div className="main">
      <Card>
        <Card.Img src={img1} alt="Image" />
        <Card.ImgOverlay>
          <Card.Title>
            <div className="text text-light fw-bolder">
              <h1>
                <b> W</b>e are the Best Company for your business ready to take
                your Brand sky high.
              </h1>
              <button
                className="btn btn-success w-25 "
                style={{ marginBottom: "2rem" }}
              >
                {" "}
                LEARN MORE
              </button>
            </div>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="container" id="About_con">
        <span className="round_blue"></span>
        <span className="book-1 text-success">
          {" "}
          <HiOutlineBookOpen />
        </span>
        <div className="row">
          <div className="col-6">
            <h1 className="fw-bolder  mb-4 ">About Senchola!</h1>
            <p>
              We are deeply invested in helping businesses focus on business, so
              our services are designed to be hassle-free. We adapt to your
              organization structure through freelancing or outsourcing,
              relieving you of the roadblocks that inhibit your company's
              growth.{" "}
            </p>
            <p>
              No matter the scale of your needs, we outsource the exact number
              of business professionals or processes your company needs for
              success. Our services grow easily with your business, ensuring
              your evolving needs are met.{" "}
            </p>
            <span className="book-2 text-success">
              {" "}
              <HiOutlineBookOpen />
            </span>

            <p>
              Our professional resources and outsourcing services give your
              company the breadth and depth it needs to scale with speed from a
              single partner. Let your business needs fall on our broad
              expertise to drive growth.{" "}
            </p>
            <button
              className="btn btn-success"
              style={{ borderRadius: "20px 20px 20px 20px" }}
            >
              View More
            </button>
          </div>
          <div className="col align-self-center">
            <img src={img2} alt="#" />
          </div>
          <div className="col align-self-center">
            <img src={img3} alt="#" />
            <img src={img4} alt="#" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <span className="book-3 text-success">
            {" "}
            <HiOutlineBookOpen />
          </span>
          <span className="round_yellow"></span>
          <h1
            id="Global"
            className="text-success fw-bold text-center"
            style={{ marginTop: "80px" }}
          >
            GLOBAL MANAGED SERVICES
          </h1>
          <p className="text-center mt-4  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            atque tempora quis consequatur <br /> vel ipsum architecto beatae
            doloribus ea tenetur?
          </p>
        </div>
        <span className="book-4 text-success">
          {" "}
          <HiOutlineBookOpen />
        </span>

        <div className="row" id="row">
          <div className="col-4 card box pt-5 p-5">
            <h2>Marketing </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odit! Dolor sunt quos sed placeat facere amet vero quas illum vel
              reiciendis rerum culpa quidem, est quisquam, illo aspernatur,
              officiis provident corporis. Voluptatibus tenetur, omnis quibusdam
              reiciendis delectus excepturi optio?
            </p>
            <div className="tick">
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success ">Customer Service </span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success "> Technical Support</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success ">Sales </span>{" "}
              </li>
            </div>
            <a
              href="#"
              className="right_aro text-success text-end  fw-bold "
              style={{ textDecoration: "none", marginTop: "30px" }}
            >
              View All
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-success ps-2"
                />
              </span>{" "}
            </a>
          </div>

          <div className="col-4 card box pt-5 p-5 ">
            <h2>Sales Agency </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odit! Dolor sunt quos sed placeat facere amet vero quas illum vel
              reiciendis rerum culpa quidem, est quisquam, illo aspernatur,
              officiis provident corporis. Voluptatibus tenetur, omnis quibusdam
              reiciendis delectus excepturi optio?
            </p>
            <div className="tick">
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Business Development</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success"> Sales Development </span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Appointment Setting </span>{" "}
              </li>
            </div>
            <a
              href="#"
              className="right_aro text-success text-end  fw-bold "
              style={{ textDecoration: "none", marginTop: "30px" }}
            >
              View All
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-success ps-2"
                />
              </span>{" "}
            </a>
          </div>
          <div className="col-4 card box  pt-5 p-5" id="box">
            <h2>Back Office</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odit! Dolor sunt quos sed placeat facere amet vero quas illum vel
              reiciendis rerum culpa quidem, est quisquam, illo aspernatur,
              officiis provident corporis. Voluptatibus tenetur, omnis quibusdam
              reiciendis delectus excepturi optio?
            </p>
            <div className="tick">
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success"> Data Entry</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Virtual Assistants</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success"> Online Research </span>{" "}
              </li>
            </div>
            <a
              href="#"
              className="right_aro text-success text-end  fw-bold "
              style={{ textDecoration: "none", marginTop: "30px" }}
            >
              View All
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-success ps-2"
                />
              </span>{" "}
            </a>
          </div>
          <span className="round_purble"></span>
          <div className="col-4 card box  pt-5 p-5">
            <h2>RPO </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odit! Dolor sunt quos sed placeat facere amet vero quas illum vel
              reiciendis rerum culpa quidem, est quisquam, illo aspernatur,
              officiis provident corporis. Voluptatibus tenetur, omnis quibusdam
              reiciendis delectus excepturi optio?
            </p>
            <div className="tick">
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Employee </span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Contractors </span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Payroll </span>{" "}
              </li>
            </div>
            <a
              href="#"
              className="right_aro text-success text-end  fw-bold "
              style={{ textDecoration: "none", marginTop: "30px" }}
            >
              View All
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-success ps-2"
                />
              </span>{" "}
            </a>
          </div>
          <div className="col-4 card box  pt-5 p-5">
            <h2>Clint Managed </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odit! Dolor sunt quos sed placeat facere amet vero quas illum vel
              reiciendis rerum culpa quidem, est quisquam, illo aspernatur,
              officiis provident corporis. Voluptatibus tenetur, omnis quibusdam
              reiciendis delectus excepturi optio?
            </p>
            <div className="tick">
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Elastic Workforce</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">One to Several</span>
              </li>
              <li className="p-2">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ marginRight: "16px" }}
                />
                <span className="text-success">Team Integration </span>{" "}
              </li>
            </div>
            <a
              href="#"
              className="right_aro text-success text-end  fw-bold "
              style={{ textDecoration: "none", marginTop: "30px" }}
            >
              View All
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-success ps-2"
                />
              </span>{" "}
            </a>
          </div>
          <span className="book-5 text-success">
            {" "}
            <HiOutlineBookOpen />
          </span>
        </div>
      </div>
      <Card style={{ marginTop: "70px", marginBottom: "-17px" }}>
        <Card.Img src={img5} alt="Image" />
        <Card.ImgOverlay>
          <Card.Title>
            <div className="container text-light" id="bottom_card">
              <div className="total_cards mt-5  d-flex  justify-content-around  ">
                <div className="card h-auto ">
                  <div className="testymo" style={{ textAlign: "center" }}>
                    <img
                      style={{ width: "80px" }}
                      src={img6}
                      alt=""
                      className=" mt-4 rounded-5   "
                    ></img>
                    <br />
                    <span className="text-dark fw-bolder"> Elveny Petun</span>
                    <br />
                    <p className="text-warning mt-2 ">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </p>
                  </div>
                  <p className=" p-4" style={{ lineHeight: "30px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, consectetur?
                  </p>
                </div>
                <div className="card ">
                  <div className="testymo" style={{ textAlign: "center" }}>
                    <img
                      style={{ width: "80px" }}
                      src={img8}
                      alt=""
                      className=" mt-4 rounded-5 mb-3  "
                    ></img>
                    <br />
                    <span className="text-dark fw-bolder"> Elveny Petun</span>
                    <br />
                    <p className="text-warning mt-2 ">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </p>
                  </div>
                  <p className=" p-4" style={{ lineHeight: "30px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, consectetur?
                  </p>
                </div>
                <div className="card  ">
                  <div className="testymo" style={{ textAlign: "center" }}>
                    <img
                      style={{ width: "80px" }}
                      src={img7}
                      alt=""
                      className=" mt-4 rounded-5 mb-3  "
                    ></img>
                    <br />
                    <span className="text-dark fw-bolder"> Elveny Petun</span>
                    <br />
                    <p className="text-warning mt-2 ">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </p>
                  </div>
                  <p className=" p-4" style={{ lineHeight: "30px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, consectetur?
                  </p>
                </div>
              </div>
            </div>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Footer></Footer>
    </div>
  );
};

export default About;
