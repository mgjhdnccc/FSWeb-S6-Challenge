import { useState } from "react";
import { Character } from "./Character"

export const Characters = ({ charList }) => {


    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {
                charList &&
                charList.map(item => <Character key={item.url} charObj={item} /> )
            }

        </div>
    )
}
