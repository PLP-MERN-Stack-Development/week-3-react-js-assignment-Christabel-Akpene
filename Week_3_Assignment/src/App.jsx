import { Routes, Route } from "react-router"
import Layout from "./pages/Layout"
import Task from "./pages/Task"
import Posts from "./pages/Posts"
function App() {

  return (
    <>
      <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Task/>}/>
       <Route path="/posts" element={<Posts/>}/>
       </Route>
      </Routes>
    </>
  )
}

export default App
