import Header from "./Components/Header/Header";
import MainSummary from '../src/Components/Summary/MainSummary'
import MealList from "./Components/Meals/MealList";
import Modal from "./Components/UI/Modal";
import React, {useState} from "react";
import CartProvider from "./Store/cart-provider";


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
      <MealList></MealList>
      </main>
      {ModalSets && <Modal SetModalClose={CloseModalSet}></Modal>}
    </CartProvider>
  );
}

export default App;
