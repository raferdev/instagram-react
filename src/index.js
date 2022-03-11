import ReactDOM from "react-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import Main from "./main/Main";
const htmlBody = document.querySelector("#root");
function Body () {
    return (
    <div id="app">
         <Header />
    <div id="content">
         <Main />
         <SideBar /> 
    </div>
    </div>
    )
}
ReactDOM.render(<Body />, htmlBody)