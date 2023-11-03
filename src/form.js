// import React from "react";
// import "./form.css";
// import TableData from "./table";
// // import Table from "./table";

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
//       <div className="container">
//         <fieldset>
//           <legend>
//             <h1>Login Form</h1>
//           </legend>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={this.state.name}
//                 onChange={this.handleChange1}
//               />
//             </label>{" "}
//             <br />
//             <label>
//               Email:
//               <input
//                 type="email"
//                 value={this.state.email}
//                 onChange={this.handleChange2}
//               />
//             </label>
//             <br />
//             <label>
//               City:
//               <input
//                 type="text"
//                 value={this.state.city}
//                 onChange={this.handleChange3}
//               />
//             </label>
//             <br />
//             <label>
//               Mobile:
//               <input
//                 type="tel"
//                 value={this.state.mobile}
//                 onChange={this.handleChange4}
//               />
//             </label>
//             <br />
//             <button type="submit" value="Submit">
//               Submit
//             </button>
//           </form>
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
