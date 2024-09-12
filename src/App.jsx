import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./pages/NotFound/NotFound";
import { Contact } from "./pages/Contact/Contact";
import { Project } from "./pages/Project/Project";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "*", element: <Layout><NotFound /></Layout> },
  { path: "/contact", element: <Layout><Contact /></Layout> },
  { path: "/projects", element: <Layout><Project /></Layout> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
