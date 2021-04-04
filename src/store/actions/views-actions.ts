const SELECT_VIEW = "SELECT_VIEW";

export interface SelectView {
    type: typeof SELECT_VIEW,
    selectedView: string
}

export const selectView = (view_name : string) => {
    return {
        type: SELECT_VIEW,
        selectedView: view_name
    }
}

export type ViewsActions = SelectView;