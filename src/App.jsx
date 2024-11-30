import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "./page/Home"
import ShopPage from "./page/ShopPage"
import Layout from "./components/Layout"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>

    <Route index element= {<Home/>}></Route>
    <Route path="/shop" element={<ShopPage/>}></Route>
  </Route>
  
))


function App() {

  return (
   <>
 <RouterProvider router={router}/>
   </>
  )
}

export default App
