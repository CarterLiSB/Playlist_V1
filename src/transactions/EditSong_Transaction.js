import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, oldTitle, oldArtist, oldID, newTitle, newArtist, newID) {
        super();
        this.app = initApp;
        this.index = index;
        this.oldTitle = oldTitle;
        this.oldArtist = oldArtist;
        this.oldID = oldID;
        this.newTitle = newTitle;
        this.newArtist = newArtist;
        this.newID = newID;
    }

    doTransaction() {
        this.app.editSong(this.index, this.newTitle, this.newArtist, this.newID)
    }
    
    undoTransaction() {
        this.app.editSong(this.index, this.oldTitle, this.oldArtist, this.oldID)
    }
}