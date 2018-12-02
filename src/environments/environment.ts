// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBT2-uWRLH3_s_mJIId1jgH63vVDc9SE1k',
    authDomain: 'certificate-generator-front.firebaseapp.com',
    databaseURL: 'https://certificate-generator-front.firebaseio.com',
    projectId: 'certificate-generator-front',
    storageBucket: 'certificate-generator-front.appspot.com',
    messagingSenderId: '93486909367'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
