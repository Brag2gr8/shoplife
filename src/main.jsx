import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom";
import Header from "./components/header/Header";

const movieLife = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />} />
    
));

function App() {
  return (
    <RouterProvider router={movieLife} />
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);