import { AppendLastnamePipe } from './append-lastname.pipe';

describe('AppendLastnamePipe', () => {
  it('create an instance', () => {
    const pipe = new AppendLastnamePipe();
    expect(pipe).toBeTruthy();
  });
});
