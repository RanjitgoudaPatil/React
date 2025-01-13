import HelloWorld from "../components/HelloWorld";
import React from "react";
import UserDataDisplay from "../components/UserDataDisplay";

function Hi(){
    return(
       <>
         <h1>Hi</h1>
         <HelloWorld/>
         <UserDataDisplay/>
       </>
    )
}
export default Hi;