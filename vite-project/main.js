import './style.css';
import { getEl, renderCard, } from './utils.js';
import palettes from './palettes.json'
import { v4 as uuidv4 } from 'uuid';


const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

const setLocalStorageKey = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const getValue = (key) => getLocalStorageKey(key);
export const setValue = (key, names) => setLocalStorageKey(key, names);

const addValue = (value) => {
  const values = getValue('form-data') || [];
  setValue('form-data', [...values, value]);
};


const handleSubmit = (e) => {
  e.preventDefault();
  const {title, color1,color2,color3,temperature}= Object.fromEntries(new FormData(e.target));
 const formObj = {
  uuid: uuidv4(),
  title, 
  colors:[color1,color2,color3],
  temperature,
 
 }
  renderCard(formObj, '#palettes');
  addValue(formObj);

};

const main = () => {
  getEl('#palette-picker').addEventListener('submit', handleSubmit);
  // getEl(".wrapper").append(renderCard())

 renderCard(palettes[0], '#palettes')
};



main();


