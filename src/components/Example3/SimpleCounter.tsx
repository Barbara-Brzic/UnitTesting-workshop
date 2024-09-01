import {useState} from "react";
import {logChanges} from "../../utils/utils";

export const SimpleCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = () => setCounter((prev) => prev + 1);
    const handleDecrease = () => {
        const newCounter = counter - 1;

        setCounter(newCounter)
        logChanges(`current counter: ${newCounter}`);
    };

    return <div>
        <button onClick={() => handleIncrease()}>Increase counter</button>
        <button onClick={() => handleDecrease()}>Decrease counter</button>
        <input data-testid={"input"} type={"number"} defaultValue={counter} onChange={(e) => setCounter(Number(e.target.value))} />
        {counter !== 0 && <span>Current value: {counter}</span>}
    </div>
}