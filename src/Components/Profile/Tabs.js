import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "./Profile";
import Colors from "../../color";
import { Text } from "native-base";
import BenefitsUsed from "./BenefitsUsed";
import Globalstyle from "../../Globalstyle"
//Her muliggør vi at man kan se hvilke benefits man har brugt på profilsiden
const renderScene = SceneMap({
  first: Profile,
  second: BenefitsUsed,
});

export default function Tabs() {
 
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "Profile",
    },
    {
      key: "second",
      title: "Benefits used",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.white }}
      activeColor={Colors.main}
      inactiveColor={Colors.lightBlack}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white",
    margin: 0
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
