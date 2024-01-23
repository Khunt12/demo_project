import React from "react";
import { Hobbys } from "./test";

const Hobby = ({ form, test }) => {
    return (
        <>
            <label htmlFor="hobby">Hobby:-</label><br />
            {Object.keys(Hobbys).map((hb) => (
                <>
                    <input
                        type="checkbox"
                        name="hobby"
                        value={hb}
                        checked={form.hobby && form.hobby[`${hb}`]}
                        onChange={(e) => test(e)}
                    />
                    <label htmlFor={hb}>{Hobbys[hb]}</label><br />
                </>))}
        </>
    )
}
export default Hobby;
