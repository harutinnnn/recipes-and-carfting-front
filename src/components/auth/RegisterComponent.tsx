import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import type {AuthViewCallback} from "@/types/auth";
import {GenderEnum} from "@/enums/GenderEnum";
import {capitalize} from "@/helpers/text.helper";
import {registerRequest} from "@/api/auth.api";
import {useEffect, useState} from "react";
import {Alerts} from "@/components/Alerts";
import {AlertEnums} from "@/enums/AlertEnums";
import {Camera, Lock, Mail, User} from "lucide-react";

const RegisterComponent = ({cb}: { cb: AuthViewCallback }) => {

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [disableBtn, setDisableBtn] = useState(false);

    const [avatar, setAvatar] = useState<string | null>(null);

    useEffect(() => {
    }, [])

    const registerSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        name: Yup.string().required("Required"),
        gender: Yup.mixed<GenderEnum>()
            .oneOf(Object.values(GenderEnum), "Invalid gender")
            .required("Gender is required"),
        password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
        passwordConf: Yup.string()
            .oneOf([Yup.ref("password")], "Password and Password confirmation does not match!")
            .required("Required"),
    });

    type RegisterFormValues = {
        email: string;
        name: string;
        gender: GenderEnum.MALE,
        password: string;
        passwordConf: string;
        avatar: File | null;
    };

    const handleRegisterSubmit = async (values: RegisterFormValues) => {

        setDisableBtn(true)

        const email = values.email;
        const name = values.name;
        const gender = values.gender;
        const password = values.password;

        const formData = new FormData();

        formData.append("email", email);
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("password", password);

        if (values.avatar) {
            formData.append("avatar", values.avatar);
        }


        const data = await registerRequest(formData)

        if ("error" in data) {
            setError(data.error as string);
        } else {

            setSuccess("Successfully registered please check your email!");

            setTimeout(() => {
                setSuccess(null);
            }, 5000)

            values.name = ''
            values.email = ''
            values.password = ''
            values.passwordConf = ''
        }
        setDisableBtn(false);

    }


    return (
        <div>


            {error && <Alerts text={error} type={AlertEnums.danger} cb={() => {
                setError(null)
            }}/>}
            {success && <Alerts text={success} type={AlertEnums.success} cb={() => {
                setSuccess(null)
            }}/>}

            <div className={"login-form register-form"}>
                <Formik initialValues={{
                    email: "",
                    name: "",
                    gender: GenderEnum.MALE,
                    password: "",
                    passwordConf: "",
                    avatar: null
                }}
                        onSubmit={handleRegisterSubmit}
                        validationSchema={registerSchema}
                >
                    {({setFieldValue}) => (
                        <Form>

                            <div className={"auth-header"}>
                                <h1>Sign Up</h1>
                                <p>Your cozy farm adventure starts here</p>
                            </div>


                            <div className={"auth-avatar-container"}>

                                <div className="inner-auth-avatar-container">
                                    <label htmlFor="avatar" style={{backgroundImage: `url(${avatar})`}}>
                                        <input type={"file"} id={"avatar"} name={"avatar"} className={'d-none'}
                                               onChange={(e) => {

                                                   if (e.currentTarget.files) {
                                                       setAvatar(URL.createObjectURL((e.currentTarget.files[0])))
                                                       setFieldValue('avatar', e.currentTarget.files?.[0])
                                                   }

                                               }}/>
                                        {!avatar && <Camera size={52}/>}

                                    </label>
                                    <div>Choose your avatar</div>
                                </div>

                            </div>


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
                                <label htmlFor="name">Name</label>
                                <div className="nested-icon">
                                    <Field type="text" id={"name"} name={"name"} placeholder="John Smitt"/>
                                    <User size={25}/>

                                </div>
                                <ErrorMessage name="name" component="div" className="error-msg"/>
                            </div>

                            <div className="input-row">
                                <label htmlFor="email">Your Gender</label>


                                <div className={"gender-items"}>
                                    {GenderEnum && Object.values(GenderEnum).map(value => (
                                        <label className={"gender-item"} htmlFor={'gender-' + value} key={value}>
                                            {capitalize(value)}
                                            <Field type="radio" name={"gender"} value={value} id={'gender-' + value}
                                                   className={"d-none"}/>
                                        </label>
                                    ))}
                                </div>


                                <ErrorMessage name="gender" component="div" className="error-msg"/>
                            </div>

                            <div className="input-row">
                                <label htmlFor="password" className={"label-have-right-text"}>
                                    Password
                                </label>
                                <div className="nested-icon">
                                    <Field type="password" id={"password"} name={"password"} className={"password"}/>
                                    <Lock size={25}/>
                                </div>
                                <ErrorMessage name="password" component="div" className="error-msg"/>

                            </div>

                            <div className="input-row">
                                <label htmlFor="passwordConf" className={"label-have-right-text"}>
                                    Password confirmation

                                </label>
                                <div className="nested-icon">
                                    <Field type="password" id={"passwordConf"} name={"passwordConf"}
                                           className={"passwordConf"}/>
                                    <Lock size={25}/>
                                </div>
                                <ErrorMessage name="passwordConf" component="div" className="error-msg"/>

                            </div>

                            <div className="input-row">
                                <button className={"btn success"} type={'submit'} disabled={disableBtn}>Register
                                </button>
                            </div>

                        </Form>
                    )}
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
                    <span>Already have a farm?</span>
                    <div className={"link bold"} onClick={() => cb('login')}>Login
                    </div>
                </div>


            </div>
        </div>
    )
}
export default RegisterComponent
