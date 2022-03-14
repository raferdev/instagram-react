import ReactDOM from "react-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/SideBar";
import Main from "./main/Main";
import MobBackground from "./header/mobile/MobBG";
const htmlBody = document.querySelector(".root");
function Body() {
  return (
    <div id="app">
      <div class="navbar">
        <Header />
      </div>
      <div class="corpo">
        <Main />
        <Sidebar />
      </div>
      <MobBackground />
    </div>
  );
}
ReactDOM.render(<Body />, htmlBody);
