import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, getApp } from "firebase-admin/app";
import admin, { ServiceAccount } from "firebase-admin";

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_DB_API_KEY_ID,
  "private_key": process.env.FIREBASE_DB_API_KEY,
  "client_email": process.env.FIREBASE_DB_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_DB_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40vurtir-35a4d.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};


const app = !getApps().length ? initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
}) : getApp();      // checks if there is already an app initialized or not if not then initializes the app and if yes then use the initiliazed one.

export const firestore = getFirestore(app);
