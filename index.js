const express = require('express')
const path = require('path')
const data = require('./data/example.json')
const app = express()
const port = 5000
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
app.get('/', (req, res) => {
    res.render('test')
  })


app.post('/ff',(req,res) =>{
   console.log(req.body);
   console.log(data);
   const email = req.body.email;
   const gender = req.body.gender;
   const jobArea = req.body.jobArea;
   const jobTitle = req.body.jobTitle;
   for (var i=0; i<data.length ; i++){
    if(email === data[i].email){
        const check = data[i];
        const dd = '/test/?email=' + check.email;
        const a = '/test/' + check.email;
        console.log(email);
        res.redirect(dd);
        res.redirect(a);
     
    }
    if(gender === data[i].gender){
        const check = data[i];
        const dd = '/test/?gender=' + check.gender;
        res.redirect(dd);
     
    }

    if(jobArea === data[i].jobArea){
        const check = data[i];
        const dd = '/test/?jobArea=' + check.jobArea;
        res.redirect(dd);
     
    }
    if(jobTitle === data[i].jobTitle){
        const check = data[i];
        const dd = '/test/?jobTitle=' + check.jobTitle;
        res.redirect(dd);
     
    }


 }
    
})

app.get('/test', (req,res) => {
    
    const check = [];
    // email
    const email = req.query.email;
    for (var i=0; i<data.length ; i++){
        if(email === data[i].email){
            check.push(data[i]);
         
        }
    }
    // gender
    const gender = req.query.gender;
    for (var i=0; i<data.length ; i++){
        if(gender === data[i].gender){
            check.push(data[i]);
         
        }
    }

    // jobArea
    const jobArea = req.query.jobArea;
    for (var i=0; i<data.length ; i++){
        if(jobArea === data[i].jobArea){
            check.push(data[i]);
         
        }
    }

    // 
    const jobTitle = req.query.jobTitle;
    for (var i=0; i<data.length ; i++){
        if(jobTitle === data[i].jobArea){
            check.push(data[i]);
         
        }
    }
    
    res.render('name', {'data': check})
 })

  // params
  app.get('/test/:name', (req, res) => {
        const name = req.params.name;
        const check = [];
        
        for (var i=0; i<data.length ; i++){
            if(name === data[i].email){
                check.push(data[i]);
             
            }

            if(name === data[i].gender){
                check.push(data[i]);
             
            }

            if(name === data[i].jobArea){
                check.push(data[i]);
             
            }

            if(name === data[i].jobTitle){
                check.push(data[i]);
             
            }
        }

        
        res.render('name', {'data': check})
  })
    
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })














// app.get('/query', (req, res) => {
//    const check = [];
//     //fullname
//     const fullname = req.query.fullname;
//     for (var i=0; i<data.length ; i++){
//         if(fullname === data[i].fullname){
//             check.push(data[i]);
         
//         }
       
//     }
//     // email
//     const email = req.query.email;
//     for (var i=0; i<data.length ; i++){
//         if(email === data[i].email){
//             check.push(data[i]);
         
//         }
       
//     }
//      // fname
//      const fname = req.query.fname;
//      for (var i=0; i<data.length ; i++){
//          if(fname === data[i].fname){
//              check.push(data[i]);
          
//          }
        
//      }

//      // gender
//      const gender = req.query.gender;
//      for (var i=0; i<data.length ; i++){
//          if(gender === data[i].gender){
//              check.push(data[i]);
          
//          }
        
//      }

//      // jobArea
//      const jobArea = req.query.jobArea;
//      for (var i=0; i<data.length ; i++){
//          if(jobArea === data[i].jobArea){
//              check.push(data[i]);
          
//          }
        
//      }
//       // jobTitle
//       const jobTitle = req.query.jobTitle;
//       for (var i=0; i<data.length ; i++){
//           if(jobTitle === data[i].jobTitle){
//               check.push(data[i]);
           
//           }
         
//       }

//     console.log(check);
//     res.render('name', {'data': check})
//   })




// // params
//   app.get('/:name', (req, res) => {
//     const name = req.params.name;
//     const check = [];
    
//     for (var i=0; i<data.length ; i++){
//         if(name === data[i].fullname){
//             check.push(data[i]);
         
//         }
//         if(name === data[i].email){
//           check.push(data[i]);
       
//       }
//       if(name === data[i].fname){
//         check.push(data[i]);
     
//     }
//        if(name === data[i].gender){
//            check.push(data[i]);
   
//   }

//       if(name === data[i].jobArea){
//            check.push(data[i]);
   
//   }
//     if(name === data[i].jobTitle){
//       check.push(data[i]);
 
// }}
//     console.log(check);
//     res.render('name', {'data': check})
//   })

 
  
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })