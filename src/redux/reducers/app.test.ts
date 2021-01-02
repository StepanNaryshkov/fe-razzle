import CNST from '../../constants';
import appReducer, {IAppState} from './app';

describe('App reducer', () => {
  let inititalState: IAppState;

  beforeEach(() => {
    inititalState = {
      notification: {
        isOpened: true,
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should show notification', () => {
    const newState = appReducer(inititalState, {
      type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
      payload: {
        notification: {
          isOpened: true,
          type: 'error',
          message: 'test',
        },
      },
    });
    expect(newState).toEqual({
      ...inititalState,
      notification: {
        isOpened: true,
        type: 'error',
        message: 'test',
      },
    });
  });

  test('should return initial state', () => {
    const newState = appReducer(inititalState, {type: 'TEST'});
    expect(newState).toEqual(inititalState);
  });
});
