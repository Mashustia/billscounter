import React from 'react'

import { connect } from 'react-redux'
import { routes } from '../../../routes'
import { Route } from 'react-router-dom'

const Layout = (props) => {
    return (
        <div id='main' role='main'>
            {routes.map((route, idx) => {
                return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props}/>}
                    />
                ) : null
            })}
        </div>
    )
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Layout)
