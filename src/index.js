import ReactDOM from "react-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/SideBar";
import Main from "./main/Main";
import MobBackground from "./mobile/MobBG";
const htmlBody = document.querySelector(".root");
function Body() {
  return (
    <div id="app">
      <header>
        <Header />
      </header>
      <section>
        <Main />
        <Sidebar />
      </section>
      <MobBackground />
    </div>
  );
}
ReactDOM.render(<Body />, htmlBody);