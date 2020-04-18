import * as firebase from 'firebase'; // take all files and assign them to firebase

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_BASE,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();      /// this not available to version 4.2.0

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// --------------------Events------------------------------

//child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added   this gets called for existing ones and news too

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//---------------Automatically generates ID for us---------------------------------

// database.ref('notes').push({
//     title: 'React',
//     body: 'Tutorial'
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses =[];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses =[];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });



//Challege ------------------
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

//--------------------------------Read Data that track changes to DB---------------

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {     /////------Turns subscriptions on-----------
//         console.log(snapshot.val()); 
//     }, (e) => {
//         console.log('Error with Data Fetching', e);
//     });

// setTimeout(() => {
//     database.ref('age').set(29);
// },3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);   ///----- Turns subscriptions off------
// },7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// },10500);

///Challege --------------------

// database.ref()
//     .on('value', (snapshot) => {     /////------Turns subscriptions on-----------
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`); 
//     }, (e) => {
//         console.log('Error with Data Fetching', e);
//     });

//--------------------------------Read Data from DB once---------------------------

// database.ref()   /// 'location' or 'location/city'
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

//--------------------------------Setting Data in DB-------------------------------
// database.ref().set({
//     name: 'Alister',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is Saved!!!');
// }).catch((e) => {
//     console.log('This failed:', e);
// });

// database.ref().set('This is my Data');  //This overwrites the previous written data

// database.ref('age').set(27);  //update value
// database.ref('location/city').set('New York');   // update value

// database.ref('attribute').set({
//     height: 51,
//     weight: 310
// }).then(() => {
//     console.log('Second set call worked!');
// }).catch((e) => {
//     console.log('Things didn\'t for the second error:', e);
// }); 

//----------------------Update Data in DB------------------------------
// database.ref().update({
//     // job: 'Web Developer',
//     // 'location/city': 'Boston'
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'

// });


//------------------------Remove Data in DB-----------------------------
// database.ref('isSingle').remove()      
// .then(() => {
//     console.log('Data Removed!!');
// })
// .catch((e) => {
//     console.log('Data not Removed:', e);
// });