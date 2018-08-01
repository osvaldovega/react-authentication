import cryptorjs from 'cryptorjs';

const cryptorKey = new cryptorjs('W0rm22B@thr0om84M@n42R!fl318C@ppucc!n080Sh!pS0l!d25G@rd3n92');
const encode = (value) => cryptorKey.encode(value);
const decode = (value) => cryptorKey.decode(value);

export {
  encode,
  decode,
}
