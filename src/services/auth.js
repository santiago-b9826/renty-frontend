import firebase from 'firebase'
import firebaseui from 'firebaseui';

const config = {
    apiKey: "AIzaSyBYHpRerd0Dit9PnuF8e4JcxSj34fZqPbw",
    authDomain: "renty-vue.firebaseapp.com",
    databaseURL: "https://renty-vue.firebaseio.com",
    projectId: "renty-vue",
    storageBucket: "renty-vue.appspot.com",
    messagingSenderId: "28025495187"
};

const auth = {
    context: null,
    uiConfig: null,
    ui: null,

    init(context) {
        this.context = context;

        firebase.initializeApp(config);
        this.uiConfig = {
            signInSuccessUrl: 'dashboard',
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        };
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());

        firebase.auth().onAuthStateChanged((user) => {
            this.context.$store.dispatch('user/setCurrentUser');
            let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth);
            let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly);

            if (requireAuth && !user) {
                this.context.$router.push('login');
            }
            else if (guestOnly && user) {
                this.context.$router.push('home');
            }
        });
    },
    authForm(container) {
        this.ui.start(container, this.uiConfig);
    },
    user() {
        return this.context ? firebase.auth().currentUser : null;
    },
    logout() {
        firebase.auth().signOut();
    }
};

export default auth;