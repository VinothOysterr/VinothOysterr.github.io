var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var PORT = 8000;
// const PORT = process.env.PORT || 8000;

////
const axios = require('axios');
const path = require('path');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
////

let reqData;
let compare;

app.use(express.json())

app.set("Title","Welcome to My Application")

app.get("/", (req,res)=>{

   res.send(app.get('Title'))
   console.log(app.get('Title'))
   
})

app.post("/T1",(req,res)=>{
    reqData = req.body;
    compare = req.body.state;
   
    console.log(compare)
    console.log(reqData)
})
app.get("/T1",(req,res)=>{
    
   // res.send(JSON.stringify(reqData));

     if(compare == "1")
    {
      //  res.send(JSON.stringify({"State": "ON"}));
        res.json({"State": "ON"})
    }
    else(compare == "0")
    {
     //  res.send(JSON.stringify({"State": "OFF"}))
       res.json({"State": "OFF"})

    }
   // console.log(reqData)
})

app.get('/T1State',(req,res)=>{
     
  
    
   
    console.log(compare)
   
})
app.post("/T2",(req,res)=>{

    reqData = req.body;
    console.log(reqData)
})
app.get("/T2",(req,res)=>{

    res.send(JSON.stringify([
  {
    "st_name": "Andhra Pradesh",
    "year": "1978.0",
    "ac_no": "1",
    "ac_name": "Ichapuram",
    "ac_type": "GEN",
    "cand_name": "Manabala Ramarao",
    "cand_sex": "M",
    "partyname": "Independent",
    "partyabbre": "IND",
    "totvotpoll": "813.0",
    "electors": "83247"
  },
 {
    "st_name": "Andhra Pradesh",
    "year": "1978.0",
    "ac_no": "9",
    "ac_name": "Parvathipuram",
    "ac_type": "GEN",
    "cand_name": "Krishnamurthy Naidu Vasireddi",
    "cand_sex": "M",
    "partyname": "Indian National Congress",
    "partyabbre": "INC",
    "totvotpoll": "17671.0",
    "electors": "82282"
  },
  {
    "st_name": "Andhra Pradesh",
    "year": "1978.0",
    "ac_no": "10",
    "ac_name": "Salur",
    "ac_type": "ST",
    "cand_name": "Lakshmi Narasimha Sahyasi Raju",
    "cand_sex": "M",
    "partyname": "Janata Party",
    "partyabbre": "JNP",
    "totvotpoll": "24477.0",
    "electors": "78094"
  },
]));
    // console.log(reqData)
})
app.post("/T3",(req,res)=>{

    reqData = req.body;
    console.log(reqData)
  
})
app.get("/T3",(req,res)=>{
    res.send(JSON.stringify(reqData));
    console.log(reqData)
    
})
app.post("/T4",(req,res)=>{
    
    reqData = req.body;
    console.log(reqData)
})
app.get("/T4",(req,res)=>{
    
    res.send(JSON.stringify(reqData));
    console.log(reqData)
})
app.post("/T5",(req,res)=>{
   
    reqData = req.body;
    console.log(reqData)
})
app.get("/T5",(req,res)=>{
  
   res.send(JSON.stringify(reqData));
   console.log(reqData)
})
app.post("/T6",(req,res)=>{
    
    reqData = req.body;
    console.log(reqData)
})
app.get("/T6",(req,res)=>{
   
    // res.send(JSON.stringify(reqData));
    const reqData = {
		"T_1": 0,
		"T_2": 1,
		"T_3": 0,
		"T_4": 1,
		"T_5": 0,
		"T_6": 1,
		}
    res.json(reqData)
    // console.log(reqData)
})

// Start

app.get('/home', async (req, res) => {
    try {
      // const response = await axios.get('https://sample-7us9.onrender.com/T6');
	// const response = await axios.get('https://f7bd-2401-4900-1f2b-5fa1-7566-1e10-d9f-bc01.in.ngrok.io/post');
	 const response = await axios.get('http://52.41.36.82/post');
      const data = response.data;
  
      res.render('home.html', { data: data });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving data' });
    }
});

// End

app.listen(PORT, function(err){
    if (err) 
    console.log(err);
    console.log("Server listening on Port", PORT)
})
