import React from "react";

interface GenericDataProps<T> {
    items: T[];
}

export const GenericData = <T extends object>({
    items,
}: GenericDataProps<T>) => {
    return (
        <>
            {items.map((a) => {
                return <li>{JSON.stringify(a)}</li>;
            })}
        </>
    );
};
