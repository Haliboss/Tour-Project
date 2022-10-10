import "./scss/App.scss";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { data } from "./data";

function App() {
  return (
    <div className="father">
      <Navbar />
      <Header />
      <div className="mother">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
