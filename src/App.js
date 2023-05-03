import AppCSS from "./App.css";
// import first and then render the components
import DemoComponent from "./components/DemoComponent";
import Captain from "../src/images/Captain.jpg";
import Parent from "./components/Parent";
import TitleComponent from "./components/TitleComponent";
import ClickEventHandler from "./components/ClickEventHandler";
import UserLogin from "./components/UserLogin";
import EmployeeList from "./components/EmployeeList";
import RegularStyleSheet from "./components/RegularStyleSheet";
import Inline from "./components/Inline";
import FormInput from "./components/FormInput";
import DemoFragments from "./components/fragdemo/DemoFragments";
import MyTable from "./components/fragdemo/MyTable";

function App() {
  return (
    <div className="AppCSS">{/* It is parent Element, you can't have JSX element outside the parent element*/}
        {/* It is not html, it is JSX
            Everything we write here, belongs to the landing page 
            You have wrap up the entire JSX in the parent Element.
            If U don't have children you can use self closing tag */}

        {/* passing props through JSX attribute into the demo[child] component */}
        {/* <DemoComponent name='Shyam' country='India'/> */}

         {/* <DemoComponent name='Sundar' country='India'> 
             //In between the open and close tags are called children props
             //and retrieve them by props.children
           <p>Hi I'm a React Developer</p>
            <img src={Captain}></img> 
        </DemoComponent>*/}


        {/* <Parent/>
        <TitleComponent/>
        <ClickEventHandler/> 
        <UserLogin/> 
        <EmployeeList/> */}
        <RegularStyleSheet primary={true}/>
        <Inline/>
        {/* <FormInput/> */}
        {/* <DemoFragments/> */}
        <MyTable/>
    </div>
  );
}

export default App;