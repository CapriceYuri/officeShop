import Navigation from "./Components/Navigation/navigation";
import BannerTop from "./Components/Banner/banner-top";
import BannerCenter from "./Components/Banner/banner-center";
import BannerBottom from "./Components/Banner/banner-bottom";

let obj = [
  { name: "Home", href: "/officeShop/", current: true },
  { name: "Shop", href: "/officeShop/Shop", current: false },
];

function App() {
  return (
    <>
      <Navigation navLocation={obj} />
      <BannerTop />
      <BannerCenter />
      <BannerBottom />
    </>
  );
}

export default App;
