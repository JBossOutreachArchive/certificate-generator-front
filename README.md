
# Certificate-Front-End

Certificate Generator aims to automatically generate certificates based on the data provided using input files like csv and excel.

## Target Audience
* _**Certificate Issuing Organizations:**_ The Certificate issuing organization will first have to register themselves for authorization. They can generate multiple certificates simply by selecting the template and giving the candidates details through files like csv and excel.

* _**Candidates Receiving the Certificates:**_  The Candidate's dashboard will contain the URLs of all the certificated they have received. This will help them in maintaining all the certificates even if they have lost them locally.

## Development Stack
* HTML
* CSS
* Angular 6 for Front-End

## Work Flow for Developers
* _**For Certificate Issuers:**_ 
    1. Authenticate the Organization.
    2. The Organization dashboard will display the list of all the certificated generated by that Organization.
    3. Dashboard will allow the user to generate Certificates, single or in bulk.
    4. Based on the selection, we'll proceed to the template selection page.
    5. We'll have a form for single cetificate generation and for bulk certificates, we'll allow the Organization to upload a csv or excel file.
    6. We'll allow the user to preview the certificates before the final generation.
    7. After generating the certificates, an email will be sent to all the candidates.

* _**For Candidates:**_
    1. The Dashboard will contain thumbnails of all the certificates received by the student.
    2. There will be option to view a particular certificate.
    3. The candidate will also be allowed to share the certificate.




### Development Steps

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Help

If you need any help anywhere in the process, you can always ask a question on our [Gitter Chat](https://gitter.im/jboss-outreach/gci).

#### Students Dashboard
![students-dashboard](https://user-images.githubusercontent.com/43246135/47605143-ddc0f400-da02-11e8-9dc5-64e96223d3a7.png)
