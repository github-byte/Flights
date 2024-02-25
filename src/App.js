import './App.css';
import { Box, useMediaQuery } from '@mui/material';
import SearchResults from './searchResults';
import LandingPage from './home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import { MainContext } from './utility';

const App = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (<MainContext.Provider value={{ deskTopView: matches }}>
    <Box className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </MainContext.Provider>
  );
}

export default App;
