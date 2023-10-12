import Header from "./components/Header";
import Body from "./components/Body";
import AuthDetails from "./components/AuthDetails";

import "./App.css";


const App = () => {
  return (
    <main>
      

      <div className='app'>
        <AuthDetails />
        <Header />
        <Body />
      </div>
    </main>
  );
};

export default App;
