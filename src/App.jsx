import "./App.css";
import Categories from "./containers/Categories/Categories.jsx";
import Header from "./components/Header/Header.jsx";
import TitleDescription from "./containers/Title/TitleDescription.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TitleDescription></TitleDescription>
      <Categories></Categories>
    </div>
  );
}

export default App;
