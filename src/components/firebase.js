import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyBT47zZ3TXc73D4XLwSkhGIWSBw_5JrNlc",
  authDomain: "facebook-clone-8bf0a.firebaseapp.com",
  databaseURL: "https://facebook-clone-8bf0a.firebaseio.com",
  projectId: "facebook-clone-8bf0a",
  storageBucket: "facebook-clone-8bf0a.appspot.com",
  messagingSenderId: "1011227567080",
  appId: "1:1011227567080:web:6e9c39be4ad714f4277a5d",
  measurementId: "G-XKQNFGWGBT"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(firstname, lastname,  email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: firstname, lastname
		})
	}

	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase()