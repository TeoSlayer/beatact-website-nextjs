import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { convertTimestamps, convertTimestampsPipe, convertTimestamp } from '../node_modules/convert-firebase-timestamp';

const firebaseConfig = {
    apiKey: "AIzaSyChzi1WIhlVAxi1HgZb0lO6Bac8UL05dkg",
    authDomain: "beatact-287421.firebaseapp.com",
    databaseURL: "https://beatact-287421.firebaseio.com",
    projectId: "beatact-287421",
    storageBucket: "beatact-287421.appspot.com",
    messagingSenderId: "262788818904",
    appId: "1:262788818904:web:a907c3adc885bcfffa74ad",
    measurementId: "G-XLSE0X89HS"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
// Storage exports
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function eventToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    EndDate: data?.EndDate.toMillis() || 0,
    PromotionDate: data?.PromotionDate.toMillis() || 0,
    StartDate: data?.StartDate.toMillis() || 0,

  };
}

export function organiserToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    //CreatedAt: data?.CreatedAt.toMillis() || 0,
  };
}
