// noi dinh nghia cac action cua nguoi dung - hoac cua he thong

// 1 - dinh nghia ten cua hanh dong
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// 2 - dinh nghia action : ham tra ve la 1 object
export const incrementCounter = (val) => ({
    type: INCREMENT_COUNTER,
    payload: { val }
});

export const decrementCounter = (val) => {
    return {
        type: DECREMENT_COUNTER,
        payload: { val }
    }
}