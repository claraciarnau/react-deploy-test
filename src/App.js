import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const bck = document.querySelector(".App");

    bck.addEventListener("mousemove", (e) => {
      bck.style.backgroundPositionX = - 0.01 * e.offsetX + "px";
      bck.style.backgroundPositionY = - 0.01 * e.offsetY + "px";
    });
  }, [])

  return (
    <div className="App">
      <div className="mouse-move"></div>
      <div className="content">
        <div className="title">
          Welcome to my world!
        </div>
      </div>
    </div>
  );
}

export default App;
