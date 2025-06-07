import { useState } from "react";
import CardForm from "./CardForm";
import IBANForm from "./IBANForm";

export default function PaymentForm() {
  const [method, setMethod] = useState("card");

  return (
    <div style={{
    background: "linear-gradient(135deg, #f8e1dc, #c9d6ff)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "30 8px 30px rgba(0, 0, 0, 0.2)",
    border: "2px solid #e1d4c4",
    fontFamily: "'Georgia', serif",
    backdropFilter: "blur(4px)",
    width: "100%",
    maxWidth: "420px",

  }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif",
    color: "white",
    marginBottom: "1rem",
    fontSize: "1.8rem",
    textAlign: "center", }}>Ödeme Yöntemi Seç</h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <button
          onClick={() => setMethod("card")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: method === "card" ? "#2563eb" : "#e5e7eb",
            color: method === "card" ? "white" : "black",
            borderRadius: "6px",
            border: "none"
          }}
        >
          Kredi Kartı
        </button>
        <button
          onClick={() => setMethod("iban")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: method === "iban" ? "#2563eb" : "#e5e7eb",
            color: method === "iban" ? "white" : "black",
            borderRadius: "6px",
            border: "none"
          }}
        >
          IBAN
        </button>
      </div>

      {method === "card" ? <CardForm /> : <IBANForm />}
    </div>
  );
}
