import './App.css'
import Home from './Component/Home/Home';
import{RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeOthers from './Component/HomeOthers/HomeOthers';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>,
      children:[
        {
          path:'/',
          element:<HomeOthers></HomeOthers>
        }
      ]
    }
  ])
return (
   <RouterProvider router={router}>
   </RouterProvider>
  )
}

export default App
