import { combineReducers } from "@reduxjs/toolkit";
import { Spell } from "../interfaces/spell";

const favouritesReducer = (state: Spell[] = [], action) => {
    switch (action.type) {
        case "add": {
            if (state.indexOf(action.spell) < 0) {
                return [...state, action.spell];
            } else {
                return [...state];
            }
        }
        case "remove": {
            const index = state.indexOf(action.spell);

            if (index < 0) {
                return [...state];
            } else {
                return [...state.slice(0, index), ...state.slice(index + 1, state.length)];
            }
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    favouritesReducer
});

export default rootReducer;