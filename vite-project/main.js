import './style.css';
import { getEl } from './utils.js';

const handleSubmit = (e) => {
  e.preventDefault();
  const formObj = Object.fromEntries(new FormData(e.target));
  console.log(formObj);
};

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

const main = () => {
  getEl('#palette-picker').addEventListener('submit', handleSubmit);
};

main();
