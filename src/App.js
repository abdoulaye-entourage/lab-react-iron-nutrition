import { useState } from 'react';
import FoodBox from './component/FoodBox';
import foods from './foods.json';
import './styles/App.css';
import { Divider } from 'antd';
import Header from './component/Header';
import AddFoodForm from './component/AddFoodForm';
import HideShowButton from './component/HideShowButton';
import Search from './component/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  function handleForm() {
    setShowForm(!showForm);
  }
  const deleteFood = (foodToDelete) => {
    // filtrer foodList :
    const newFoodArray = foodList.filter(
      (food) => food.name !== foodToDelete.name
    );
    setFoodList(newFoodArray);
  };
  // Pour chaque food du tableau je vais verifier si le nom est different du nom de l'elment à supprimer.

  function addFood(newFood) {
    setFoodList([...foodList, newFood]);
  }

  const searchData = (foodToSearch) => {
    const dataFiltered = foods.filter((foodElement) => {
      if (foodToSearch === '') {
        return foodElement;
      } else {
        return foodElement.name
          .toLowerCase()
          .includes(foodToSearch.toLowerCase());
      }
    });
    setFoodList(dataFiltered);
  };

  return (
    <div className="App">
      <Header title="NUTRITION">
        <>
          <HideShowButton handleForm={handleForm} />
          <Search searchData={searchData} />
        </>
      </Header>
      {showForm && <AddFoodForm addFood={addFood} />}
      <Divider>FOOD LIST</Divider>
      <div className="foodList">
        {foodList.map((food) => {
          return (
            <FoodBox key={food.name} deleteFood={deleteFood} food={food} />
          );
        })}
      </div>
    </div>
  );
}
export default App;
