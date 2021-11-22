import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />}>
            {" "}
          </Route>
          <Route path="/new-meetup" element={<NewMeetup />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
