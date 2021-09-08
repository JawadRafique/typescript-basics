import React, { useState } from "react";

interface TestProps {
    // name: string;
    // age?: number;
    data: {
        name: string;
        age: Number;
    };
}

export const Test = ({ data }: TestProps) => {
    const [showbutton, setshowbutton] = useState<boolean>(false);
    return (
        <>
            <div>{data.name}</div>
            <button onClick={() => setshowbutton(!showbutton)}>
                Click for Show
            </button>
            {showbutton && <h3>{data.age}</h3>}
        </>
    );
};
