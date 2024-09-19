


import {createSlice ,configureStore } from '@reduxjs/toolkit'
const counterSlice  = createSlice({
    name:'counter',
    initialState :{count:0},
    reducers: {
        increment :state =>{state.count +=1}
,    decrement :state =>{state.count-=1}
    },
})
const store  = configureStore({
    import React, { Component } from 'react'
    import { View, Text } from 'react-native'
    import PropTypes from 'prop-types'
    import { connect } from 'react-redux'
    
    export class Hi extends Component {
      static propTypes = {
        prop: PropTypes
      }
    
      render() {
        return (
          <View>
            <Text> prop </Text>
          </View>
        )
      }
    }
    
    const mapStateToProps = (state) => ({
      
    })
    
    const mapDispatchToProps = {
      
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Hi)
    
})