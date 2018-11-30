
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
//import { createHistory } from 'history';
//import {useRouterHistory, applyRouterMiddleware} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { useScroll } from 'react-router-scroll';
import  {getRoutes}  from './Routes';



/*const customBrowserHistory = useRouterHistory(createHistory)({
    basename: '/PayAndPlay'
});*/

class Root extends React.Component {
    constructor() {
        super();
        this.state = { rehydrated: false };
    }

    componentWillMount(){
        persistStore(this.props.store, {}, () => {
            this.setState({ rehydrated: true });
        });
    }

    render() {
        /*
        * the below rehydrate is added to prevent component mounting unless redux rehydrate process is complete
        * and component receive all data in componentWillMount() method itself. This avoids need to write code
        * in componentWillReceiveProps() method to check if reducer is having data which happens when reducer set
        * component props and then these are become available in componentWillReceiveProps() methods.
        * */
        if(this.state.rehydrated){
            
           // console.log(this.props.store);
            return (
                <Provider store={this.props.store}>
                    <Router>
                        { getRoutes(this.props.store) }
                    </Router>
                </Provider>
            );
        }
        return <div>...</div>;
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;