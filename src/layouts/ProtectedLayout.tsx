import {Outlet} from "react-router-dom";
import {socket} from "@/socket";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {FooterTabNav} from "@/components/FooterTabNav";

export type ProtectedLayoutContext = {
    socket: typeof socket;
};

export default function ProtectedLayout() {
    const {user} = useAuth();
    console.log(user);

    return (
        <>
            <Header/>
            <div className={"main-layout"}>
                <Outlet/>
            </div>
            <FooterTabNav/>
        </>
    );
}
