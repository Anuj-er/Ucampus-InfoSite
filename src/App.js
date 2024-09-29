import { AppThemeProvider } from "./ui/theme/AppThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./conts/routes";
import { createContext, useState, useEffect } from 'react';
import Loader from './conts/Loader/Loader'; // Import the Loader component

export const ScrollContext = createContext();

function App() {
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(true); // State to handle loading

  // Simulate loading effect for the app
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 4 seconds
    }, 4000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollContext.Provider value={{ position, setPosition }}>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <AppThemeProvider>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </Router>
        </AppThemeProvider>
      )}
    </ScrollContext.Provider>
  );
}

export default App;