import { Timestamp } from "firebase/firestore";

export type EmployeeStatus = "active" | "on_leave" | "resigned";
export type EmployeeRole = "admin" | "manager" | "staff" | "hr";

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoURL?: string;
  designation: string;
  department: string;
  status: EmployeeStatus;
  doj: Timestamp;
  role: EmployeeRole;
  skills?: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
