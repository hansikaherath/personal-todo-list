import firebase from "firebase";
import FirebaseApp from '../../FirebaseApp'

export async function userLogin(email: String | undefined, password: String | undefined, stayLoggedIn: Boolean | undefined){
    try{
        if(stayLoggedIn){
            await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        }else{
            FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        return await FirebaseApp.auth().signInWithEmailAndPassword(<string>email, <string>password);
    }catch (e) {
        throw e;
    }
}