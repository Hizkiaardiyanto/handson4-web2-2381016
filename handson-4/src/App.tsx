import './App.css'
import ProductList from "./Components/ProductList"
import UsingState from './state/UsingState'
import Lifecycle from './lifecycle/Lifecycle'
import UnmountDemo from './lifecycle/UnmountDemo'
function App() {

  return (
    <>
      <ProductList/>
      <UsingState/>
      <Lifecycle/>
      <UnmountDemo/>
    </>
  )
}

export default App