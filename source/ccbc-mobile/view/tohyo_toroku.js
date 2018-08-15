import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  AsyncStorage
} from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormInput,
  Card
} from 'react-native-elements'

const restdomain = require('./common/constans.js').restdomain

export default class TohyoToroku extends Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    activeStep1: {},
    activeStep2: {},
    activeStep3: {},
    activeStep4: {},
    activeStep5: {},
    completed: {},
    comment: {},
    coin: 0,
    tohyoCoin: 0,
    headList: [],
    resultList: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null,
    configCoin: 0
  }
  constructor(props) {
    super(props)
    this.state = {
      resultList: []
    }
  }

  /** コンポーネントのマウント時処理 */
  async componentWillMount() {
    var loginInfo = await this.getLoginInfo()

    this.setState({ userid: loginInfo['userid'] })
    this.setState({ password: loginInfo['password'] })
    this.setState({ tShainPk: loginInfo['tShainPk'] })
    this.setState({ imageFileName: loginInfo['imageFileName'] })
    this.setState({ shimei: loginInfo['shimei'] })
    this.setState({ kengenCd: loginInfo['kengenCd'] })

    // 初期表示情報取得
    var resList = this.findTohyoToroku()
    this.setState({ resultList: resList })
  }

  findTohyoToroku = async () => {
    await fetch(restdomain + '/tohyo_toroku/find', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ 'Content-type': 'application/json' })
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        // 結果が取得できない場合は終了
        if (typeof json.data === 'undefined') {
          return
        }
        return json
      })
      .catch(error => console.error(error))
  }

  getLoginInfo = async () => {
    try {
      return JSON.parse(await AsyncStorage.getItem('loginInfo'))
    } catch (error) {
      return
    }
  }

  onPressLogoutButton = () => {
    this.props.navigation.navigate('Login')
  }
  onPressMenuButton = () => {
    this.props.navigation.navigate('Menu')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name={'home'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressMenuButton}
            />
          }
          centerComponent={{
            text: 'MVP Vote System',
            style: { color: '#fff' }
          }}
          rightComponent={
            <Icon
              name={'sign-out'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressLogoutButton}
            />
          }
          style={styles.header}
        />
        <Card>
          <View style={styles.targe_item}>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person11.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 20 }}>札幌　太郎</Text>
            </View>
          </View>
          <View style={styles.target_title_view}>
            <Text style={{ fontSize: 18 }}>
              『新しい価値を創造するために・・・』
            </Text>
          </View>
          <View style={styles.target_coin_view}>
            <Text style={{ fontSize: 14 }}>25 点、250 coin</Text>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>資料作成：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>発表力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>表現力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>影響力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>限界突破：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 0, marginRight: 10 }}>
            <Text style={{ fontSize: 12 }}>【コメント】</Text>
            <FormInput multiline style={{ fontSize: 12 }}>
              ここが良かったね。
              {'\n'}
              ここをこうすると更に良くなるはず。
              {'\n'}
              次も頑張ってほしいです。
            </FormInput>
          </View>
        </Card>
        <View style={styles.target_total_coin_view}>
          <Text style={{ fontSize: 13 }}>
            合計投票コイン数:250
            {'\n'}
          </Text>
          <Text style={{ fontSize: 12 }}>
            発表者に対して評価とコメントをつけて下さい。
            {'\n'}
            （配布しきれなかったコインは自動で回収されます）
          </Text>
        </View>
        <Button title="save" icon={{ name: 'sign-in', type: 'font-awesome' }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  header: {},
  targe_item: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30
  },
  target_avatar_view: {},
  target_name_view: {
    flexDirection: 'column',
    marginLeft: 30,
    justifyContent: 'center'
  },
  target_title_view: {
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 20
  },
  target_coin_view: {
    marginLeft: 0
  },
  target_total_coin_view: {
    marginLeft: 10
  },
  rating_item: {
    flexDirection: 'row'
  },
  rating_title_view: {
    justifyContent: 'center',
    marginLeft: 0
  },
  rating_point_view: {
    justifyContent: 'center'
  },
  rating_value_view: {
    flexDirection: 'column',
    marginLeft: 10
  }
})