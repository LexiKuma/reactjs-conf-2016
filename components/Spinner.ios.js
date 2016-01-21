'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ActivityIndicatorIOS,
  View,
  Text
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Spinner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS style={this.props.style} />
      </View>
    );
  }
};

module.exports = Spinner;
