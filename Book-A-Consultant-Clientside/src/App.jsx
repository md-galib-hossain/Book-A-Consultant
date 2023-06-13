
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './Pages/Routes/Public/Routes'

function App() {


  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
