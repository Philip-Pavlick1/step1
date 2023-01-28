import * as React from 'react'
import Grid1 from "./Grid1";
import Form from "./Form";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Sample () {
  return (
    <div>
      <Grid1></Grid1>
    </div>
  );
}

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Sample />} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

// const App = () => {
//   console.log('Hello from component') 
//   return (
//     <Stack spacing={2} direction="row">
//       {/* <Grid1>
//       </Grid1> */}
//       <Form></Form>


//     </Stack>
//   )
// }

// export default function App() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
//   );

