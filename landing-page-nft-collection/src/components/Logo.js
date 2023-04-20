import React from "react";
import { Link } from "react-router-dom";
import { LogoText } from "../styles/LogoStyles";

const Logo = () => {
    return (
        <LogoText>
            <Link to="/">
                W.
            </Link>
        </LogoText>
    )
}

export default Logo