import {
  Home,
  Womens,
  Men,
  Accessories,
  ContactUs,
  About,
} from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Womens />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
