// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCuyTbFw7EPQqxAVBtscjPvmi-6nkaZDQE',
    authDomain: 'stripedemo-afb.firebaseapp.com',
    databaseURL: 'https://stripedemo-afb.firebaseio.com',
    projectId: 'stripedemo-afb',
    storageBucket: 'stripedemo-afb.appspot.com',
    messagingSenderId: '792252701079'
  },

  // http://localhost:5000
  // functionsURL: ' http://localhost:5000/stripe-elements/us-central1',
  functionsURL: 'https://us-central1-stripedemo-afb.cloudfunctions.net',
  
  stripePublishable: 'pk_test_m3a5moXVKgThpdfwzKILvnbG'

};