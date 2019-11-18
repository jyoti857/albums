import {NavigationActions} from 'react-navigation';

let navigator;

export const setTopLevelNavigator = navigationRef => {
  navigator = navigationRef;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};
