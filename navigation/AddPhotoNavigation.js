import { createMaterialTopTabNavigator } from "react-navigation";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";

const AddPhotoNavigations = createMaterialTopTabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: "Photo"
      }
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: "Library"
      }
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      upperCaseLabel: true,
      activeTintColor: "black",
      inactiveTintColor: "#bbb",
      tabStyle: {
        backgroundColor: "white"
      },
      style: {
        backgroundColor: "#bbb"
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: "600"
      },
      showIcon: false
    }
  }
);

export default AddPhotoNavigations;