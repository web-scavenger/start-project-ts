import {e, pow} from 'mathjs';

interface NonlinearCurrentObj {
    beta: number;
    alfa: number;
    x: number;
    x0: number;
}

const nonlinear = ({beta, alfa, x, x0}: NonlinearCurrentObj): number => {
  const currentPow = +pow(e, (-alfa*(x-x0)));
  return (1 + beta) / (1 + currentPow);
};

export default nonlinear;