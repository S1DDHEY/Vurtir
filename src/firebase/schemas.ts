export type Employee = {
  id?: string;    // Firestore doc ID
  name: string;
  email: string;
  position: string;
  department: string;
  photoURL?: string;
  createdAt?: any;    // Firestore Timestamp
};
