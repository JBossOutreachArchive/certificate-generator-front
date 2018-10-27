
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

![alt text](https://storage.googleapis.com/codein-prod.appspot.com/gci-2018/core_taskupdate/doc/4833544801091584_1540638693_role.png?Expires=1540735807&GoogleAccessId=codein-prod%40appspot.gserviceaccount.com&Signature=gLqGW0vAK9tNAZXjSJ5I7p0Uh3yOw%2B6c8o83wcJzcIocCi0HHhMUkUciUUJU8VUWcNaVfaHMuGU5ZAKzwPT7Fxg4J2eQgzPeL9%2F9%2FOqefDWFtpHRAX3V0LYKfyA%2FInsxw24ooAFeo%2FiiC%2F9wcYgdW2FcIxwBZIV4dH0PM85zcx%2B2y3c6pZlfxujuOiI%2BF574Lr8P4fUzg4yJgpVXdraOSaf%2FHUWYtVOjPTq2D%2FB8yTpSJ9wnlXq%2FwdIRjPJwMYJhB6%2FVc31HCKm0Zn8oDK8%2BIIevHRuCvTvohUx0O3IuO22DT5wPBFE95u7KUwhTdxIW3VUCD7XokeT0a0VNIbBwWw%3D%3D)
![alt text](https://storage.googleapis.com/codein-prod.appspot.com/gci-2018/core_taskupdate/doc/4833544801091584_1540638693_main.png?Expires=1540735958&GoogleAccessId=codein-prod%40appspot.gserviceaccount.com&Signature=n%2BkNOrgVSG4XLpCoVJUHNOL0R442l30ck%2BmbIoDPko%2B5%2FQ6hxtDt68tUThh1ADkZ2g87uMUmZdBsCGMZEjCko1Fbc2Zi%2B%2F7lWRSoHRXrK5b%2F2fd6%2FYlpHCE03AAN3jbo7DfFsL%2FqEmoO9sdv2Op1DIrmnxWUviyOT5E8aHLejIM%2FPdM6wFvQdCZ8BplDOPvEQXGFpHu7u6B5zVS5Jdvi70eAzS5l30xLYlWLAQpxB%2FxzcJDDlBWAmspJrkKAI1XkbBEnf9MJE7bExFjlPcZRKs5rUjFuJBz%2FJKDOn6huwQpRG6U3sIdS2%2BV1nVjeW69EBXXczeKMAM4lEUxOyS7Bpw%3D%3D)
![alt text](https://storage.googleapis.com/codein-prod.appspot.com/gci-2018/core_taskupdate/doc/4833544801091584_1540658190_login.png?Expires=1540744599&GoogleAccessId=codein-prod%40appspot.gserviceaccount.com&Signature=Mq5Pd%2FPU4hE2kPcrj741z8CGUsLwjKiA0LTq9vNV60vFSxrA7CyV3%2F6LeGUXDlsK0kFdVQ%2B%2FtNPa%2BkO5FopUAsei72qUS2Kze3J66q5QaMmZExbsWC2RT%2BkBuwY3rgqnYzZXL1718FFiGQvxIJ3%2FEqjczAXeWYbjTOIdS9RUARPXBMsNw6sh%2FHkKpwINZLJ6cWB%2B7EzPo%2Fj0jUBT8OJgPJizSb4h7pbi7Ufb00od8bvm0c4MtpC%2F408XLw%2Bfkh7Rn2gmEwGAHK%2F2rsrakMnTLWFDG0rEL5sSy2YU%2FnX43hNCASWCmHH78Td2Fn5MUielpNk5jSyKtOTHXq%2BeN%2BQQvA%3D%3D)


