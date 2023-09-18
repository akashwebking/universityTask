import React from "react";
import "./Ws.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button, Figure, Image } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";
import img1 from "../Icons/i1.jpg";
import img2 from "../Icons/i2.jpg";
import img3 from "../Icons/i3.jpg";
import img4 from "../Icons/i4.jpg";
import img5 from "../Icons/i5.jpg";
import img6 from "../Icons/i6.jpg";
import Footer from "./Footer";

const Whysenchola = () => {
  const iconSize = "3rem"; // Adjust the size as needed

  const iconStyle = {
    fontSize: iconSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={{ backgroundColor: "rgb(252, 252, 172)", marginTop: "-3%" }}>
        <Container>
          <Row className="mt-5">
            <Col className="mt-5">
              <h3 style={{ color: "rgb(1, 96, 1)", fontWeight: "700" }}>
                Best Learning <br></br>Education Platform <br></br>is Senchola
              </h3>
              <p style={{ width: "75%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Audax
                negotium, dicerem impudens, nisi hoc institut translatum ad
                philosophos nostros esset.
              </p>
              <Button
                style={{
                  backgroundColor: "rgb(1, 96, 1)",
                  borderColor: "gray",
                  width: "150px",
                }}
                className="rounded-5"
              >
                Learn more
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button
                className=" rounded-5 "
                style={{
                  backgroundColor: "rgb(252, 252, 172)",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "80%",
                  borderColor: "gray",
                  width: "150px",
                }}
                type="submit"
              >
                <BsPlayCircle
                  className
                  style={{ fontSize: "165%", backgroundColor: "azure" }}
                />
                &nbsp;Watch Video
              </Button>
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  style={{
                    width: "45%",
                    marginTop: "5rem",
                    marginRight: "2.5%",
                    height: "300px",
                  }}
                  src={require("./1/Rectangle 4.png")}
                />
                <span
                  className="rounded-3 pe-0 ps-0"
                  style={{
                    backgroundColor: "rgba(227, 222, 222,0.8)",
                    position: "absolute",
                    marginTop: "20%",
                    marginRight: "20%",
                    marginLeft: "-3%",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                >
                  <span
                    style={{ padding: "2%", fontWeight: "600", color: "black" }}
                  >
                    &#10003;
                  </span>
                  <span style={{ fontSize: "12px" }} className="text-dark">
                    Build remote teams &nbsp;&nbsp;&nbsp;&nbsp;faster with
                    senchola<br></br>
                  </span>
                  <span
                    style={{ padding: "2%", fontWeight: "600", color: "black" }}
                  >
                    &#10003;
                  </span>
                  <span style={{ fontSize: "12px" }} className="text-dark">
                    {" "}
                    Expert Trainee
                  </span>
                </span>
                <Figure.Image
                  style={{
                    width: "45%",
                    marginTop: "-60px",
                    height: "300px",
                  }}
                  src={require("./1/Rectangle 5.png")}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="mt-5">
            <Col style={{ width: "45%" }}>
              <h3 style={{ fontWeight: "700", fontSize: "160%" }}>
                Why Senchola <br></br>University?
              </h3>
              <br></br>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                What we teach is much more relevant for real software careers.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                At Senchola, we look for skillsets and abilities more than for
                paper credentials.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                We do not charge our students any fees.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                After the successful completion of the Intership, you are
                automatically inducted as an employee into Senchola Technologies
                Solution.
              </p>
            </Col>
            <Col style={{ marginTop: "10%" }}>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                Lorem ipsum dolor sit amet consectetur. Urna vitae fermentum
                nunc sit proin elementumnibh elementum.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                  &#10003;
                </span>
                Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut,
                Varius magna ultricies varius vitae adipiscing imperdiet
                ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed
                fringilla ligula a. Orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="background-image" style={{ marginTop: "10%" }}>
        <Container>
          <Row>
            <Col
              className="rounded-3 "
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "25px",
                height: "450px",
                marginTop: "-110px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img1} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Breadth and Depth for Immediate Scale
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="rounded-3 "
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "20px",
                height: "450px",
                marginTop: "20px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img2} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Scaleable Managed Outsourcing
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="rounded-3 "
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "20px",
                height: "450px",
                marginTop: "-110px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img3} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Elastic Freelancer Model
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className="rounded-3 "
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "20px",
                height: "450px",
                marginTop: "-110px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img4} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Global Pricing Model
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="rounded-3"
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "20px",
                height: "450px",
                marginTop: "20px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img5} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Jumpstart Your Business
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="rounded-3 "
              style={{
                backgroundColor: "rgba(227, 222, 222,0.8)",
                padding: "4%",
                fontWeight: "400",
                width: "20px",
                height: "450px",
                marginTop: "-110px",
                marginRight: "50px",
              }}
            >
              <div style={iconStyle}>
                <Image style={{ width: "60px" }} src={img6} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Exclusive Professional Marketplace
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="mt-5">
            <Col>
              <Figure>
                <Figure.Image
                  style={{ width: "80%", marginTop: "30%" }}
                  src={require("./1/Rectangle 4611.png")}
                />
                <span
                  className="rounded-3 pe-0 ps-0"
                  style={{
                    backgroundColor: "rgba(227, 222, 222,0.5)",
                    position: "absolute",
                    marginTop: "35%",
                    marginLeft: "-13%",
                    marginRight: "56%",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                >
                  <span
                    style={{ padding: "2%", fontWeight: "600", color: "black" }}
                  >
                    &#10003;
                  </span>
                  <span className="text-dark">
                    Build remote teams &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;faster with
                    senchola<br></br>
                  </span>
                  <span
                    style={{ padding: "2%", fontWeight: "600", color: "black" }}
                  >
                    &#10003;
                  </span>
                  <span className="text-dark"> Expert Trainee</span>
                </span>
              </Figure>
            </Col>
            <Col style={{ marginTop: "15%" }}>
              <h3 style={{ width: "350px", fontWeight: "600" }}>
                Lorem integer dapibus rhoncus fusce nisi augue fringilla.
              </h3>
              <p style={{ width: "340px", color: "grey", marginTop: "20px" }}>
                Lorem ipsum dolor sit amet consectetur. Cras lacinia ante
                tincidunt donec praesent pellentesque bibendum. Consectetur
                ipsum et id nullam interdum. Lorem vel mauris in a lorem
                scelerisque mi tempor. Dignissim sed sem ac sagittis elit dolor
                nisi egestas. Egestas sagittis sagittis odio nisi urna
                malesuada. Lectus diam id molestie et egestas luctus. Nam
                venenatis integer purus proin nisl.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <h4
            style={{
              textAlign: "center",
              marginTop: "10%",
              fontWeight: "800",
              color: "rgb(1, 96, 1)",
            }}
          >
            RECRUITING TOP TALENTS
          </h4>
          <p style={{ textAlign: "center", fontWeight: "500" }}>
            RECRUITING TOP TALENTS
          </p>

          <Col>
            <Figure style={{ marginTop: "5%" }}>
              <Figure.Image
                style={{ width: "72%", marginTop: "-26%", marginRight: "1%" }}
                src={require("./2/Rectangle 4605.png")}
              />
              <Figure.Image
                style={{ width: "24%", marginTop: "-2%" }}
                src={require("./1/Rectangle 4609.png")}
              />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                style={{ width: "24%", marginTop: "-25%", marginRight: "1%" }}
                src={require("./1/Rectangle 4607.png")}
              />
              <Figure.Image
                style={{ width: "47.5%", marginTop: "-48%" }}
                src={require("./2/Rectangle 4606.png")}
              />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                style={{ width: "31.5%", marginTop: "-28%", marginLeft: "25%" }}
                src={require("./1/Rectangle 4608.png")}
              />
              <Figure.Image
                style={{ width: "39%", marginTop: "-33%", marginLeft: "58%" }}
                src={require("./1/Rectangle 4610.png")}
              />
            </Figure>
          </Col>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Whysenchola;
