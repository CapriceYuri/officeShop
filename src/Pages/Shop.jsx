import Navigation from "../Components/Navigation/navigation";
import Card from "../Components/Card/card";

let obj = [
  { name: "Home", href: "/officeShop/", current: false },
  { name: "Shop", href: "/officeShop/Shop", current: true },
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
