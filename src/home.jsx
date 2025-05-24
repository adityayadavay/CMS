import ChargeActions from "./ChargeActions";
import ChargerList from "./ChargerList";
import './home.css';
import ChargeCreator from "./ChargeCreator";

const Home = () => {
    return (
        <>
            <h2>Welcome To CMS</h2>
            <ChargeCreator />
            <div className="home">
                <ChargerList />
                <ChargeActions />
            </div>
        </>
    )
}

export default Home;