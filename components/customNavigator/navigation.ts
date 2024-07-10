import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function foo() {
  if (navigationRef.isReady()) {
      navigationRef.emit({
          type: "foo",
          canPreventDefault: true,
          data: {
              bar: "baz",
          },
          target: "customNavigator",
    })
  }
}