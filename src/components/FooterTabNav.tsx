import './Header.css'
import {CookingPot, Factory, Shovel, Store, Warehouse} from "lucide-react";

export const FooterTabNav = () => {

    return (
        <div className={'footer-tab-nav'}>

            <div className={"tab-nav active"}>
                <Shovel size={32}/>
            </div>
            <div className={"tab-nav"}>
                <Warehouse size={32}/>
            </div>
            <div className={"tab-nav"}>
                <Store size={32}/>
            </div>
            <div className={"tab-nav"}>
                <CookingPot size={32}/>
            </div>
            <div className={"tab-nav"}>
                <Factory size={32}/>
            </div>

        </div>
    )
}
