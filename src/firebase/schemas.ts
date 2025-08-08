import { FirestoreDataConverter } from "firebase/firestore";
import { Employee } from "@/types/Employee";

export const employeeConverter: FirestoreDataConverter<Employee> = {
  toFirestore: (employee) => ({
    ...employee,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data,
    } as Employee;
  },
};
