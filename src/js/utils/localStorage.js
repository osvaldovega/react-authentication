import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from './constants';

const storage = window.localStorage;

const set = (key, value) => {
  storage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value
  );
};

const get = (key) => {
  const value = storage.getItem(key);
  return typeof value === 'object' ? JSON.parse(value) : value;
};

const remove = (key) => {
  storage.removeItem(key);
};

export default {
  get,
  remove,
  set,
};
