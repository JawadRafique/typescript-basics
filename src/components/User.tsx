import React, { useState } from "react";

interface Address {
    street: string;
    number: number;
    zip: string;
}

interface User {
    name: string;
    age: number;
    country: string;
    address: Address;
    admin: boolean;
}

export const User = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () => {
        setUser({
            name: "Jawad",
            age: 123,
            country: "Pakistan",
            address: {
                street: "asdasd",
                number: 212,
                zip: "asdasd",
            },
            admin: false,
        });
    };
    return (
        <>
            <button
                onClick={() => {
                    fetchUser();
                }}
            >
                Fetch User
            </button>
            {user && <li>{user.name}</li>}
        </>
    );
};
