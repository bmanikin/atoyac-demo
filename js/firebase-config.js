/* ==========================================================================
   ATOYAC · FIREBASE CLOUD SYNC ADAPTER (OPTIONAL PLUG & PLAY)
   ==========================================================================
   Por defecto el sistema sincroniza en tiempo real entre pestañas/pantallas
   locales (BroadcastChannel + LocalStorage). Cuando crees tu proyecto en
   Firebase Console (https://console.firebase.google.com), pega aquí tus
   credenciales para sincronizar el iPad de la barra, la Caja y los pedidos
   Web a través de internet con Firestore.
   ========================================================================== */

export const FIREBASE_CONFIG = {
  enabled: false, // Cambia a true al pegar tus llaves de Firebase Console
  apiKey: "TU_API_KEY",
  authDomain: "atoyac-kitchen.firebaseapp.com",
  projectId: "atoyac-kitchen",
  storageBucket: "atoyac-kitchen.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:000000000000"
};
