import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './Layout'

import Page404 from '../../views/404/Page404'

class LayoutRouter extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Layout} />
                        {/*<PrivateRoute path='/documents/' component={Layout} />*/}

                        <Route component={Page404} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: any) => ({
    isShownMenus: state.utils.isShownMenus
});

export default connect(mapStateToProps)(LayoutRouter)
