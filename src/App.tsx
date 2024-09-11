import { Provider } from "react-redux"
import "./App.css"

import { persistor, store } from './app/store';
import { RouterProvider } from "react-router-dom"
import { router } from './Router';
import { PersistGate } from "redux-persist/integration/react";
export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}
