// ------ Dependencies
import React from "react";

// ------ Folder
const Folder = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="folder">
                    <h4>Folders</h4>
                    <button type="submit" className="btn btn-secondary">
                        <h6>Create a new folder</h6>
                    </button>
                    {props.folders.map(folder => {
                        return (
                            <li className="list-group-item" key={folder._id}>
                                <h5>{folder.folderName}</h5>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

// ------ Export
export default Folder;
