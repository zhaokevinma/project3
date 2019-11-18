// ------ Dependencies
import React from "react";

// ------ Folder
function Folder() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="folder">
                    <h4>Folders</h4>
                    <li className="list-group-item">
                        <h5>Scheduled</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Critical</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Archive</h5>
                    </li>
                </div>
            </div>
        </div>
    )
}

// ------ Export
export default Folder;
