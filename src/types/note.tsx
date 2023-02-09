export interface NOTE {
    id: string;
    text: string;
    client: string,
    category: string;
}

export interface NOTES extends Array<NOTE> { }


export interface ITEM {
    id: string;
    title: string;
}

export interface CATEGORYDATA extends Array<ITEM> { }
export interface CLIENTSDATA extends Array<ITEM> { }


export interface ADD_NOTE_MODAL_PROPS {
    title: string;
    visible: boolean;
    clientsVisible: boolean;
    closeModal: () => void;
    toggleClientsVisible: () => void;
    value: string | undefined;
    placeHolder?: string;
    categotyData: CATEGORYDATA;
    clientData: CLIENTSDATA;
    onChange: (text: string) => void | undefined;
    selectCategoryHandler: (text: string) => void;
    selectClientHandler: (text: string) => void;
    onSave: () => void;
    selectedCategory?: string;
    selectedClient?: string;
}