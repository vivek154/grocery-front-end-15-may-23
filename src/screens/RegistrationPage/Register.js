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
} from 'react-native';

const EMAIL_REGEX = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
const PASSWORD_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
//The string must contain at least 1 lowercase alphabetical character
//The string must contain at least 1 uppercase alphabetical character
//The string must contain at least 1 numeric character
//The string must contain at least one special character,
//The string must be eight characters or longer

const Register = props => {
  const {navigation}=props
  const [formValue, setFormValue] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errorMsg,setErrorMsg]=useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:""
  })
  console.log("***error msg***",errorMsg)
  const validateInputData=()=>{
    let validationFormValues={
      fullName:"",
      email:"",
      phoneNumber:"",
      password:""
    }
    let isValid = true
    if(formValue.fullName==""){
      validationFormValues.fullName="Enter valid name"
      console.log("false name")
      isValid = false
    }
    if(formValue.email==""|| !EMAIL_REGEX.test(formValue.email)){
      validationFormValues.email="Enter valid email"
      console.log("false mail")
      isValid=false
    }
    if(formValue.phoneNumber=="" || !PHONE_REGEX.test(formValue.phoneNumber)){
      validationFormValues.phoneNumber="Enter valid phone Number"
      console.log("false number")
      isValid=false
    }
    if(formValue.password=="" || !PASSWORD_REGEX.test(formValue.password)){
      validationFormValues.password="Enter valid password"
      console.log("false password")
      isValid=false
    }

    if(!isValid){
      setErrorMsg(validationFormValues)
    }
    
    return isValid
  }
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      
        <View style={{backgroundColor: 'white'}}>
          <Image
            style={styles.image}
            source={require('../../images/image3.jpg')}
          />
        </View>
        <View>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 60,
              fontWeight: 'bold',
              fontSize: 30,
              color: '#000',
            }}>
            Register
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name "
            value={formValue.fullName}
            onChangeText={(newText)=>setFormValue({
              ...formValue,fullName:newText
            })}></TextInput>
          {(errorMsg.fullName) && <Text color="#ff0000">blabla</Text>}
          <TextInput
            style={styles.input}
            placeholder="Email "
            value={formValue.email}
            onChangeText={(newText)=>setFormValue({
              ...formValue,email:newText
            })}></TextInput>
          {(errorMsg.email) && <Text color="#ff0000">blabla</Text>}
          <TextInput
            value={formValue.phoneNumber}
            style={styles.input}
            placeholder="Mobile number"
            onChangeText={(newText)=>setFormValue({
              ...formValue,phoneNumber:newText
            })}></TextInput>
          {(errorMsg.phoneNumber) && <Text color="#ff0000">blabla</Text>}
          <TextInput
            value={formValue.password}
            style={styles.input}
            placeholder="Password"
            onChangeText={(newText)=>setFormValue({
              ...formValue,password:newText
            })}></TextInput>
          {(errorMsg.password) && <Text color="#ff0000">blabla</Text>}
          <Pressable style={styles.pressable}>
            <Text
              style={styles.text}
              onPress={()=>{
                //navigation.navigate("Home")
                console.log(validateInputData())
                if(validateInputData()){
                  navigation.navigate("Home")
                }
              }}>
              Submit
            </Text>
          </Pressable>
          <Text
            style={{marginLeft: 100, marginBottom: 50, color: '#000'}}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            {' '}
            Have an account <Text style={{color: 'red'}}>Login</Text>
          </Text>

          <StatusBar style="auto" />
        </View>
      
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 100,
  },
  input: {
    margin: 8,
    padding: 10,
    width: 290,
    height: 45,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 29,
    color: 'black',
  },
  pressable: {
    margin: 12,
    padding: 12,
    width: 290,
    height: 45,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 29,
    backgroundColor: 'black',
  },

  image: {
    marginTop: 10,
    backgroundColor: 'white',
    marginLeft: 55,
    width: 250,
    height: 240,
    borderWidth: 3,
    resizeMode: 'contain',
  },

  text: {
    marginLeft: 100,
    color: 'white',
  },
  anchor1: {
    marginLeft: 140,
    color: 'red',
    textDecorationLine: 'underline',
  },
  anchor2: {
    marginLeft: 100,
  },
});
