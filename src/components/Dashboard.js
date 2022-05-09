import React from "react";
import {useSearchParams} from "react-router-dom";
function Dashboard(){
    const [searchparams, setSearchparams] = useSearchParams();
    return(
        <React.Fragment>
        <h5>Dashboard Implementation {searchparams.get("uname")}...{searchparams.get("upwd")}</h5>
    </React.Fragment>
    )
}
export default Dashboard;