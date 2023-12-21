import Navigation from "../Components/Navigation/navigation";
import Card from "../Components/Card/card";

let obj = [
  { name: "Home", href: "/techShop/", current: false },
  { name: "Shop", href: "/techShop/Shop", current: true },
];

function Shop() {
  return (
    <>
      <Navigation navLocation={obj} />
      <Card />
    </>
  );
}

export default Shop;
