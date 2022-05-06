import {AuthForm} from "../../components";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.clear()

    useEffect(()=>{
        console.log('session end', !!query.get('ExpSession'));
    },[query])

    return (
        <div>
            <AuthForm/>
            <Link to={'/register'}>register</Link>
        </div>
    );
};

export {LoginPage};
