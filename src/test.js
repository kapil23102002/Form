// import React from "react";
// import "./form.css";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// class NameForm extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Form onSubmit={this.props.handleSubmit}>
//           <Row className="my-2 mt-5">
//             <Col>
//               <Form.Control
//                 placeholder="First name"
//                 type="text"
//                 value={this.props.name}
//                 name="name"
//                 onChange={this.props.handleChange}
//                 required
//               />
//             </Col>
//             <Col>
//               <Form.Control
//                 placeholder="Email "
//                 type="email"
//                 value={this.props.email}
//                 name="email"
//                 onChange={this.props.handleChange}
//                 required
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Form.Control
//                 type="text"
//                 value={this.props.city}
//                 name="city"
//                 onChange={this.props.handleChange}
//                 placeholder="Enter Your City"
//                 required
//               />
//             </Col>
//             <Col>
//               <Form.Control
//                 placeholder="Contact Number"
//                 type="tel"
//                 value={this.props.mobile}
//                 name="mobile"
//                 onChange={this.props.handleChange}
//                 required
//               />
//             </Col>
//           </Row>
//           <button className="btn btn-success my-2" type="submit">
//             Submit
//           </button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default NameForm;
