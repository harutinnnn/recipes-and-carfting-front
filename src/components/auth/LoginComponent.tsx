import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import type {AuthViewCallback} from "@/types/auth";
import {getMeRequest, loginRequest} from "@/api/auth.api";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {setAuthTokens} from "@/helpers/authStorage";
import {Alerts} from "@/components/Alerts";
import {AlertEnums} from "@/enums/AlertEnums";
import {Mail, Lock, ArrowRight} from "lucide-react";

export const LoginComponent = ({cb}: { cb: AuthViewCallback }) => {

    const {login} = useAuth();

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const loginSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "Minimum 6 characters").required("Required")
    });

    type LoginFormValues = {
        email: string;
        password: string;
    };

    const handleLoginSubmit = async (values: LoginFormValues) => {

        const {email, password} = values;

        try {
            const data = await loginRequest({
                email, password
            })


            if ("error" in data) {
                setError(data.error as string)
            } else {
                setAuthTokens({
                    accessToken: data.token,
                    refreshToken: data.refreshToken,
                });

                let userToSet = data.user;

                try {
                    const userFromApi = await getMeRequest();
                    if (userFromApi) {
                        userToSet = userFromApi;
                    }
                } catch (apiErr) {
                    console.error("Failed to fetch full user profile", apiErr);
                }

                login(data.token, userToSet);

                if (userToSet.isAdmin) {
                    navigate("/admin");
                } else {
                    navigate("/");
                }

            }

        } catch (err) {

            console.error(err);

            if (err instanceof AxiosError) {

                setError(err.response?.data?.message || "Login failed");
            }

        }
    }

    return (
        <div>


            <div className={"auth-header"}>
                <h1>Sign In</h1>
            </div>

            {error && <Alerts text={error} type={AlertEnums.danger} cb={() => {
                setError(null)
            }}/>}

            <div className={"login-form"}>
                <Formik initialValues={{
                    email: "",
                    password: "",
                }}
                        onSubmit={handleLoginSubmit}
                        validationSchema={loginSchema}
                >
                    <Form>
                        <div className="input-row">
                            <label htmlFor="email">Email</label>
                            <div className="nested-icon">
                                <Field type="text" id={"email"} name={"email"} placeholder="jowhn.smith@economy.com"
                                       className={"email"}/>
                                <Mail size={25}/>
                            </div>
                            <ErrorMessage name="email" component="div" className="error-msg"/>
                        </div>

                        <div className="input-row">
                            <label htmlFor="password" className={"label-have-right-text"}>
                                <span>Password</span>
                                <div className={"link forgot right-text"} onClick={() => cb('forgot')}>Forgot
                                </div>
                            </label>
                            <div className="nested-icon">
                                <Field type="password" id={"password"} name={"password"} className={"password"}/>
                                <Lock size={25}/>
                            </div>
                            <ErrorMessage name="password" component="div" className="error-msg"/>

                        </div>


                        <div className="input-row">
                            <button className={"btn success icon-btn"} type={'submit'}><span>Login to game</span>
                                <ArrowRight size={22}/>
                            </button>
                        </div>

                    </Form>
                </Formik>

                <div className={'text-rl-lines'}>
                    <span></span>
                    <span>OR</span>
                    <span></span>
                </div>


                <div className="input-row">
                    <button className={"btn g-btn icon-btn"}>
                        <img src="/public/images/icons/google.svg" alt=""/> <span>Continue with google</span>
                    </button>
                </div>

                <div className="login-register-link">
                    <span>New here?</span>
                    <div className={"link bold"} onClick={() => cb('register')}>Register
                    </div>
                </div>

            </div>
        </div>
    )
}
