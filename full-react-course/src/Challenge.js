import React, { useState } from 'react'

const Challenge = () => {
    // State variables
    const [color, setColor] = useState("");

    return (
        <div className="container">
            <div className="colorDiv" style={{ background: `${color}` }}>{color || "Empty Value"}</div>
            <input
                autoFocus
                type="text"
                placeholder="Add Color Name"
                value={color}
                onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}

export default Challenge