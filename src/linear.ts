import {e, pow} from 'mathjs';

interface LinearCurrentObj {
    beta: number;
    alfa: number;
    x: number;
    x0: number;
}

const linear = ({beta, alfa, x, x0}: LinearCurrentObj): number => {
  const currentPow = +pow(e, (-alfa*(x-x0)));
  return (1 + beta) / (1 + currentPow);
};

export default linear;