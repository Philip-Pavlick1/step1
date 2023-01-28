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
  <label>Enter Name:</label> {/* Name Field */}
  <input
  type="text"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  />
  <br></br>
  <label>Enter Date Of Birth: </label> {/* Date Field */}
  <div>
  <Date1 value={DOB}
  onChange={(e) => setDOB(e.target.value)}></Date1>
  </div>
  <label>Choose Color: </label> {/* Color Field */}
  <select
  value={color}
  onChange={(e) => setColor(e.target.value)}
  >
  <option value='Select'>Select</option>
  <option value="Red">Red</option>
  <option value="Blue">Blue</option>
  <option value="Green">Green</option>
  </select>
  <button type="submit">Submit</button>
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