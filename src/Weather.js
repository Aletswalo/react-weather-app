import React from "react";

import "./App.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Type a city" class="formControl" />
                <input type="submit" value="Search" class="searchInput" />
            </form>
        </div>
    )
}



