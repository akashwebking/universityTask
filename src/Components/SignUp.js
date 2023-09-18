import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Figure } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {" "}
      <Container>
        <Row className="mt-5 mb-5 ms-5">
          <Col className="ml-200">
            <h1 style={{ fontWeight: "700" }}>SIGNUP FORM</h1>
            <h4 style={{ fontSize: "15px" }}>It's Quick & Easy</h4>
            <p style={{ fontSize: "10px", color: "gray" }}>
              Enter your Credential Details to Create a new account
            </p>
            <Form style={{ width: "400px" }}>
              <Form.Group controlId="form.Name">
                <Form.Label style={{ fontSize: "11px", fontWeight: "600" }}>
                  First Name<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                  size="sm"
                  style={{ fontSize: "11px", height: "30px" }}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Email address<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                  size="sm"
                  style={{ fontSize: "11px", height: "30px" }}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.password">
                <Form.Label
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                    size="sm"
                    style={{ fontSize: "11px", height: "30px" }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "azure" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible style={{ color: "gray" }} />
                    ) : (
                      <AiOutlineEye style={{ color: "gray" }} />
                    )}
                  </span>
                </div>
              </Form.Group>
              <input
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  width: "20px",
                  marginTop: "30px",
                }}
                type="checkbox"
                inline
              />
              <span style={{ fontSize: "11px", color: "black" }}>
                {" "}
                I accept the <span className="text-primary">
                  Terms of use
                </span>{" "}
                & <span className="text-primary ">Privacy Policy</span>
              </span>
              <Button
                className="mt-4"
                type="submit"
                style={{
                  backgroundColor: "green",
                  width: "400px",
                  fontWeight: "600",
                }}
              >
                SIGN UP
              </Button>

              <div className="d-flex mb-1 mt-3">
                <hr className="border-2 " style={{ width: "48%" }} />
                <span className="text-dark">&nbsp; or &nbsp;</span>
                <hr className="border-2" style={{ width: "48%" }} />
              </div>
              <Row>
                <Col className="text-center mt-0.1">
                  <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray" }}
                  >
                    <FcGoogle style={{ fontSize: "1.5em" }} />
                    &nbsp;<b>sign in with Google</b>
                  </Button>
                </Col>
                <Col className="text-center mt-0.1">
                  <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray" }}
                  >
                    <BsApple style={{ fontSize: "1.5em" }} />
                    &nbsp;<b>sign in with Apple</b>
                  </Button>
                </Col>
              </Row>
              <p
                style={{ fontSize: "12px", marginTop: "20px" }}
                className="text-center"
              >
                I already have a account!
                <span className="text-primary">login</span>
              </p>
            </Form>
          </Col>

          <Col md={7} className="justify-content-end ">
            <Figure>
              <Figure.Image
                style={{
                  height: "580px",
                  width: "500px",
                  marginLeft: "30px",
                  marginTop: "-20px",
                }}
                src={require("./2/Rectangle 4597-1.png")}
              />
            </Figure>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Signup;
