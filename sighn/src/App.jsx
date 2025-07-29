
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Register from './new'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
