const SELECT_VIEW = "SELECT_VIEW";
const OPEN_SIDE_MENU = "OPEN_SIDE_MENU";
const CLOSE_SIDE_MENU = "CLOSE_SIDE_MENU";

export interface SelectView {
    type: typeof SELECT_VIEW,
    selectedView: string
}

export interface OpenSideMenu {
    type: typeof OPEN_SIDE_MENU,
    sideMenuAppear: boolean
}

export interface CloseSideMenu {
    type: typeof CLOSE_SIDE_MENU,
    sideMenuAppear: boolean
}

export const selectView = (view_name : string) => {
    return {
        type: SELECT_VIEW,
        selectedView: view_name
    }
}

export const openSideMenu = () => {
    return {
        type: OPEN_SIDE_MENU,
        sideMenuAppear: true
    }
}
export const closeSideMenu = () => {
    return {
        type: CLOSE_SIDE_MENU,
        sideMenuAppear: false
    }
}

export type ViewsActions = SelectView | OpenSideMenu | CloseSideMenu ;