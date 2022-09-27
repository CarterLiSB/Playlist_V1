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
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, song) {
        super();
        this.app = initApp;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }
    
    undoTransaction() {
        let list = this.app.state.currentList;
        list.songs.splice(this.index, 0, this.song);
        this.app.setStateWithUpdatedList(list);
    }
}