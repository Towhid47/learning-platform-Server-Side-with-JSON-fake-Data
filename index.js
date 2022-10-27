const express = require('express');
const app = express();
 const cors = require('cors');
 app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

const courses = require('./data/courses.json');



app.get('/', (req, res)=>{
    res.send('Tutor API running');
});

app.get('/course', (req,res)=>{
    res.send(courses);
})

app.get('/course-categories', (req, res) =>{
    res.send(categories);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.course_id === id );
     res.send(selectedCourse);
} )


app.get('/course-category/:id', (req,res)=>{
    const id = req.params.id;
    if(id === "7"){
        res.send(courses);
    }
    else{
        const course_category = courses.filter(course => course.category_id === id);
        res.send(course_category); 
    }
       
})



app.listen(port, ()=>{
    console.log("CS Tutor Running on port", port);
})
