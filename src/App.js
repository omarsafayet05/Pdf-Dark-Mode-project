import "./App.css";
import PDFfiles from "./PDFfiles";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DarkMode from "./DarkMode";
import "./PDFfiles.css";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFfiles />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button className="btn-style">Download</button>
          )
        }
      </PDFDownloadLink>
      {/* <PDFfiles></PDFfiles> */}
      <DarkMode></DarkMode>
    </div>
  );
}

export default App;
