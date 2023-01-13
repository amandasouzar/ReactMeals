import Header from "./Components/Header/Header";
import MainSummary from '../src/Components/Summary/MainSummary'
import MealList from "./Components/Meals/MealList";
import Modal from "./Components/UI/Modal";
import React, {useState} from "react";
import CartProvider from "./Store/cart-provider";

const Meals = [{
  id: 'g1',
  name: 'Sushi',
  price: 12.45,
  description: 'Fresh fish and veggies'
}, {
  id: 'g2',
  name: 'Barbecue Burguer',
  price: 30.21,
  description: 'American, raw, meaty'
}, {
  id: 'g3',
  name: 'Green Bowl',
  price: 7.10,
  description: 'Healthy... green...'
}, {
  id: 'g4',
  name: 'Popcorn',
  price: 5.50,
  description: 'Perfect for the movies!'
}]

function App() {
    
    const [ModalSets, SetModalSets] = useState(false)
    const ShowModalSet = () => {
      SetModalSets(true)
    }
    const CloseModalSet = () => {
      SetModalSets(false)
    }

  return (
    <CartProvider>
      <Header SetModalShow={ShowModalSet}></Header>
      <main>
      <MainSummary></MainSummary>
      <MealList AllMeals={Meals}></MealList>
      </main>
      {ModalSets && <Modal SetModalClose={CloseModalSet}></Modal>}
    </CartProvider>
  );
}

export default App;
