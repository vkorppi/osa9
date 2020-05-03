import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => {


  interface HeaderProps {
    coursename: string;
  }


  
  interface ContentProps {

    parts: CoursePart[];

 
  }

  interface PrtProps {

    parts: CoursePart[];
 
  }

  interface TotalProps {

    title: string;
    sum: number;
 
  }


  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CoursePartOne extends BaseDescription {
    name: "Fundamentals";
  }
  
  interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }

  
interface CoursePartThree extends BaseDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface Mycourse extends CoursePartBase {
  name: "mine own course";
  firstLinesOfCode: string;
}

interface BaseDescription extends CoursePartBase {
  description: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | Mycourse;


  const Header: React.FC<HeaderProps> = (props) => {
    return <h1>{props.coursename}</h1>;
  };

  const Content: React.FC<ContentProps> = (props) => {
    
    return <> <Part parts={props.parts}  /> </>
    
    
  
  };

  const Total: React.FC<TotalProps> = (props) => {
    
    return <p>{props.title} {props.sum}  </p>
  };

  const Part: React.FC<PrtProps> = (props) => {

    const assertNever = (value: never): never => {
      throw new Error("Union has element that is not known to switch");
    };

    const renderParts = (part: CoursePart) => {

      let result: JSX.Element=<p></p>;

      switch(part.name) { 
        case "Fundamentals": { 
          result=<p key={part.name}>{part.name} {part.exerciseCount} {part.description} </p>;
           break; 
        } 
        case "Using props to pass data": { 
          result=<p key={part.name}>{part.name} {part.exerciseCount} {part.groupProjectCount}</p>;
           break; 
        } 
        case "Deeper type usage": { 
          result=<p key={part.name}>{part.name} {part.exerciseCount}  {part.description}  {part.exerciseSubmissionLink}</p>;
           break; 
        } 
        case "mine own course": { 
          result=<p key={part.name}>{part.name} {part.exerciseCount}  {part.firstLinesOfCode} </p>;
           break; 
        } 
        default: { 
          assertNever(part)
           break; 
        } 
        
     }
     return result; 

    }

    const renderedParts: JSX.Element[] =  props.parts.map(renderParts)
    

    
    return <> 
      {renderedParts}
     </>

    
  };


  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "mine own course",
      exerciseCount: 1,
      firstLinesOfCode: "hello world"
    }
  ];

  return (
    <div>
      <Header coursename={courseName}/>
      <Content parts={courseParts}/>
      <Total title={'Number of exercises'} sum={courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)} />
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));