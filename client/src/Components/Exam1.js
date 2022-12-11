import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Exam1() {
  const [quizCategories, setQuizCategories] = useState([]);

  let fetchQuizCategories = async () => {
    let fetched = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
    let formatted = fetched.data.results.map((question)=>{ 
      question.incorrect_answers.splice(Math.floor(Math.random()*3)  ,0,question.correct_answer);

       return {
           ...question,

       };
    });
    setQuizCategories(formatted);
    console.log(formatted)

  };
  useEffect(() => {
    fetchQuizCategories();
  }, []);
  return <>hi</>;
}
