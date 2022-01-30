import LeftSideBar from "./Left/LetfSideBar";
import RightSideBar from "./Right/RightSideBar";

function Container() {
    return (
        <div className="flex h-full">
            <LeftSideBar /> 
            <RightSideBar />
        </div>
    )
}
export default Container