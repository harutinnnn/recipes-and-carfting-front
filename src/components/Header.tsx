import './Header.css'
import {useAuth} from "@/hooks/useAuth";
import {CircleDollarSign} from "lucide-react";

export const Header = () => {

    const {user} = useAuth()

    return (
        <header>

            <div className={"user-info"}>
                <div className="user-avatar">
                    <img src={import.meta.env.VITE_API_URL + user?.avatarUrl} alt=""/>
                </div>

                <div className="user-level">
                    LVL {user?.level}
                </div>

                <div className="user-money">
                    <CircleDollarSign size={28}/>
                    <span>{user?.gameMoney.toLocaleString()}</span>
                </div>
            </div>

        </header>
    )
}
