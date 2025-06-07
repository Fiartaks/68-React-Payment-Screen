import { useFormik } from "formik";
import * as Yup from "yup";

export default function CardForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("İsim zorunludur"),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, "Kart numarası 16 haneli olmalı")
        .required("Kart numarası zorunludur"),
      expiry: Yup.string().required("Son kullanma tarihi zorunludur"),
      cvv: Yup.string()
        .matches(/^\d{3}$/, "CVV 3 haneli olmalı")
        .required("CVV zorunludur"),
    }),
    onSubmit: (values) => {
      console.log("Kredi Kartı Ödeme Bilgisi:", values);
      alert("Ödeme başarılı!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        name="name"
        type="text"
        placeholder="Kart üzerindeki isim"
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
        name="cardNumber"
        type="text"
        placeholder="Kart numarası (16 hane)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cardNumber}
        maxLength={16}
        style={{  border: "none",
    borderBottom: "2px solid #a67c52",
    backgroundColor: "transparent",
    padding: "0.6rem",
    fontFamily: "'Georgia', serif",
    outline: "none",
    color: "#333",}}
      />
      {formik.touched.cardNumber && formik.errors.cardNumber && <div style={{ color: "red" }}>{formik.errors.cardNumber}</div>}

      <input
        name="expiry"
        type="text"
        placeholder="Son kullanma tarihi (AA/YY)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.expiry}
        style={{  border: "none",
    borderBottom: "2px solid #a67c52",
    backgroundColor: "transparent",
    padding: "0.6rem",
    fontFamily: "'Georgia', serif",
    outline: "none",
    color: "#333",}}
      />
      {formik.touched.expiry && formik.errors.expiry && <div style={{ color: "red" }}>{formik.errors.expiry}</div>}

      <input
        name="cvv"
        type="text"
        placeholder="CVV (3 haneli)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cvv}
        maxLength={3}
        style={{  border: "none",
    borderBottom: "2px solid #a67c52",
    backgroundColor: "transparent",
    padding: "0.6rem",
    fontFamily: "'Georgia', serif",
    outline: "none",
    color: "#333", }}
      />
      {formik.touched.cvv && formik.errors.cvv && <div style={{ color: "red" }}>{formik.errors.cvv}</div>}

      <button type="submit" style={{ padding: "0.6rem", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "6px", cursor: "pointer"}}>
        Ödeme Yap
      </button>
    </form>
  );
}
