import { DoublePipe } from './toUpperCaseandOrder.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });
});
