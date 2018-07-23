import { combineReducers } from "redux";
import headerReducer from "./header_reducer";
import navReducer from "./nav_reducer";
const rootReducer = combineReducers({
    header: headerReducer,
    context: navReducer
});

export default rootReducer;