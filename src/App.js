import {useDispatch, useSelector} from "react-redux";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

const App = () => {


    return (
        <div>

            <Users/>
            <Posts/>
        </div>
    );
};

export default App;
