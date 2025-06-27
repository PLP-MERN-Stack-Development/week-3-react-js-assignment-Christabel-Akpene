import { Routes, Route } from "react-router"
import Layout from "./pages/Layout"
import Task from "./pages/Task"
function App() {

  return (
    <>
      <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Task/>}/>
       </Route>
      </Routes>
    </>
  )
}

export default App
