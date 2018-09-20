import cryptorjs from 'cryptorjs';
import { CRYPTOR_KEY, CYPHER_KEY } from './constants';

const cryptorKey = new cryptorjs(CRYPTOR_KEY, CYPHER_KEY);

const encode = (value) => cryptorKey.encode(value);
const decode = (value) => cryptorKey.decode(value);

export {
  encode,
  decode,
}
