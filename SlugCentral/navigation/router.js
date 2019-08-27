import {createStackNavigator, createAppContainer} from 'react-navigation';

//Navigation imports//
import Home       from '../screens/HomeScreen';
import Courses    from '../screens/Courses';
import Map        from '../screens/Map';
import myCourses  from '../screens/myCourses';

const RootStack = createStackNavigator(
  {
    Home      : { screen : Home },
    Courses   : { screen : Courses },
    Map       : { screen : Map },
    myCourses : { screen : myCourses}
  },
    {
      initialRouteName: 'Home'
    }
);

const Navigator = createAppContainer(RootStack);
export default Navigator;
