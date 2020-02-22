import B from './B';

class A extends B {
  constructor() {
    super();
  }

  testA() {
    [1, 2].forEach(item => {
      console.log(this);
    });
  }
}

export default A;
