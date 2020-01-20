const initialState: object = {};

const USER_INFO = 'USER_INFO';

export function baseBase (state: object = { ...initialState }, action: any) {
    switch (action.type) {
        case USER_INFO:
            return state
        default:
            return state
    }
}
