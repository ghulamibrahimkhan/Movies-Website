import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import movies from "./movies.json";

function App() {
  return (
    <div className="App">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-wrap justify-center m-6 p-14 bg-slate-100">
        {
          movies.map((moviesObj) => {
            return (
              <Movies 
              title= {moviesObj.Title}
              poster= {moviesObj.Poster}
              year={moviesObj.Year}
              />
              )
          })
        }
      </div>
    </div>
  );
}

export default App;
