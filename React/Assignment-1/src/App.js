import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/header";
import food from "./assets/food.jpg";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const headerItem = {
    title: "Kuymak",
    date: "12-01-2021, Tuesday",
  };
  const recipeItem = {
    image: food,
    description:
      "Traditional food from the Blacksea Region of Turkey. Recommended to eat with a glass of tea at the breakfast. Ingredients: Cornflour, Local Cheese, Butter",
  };

  const likeCount = 150;
  const isLiked = false;

  return (
    <div className="App">
      <div className="card">
        <Header author={recipeAuthor} item={headerItem} />
        <Card item={recipeItem} likeCo={likeCount} liked={isLiked} />
      </div>
    </div>
  );
}

export default App;
