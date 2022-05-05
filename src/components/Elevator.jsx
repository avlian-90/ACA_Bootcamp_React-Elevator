import {useState} from 'react';

function Elevator() {

    const [isCloseDoors, setIsClosedDoors] = useState(false);

    const closeDoors = () => {
        setIsClosedDoors(true);
    }
    const openDoors = () => {
        setIsClosedDoors(false);
    }

    return (
        <div className="elevatorSet">
            <div className="elevatorContainer">
                <div className="elevator"></div>
                <div className={isCloseDoors ? "closedLeftDoor" : "leftDoor"}></div>
                <div className={isCloseDoors ? "closedRightDoor" : "rightDoor"}></div>
            </div>
            <div className="floorSelect">
                <div className="floorBtn">1</div>
                <div className="floorBtn">2</div>
                <div className="floorBtn">3</div>
                <div className="floorBtn">4</div>
                <div className="floorBtn">5</div>
                <div className="floorBtn">6</div>
                <div className="floorBtn">7</div>
                <div className="floorBtn">8</div>
                <div className="floorBtn">9</div>
                <div className="floorBtn">10</div>
                <div className="startBtn" onClick={closeDoors}>Go</div>
                <div className="stopBtn" onClick={openDoors}>Stop</div>
            </div>
        </div>
    )
}

export default Elevator;