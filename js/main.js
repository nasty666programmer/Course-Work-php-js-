import { buttonAddHandler } from './handlers/script_add.js';
import {buttonSearchHandler} from './handlers/script_search.js';


const buttonAdd = document.querySelector('.btn-add-block_info');
const buttonSearch = document.querySelector('.btn-search_info');

buttonAdd.onclick = buttonAddHandler;
buttonSearch.onclick = buttonSearchHandler;