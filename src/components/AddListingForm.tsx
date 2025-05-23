"use client"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function AddListingForm() {
  const [title, setTitle] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!title) return
      await addDoc(collection(db, "listings"), { title, createdAt: Date.now() })
      setTitle("")
    }

  return (
    <form onSubmit={handleSubmit} className="space-x-2 mt-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        placeholder="Property title"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  )
}