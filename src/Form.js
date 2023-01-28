/* Form.js is a functional component that renders a form with inputs for name, date of birth, and a color selection.
 From.js uses the useState to manage the state of the form and check the validity of the data to avoid null entries.
Form.js uses Date1.js and the react-datepicker library for date of birth selection. */

import { useState } from "react";
import Date1 from "./Date1";

const Form = () => {
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [color, setColor] = useState('Select');
  const [submitted, setSubmitted] = useState(false);

  const addNote = (event) => {
    event.preventDefault()
    if(name !== "" && color !== 'Select' && (DOB instanceof Date || DOB !== "")){
      setSubmitted(true)
    }else{
      alert("Please fill in all the fields")
    }
  }

  return (
    <div className="create">
      <h2>Enter Data</h2>
      <form  onSubmit={addNote}>
        <label htmlFOr="Enter Name:"> Enter Name:</label> {/* Name Field */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="DOB">Enter Date Of Birth: </label> {/* Date Field */}
        <div>
          <Date1 value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            id="DOB"
          ></Date1>
        </div>
        <label htmlFor="color">Choose Color: </label> {/* Color Field */}
        <select
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value='Select'>Select</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
        <button type="submit">Submit</button> {/* Submit Field */}
        {submitted && <p>The form was submitted</p>}
      </form>
    </div>
  );
}

export default Form;

// import { useState } from "react";
// import Date1 from "./Date1";


// const Form = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('Red');
//   const [submitted, setSubmitted] = useState(false);

//   const addNote = (event) => {
//     event.preventDefault()
//     setSubmitted(true)
//     }

//   return (
//     <div className="create">
//       <h2>Enter Data</h2>
//       <form  onSubmit={addNote}>  

//         <label>Enter Name:</label>  {/* Name Field */}
//         <input 
//           type="text" 
//           required 
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br></br>
//         <label>Enter Date Of Birth: </label>  {/* Date Field */}
//         <div>
//           <Date1></Date1>
//         </div>
//         <label>Choose Color: </label>     {/* Color Field */}
//         <select
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         >
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Green">Green</option>
//         </select>      
//         <button type="submit">Submit</button>    
//         {submitted && <p>The form was submitted</p>}    
//       </form>
//     </div>
//   );
// }
 
// export default Form;