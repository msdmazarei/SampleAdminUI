import React from 'react';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { redux_state } from '../../../../../redux/app_state';
import { History } from "history";
import { NETWORK_STATUS } from '../../../../../enum/NetworkStatus';

interface IProps {
    history: History;
    match: any;
    network_status: NETWORK_STATUS;
}
interface IState {
}

class LayoutMainHeaderComponent extends React.Component<IProps, IState> {
    state = {
    }

    render() {
        return (
            <>
                <header className="header fixed-top">
                    header
                </header>
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {
    }
}

const state2props = (state: redux_state) => {
    return {
        internationalization: state.internationalization,
        network_status: state.network_status,
    }
}

export const LayoutMainHeader = connect(state2props, dispatch2props)(LayoutMainHeaderComponent);
