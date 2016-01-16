/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import { combineReducers } from "redux";
import entities from "./entities";
import triggers from "./triggers";

export default combineReducers({
    triggers,
    entities
});

