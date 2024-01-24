import { combineReducers } from 'redux';
import FormReducer from '../Registerss/Formreducer';


const rootReducer = combineReducers({
    formData: FormReducer,
});

export default rootReducer;
