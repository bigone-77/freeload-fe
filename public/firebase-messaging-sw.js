importScripts(
  'https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyAQDLT4YYYQLa5kOhrYysJfCOrgCkNn_f8',
  authDomain: 'freeload-fd376.firebaseapp.com',
  projectId: 'freeload-fd376',
  storageBucket: 'freeload-fd376.appspot.com',
  messagingSenderId: '453539088146',
  appId: '1:453539088146:web:d820da7f974fc3337295cb',
});

const messaging = firebase.messaging();

// 푸시 내용을 처리해서 알림으로 띄운다.
self.addEventListener('push', function (event) {});

// 클릭 이벤트 처리 - 알림을 클릭하면 사이트로 이동한다.
self.addEventListener('notificationclick', function (event) {});
