import './Header.css'
import {CookingPot, Factory, Shovel, Store, UserRound, Warehouse} from "lucide-react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getUrlSlug} from "@/helpers/url.helper";

export const FooterTabNav = () => {

    const navigation = useNavigate();

    const location = useLocation();
    // const slug: string = getUrlSlug(location.pathname)[0] || "main"

    const [active, setActive] = useState<string>(getUrlSlug(location.pathname)[0] || 'main')

    return (
        <div className={'footer-tab-nav'}>

            <div>
                <div className={"tab-nav " + (active === "main" ? "active" : "")} onClick={() => {
                    setActive('main');
                    navigation('/')
                }}>
                    <Shovel size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav " + (active === "market" ? "active" : "")} onClick={() => {
                    setActive('market');
                    navigation('/market')
                }}>
                    <Store size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav " + (active === "storage" ? "active" : "")}  onClick={() => {
                    setActive('storage');
                    navigation('/storage')
                }}>
                    <Warehouse size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav "+(active === "kitchen" ? "active" : "")} onClick={() => {
                    setActive('kitchen');
                    navigation('/kitchen')
                }}>
                    <CookingPot size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav "+(active === "factory" ? "active" : "")} onClick={() => {
                    setActive('factory');
                    navigation('/factory')
                }}>
                    <Factory size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav "+(active === "profile" ? "active" : "")} onClick={() => {
                    setActive('profile');
                    navigation('/profile')
                }}>
                    <UserRound size={32}/>
                </div>
            </div>

        </div>
    )
}
