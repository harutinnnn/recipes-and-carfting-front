import {MarketSeedsComponent} from "@/components/market/MarketSeedsComponent";
import {MarketFactoriesComponent} from "@/components/market/MarketFactoriesComponent";

export const MarketPage = () => {


    return (

        <div>
            <h1 className={"page-title"}>Market</h1>

            <MarketSeedsComponent/>

            <MarketFactoriesComponent/>

        </div>
    )
}