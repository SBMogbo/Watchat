import React,{useEffect, useState} from 'react'; 
import {useStoreContext} from './utils/GlobalState';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import API from './utils/API';
import {LOG_IN} from './utils/actions';


const RootContainer=()=>{
    const [state,dispatch]=useStoreContext();

    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        API.verifyAuthentication().then(response=>{
            dispatch({
                type:LOG_IN,
                payload:response.data
            });
            setLoading(false);
        },error=>{
            setLoading(false);
        }).catch(error=>{
            setLoading(false);
        });
    },[])
    if(loading) {
        return <div>Loading...</div>
    } else if(state.account) {
        return <PrivateRoutes />;
    } else {
        return <PublicRoutes />;
    }

}

export default RootContainer;