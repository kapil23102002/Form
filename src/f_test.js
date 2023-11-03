// import React from "react";
// import "./form.css";
// import TableData from "./table";

// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       city: "",
//       mobile: "",
//     };
//   }

//   handleChange1 = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleChange2 = (event) => {
//     this.setState({ email: event.target.value });
//   };
//   handleChange3 = (event) => {
//     this.setState({ city: event.target.value });
//   };
//   handleChange4 = (event) => {
//     this.setState({ mobile: event.target.value });
//   };

//   handleSubmit = (event) => {
//     if (
//       this.state.name === "" &&
//       this.state.email === "" &&
//       this.state.city === "" &&
//       this.state.mobile === ""
//     ) {
//       alert("You must fill all the fields..");
//     } else if (this.state.name.trim() === "") {
//       alert("Name must be filled out.");
//     } else if (this.state.email.trim() === "") {
//       alert("Email must be filled out.");
//     } else if (this.state.city.trim() === "") {
//       alert("City must be filled out.");
//     } else if (this.state.mobile.trim() === "") {
//       alert("Contact detail must be filled out.");
//     } else if (this.state.mobile.trim().length !== 10) {
//       alert("Please fill contact properly...");
//     } else if (this.state.mobile.length !== 10 && this.state.mobile !== isNaN) {
//       alert("Please fill contact properly...");
//       //
//     } else {
//       alert("Submit Successfully....");
//       //   this.props.onSubmit(this.state);

//       //
//     }
//     //
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <div>
//         <fieldset>
//           <legend>
//             <h1>Login Form</h1>
//           </legend>

//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group as={Col} md="4" controlId="validationCustom01">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="First name"
//                 value={this.state.name}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please choose a username.
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>

//             <Form.Group as={Col} md="6" controlId="validationCustom03">
//               <Form.Label>City</Form.Label>
//               <Form.Control type="text" placeholder="City" required />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid city.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="3" controlId="validationCustom05">
//               <Form.Label>Contact</Form.Label>
//               <Form.Control type="text" placeholder="Phone Number" required />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid Contact.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Button type="submit">Submit form</Button>
//           </Form>
//         </fieldset>
//         <TableData />
//       </div>
//     );
//   }
// }

// export default NameForm;
// //   const root = ReactDOM.createRoot(document.getElementById('root'));
// //   root.render(<NameForm />);

// // //
// // alert(
// //   "Name : " +
// //     this.state.name +
// //     "Email : " +
// //     this.state.email +
// //     "City : " +
// //     this.state.city +
// //     "Mobile : " +
// //     this.state.mobile
// // );

// // //
// // } else if (this.state.emailSet.includes(this.state.email)) {
// //   alert("This Email is already filled.");

// //   // document.getElementById('email').innerHTML = 'duplicate mail';
// //   // document.getElementById('email').style.color = 'red';
// // } else if (this.state.mobileSet.includes(this.state.mobile)) {
// //   alert("This Contact is already filled.");

// // document.getElementById('mobile').innerHTML = 'duplicat mobile number';
// // document.getElementById('mobile').style.color = 'red';
