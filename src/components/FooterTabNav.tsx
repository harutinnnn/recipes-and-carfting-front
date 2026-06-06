import './Header.css'
import {CookingPot, Factory, Shovel, Store, Warehouse} from "lucide-react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getUrlSlug} from "@/helpers/url.helper";

export const FooterTabNav = () => {

    const navigation = useNavigate();

    const location = useLocation();
    // const slug: string = getUrlSlug(location.pathname)[0] || "main"

    const [active, setActive] = useState<string>( getUrlSlug(location.pathname)[0])

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
                <div className={"tab-nav"}>
                    <Warehouse size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav " + (active === "store" ? "active" : "")} onClick={() => {
                    setActive('store');
                    navigation('/store')
                }}>
                    <Store size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav"}>
                    <CookingPot size={32}/>
                </div>
            </div>

            <div>
                <div className={"tab-nav"}>
                    <Factory size={32}/>
                </div>
            </div>

        </div>
    )
}
