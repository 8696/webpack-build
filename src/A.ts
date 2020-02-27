import B from './B';

class A extends B {
  static v: string;
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
