import { useFormik } from "formik";
import * as Yup from "yup";

export default function IBANForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      iban: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("İsim zorunludur"),
      iban: Yup.string()
        .matches(/^TR\d{2}\d{16}$/, "Geçerli bir IBAN giriniz (TR ile başlayan 26 haneli)")
        .required("IBAN zorunludur"),
    }),
    onSubmit: (values) => {
      console.log("IBAN ile Ödeme Bilgisi:", values);
      alert("IBAN ile ödeme talebi alındı!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        name="name"
        type="text"
        placeholder="Ad Soyad"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        style={{  border: "none",
    borderBottom: "2px solid #a67c52",
    backgroundColor: "transparent",
    padding: "0.6rem",
    fontFamily: "'Georgia', serif",
    outline: "none",
    color: "#333", }}
      />
      {formik.touched.name && formik.errors.name && <div style={{ color: "red" }}>{formik.errors.name}</div>}

      <input
        name="iban"
        type="text"
        placeholder="TR IBAN (TR00XXXXXXXXXXXXXX)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.iban}
        maxLength={26}
        style={{  border: "none",
    borderBottom: "2px solid #a67c52",
    backgroundColor: "transparent",
    padding: "0.6rem",
    fontFamily: "'Georgia', serif",
    outline: "none",
    color: "#333", }}
      />
      {formik.touched.iban && formik.errors.iban && <div style={{ color: "red" }}>{formik.errors.iban}</div>}

      <button type="submit" style={{ padding: "0.6rem", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        IBAN ile Gönder
      </button>
    </form>
  );
}
