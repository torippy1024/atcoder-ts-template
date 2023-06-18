import {close, input, inputs} from './utils/stdio';

const main = async () => {
  const N = Number(await input());
  const A = await inputs(N);

  console.log(`N: ${N}`);
  console.log(A);

  close();
};

main();
