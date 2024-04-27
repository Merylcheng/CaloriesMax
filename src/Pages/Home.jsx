import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      Home
      <h2>Watching your calories intake and too lazy to plan a meal?</h2>
      <Link to="/RecipeList">
        <button>Get started on your journey!</button>
      </Link>
    </div>
  );
}

export default Home;
