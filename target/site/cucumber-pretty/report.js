$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger Page Feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 349235,
  "status": "passed"
});
formatter.before({
  "duration": 6410569814,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerSD.setMessengerPage()"
});
formatter.result({
  "duration": 2733452244,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Messenger"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter tasemin@gmail.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tasemin@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "MessengerSD.enterDataIntoTextFiels(String,String)"
});
formatter.result({
  "duration": 293849123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerSD.enterDataIntoTextFiels(String,String)"
});
formatter.result({
  "duration": 157030734,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 883046325,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.verifySignUpErrorMessenger()"
});
formatter.result({
  "duration": 43505451,
  "status": "passed"
});
formatter.after({
  "duration": 342007,
  "status": "passed"
});
formatter.after({
  "duration": 186987964,
  "status": "passed"
});
});