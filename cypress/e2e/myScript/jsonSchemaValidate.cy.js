// install ajv library
// npm install ajv - command prompt/terminal

const AJV = require('ajv')
const ajv = new AJV()

describe("Schema validation", ()=> {

    it ("Schema validation against response" , ()=> {
        const rallyId = "bfb6770f-fe22-4dcb-aebf-16eb31631125";
        const baseUrl = 'https://coaching-member-web.int.werally.in/internal/member/v1/u';
        cy.request(`${baseUrl}/${rallyId}`)
              .then((response)=> {
                const schema = 
                {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "object",
                    "properties": {
                      "rallyId": {
                        "type": "string"
                      },
                      "profile": {
                        "type": "object",
                        "properties": {
                          "firstName": {
                            "type": "string"
                          },
                          "lastName": {
                            "type": "string"
                          },
                          "dateOfBirth": {
                            "type": "string"
                          },
                          "contactInfo": {
                            "type": "object",
                            "properties": {
                              "email": {
                                "type": "string"
                              },
                              "homePhone": {
                                "type": "string"
                              },
                              "mobilePhone": {
                                "type": "string"
                              },
                              "streetAddress": {
                                "type": "object",
                                "properties": {
                                  "address": {
                                    "type": "array",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "city": {
                                    "type": "string"
                                  },
                                  "postalCode": {
                                    "type": "string"
                                  },
                                  "state": {
                                    "type": "string"
                                  },
                                  "country": {
                                    "type": "string"
                                  },
                                  "suggestedCountyName": {
                                    "type": "string"
                                  },
                                  "suggestedCountyFipsCode": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "address",
                                  "city",
                                  "postalCode",
                                  "state",
                                  "country",
                                  "suggestedCountyName",
                                  "suggestedCountyFipsCode"
                                ]
                              },
                              "canCall": {
                                "type": "boolean"
                              },
                              "canEmail": {
                                "type": "boolean"
                              },
                              "canSms": {
                                "type": "boolean"
                              },
                              "timezone": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "email",
                              "homePhone",
                              "mobilePhone",
                              "streetAddress",
                              "canCall",
                              "canEmail",
                              "canSms",
                              "timezone"
                            ]
                          },
                          "memberId": {
                            "type": "string"
                          },
                          "clientInfoSet": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "name": {
                                  "type": "string"
                                },
                                "rallyClientId": {
                                  "type": "string"
                                },
                                "policyNumber": {
                                  "type": "string"
                                },
                                "programId": {
                                  "type": "string"
                                },
                                "effectiveStartDate": {
                                  "type": "string"
                                },
                                "effectiveEndDate": {
                                  "type": "string"
                                },
                                "timestamp": {
                                  "type": "number"
                                }
                              },
                              "required": [
                                "id",
                                "name",
                                "rallyClientId",
                                "policyNumber",
                                "programId",
                                "effectiveStartDate",
                                "effectiveEndDate",
                                "timestamp"
                              ]
                            }
                          },
                          "insurerInfo": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "number"
                              },
                              "name": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "name"
                            ]
                          },
                          "acceptedHipaaTerms": {
                            "type": "boolean"
                          },
                          "acceptedPrivacyPractices": {
                            "type": "boolean"
                          },
                          "showOnboardingModalForMobile": {
                            "type": "boolean"
                          },
                          "showOnboardingModalForWeb": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "firstName",
                          "lastName",
                          "dateOfBirth",
                          "contactInfo",
                          "memberId",
                          "clientInfoSet",
                          "insurerInfo",
                          "acceptedHipaaTerms",
                          "acceptedPrivacyPractices",
                          "showOnboardingModalForMobile",
                          "showOnboardingModalForWeb"
                        ]
                      },
                      "chatAppId": {
                        "type": "string"
                      },
                      "programTrackStatuses": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "number"
                            },
                            "programId": {
                              "type": "string"
                            },
                            "trackId": {
                              "type": "string"
                            },
                            "status": {
                              "type": "string"
                            },
                            "lastModifiedAt": {
                              "type": "number"
                            },
                            "createdAt": {
                              "type": "number"
                            },
                            "programEnrollmentDate": {
                              "type": "number"
                            }
                          },
                          "required": [
                            "id",
                            "programId",
                            "trackId",
                            "status",
                            "lastModifiedAt",
                            "createdAt",
                            "programEnrollmentDate"
                          ]
                        }
                      },
                      "lastModifiedAt": {
                        "type": "number"
                      },
                      "lastLoginAt": {
                        "type": "number"
                      },
                      "createdAt": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "rallyId",
                      "profile",
                      "chatAppId",
                      "programTrackStatuses",
                      "lastModifiedAt",
                      "lastLoginAt",
                      "createdAt"
                    ]
                  }// schema end 

                  const validate = ajv.compile(schema)
                  const isvalid = validate(response.body)
                  expect(isvalid).to.be.true;
                
            })
        })

})