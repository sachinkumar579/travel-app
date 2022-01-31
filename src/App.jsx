import "./App.css";
import Categories from "./containers/Categories/Categories.jsx";
import Header from "./components/Header/Header.jsx";
import TitleDescription from "./containers/Title/TitleDescription.jsx";
import Destinations from "./containers/Destinations/Destinations.jsx";
import BookingTrip from "./containers/BookingTrip/BookingTrip";
import Subscribe from "./containers/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TitleDescription></TitleDescription>
      <Categories></Categories>
      <Destinations></Destinations>
      <BookingTrip></BookingTrip>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
