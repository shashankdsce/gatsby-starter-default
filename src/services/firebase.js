import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA0GwzpEQFs_hMKnZafOXUEFuHvr82O-yw",
  authDomain: "shop-pwa-17b7c.firebaseapp.com",
  databaseURL: "https://shop-pwa-17b7c.firebaseio.com",
  projectId: "shop-pwa-17b7c",
  storageBucket: "shop-pwa-17b7c.appspot.com",
  messagingSenderId: "249858251706",
  appId: "1:249858251706:web:d2bdb158e0219f480d5b83"
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get phones() {
    return this.store().collection('phones');
  }

  get orders() {
    return this.store().collection('orders');
  }
}

export default new Firebase();
