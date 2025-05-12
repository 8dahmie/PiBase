import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home';
import About from './Pages/About';
import Socials from './Components/Socials';
import Copy from './Components/Copy';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<MainLayout/>}>
        <Route index element={<Home />} />
          <Route path='copy' element={<Copy />} />
           <Route path='about' element={<About />} />
           <Route path='socials' element={<Socials />} />

      </Route>
    )
  )
 
  return <RouterProvider router={router} />
}

export default App
