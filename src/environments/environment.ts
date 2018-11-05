// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBtNL2Zg16oeuyzsBxOz3ElTzEH1lj4r6o",
    authDomain: "lead-management-android.firebaseapp.com",
    databaseURL: "https://lead-management-android.firebaseio.com",
    projectId: "lead-management-android",
    storageBucket: "lead-management-android.appspot.com",
    messagingSenderId: "1060339244383"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
