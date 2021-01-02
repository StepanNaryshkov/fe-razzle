import {mapStateToProps, mapDispatchToProps, IProps} from '.';

describe('SignIn index', () => {
  test('should correct map state to props', () => {
    const state: {
      user: IProps
    } = {
      user: {
        fetching: true,
      },
    };
    expect(mapStateToProps(state)).toMatchObject(state.user);
  });

  test('dispatch should be called', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signIn({});
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
