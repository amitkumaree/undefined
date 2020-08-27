import { StudentMstrPipe } from './callback.pipe';

describe('StudentMstrPipe', () => {
  it('create an instance', () => {
    const pipe = new StudentMstrPipe();
    expect(pipe).toBeTruthy();
  });
});
