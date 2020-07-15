import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {Card, ListItem} from 'react-native-elements';

class EmpList extends React.Component {
  state = {
    emoloyeeList: [],
  };

  componentDidMount() {}
  render() {
    const {navigation, employeesList} = this.props;
    const EmpData = employeesList && employeesList.employees;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#455a64',
          paddingBottom: 20,
        }}>
        {Object.values(EmpData) && Object.values(EmpData).length === 0 && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop: 50, fontSize: 25}}>Empty List!</Text>
          </View>
        )}
        <StatusBar backgroundColor="#455a64" />
        <ScrollView>
          {Object.values(EmpData) &&
            Object.values(EmpData).length > 0 &&
            Object.values(EmpData).map((u, i) => (
              <Card
                key={u.empId}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255,255,0.2)',
                  borderRadius: 8,
                  elevation: 9,
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'auto'}}>
                  <View
                    style={{
                      alignSelf: 'auto',
                      marginLeft: 20,
                      flexShrink: 1,
                    }}>
                    <Text style={styles.titleText}>{u.first_name}</Text>
                    <Text style={styles.subtitleText}>Emp ID: {u.empId}</Text>
                    <Text style={styles.subtitleText}>Age: {u.age}</Text>
                    <Text style={styles.subtitleText}>email: {u.email}</Text>
                    <Text style={styles.subtitleText}>age: {u.phone}</Text>
                  </View>
                </View>
              </Card>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
  },
});

const mapStateToProps = (State) => {
  const {employeesList} = State;
  return {
    employeesList,
  };
};

export default connect(mapStateToProps, null)(EmpList);
