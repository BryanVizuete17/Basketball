import React, { Component } from 'react';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { View, Text, StyleSheet, Alert, FlatList,Image, TextComponent } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import {cargarConfiguracion} from "../../utils/conexion";
import {consultarResultado} from "./servicios/Consultas";



export class Consulta extends Component{

    constructor(){
        this.state={
            puntosA:"0",
            puntosB:"0",

        }
    }
    pintarResultado=(resultado)=>{
        this.setState({puntosA:resultado.equipoA, puntosB:resultado.equipoB})
    }
    render(){
        return<View style={estilos.principal}>
            
            <View style={estilos.contenedor1}>

                <View style={estilos.contenedor2}>
             
        
             
                <View style={estilos.contenedor3}>
                    <View style={estilos.contenedor5}>
                        <View style={estilos.contenedor9}>
                               <Image
                            style={estilos.logo}
                            source={require("../../imagenes/lackers.png")}
                               />
                        </View>

                        <View style={estilos.contenedor10}>
                            <Text style={estilos.Texto}> Los Angeles Lakers</Text>
                        </View>
                    </View>
                    <View style={estilos.contenedor6}>
    <Text style={estilos.Puntuacion}>{
        this.state.puntosA
        
    }</Text>
                    </View>
              </View>
              <View style={estilos.contenedor4}>
                <View style={estilos.contenedor7}>
                    <View style={estilos.contenedor11}>
                    <Image
                            style={estilos.logo}
                            source={require("../../imagenes/maverik.png")}
                               />
                    </View>

                    <View style={estilos.contenedor12}>
                    <Text style={estilos.Texto}> Houston Rockets</Text>
                        
                    </View>

                </View>
             
                <View style={estilos.contenedor8}>
                <Text style={estilos.Puntuacion}>
                    {
                        this.state.puntosB
                    }
                </Text>
                </View>
               
              </View>

              <View style={estilos.Boton}>
                <Button 
                
                onPress={()=>{
                    consultarResultado("20201027","20","30");
                }}
                icon={
                    <Icon
                      name="spinner"
                      size={45}
                      color="white"
                    />
                  }
                ></Button>

                  
              </View>

            </View>
            
            </View>
      

        </View>

    }
    
}

const estilos=StyleSheet.create({
    principal:{
      flex:1,
     // backgroundColor:"yellow"
    },
   
    contenedor1:{
        flex:3,
        //backgroundColor:"red",
        //alignItems:"center",
       // justifyContent:"center",
       // marginBottom:50,

      },

      contenedor2:{
        flex:3,
        //backgroundColor:"blue",
        marginLeft:15,
        marginRight:15,
        marginTop:15,
        marginBottom:50,
        

      
      //  alignItems:"center",
        //justifyContent:"center",
        

      },

      contenedor3:{
        flex:2,
        //backgroundColor:"green",
       // marginLeft:15,
       // marginRight:15,
       // marginTop:15,
        //marginBottom:100,
        

      
      //  alignItems:"center",
        //justifyContent:"center",
        flexDirection:"row", //se pone en horizontal

      },
      
      contenedor4:{
        flex:2,
        //backgroundColor:"purple",
       // marginLeft:15,
       // marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        flexDirection:"row", //se pone en horizontal


      
      //  alignItems:"center",
        //justifyContent:"center",
        

      },
      contenedor5:{
        flex:1,
        //backgroundColor:"orange",
        marginLeft:15,
       // marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       //alignItems:"flex-start",
       // justifyContent:"flex-start",
        

      },
      contenedor6:{
        flex:1,
       // backgroundColor:"gray",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
       justifyContent:"center",
        

      },
      
      contenedor7:{
        flex:1,
        //backgroundColor:"white",
        marginLeft:15,
       // marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       //alignItems:"flex-start",
       // justifyContent:"flex-start",
        

      },

      contenedor8:{
        flex:1,
        //backgroundColor:"gray",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
       justifyContent:"center",
        

      },

      contenedor9:{
        flex:2,
        //backgroundColor:"red",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
        justifyContent:"center",
        

      },
      
      
      contenedor10:{
        flex:1,
        //backgroundColor:"pink",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
        justifyContent:"center",
        

      },
      contenedor11:{
        flex:2,
        //backgroundColor:"silver",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
        justifyContent:"center",
        

      },
      
      contenedor12:{
        flex:1,
        //backgroundColor:"brown",
        marginLeft:15,
        marginRight:15,
        //marginTop:15,
        //marginBottom:100,
        

      
       alignItems:"center",
       justifyContent:"center",
        

      },

     logo:{
        width:140,
        height:100,
        //marginTop:20,
       alignItems:"center",
       //justifyContent:"center",

      },

      Texto:{
        //width:140,
        //height:100,
        //marginTop:20,
      // alignItems:"center",
      // justifyContent:"center",
       fontSize:15,
        color:"black",
        fontWeight:'bold',

      },

      Boton:{
          
        flex:1,
      //  backgroundColor:"green",
        marginLeft:50,
        marginRight:50,
        alignItems:"center",
        justifyContent:"center",
 
      },
      Puntuacion:{
        //width:140,
        //height:100,
        //marginTop:20,
      // alignItems:"center",
      // justifyContent:"center",
       fontSize:60,
        color:"black",
        fontWeight:'bold',

      },


      
});