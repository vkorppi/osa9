
import express from 'express';
import { calculateBmi } from "./modules/bmiCalculator";
import bodyParser from 'body-parser';
import { calculateExercises } from "./modules/exerciseCalculator";

const exp = express();

exp.use(bodyParser.json());


exp.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
  });

  exp.get('/bmi', (req, res) => {

    if(!req.query.height || !req.query.weight)  {

      res.status(400).send({error: "Missing parameters"});
    }
    else if(isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
      res.status(400).send({error: "Parameters had non numbers"});
    }
    else {
      const height =Number(req.query.height);
      const weight =Number(req.query.weight);
  
  
      res.send( {"weight":req.query.weight,"height":req.query.height,"bmi":calculateBmi(height,weight)} );
    }


  });

  exp.post('/exercises', (req, res) => {

    
    const exercises: number[]= req.body.daily_exercises;
    const target =req.body.target;
    let error =false;
    let missing = false;

    let i=0;

    if(!target || !exercises) {
      res.status(400).send({error: "Parameters were missing"});
      missing=true;
    }

    if(isNaN(Number(target)) && !missing) {
      error=true;
      
    }
    
    if(!error  && !missing) {
    while (i < exercises.length && !error) {

      if(isNaN(Number(exercises[i]))) {
        error=true;
      }
      i++;
    }
  }

  if(error) {

    res.status(400).send({error: "Parameters had non numbers"});
  }

  if(!error && !missing) {

    res.json(calculateExercises(target,exercises));

  }

  });



  
  exp.listen(3000);