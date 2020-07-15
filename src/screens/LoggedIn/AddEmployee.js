import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {addEmpDetails} from '../../redux/actions/addEmpAction';

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      age: '',
      key: '',
      value: '',
      choosenIndex: 0,
      gender: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#999999"
          keyboardType="default"
          maxLength={10}
          returnKeyType="next"
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#999999"
          keyboardType="email-address"
          maxLength={40}
          returnKeyType="next"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Phone"
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#999999"
          keyboardType="phone-pad"
          maxLength={10}
          returnKeyType="next"
          onChangeText={(text) => this.setState({phone: text})}
          value={this.state.phone}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Age"
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#999999"
          keyboardType="phone-pad"
          maxLength={2}
          returnKeyType="next"
          onChangeText={(text) => this.setState({age: text})}
          value={this.state.age}
        />
        <Text style={styles.pickerText}> Select Gender </Text>
        <Picker
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Profession"
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#999999"
          style={styles.pickerStyle}
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemPosition) =>
            this.setState({gender: itemValue, choosenIndex: itemPosition})
          }>
          <Picker.Item label="Please Select" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={this.onPressSignUp}>
          <Text style={styles.buttonText}>Add Employee</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressSignUp = () => {
    if (
      this.state.name != '' &&
      this.state.email != '' &&
      this.state.phone != '' &&
      this.state.age != '' &&
      this.state.gender != ''
    ) {
      const AddEmployeeDetails = {
        first_name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        age: this.state.age,
        gender: this.state.gender,
      };
      this.props.addEmpDetails(AddEmployeeDetails);
      this.setState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
      });
      Toast.show('Added Employee Successfully Done...');
    } else {
      Toast.show('Please enter necessary details');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  pickerText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  pickerStyle: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
});
const mapStateToProps = (State) => {
  const {addUser} = State;
  return {
    addUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addEmpDetails: (addEMpData) => dispatch(addEmpDetails(addEMpData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
