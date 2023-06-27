import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₦ 0");

  const data = [
    {
      id: 1,
      question: "What is the full meaning of the abbreviation MLSA?",
      answers: [
        {
          text: "Microsoft Learn Students Almagamation",
          correct: false,
        },
        {
          text: "Microsoft Learn Students Ambassadors",
          correct: true,
        },
        {
          text: "Microsoft Students Learn Association",
          correct: false,
        },
        {
          text: "Microsoft Learn Students Association",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the richest man in the world?",
      answers: [
        {
          text: "Elon Musk",
          correct: false,
        },
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Larry Ellison",
          correct: false,
        },
        {
          text: "Bernard Arnault",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Which company developed the first mobile phone??",
      answers: [
        {
          text: "Motorola",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Samsung",
          correct: false,
        },
        {
          text: "Nokia",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who won the nigerian presidential election?",
      answers: [
        {
          text: "Bola Ahmed Tinubu",
          correct: false,
        },
        {
          text: "Atiku Abubakar",
          correct: false,
        },
        {
          text: "Peter Obi",
          correct: true,
        },
        {
          text: "INEC",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "What year was the oldest programming language still in use invented?",
      answers: [
        {
          text: "1957",
          correct: true,
        },
        {
          text: "1952",
          correct: false,
        },
        {
          text: "1960r",
          correct: false,
        },
        {
          text: "1974",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, diamond: "♦", amount: "₦5,000" },
        { id: 2, diamond: "♦", amount: "₦10,000" },
        { id: 3, diamond: "♦", amount: "₦15,000" },
        { id: 4, diamond: "♦", amount: "₦20,000" },
        { id: 5, diamond: "♦", amount: "₦30,000" },
        { id: 6, diamond: "♦", amount: "₦50,000" },
        { id: 7, diamond: "♦", amount: "₦100,000" },
        { id: 8, diamond: "♦", amount: "₦150,000" },
        { id: 9, diamond: "♦", amount: "₦250,000" },
        { id: 10, diamond: "♦", amount: "₦500,000" },
        { id: 11, diamond: "♦", amount: "₦1,000,000" },
        { id: 12, diamond: "♦", amount: "₦2,000,000" },
        { id: 13, diamond: "♦", amount: "₦5,000,000" },
        { id: 14, diamond: "♦", amount: "₦10,000,000" },
        { id: 15, diamond: "♦", amount: "₦20,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You won: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListDiamond">{m.diamond}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
