import {Zap} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";

export const UserEnergyComponent = () => {

    const {user} = useAuth();

    return (
        <div>
            <div className={"user-energy"}>

                <div className={"user-energy-info"}>
                    <div><Zap size={24}/> Energy</div>
                    <div>{user?.energy ?? 0}</div>
                </div>
            </div>
        </div>
    )
}