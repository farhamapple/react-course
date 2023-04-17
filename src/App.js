import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavoritePage from "./pages/Favorite";
import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupPage from "./pages/NewMeetUp";
import MainNavigationPage from "./components/layout/MainNavigation";

function App() {
  // localhost:3000/

  return (
    <div>
      <BrowserRouter>
        <MainNavigationPage>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="new-meetup" element={<NewMeetupPage />} />
            <Route path="favorites" element={<FavoritePage />} />
          </Routes>
        </MainNavigationPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
