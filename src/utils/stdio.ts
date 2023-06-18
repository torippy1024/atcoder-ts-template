import {createInterface} from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const queue: string[] = [];
let resolveFn: ((value: string) => void) | null = null;

rl.on('line', (input: string) => {
  if (resolveFn) {
    resolveFn(input);
    resolveFn = null;
  } else {
    queue.push(input);
  }
});

export const input = () => {
  return new Promise<string>((resolve) => {
    if (queue.length > 0) {
      resolve(queue.shift()!);
    } else {
      resolveFn = resolve;
    }
  });
};

export const inputs = async (numLines: number) => {
  const lines: string[] = [];
  for (let i = 0; i < numLines; i++) {
    lines.push(await input());
  }
  return lines;
};

export const close = () => {
  rl.close();
};
