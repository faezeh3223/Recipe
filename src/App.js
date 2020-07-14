
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BarChart from 'react-easy-bar-chart';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import food1 from "./New/food1.jpg";
import food2 from "./New/food2.jpg";
import food3 from "./New/food3.jpg";
import food4 from "./New/food4.jpg";
import food5 from "./New/food5.jpg";
import food6 from "./New/food6.jpg";
import food7 from "./New/food7.jpg";
import food8 from "./New/food8.png";



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },

    paper: {
        height:"1050px",
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',

    },

    root1: {
        position:'relative',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        display:'flex',
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width:1300,
        borderRadius: "20px",



    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },


    chart:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    r1:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        top:"7px"
    },
    r2:{
      position:'absolute',
        right:"20px",
        top:"2px"
    },
    card: {
        borderRadius: "20px",
        height:680,
        margin:theme.spacing(2,3,2,3),
    },
    card2: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        position:'relative',

    },
    card1: {
        position:'relative',
        height:"270px",
        width:"1300px",
        display:'flex',
        flexDirection:'column',
        flexWrap:'nowrap',
        margin:theme.spacing(2,0,2,3),
        borderRadius: "20px",
    },
    card3:{
        height:"200px",
        width:"300px",
        borderRadius: "20px",
        margin:theme.spacing(2,3,2,4),


    },



    grid: {
        width:"240px",
        height:"200px",
        flexDirection:'column',
        display: 'block',
    },

    img: {
        height: 120,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        margin: 'auto',


    },
    typo:{
        display:'flex',
        flexDirection:'row',
        position:'relative',
    },

    typo1:{
        position:'absolute',
        left:20,
        top:15
    },
    typo2:{
        position:'absolute',
        top:5,
        left:130


    },
    typo4:{
        display:'flex',

        marginLeft:1150,
        margin:theme.spacing(1,1,1,1),



    },
    typo5:{
       position:'absolute',
        right:10



    },
    icon:{
        position:'absolute',
        left:1290,
        top:220
    },
    date:{
        display:'flex',
        flexDirection:'row'

    },
    date1:{
        display:'flex',
        flexDirection:'row'

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root3: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },




}));
const tileData = [
    {
        img:food1 ,
        title: 'سوشی',
        author:'100000 تومان',
        author1:' 10000 تومان',
        author2:'10 عدد',

    },
    {
        img:food2 ,
        title: 'سالاد',
        author:'140000 تومان',
        author1:'7000 تومان',
        author2:'20 عدد',

    },
    {
        img:food3 ,
        title: 'کباب',
        author:'200000 تومان',
        author1:'20000 تومان',
        author2:'10 عدد',

    },
    {
        img:food4 ,
        title: 'سوپ',
        author:'75000 تومان',
        author1:'5000 تومان',
        author2:'15 عدد',

    },
    {
        img:food5 ,
        title: ' پلومرغ',
        author:' 600000 تومان',
        author1:'30000',
        author2:'30 عدد',

    },
    {
        img:food6 ,
        title: 'سالامی',
        author:'500000 تومان',
        author1:'50000 تومان',
        author2:'10 عدد',

    },
    {
        img:food7 ,
        title: 'کیک',
        author:'200000تومان',
        author1:'10000 تومان',
        author2:'20 عدد',
    },

]


const ITEM_HEIGHT = 48;

export default function SimplePaper() {

    const classes = useStyles();
    const theme = useTheme();


    const data = [
        {
            title:  "سوشی",
            value: 10,
            color: "#196f3d",
        },
        {
            title:  "سالاد",
            value: 20,
            color: "#a93226",
        },
        {
            title:  "کباب",
            value: 10,
            color: " #1f618d",
        },
        {
            title:  "سوپ",
            value: 15,
            color: "#839192",
        },
        {
            title:  "پلو مرغ",
            value: 30,
            color: "#d35400",
        },
        {
            title:  "سالامی",
            value: 10,
            color: " #a9cce3",
        },
        {
            title:  "کیک",
            value: 50,
            color: "#2e4053",
        },
        {
            title:  "رسپی هشتم",
            value: 6,
            color: "#186a3b",
        },
    ];
    const data1 = [
        {
            title:  "سوشی",
            value: 100000,
            color: "#196f3d",
        },
        {
            title:  "سالا",
            value: 140000,
            color: "#a93226",
        },
        {
            title:  "کباب",
            value: 200000,
            color: " #1f618d",
        },
        {
            title:  "سوپ",
            value: 75000,
            color: "#839192",
        },
        {
            title:  "پلو مرغ",
            value: 600000,
            color: "#d35400",
        },
        {
            title:  "سالامی",
            value: 500000,
            color: " #a9cce3",
        },
        {
            title:  "کیک",
            value: 200000,
            color: "#2e4053",
        },
    ];



        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };


    const [open1, setOpen] = React.useState(false);

    const handleClick1 = () => {
        setOpen(true);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Card  elevation={7} className={classes.card}>
                <div className={classes.root1}>
                    <GridList className={classes.gridList} cols={3}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} >
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    style={{height:75}}
                                    subtitle={<span style={{ borderRadius: "20px",}} >
                                        <div  className={classes.r1}>
                                        <Typography style={{fontSize:"25px"}}> {tile.title}</Typography>
                                            </div>
                                        <div className={classes.r2}>
                                        <Typography >قیمت رسپی: {tile.author1}</Typography>
                                        <Typography> قیمت کل  : {tile.author}</Typography>
                                         <Typography> تعداد فروش : {tile.author2}</Typography>
                                            </div>

                                    </span> }

                                />

                            </GridListTile>
                        ))}
                    </GridList>

                </div>

                <div className={classes.chart}>
                <div   style={{margin:theme.spacing(13,2,0,7)}}>
                    <BarChart
                        xAxis='رسپی  '
                        yAxis="تعداد"
                        height={300}
                        width={700}
                        data={data}
                    />
                </div>

                    <div style={{margin:theme.spacing(13,7,0,10)}}>
                    <BarChart
                        xAxis='رسپی '
                        yAxis="قیمت(تومان)"
                        height={300}
                        width={700}
                        data={data1}
                    />
                </div>
                </div>

                    <Card style={{ borderRadius: "20px"}}>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.icon}
                        >
                            <img style={{height:70}} alt="food8" src="food8.png"/>
                        </IconButton>
                        <Menu

                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    height:1000,
                                    width: 370,
                                    borderRadius: "20px"
                                },
                            }}
                        >
                            <Card  elevation={7}  className={classes.card3}>

                                    <form className={classes.container} noValidate>
                                        <TextField
                                            style={{margin:theme.spacing(2,1,0,2),width:230}}
                                            size="small"
                                            id="date"
                                            type="date"
                                            defaultValue="1398-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            style={{margin:theme.spacing(2,1,2,2),width:230}}
                                            size="small"
                                            id="date"
                                            type="date"
                                            defaultValue="1399-03-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>

                                <div className={classes.date1}>
                                <Typography  style={{margin:theme.spacing(2,1,2,2)} }>  درآمد :
                                </Typography>
                                <TextField
                                    style={{margin:theme.spacing(1,2,2,1),width:160}}
                                    size="small"
                                    id="standard-read-only-input"
                                    defaultValue="  1815000 تومان "
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                </div>
                            </Card>
                            <Card  elevation={7}  className={classes.card3}>

                                <form className={classes.container} noValidate>
                                    <TextField
                                        style={{margin:theme.spacing(2,1,0,2) ,width:230}}
                                        size="small"
                                        id="date"
                                        type="date"
                                        defaultValue="1398-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        style={{margin:theme.spacing(2,1,2,2) ,width:230}}
                                        size="small"
                                        id="date"
                                        type="date"
                                        defaultValue="1399-03-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>

                                <div className={classes.date1}>
                                    <Typography  style={{margin:theme.spacing(2,1,2,2)} }>برداشت شده :
                                    </Typography>
                                    <TextField
                                        style={{margin:theme.spacing(1,2,2,1),width:140}}
                                        size="small"
                                        id="standard-read-only-input"
                                        defaultValue="  800000 تومان"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </Card>
                            <Card  elevation={7}  className={classes.card3}>

                                <form className={classes.container} noValidate>
                                    <TextField
                                        style={{margin:theme.spacing(2,1,0,2) ,width:230}}
                                        size="small"
                                        id="date"
                                        type="date"
                                        defaultValue="1398-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        style={{margin:theme.spacing(2,1,2,2) ,width:230}}
                                        size="small"
                                        id="date"
                                        type="date"
                                        defaultValue="1399-03-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>

                                <div className={classes.date1}>
                                    <Typography  style={{margin:theme.spacing(2,1,2,2)} }>موجودی :
                                    </Typography>
                                    <TextField
                                        style={{margin:theme.spacing(1,2,2,1),width:160}}
                                        size="small"
                                        id="standard-read-only-input"
                                        defaultValue="  1015000 تومان"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </Card>
                            <Card  elevation={7}  className={classes.card3}>

                                <TextField
                                    style={{margin:theme.spacing(3,2,2,6) }}
                                    id="standard-basic" label="مبلغ را وارد نمایید" />

                                    <Button
                                        style={{margin:theme.spacing(3,2,2,15) }}
                                        variant="contained" color="secondary" onClick={handleClick1}>
                                        تایید
                                    </Button>
                                    <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
                                        <Alert onClose={handleClose1} severity="success">
                                            تغییرات اعمال شده بررسی میشود و از طریق پیامک ارسال خواهد شد
                                        </Alert>
                                    </Snackbar>


                            </Card>


                        </Menu>
                    </Card>

                </Card>
                <Card   elevation={7} className={classes.card1}>
                    <Typography  className={classes.typo4} style={{fontSize:"20px" }}> پر فروش ترین ها</Typography>


                        <div className={classes.card2}>
                            <Card elevation={4} style={{margin:theme.spacing(0,1,3,1),
                                borderRadius:"25px",}}>

                            <Grid container className={classes.grid}>

                                <img className={classes.img} alt="food5" src="food5.jpg"/>
                                <div className={classes.typo}>
                                <div className={classes.typo1}>
                                <Typography style={{fontSize:"20px"}}>پلو مرغ </Typography>
                                </div>
                                <div className={classes.typo2}>
                                <Typography> قیمت :30000 </Typography>
                                <Typography> قیمت کل:600000 </Typography>
                                <Typography> تعداد:20 عدد  </Typography>
                                </div>
                                </div>

                            </Grid>
                            </Card>
                            <Card elevation={4} style={{margin:theme.spacing(0,1,3,1),
                                borderRadius:"25px",}}>

                            <Grid container className={classes.grid}>

                                <img className={classes.img} alt="food6" src="food6.jpg"/>
                                <div className={classes.typo}>
                                    <div className={classes.typo1}>
                                        <Typography style={{fontSize:"20px"}}> سالامی </Typography>
                                    </div>
                                    <div className={classes.typo2}>
                                        <Typography> قیمت:50000 </Typography>
                                        <Typography> مجموع:500000 </Typography>
                                        <Typography> تعداد:10 عدد  </Typography>
                                    </div>
                                </div>

                            </Grid>
                            </Card>
                            <Card elevation={4} style={{margin:theme.spacing(0,1,3,1),
                                borderRadius:"25px",}}>
                            <Grid container className={classes.grid}>

                                <img className={classes.img} alt="food3" src="food3.jpg"/>
                                <div className={classes.typo}>
                                    <div className={classes.typo1}>
                                        <Typography style={{fontSize:"20px"}}> کباب </Typography>
                                    </div>
                                    <div className={classes.typo2}>
                                        <Typography> قیمت:20000 </Typography>
                                        <Typography> مجموع:200000 </Typography>
                                        <Typography> تعداد:10 عدد  </Typography>
                                    </div>
                                </div>

                            </Grid>
                            </Card>
                            <Card elevation={4} style={{margin:theme.spacing(0,1,3,1),
                                borderRadius:"25px",}}>
                            <Grid container className={classes.grid}>

                                <img className={classes.img} alt="food7" src="food7.jpg"/>
                                <div className={classes.typo}>
                                    <div className={classes.typo1}>
                                        <Typography style={{fontSize:"20px"}}> کیک </Typography>
                                    </div>
                                    <div className={classes.typo2}>
                                        <Typography> قیمت:10000 </Typography>
                                        <Typography> مجموع:200000 </Typography>
                                        <Typography> تعداد:20 عدد  </Typography>
                                    </div>
                                </div>

                            </Grid>
                            </Card>
                            <Card elevation={4} style={{margin:theme.spacing(0,1,3,1),
                                borderRadius:"25px",}}>
                            <Grid container className={classes.grid}>

                                <img className={classes.img} alt="food2" src="food2.jpg"/>
                                <div className={classes.typo}>
                                    <div className={classes.typo1}>
                                        <Typography style={{fontSize:"20px"}}> سالاد </Typography>
                                    </div>
                                    <div className={classes.typo2}>
                                        <Typography> قیمت:7000 </Typography>
                                        <Typography> مجموع:140000 </Typography>
                                        <Typography> تعداد:20 عدد  </Typography>
                                    </div>
                                </div>

                            </Grid>
                            </Card>
                            

                    </div>
                </Card>

            </Paper>
        </div>
    );
}
