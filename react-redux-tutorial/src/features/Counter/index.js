import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BiLayerPlus, BiReset} from 'react-icons/bi';

const Counter = () => {
    // Redux 
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    // States, references
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    // Method to reset the counter and increment amount
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div className="button__container">
                <AiOutlinePlusCircle onClick={() => dispatch(increment())} />
                <AiOutlineMinusCircle onClick={() => dispatch(decrement())} />
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} />
            <div className="button__container">
                <BiLayerPlus onClick={() => dispatch(incrementByAmount(addValue))} />
                <BiReset onClick={() => resetAll()} />
            </div>
        </section>
    )
}

export default Counter