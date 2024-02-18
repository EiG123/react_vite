import "./App.css";
import Item from "./components/Item";
import logo from "./assets/logo.png"
import content from "./data/content";
export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h2>React + Vite</h2>
      <p>EiG123</p>
      {content.map((data)=>{
        return(
          <Item key={data.id} {...data}/>
        );
      })}
    </div>
  );
}
