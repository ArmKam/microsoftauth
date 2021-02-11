const msalConfig = {
  auth: {
    clientId:'cf7955df-814d-415a-a1df-da385c4f4a16',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read' ,
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}