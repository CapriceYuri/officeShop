import Navigation from "./Components/Navigation/navigation"

let obj = [
  { name: 'Home', href: '/techShop/', current: true },
  { name: 'Shop', href: '/techShop/Shop', current: false },
]

function App() {

  return (
    <>
    <Navigation navLocation={obj}/>
    </>
  )
}

export default App
