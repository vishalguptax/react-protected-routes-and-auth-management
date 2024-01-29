import CryptoJS from "crypto-js";
const secretKey = import.meta.env.VITE_LOCALSTOARGE_SECRET;

// Helper function for encryption
export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Helper function for decryption
export const decryptData = (encryptedData) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(decryptedData);
};
