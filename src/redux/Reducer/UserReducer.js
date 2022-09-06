// const initialState = {
//     code: null,
//     message: null,
//     data: null,
//     error: null,
//   }
import Cookies from 'js-cookie'

const UserReducer=(state=Cookies.get("user")?JSON.parse(Cookies.get("user")):null,action)=>{
    switch(action.type){
      case "LOGIN":
        return action.payload;
       default: return state
        
      }
}
export default UserReducer;