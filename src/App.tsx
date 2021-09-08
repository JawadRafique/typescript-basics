import React from "react";
import { Form } from "./components/Form";
import { GenericData } from "./components/GenericData";
import { Test } from "./components/Test";
import { User } from "./components/User";

const data = {
    name: "jawad",
    age: 25,
};

const users = [
    {
        name: "J",
        age: 24,
    },
    {
        name: "Jk",
        age: 26,
    },
    {
        name: "JKL",
        age: 22,
    },
];

const orders = [
    {
        name: "pelao",
        price: 240,
    },
    {
        name: "biryani",
        price: 2400,
    },
    {
        name: "makhni",
        price: 240000,
    },
];

function App() {
    return (
        <>
            <Test data={data} />
            <User />
            <Form />
            <GenericData items={users} />
            <GenericData items={orders} />
            {/* <h3>{name}</h3> */}
        </>
    );
}

export default App;
