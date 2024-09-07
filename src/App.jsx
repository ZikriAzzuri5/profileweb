import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
