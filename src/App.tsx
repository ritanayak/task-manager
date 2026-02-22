import { ListManagement } from "./components/ListManagment";

function App() {
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>Task Manager</h1>
        <p style={styles.subtitle}>
          Organize, prioritize, and track your tasks efficiently
        </p>
      </header>

      <main style={styles.main}>
        <ListManagement />
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "30px",
    color: "#280672",
    
  },
  subtitle: {
    color: "#141417",
    fontSize: "14px",
  },
  main: {
    marginTop: "20px",
  },
};

export default App;