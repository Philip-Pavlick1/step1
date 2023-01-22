import { Stack } from "@mui/system";
import Grid1 from "./Grid1";


const App = () => {
  console.log('Hello from component')
  return (
    <Stack spacing={2} direction="row">
      <Grid1></Grid1>
    </Stack>
  )
}

// export default function App() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
//   );

export default App