import ProgressiveTimeout from '../src/main';

jest.useFakeTimers();

describe('ProgressiveTimeout', () => {
  const CHECK_TIMEOUT_OPTIONS = {
    min: 500,
    max: 3000,
    step: 2000,
  };

  it('should correctly initialize and set first tick as min argument', () => {
    const progressiveTimeout = new ProgressiveTimeout(() => {}, CHECK_TIMEOUT_OPTIONS);
    expect(progressiveTimeout.tick).toBe(CHECK_TIMEOUT_OPTIONS.min);
  });

  it('should call start, set timeOut and call callback', () => {
    const spy = jest.fn();
    const progressiveTimeout = new ProgressiveTimeout(spy, CHECK_TIMEOUT_OPTIONS);
    progressiveTimeout.start();
    jest.runOnlyPendingTimers();
    expect(spy).toBeCalled();
  });

  it('should call start and set tick as max if tick more than max ms', () => {
    const progressiveTimeout = new ProgressiveTimeout(() => {}, CHECK_TIMEOUT_OPTIONS);
    progressiveTimeout.start();
    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(progressiveTimeout.tick).toBe(CHECK_TIMEOUT_OPTIONS.max);
  });

  it('should call stop correctly', () => {
    const progressiveTimeout = new ProgressiveTimeout(() => {}, CHECK_TIMEOUT_OPTIONS);
    progressiveTimeout.start();

    global.clearTimeout = jest.fn();
    progressiveTimeout.stop();

    expect(global.clearTimeout).toBeCalledWith(progressiveTimeout.timeoutID);
  });
});
