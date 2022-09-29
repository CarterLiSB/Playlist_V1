import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSongCallback, hideEditSongModalCallback } = this.props;
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                            <div>Title: <input type = "text" id = "input-title"></input></div>
                            <div>Artist: <input type = "text" id = "input-artist"></input></div>
                            <div>Youtube ID: <input type = "text" id = "input-id"></input></div>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}