import Navigation from "../Components/Navigation/navigation";
import Card from "../Components/Card/card";

let obj = [
  { name: "Home", href: "/officeShop/", current: false },
  { name: "Shop", href: "/officeShop/Shop", current: true },
  { name: "Cart", href: "/officeShop/Cart", current: false },
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
