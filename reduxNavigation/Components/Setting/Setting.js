/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'

class Setting extends Component {

  componentDidMount() {
    const {params} = this.props.navigation.state
  }

  render() {
    return (
      <View>
        <Text>Setting</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  mainText: ''
})

export default connect(mapStateToProps)(Setting)