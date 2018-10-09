import localStorage from '../../../src/js/utils/localStorage';

describe('UTILS - LOCAL STORAGE', () => {

  let ls;

  beforeEach(() => {
    ls = window.localStorage;
    ls.setItem('myValue', 'key phrase');
  });

  afterEach(() => {
    ls.clear();
  });

  it('Testing SET function', () => {
    localStorage.set('key1', '123abc');
    expect(ls.getItem('key1')).to.equal('123abc');
  });

  it('Testing SET function with object value', () => {
    const value = {
      user: 'Bruce',
      pass: '123abc'
    };

    localStorage.set('newUser', value);
    expect(ls.getItem('newUser')).to.equal(localStorage.get('newUser'));
  });

  it('Testing GET function', () => {
    expect(localStorage.get('myValue')).to.equal('key phrase');
  });

  it('Testing GET function after SET a new value', () => {
    localStorage.set('testingValue',  'abc123');
    expect(ls.getItem('testingValue')).to.equal('abc123');
  });

  it('Testing REMOVE function', () => {
    localStorage.set('itemToRemove', 'testing value');
    expect(ls).to.deep.equal({ myValue: 'key phrase', itemToRemove: 'testing value' });
    localStorage.remove('itemToRemove');
    expect(ls).to.deep.equal({ myValue: 'key phrase' });
  });
});