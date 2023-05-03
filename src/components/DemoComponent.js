import React from "react";
// passed props is stored inside this props object
//here using props destructure instead of using direct props object
export default function DemoComponent({name,country,children}){
    return(
        <div>
            <h1>Hello, I'm {name} from {country}</h1>
            <h2>{children}</h2>
        </div>
    )
}
// to display it on the browser we need to export the component,
// after expporting we need to render it in app.js
// here we exported default component, to export named component remove default.
// and in importing use braces{ and write same name as component name}