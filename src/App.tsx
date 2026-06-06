import './App.css'
import './Market.css'
import {Route, Routes} from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import {MainPage} from "@/pages/MainPage";
import {Toaster} from "react-hot-toast";
import ActivationCode from "@/pages/ActivationCode";
import {AuthPage} from "@/pages/AuthPage";
import {StorePage} from "@/pages/StorePage";

function App() {

    return (
        <div>

            <Routes>

                <Route element={<AuthLayout/>}>
                    <Route path="/auth" element={<AuthPage/>}/>
                </Route>

                <Route path="/wrong-activation-code" element={<ActivationCode/>}/>

                <Route path="/wrong-activation-code" element={<ActivationCode/>}/>

                <Route
                    element={
                        <ProtectedRoute>
                            <ProtectedLayout/>
                        </ProtectedRoute>
                    }
                >

                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/store" element={<StorePage/>}/>

                </Route>
            </Routes>

            <Toaster
                position="top-center"
                reverseOrder={false}
                containerClassName={"toast-container"}
            />
        </div>
    )
}

export default App
