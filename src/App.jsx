import PaymentForm from "./components/PaymentForm";

function App() {
  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111", 
      }}>
      <PaymentForm />
    </div>
  );
}

export default App;
