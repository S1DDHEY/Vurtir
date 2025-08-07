"use client";
import { useState } from "react";
import { Employee } from "@/firebase/schemas";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/client";

export default function EmployeeForm() {
  const [form, setForm] = useState<Omit<Employee, "id">>({
    name: "",
    email: "",
    position: "",
    department: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "employees"), {
      ...form,
      createdAt: new Date()
    });
    setForm({ name: "", email: "", position: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
      <input placeholder="Email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
      <input placeholder="Position" value={form.position} onChange={e => setForm(f => ({...f, position: e.target.value}))} />
      <input placeholder="Department" value={form.department} onChange={e => setForm(f => ({...f, department: e.target.value}))} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
