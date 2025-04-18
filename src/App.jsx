import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';


function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} /> 
          {/*<Route path="/team" element={<TeamScreen />} /> */}

        </Route>
      </Routes>
    // </Router>
  )
}

export default App


