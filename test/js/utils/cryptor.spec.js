import cryptorjs from 'cryptorjs';
import { encode, decode } from '../../../src/js/utils/cryptor';
import { CRYPTOR_KEY, CYPHER_KEY } from '../../../src/js/utils/constants';

describe('UTILS - CRYPTOR', () => {
  it('Testing ENCODE function with "test" value', () => {
    const crypto = new cryptorjs(CRYPTOR_KEY, CYPHER_KEY);
    const expectResult = crypto.encode('test');

    expect(encode('test')).to.equal(expectResult);
  });

  it('Testing DECODE function with "test" key value', () => {
    const key = encode('test');

    const crypto = new cryptorjs(CRYPTOR_KEY, CYPHER_KEY);
    const expectedKey = crypto.encode('test');

    expect(decode(key)).to.equal(crypto.decode(expectedKey));
  });
});
