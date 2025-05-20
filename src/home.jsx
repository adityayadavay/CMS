import { useState } from "react";
import ChargeActions from "./ChargerActions";
import ChargerList from "./ChargerList";
import './home.css';
import ChargeCreator from "./ChargeCreator";

const Home = () => {
    const [chargerId,setChargerId] = useState(0);
    return (
        <>
        <h2>Welcome To CMS</h2>
        <ChargeCreator/>
        <div className="home">
         <ChargerList sendToParent={setChargerId}/>
        <ChargeActions chargerId={chargerId}/>
        </div>
        </>
    )
}

export default Home;