import {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EMAIL_REGEX = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//The string must contain at least 1 lowercase alphabetical character
//The string must contain at least 1 uppercase alphabetical character
//The string must contain at least 1 numeric character
//The string must contain at least one special character,
//The string must be eight characters or longer

const Register = props => {
  console.log("gapppppp",(hp("70%")-(245+40))/20)
  const {navigation} = props;
  const [formValue, setFormValue] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  console.log('***error msg***', errorMsg);
  const validateInputData = () => {
    let validationFormValues = {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    };
    let isValid = true;
    if (formValue.fullName == '') {
      validationFormValues.fullName = 'Enter valid name';
      console.log('false name');
      isValid = false;
    }
    if (formValue.email == '' || !EMAIL_REGEX.test(formValue.email)) {
      validationFormValues.email = 'Enter valid email';
      console.log('false mail');
      isValid = false;
    }
    if (
      formValue.phoneNumber == '' ||
      !PHONE_REGEX.test(formValue.phoneNumber)
    ) {
      validationFormValues.phoneNumber = 'Enter valid phone number';
      console.log('false number');
      isValid = false;
    }
    if (formValue.password == '' || !PASSWORD_REGEX.test(formValue.password)) {
      validationFormValues.password = 'Enter valid password';
      console.log('false password');
      isValid = false;
    }

    if (!isValid) {
      setErrorMsg(validationFormValues);
    }

    return isValid;
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
       <KeyboardAwareScrollView>  
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../images/image3.jpg')}
        />
      </View>
      <View style={styles.body}>
          <Text
            style={{
              marginLeft: wp('10%'),
              fontWeight: 'bold',
              fontSize: 30,
              color: '#000',
              height:40
            }}>
            Register
          </Text>
        <KeyboardAvoidingView behavior="position">
        <View style={{marginVertical:5}}>
            <TextInput
              style={styles.input}
              placeholder="Your Name "
              placeholderTextColor={"#656565"}
              value={formValue.fullName}
              onChangeText={newText =>
                setFormValue({
                  ...formValue,
                  fullName: newText,
                })
              }></TextInput>

            {errorMsg.fullName && (
              <View style={styles.errorMsg}>
                <Text style={styles.errorMsgText}>{errorMsg.fullName}</Text>
              </View>
            )}
        </View>
        <View style={{marginVertical:5}}>
          <TextInput
            style={styles.input}
            placeholder="Email "
            placeholderTextColor={"#656565"}
            value={formValue.email}
            onChangeText={newText =>
              setFormValue({
                ...formValue,
                email: newText,
              })
            }></TextInput>
          {errorMsg.email && (
            <View style={styles.errorMsg}>
              <Text style={styles.errorMsgText}>{errorMsg.email}</Text>
            </View>
          )}
        </View>
        
        <View style={{marginVertical:5}}>
          <TextInput
            value={formValue.phoneNumber}
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor={"#656565"}
            onChangeText={newText =>
              setFormValue({
                ...formValue,
                phoneNumber: newText,
              })
            }></TextInput>
          {errorMsg.phoneNumber && (
            <View style={styles.errorMsg}>
              <Text style={styles.errorMsgText}>
                {errorMsg.phoneNumber}
              </Text>
            </View>
          )}
        </View>
        <View style={{marginVertical:5}}>
          <TextInput
            value={formValue.password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"#656565"}
            onChangeText={newText =>
              setFormValue({
                ...formValue,
                password: newText,
              })
            }></TextInput>
          {errorMsg.password && (
            <View style={styles.errorMsg}>
              <Text style={styles.errorMsgText}>{errorMsg.password}</Text>
            </View>
          )}
          
        </View>
        </KeyboardAvoidingView>
        <Pressable style={styles.pressable}>
          <Text
            style={{color: '#fff'}}
            onPress={() => {
              console.log(validateInputData());
              if (validateInputData()) {
                navigation.navigate('Home');
              }
            }}>
            Submit
          </Text>
        </Pressable>
        <Text
          style={{alignSelf: 'center', marginTop: 5, color: '#000'}}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          Have an account <Text style={{color: 'red'}}>Login</Text>
        </Text>
      </View>
</KeyboardAwareScrollView> 
 
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    width:wp("50%"),
    height:wp("50%")
  },

  body: {
    height: hp('70%'),
    overflow: 'scroll',
    flexDirection: 'column',
    marginVertical:20,
    
  },
  input: {
    marginVertical: 0,
    padding: 10,
    width: wp('80%'),
    height:40,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 29,
    color: 'black',
  },
  pressable: {
    marginVertical: 5,
    padding: 12,
    width: wp('80%'),
    height:45,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 29,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMsg: {
    marginLeft: wp('15%'),
  },
  errorMsgText:{
    color: '#ff0000',
    fontSize: 11
  }
});
