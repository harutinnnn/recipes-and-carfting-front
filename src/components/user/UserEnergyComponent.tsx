import {Zap} from "lucide-react";

export const UserEnergyComponent = () => {


    return (
        <div>
            <div className={"user-energy"}>

                <div className={"user-energy-info"}>

                    <div><Zap size={24}/> Energy</div>
                    <div>85/100</div>
                </div>
                <div className={"user-energy-progress-bar"}>
                    <div className={"user-energy-progress"} style={{width: "64%"}}></div>

                </div>
            </div>
        </div>
    )
}