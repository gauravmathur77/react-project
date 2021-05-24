import React from 'react'

function RefFuncChild(props, ref) {
    return (
        <div>
            <input ref={ref} ></input>
        </div>
    )
}

export default React.forwardRef(RefFuncChild);