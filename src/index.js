import ReactDOM from "react-dom";
import Header from "./header/Header";
const htmlBody = document.querySelector("main");
function Body () {
    return <Header />
}
ReactDOM.render(<Body />, htmlBody)