import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./hooks/LanguageContext";
import AppRouter from "./Components/AppRouter";
import { AuthProvider } from "./hooks/AuthContext";
import { TotalCostProvider } from "./hooks/TotalCostContext";
import { QuestionIndexProvider } from "./hooks/QuestionIndexContext";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        {/* e<QuestionIndexProvider> */}
          {/* <TotalCostProvider> */}
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          {/* </TotalCostProvider> */}
        {/* </QuestionIndexProvider> */}
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
