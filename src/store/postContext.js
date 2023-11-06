import {createContext,useState}from 'react';


 export const postContext=createContext(null);

function Post({children}){
    const [postDetails,setDetails]=useState(null)
    return(

        <postContext.Provider value={{postDetails,setDetails}}>
            {children}
        </postContext.Provider>
    )
}
export default Post;