import {Routes, Route} from "react-router-dom"
import { Homepageku } from "./halamanku/homepage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepageku/>}></Route>
    </Routes>
  )
}

export default App
