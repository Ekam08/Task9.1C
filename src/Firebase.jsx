
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAztHUN073YIUoWQiH2CMknZyOgo2j_YMQ",
  authDomain: "task7-907c1.firebaseapp.com",
  projectId: "task7-907c1",
  storageBucket: "task7-907c1.firebasestorage.app",
  messagingSenderId: "426534715857",
  appId: "1:426534715857:web:08dfc5b0d8f75567d6a0f0",
  measurementId: "G-7V0PBE89X2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export async function signInWithEmail(email, password) {
    try 
    {
        console.log("Signing in with email:", email);
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        const user = userCred.user;

        
        const userDocRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDocRef);
        
        if (userSnapshot.exists()) {
            const userDataFromFirestore = userSnapshot.data();
            console.log("Actual user data from Firestore:", userDataFromFirestore);
           
        }

        
        await createUserDoc({
            uid: user.uid,
            displayName: user.displayName, 
            email: email
        });

        return userCred;
    }
    catch (error)
    {
        console.log("Error signing in user: ", error);
        throw error;
    }
}


export async function createUserWithEmail(email, password, displayName) {
    try 
    {
        console.log("Creating user with:", { email, displayName });
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Create user document in Firestore
        const userData = {
            uid: user.uid,
            displayName: displayName,
            email: email
        };
        console.log("User data to store:", userData);
        
        await createUserDoc({
            uid: user.uid,
            displayName: displayName,
            email: email
        });
        
        return userCredential;
    } 
    catch (error) 
    {
        console.log("Error creating user:", error);
        throw error;
    }
}

export const db = getFirestore(app);

export const createUserDoc = async (userAuth) => {
    console.log("createUserDoc called with:", userAuth);

    const userDocRef = doc(db, "users", userAuth.uid);
    console.log("in firebase file: ", userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log("User snapshot:", userSnapshot);
    console.log("User snapshot exists:", userSnapshot.exists());

    if (!userSnapshot.exists())
    {
        console.log("in if block");
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        const docData = {displayName: displayName || '', 
            email, 
            createdAt};
        console.log("Document data to be set:", docData);

        try 
        {
            await setDoc(userDocRef, docData);
            console.log("User document created successfully and written to Firestore");
        }
        catch (error)
        {
            console.log("Error setting document: ", error);
            throw error;
        }
    }
    else 
    {
        console.log("User document already exists in Firestore");
    }
    return userDocRef;
}
export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}