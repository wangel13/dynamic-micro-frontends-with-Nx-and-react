import { loadRemoteModule } from './load-remote-module';

describe('loadRemoteModule', () => {
  it('should work', () => {
    expect(loadRemoteModule()).toEqual('load-remote-module');
  });
});
