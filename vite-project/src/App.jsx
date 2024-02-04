import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenses/global/Topbar";
import Dashboard from "./scenses/dashboard";
import Sidebar from "./scenses/global/Sidebar";
import Team from "./scenses/team";
import Contacts from "./scenses/contacts";
import Invoices from "./scenses/invoices";
import Form from "./scenses/form";
import Calendar from "./scenses/calendar";
import Bar from "./scenses/bar";
import FAQ from "./scenses/faq";
import Pie from "./scenses/pie";
import Line from "./scenses/line";
import Geography from "./scenses/geography";

export default function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
