import { mapStateToProps, mapDispatchToProps } from './index';

describe('Auth index', () => {
  test('should correct map state to props', () => {
    const state = {
      user: {
        isGetUserFetched: true,
        isLoggedIn: true,
        role: 'ADMIN',
      },
    };
    expect(mapStateToProps(state)).toMatchObject(state.user);
  });

  test('dispatch should be called', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getUser();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
