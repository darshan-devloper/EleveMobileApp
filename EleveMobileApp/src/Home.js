/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

let navigatior;
const renderItem = ({ item }) => {
  return (
    <View style={styles.cardStyle} onStartShouldSetResponder={() => navigatior.navigate('Detail', {
      itemDetail: item
    })} >
      <Text style={styles.usernameStyle}>{item.username}</Text>

      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.labelStyle}>Full Name</Text>
          <Text style={styles.valueStyle}>{item.fullname}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.labelStyle}>Total Post</Text>
          <Text style={styles.valueStyle}>{item.total_post_count}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.labelStyle}>Followerse</Text>
          <Text style={styles.valueStyle}>{item.total_followers_count}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.labelStyle}>Following</Text>
          <Text style={styles.valueStyle}>{item.total_following_count}</Text>
        </View>
      </View>
    </View>
  );
};
export default class App extends Component {

  loadAPI = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    this.setState({ isLoading: true });
    fetch("https://boring-chandrasekhar-056eb5.netlify.app/.netlify/functions/server/users", {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(responseText => {
        console.log(responseText);
            this.setState({data:responseText.items});
        //  this.setState({ isLoading: false });
      })
      .catch(error => {
        alert(error);
      });
  };


  constructor(props) {
    super(props);
    navigatior = props.navigation;
    super(props);
    this.state = {
      data:[]
    }

  }

  componentDidMount() {
    this.loadAPI();
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, color: "#ffffff", alignSelf: "center" }}>Eleve</Text>
        </View>

        <View style={{ width: '100%', flex: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f1f1f1f1"
  },

  header: {
    backgroundColor: "#00baff",
    width: "100%",
    height: 40,
    justifyContent: 'center'
  },

  cardStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#999999",
    marginVertical: 8,
    marginHorizontal: 5,
    padding: 10
  },

  usernameStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  labelStyle: {
    fontSize: 14,
    color: "#999999"
  },

  valueStyle: {
    fontSize: 14,
    color: "#000000",
    paddingStart: 5
  }
});
