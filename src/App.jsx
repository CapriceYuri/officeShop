import Navigation from "./Components/Navigation/navigation";
import BannerTop from "./Components/Banner/banner-top";
import BannerCenter from "./Components/Banner/banner-center";

let obj = [
  { name: "Home", href: "/techShop/", current: true },
  { name: "Shop", href: "/techShop/Shop", current: false },
];

function App() {
  return (
    <>
      <Navigation navLocation={obj} />
      <BannerTop />
      <BannerCenter />
    </>
  );
}

export default App;
