import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { convertTimestamps, convertTimestampsPipe, convertTimestamp } from '../node_modules/convert-firebase-timestamp';

const firebaseConfig = {

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
