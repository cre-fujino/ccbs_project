import React from 'react'
import request from 'superagent'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'
import {
  mailFolderListItems,
  otherMailFolderListItems,
  kanriListItems,
  ippanListItems,
  kojiListItems,
  systemName,
  restUrl
} from './tileData'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Avatar from '@material-ui/core/Avatar'
import Save from '@material-ui/icons/Save'
import Menu from '@material-ui/core/Menu'

import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import Portal from '@material-ui/core/Portal'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Redirect } from 'react-router-dom'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip as Tooltip2
} from 'recharts'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 18
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  buttonFrame: {
    position: 'static',
    marginRight: 24
  },
  buttonFrame2: {
    position: 'static',
    marginRight: 0
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  card2: {
    display: 'flex'
  },
  details2: {
    display: 'flex',
    flexDirection: 'column'
  },
  details3: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  content2: {
    flex: '1 0 auto'
  },
  cover2: {
    width: 151,
    height: 151
  },
  controls2: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  stepSize: {
    width: 20,
    height: 10,
    textAlign: 'left',
    verticalAlign: 'top'
  },
  stepSize2: {
    width: 15,
    height: 5,
    textAlign: 'left',
    verticalAlign: 'top'
  },
  tdSize: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingBottom: '7px'
  },
  input: {
    margin: theme.spacing.unit
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  PnlAvatar: {
    width: 60,
    height: 60
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  headLine: {
    width: 350
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 900
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
})

const testData = [
  {
    url: '/images/yamashita.png',
    title: '第５回EQトレーニング',
    name: '剛田　武'
  },
  {
    url: '/images/mikami.png',
    title: '△△△案件プロジェクト報告',
    name: '札幌　太郎'
  },
  {
    url: '/images/ishigaki.jpg',
    title: '◯◯◯案件プロジェクト報告',
    name: '江別　野郎'
  }
]

class TohyoShokaiShosaiForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    completed: {},
    comment: {},
    haifuCoin: 150,
    tohyoCoin: 0,
    resultList: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null
  }

  constructor(props) {
    super(props)
  }

  /** コンポーネントのマウント時処理 */
  componentWillMount() {
    var loginInfos = JSON.parse(sessionStorage.getItem('loginInfo'))
    for (var i in loginInfos) {
      var loginInfo = loginInfos[i]
      this.setState({ userid: loginInfo['userid'] })
      this.setState({ password: loginInfo['password'] })
      this.setState({ tShainPk: loginInfo['tShainPk'] })
      this.state.tShainPk = Number(loginInfo['tShainPk'])
      this.setState({ imageFileName: loginInfo['imageFileName'] })
      this.setState({ shimei: loginInfo['shimei'] })
      this.setState({ kengenCd: loginInfo['kengenCd'] })
    }
  }

  handleChange = (name, cnt) => event => {
    this.setState({
      [name[cnt]]: event.target.value
    })
  }

  handleChangePnl = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleLogoutClick = () => {
    // ログアウト時にsessionStorageをクリアする
    sessionStorage.clear()
  }

  handleToggle = () => {
    this.setState({ open2: !this.state.open2 })
  }

  handleToggleClose = event => {
    if (this.target1.contains(event.target)) {
      return
    }

    this.setState({ open2: false })
  }

  render() {
    const { classes, theme } = this.props
    const { anchor, open, open2 } = this.state
    const loginLink = props => <Link to="../" {...props} />
    const { expanded } = this.state

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{kanriListItems}</List>
        <Divider />
        <List>{ippanListItems}</List>
      </Drawer>
    )

    let before = null
    let after = null

    if (anchor === 'left') {
      before = drawer
    } else {
      after = drawer
    }

    const MyLink = props => <Link to="/sample" {...props} />

    const dataRadar = [
      { rank: '資料作成', value: 120 },
      { rank: '発表力', value: 85 },
      { rank: '表現力', value: 65 },
      { rank: '影響力', value: 35 },
      { rank: '限界突破', value: 35 }
    ]

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.appFrame}>
                <Typography variant="title" color="inherit" noWrap>
                  {systemName}
                </Typography>
              </div>
              <Manager>
                <Target>
                  <div
                    ref={node => {
                      this.target1 = node
                    }}
                  >
                    <Chip
                      avatar={
                        <Avatar
                          src={restUrl + `uploads/${this.state.imageFileName}`}
                        />
                      }
                      label={this.state.shimei}
                      className={classes.chip}
                      aria-label="More"
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                      className={classNames(
                        !open && classes.buttonFrame,
                        open && classes.buttonFrame2
                      )}
                      style={{ fontSize: '100%' }}
                    />
                  </div>
                </Target>
                <Popper
                  placement="bottom-start"
                  eventsEnabled={open2}
                  className={classNames({ [classes.popperClose]: !open2 })}
                >
                  <Grow
                    in={open2}
                    id="menu-list-grow"
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem
                          id="logout"
                          onClick={this.handleLogoutClick}
                          component={loginLink}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </Popper>
              </Manager>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />
            <div>
              <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="p">
                  平成３０年度６月部会
                </Typography>
                <br />
                <Typography variant="headline" component="h3">
                  全体順位：１位　獲得コイン：340coin
                </Typography>
                <Typography variant="headline" component="h3">
                  『新しい価値を創造する為に・・・』
                </Typography>
                <table>
                  <tr>
                    <td>
                      <Avatar
                        alt="Adelle Charles"
                        src="/images/mikami.png"
                        className={classNames(classes.PnlAvatar)}
                      />
                    </td>
                    <td>
                      <Typography
                        component="p"
                        variant="title"
                        color="textSecondary"
                      >
                        北海道　一郎
                      </Typography>
                    </td>
                  </tr>
                </table>
              </Paper>

              <RadarChart // レーダーチャートのサイズや位置、データを指定
                height={400} // レーダーチャートの全体の高さを指定
                width={500} // レーダーチャートの全体の幅を指定
                cx="50%" // 要素の左を基準に全体の50%移動
                cy="50%" // 要素の上を基準に全体の50%移動
                data={dataRadar} // ここにArray型のデータを指定
              >
                <PolarGrid /> // レーダーのグリッド線を表示
                <PolarAngleAxis
                  dataKey="rank" // Array型のデータの、数値を表示したい値のキーを指定
                />
                <Radar // レーダーの色や各パラメーターのタイトルを指定
                  name="点数" // hoverした時に表示される名前を指定
                  dataKey="value" // Array型のデータのパラメータータイトルを指定
                  stroke="#8884d8" // レーダーの線の色を指定
                  fill="#8884d8" // レーダーの中身の色を指定
                  fillOpacity={0.6} // レーダーの中身の色の薄さを指定
                />
                <Tooltip2 /> //hoverすると各パラメーターの値が表示される
              </RadarChart>

              <ExpansionPanel
                expanded={expanded === 'panel1'}
                onChange={this.handleChangePnl('panel1')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: '18px' }}
                  >
                    <Avatar
                      alt="Adelle Charles"
                      src="/images/yamashita.png"
                      className={classNames(classes.PnlAvatar)}
                    />
                    札幌　一郎
                  </Typography>
                  <Typography style={{ fontSize: '18px' }}>
                    投票：500coin　資料作成：10点　発表力：10点　表現力：10点　影響力：10点　限界突破：10点　コメントを読む
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: '18px' }}>
                    すごく良かった。 感動した。
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === 'panel2'}
                onChange={this.handleChangePnl('panel2')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: '18px' }}
                  >
                    <Avatar
                      alt="Adelle Charles"
                      src="/images/yamashita.png"
                      className={classNames(classes.PnlAvatar)}
                    />
                    札幌　二郎
                  </Typography>
                  <Typography style={{ fontSize: '18px' }}>
                    投票：400coin　資料作成：10点　発表力：10点　表現力：10点　影響力：10点　限界突破：10点　コメントを読む
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: '18px' }}>
                    すごく良かった。 感動した。もっと聞きたい！！！
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === 'panel3'}
                onChange={this.handleChangePnl('panel3')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: '18px' }}
                  >
                    <Avatar
                      alt="Adelle Charles"
                      src="/images/yamashita.png"
                      className={classNames(classes.PnlAvatar)}
                    />
                    札幌　三郎
                  </Typography>
                  <Typography style={{ fontSize: '18px' }}>
                    投票：300coin　資料作成：10点　発表力：10点　表現力：10点　影響力：10点　限界突破：10点　コメントを読む
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: '18px' }}>
                    すごく良かった。 感動した。もっと聞きたい！！！
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === 'panel4'}
                onChange={this.handleChangePnl('panel4')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: '18px' }}
                  >
                    <Avatar
                      alt="Adelle Charles"
                      src="/images/yamashita.png"
                      className={classNames(classes.PnlAvatar)}
                    />
                    札幌　四郎
                  </Typography>
                  <Typography style={{ fontSize: '18px' }}>
                    投票：200coin　資料作成：10点　発表力：10点　表現力：10点　影響力：10点　限界突破：10点　コメントを読む
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: '18px' }}>
                    すごく良かった。 感動した。もっと聞きたい！！！
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === 'panel5'}
                onChange={this.handleChangePnl('panel5')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: '18px' }}
                  >
                    <Avatar
                      alt="Adelle Charles"
                      src="/images/yamashita.png"
                      className={classNames(classes.PnlAvatar)}
                    />
                    札幌　五郎
                  </Typography>
                  <Typography style={{ fontSize: '18px' }}>
                    投票：100coin　資料作成：10点　発表力：10点　表現力：10点　影響力：10点　限界突破：10点　コメントを読む
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ fontSize: '18px' }}>
                    すごく良かった。 感動した。もっと聞きたい！！！
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

TohyoShokaiShosaiForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TohyoShokaiShosaiForm)
