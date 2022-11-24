import Navbar from "./components/side_navbar/Navbar";
import {Box} from "@chakra-ui/react"
import HeaderSector from "./components/middle/HeaderSector";
import RightHeaderSector from "./components/right_side/RightHeaderSector";
function App() {
  return <Box display="flex" gap="10px" w="90%" m="auto" boxShadow='2xl' p='6' h="auto" rounded='md' bg='white'>
    <Navbar/>
    <HeaderSector/>
    <RightHeaderSector/>
  </Box>
}

export default App;
