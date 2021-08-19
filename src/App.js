import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1:'',
      num2:'',
    result:'',
    operator:'',
    operCount:0
    };
  }

  add=()=>{
    var n1=parseInt(this.state.num1);
    var n2=parseInt(this.state.num2);
    var count=parseInt(this.state.operCount)+1;
    var res= n1 + n2;
    this.setState({
      result:res,
      operCount:count,
      operator:'+'
    })
  }

  sub=()=>{
    var n1=parseInt(this.state.num1);
    var n2=parseInt(this.state.num2);
    var count=parseInt(this.state.operCount)+1;
    var res= n1 - n2;
    this.setState({
      result:res,
      operCount:count,
      operator:'-'
    })
  }

   mul=()=>{
    var n1=parseInt(this.state.num1);
    var n2=parseInt(this.state.num2);
    var count=parseInt(this.state.operCount)+1;
    var res= n1 * n2;
    this.setState({
      result:res,
      operCount:count,
      operator:'*'
    })
  }

   div=()=>{
    var n1=parseInt(this.state.num1);
    var n2=parseInt(this.state.num2);
    var count=parseInt(this.state.operCount)+1;
    var res= n1 / n2;
    this.setState({
      result:res,
      operCount:count,
      operator:'/'
    })
  }


reset=()=>{
  this.setState({
    num1:'',
    num2:'',
    result:'',
    operator:'',
    operCount:0

  })
}


  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'CALCULATOR',
            style: { color: '#fff', fontSize: 20,fontWeight:"bold" },
          }}
        />

         <Text style={{marginTop:20,fontWeight:"bold",fontSize:20,color:"black",textAlign:"center"}}>Total Operations Performed: {this.state.operCount}</Text>

      
<View style={styles.numView}>
        <TextInput
          style={styles.inputBox}
          onChangeText={num1 => {
            this.setState({ num1: num1 });
          }}
          value={this.state.num1}
        />
        <Text style={styles.operatorStyle}>{this.state.operator}</Text>
         <TextInput
          style={styles.inputBox}
          onChangeText={num2 => {
            this.setState({ num2: num2});
          }}
          value={this.state.num2}
        />
        </View>
        <View style={styles.operView}>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {this.add()}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.goButton}
          onPress={() => {this.sub()}}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.goButton}
          onPress={() => {this.mul()}}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.goButton}
          onPress={() => {this.div()}}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        </View>
        <View>
        
           <Text style={styles.resultText}>{this.state.result}</Text>

          <TouchableOpacity
          style={{backgroundColor:"purple",height:60,width:150,marginTop:190,marginLeft:'30%',textAlign:"center"}}
          onPress={() => {this.reset()}}>
          <Text style={{fontSize:20,color:"white",textAlign:"center",fontWeight:"bold",marginTop:15}}>
          RESET
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  operView:{
    felx:1,
    flexDirection:'row',

  },
    numView:{
    felx:1,
    flexDirection:'row',
    justifyContent:"space-evenly"

  },
  operatorStyle:{
    fontSize:30,
    marginTop:50,
    backgroundColor:"black",
    height:40,
    width:40,
    textAlign:"center",
    color:"white",
    fontWeight:"bold"

  },
  inputBox: {
    marginTop: 50,
    width: '30%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    
  },
  goButton: {
    width: '20%',
    height: 55,
    alignSelf: 'center',  
    marginTop: 30,
    marginLeft:15,
    backgroundColor:'purple'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:8,
    color:"white"
  },
 
  resultText:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:"center",
   
    height:50,
    marginTop:40,
    color:"black"
  }

});
