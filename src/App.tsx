import { Provider } from "react-redux"
import "./App.css"

import { store } from './app/store';
import { RouterProvider } from "react-router-dom"
import { router } from './Router';
export default function App() {

  
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
