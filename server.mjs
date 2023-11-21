import { UAPI } from './index.mjs';

const data = async () => {
  let uapi = new UAPI();
  await uapi.connect('test');
};

data();
