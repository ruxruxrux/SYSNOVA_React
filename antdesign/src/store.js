import {atom} from 'recoil';

/**
 * Client Name, Ship To Name 저장소
 */

export const contentStore = atom({
    key : 'contentStore',
    default : {
        clientName : '',
        shipToName :''
    }
});