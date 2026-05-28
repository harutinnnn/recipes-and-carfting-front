import {Outlet} from "react-router-dom";
import {socket} from "@/socket";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";

export type ProtectedLayoutContext = {
    socket: typeof socket;
};

export default function ProtectedLayout() {
    const {user} = useAuth();
    console.log(user);

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}
