import firebase from 'firebase';
import '@firebase/firestore';

export const cargarConfiguracion =()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyDlrcgC4kZtzz48jwExlWxid6I_azgvwzM",
        authDomain: "basket-4664d.firebaseapp.com",
        databaseURL: "https://basket-4664d.firebaseio.com",
        projectId: "basket-4664d",
        storageBucket: "basket-4664d.appspot.com",
        messagingSenderId: "905725121414",
        appId: "1:905725121414:web:5fb33a3dbb0a28e37b5207"
      };
      firebaseApp = firebase.initializeApp(firebaseConfig);

     //let bdd= firebase.firestore();

     global.bdd= firebase.firestore();
     global.estaCargado =true;
    


}