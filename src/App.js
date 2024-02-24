import './App.css';
import { Box } from '@mui/material';
import SearchResults from './searchResults';
import LandingPage from './landingPage';
import Navbar from './navbar'

function App() {
  return (
    <Box className="App">
      <Navbar />
      <SearchResults />
      {/* <LandingPage/> */}
    </Box>
  );
}

export default App;
