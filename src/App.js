
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./components/Details";
import Show from "./components/Show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Show />
  },
  {
    path: "products/:id",
    element: <Details />
  }

])

function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
