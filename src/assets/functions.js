export const findItemById = (id, data) => {
    for(let item of data) {
        if(item.id == id) {
            return item;
        }
    }

    return 0;
}


