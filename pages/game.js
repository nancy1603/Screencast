import axios from "axios";
import React from "react";
import Question from "../components/Question";
import Hint from "../components/Hint";
import AnsAlert from "../components/AnsAlert";
import Answer from "../components/Answer";
import Router from "next/router";
import data from '../env.json';
import Layout from "../components/Layout";
import Loader from "../components/Loader";

class game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      audio: "",
      image: "",
      isLoggedIn: false,
      hint: "",
      day: "",
      end: "",
      message: "",
      v: "",
      loaded: false,
    };

    this.submit = this.submit.bind(this);
    // this.submit2 = this.submit2.bind(this);
    this.change = this.change.bind(this);
    this.checkAns = this.checkAns.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    axios
      .get(process.env.api + "/api/status")
      .then((response) => {
        var temp3 = new Date(response.data.start_time);
        let temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + (temp2.getTimezoneOffset() * 60000))
        localStorage.setItem("start", temp3.getTime() + (temp3.getTimezoneOffset() * 60000));
        let temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("day", response.data.current_day);
        this.setState({
          v: setTimeout(function () {
            AnsAlert(9);
            if (localStorage.getItem('day') === 3) {
              Router.push('/finale')
            }
            else if(response.data.error){
              Router.push('/error')
            }
            else {
              Router.push('/finale');
            }
          }, temp)
        })
        this.setState({ day: localStorage.getItem('day'), end: localStorage.getItem('end') }, () => {
          if (localStorage.getItem('day') == 3 && (localStorage.getItem('end') < Date.now()))
            Router.push('/finale')
          if (!(localStorage.getItem("email"))) {
            AnsAlert(8)
            Router.push('/');
          }
          else if (!(localStorage.getItem('start') <= Date.now())) {
            // AnsAlert(8)
            Router.push("/");
          }
          else {
            this.getQuestions();
          }
        });
      })
      .catch(err => {
        console.log(err)
        Router.push('/error')
      });
  }

  getQuestions() {
    axios
      .get(process.env.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.quiz_finished) {
          clearTimeout(this.state.v);
          Router.push("/finale");
        }
        this.setState((prevState) => {
          return {
            ...prevState,
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
            audio: response.data.audio,
            image: response.data.image
          };
        });
        window.scrollTo(0, 0);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        this.setState({ loaded: true });
      })
      .catch(err => {
        console.log(err)
        Router.push('/error')
      });
  }

  submit = (event) => {
    //send final answer for checking
    event.preventDefault()
    this.checkAns(this.state.answer);
    this.setState((prevState) => {
      return { ...prevState, answer: "" };
    });
  };
  // submit2 = () => {
  //   //send final answer for checking
  //   console.log(this.state.answer);
  //   this.checkAns(this.state.answer);
  // };

  change = (event) => {
    //keep updating answer
    let e = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, answer: e };
    });
  };

  checkAns(
    ans //check answer from api and send for correct alert
  ) {
    axios
      .post(
        process.env.api + "/api/checkanswer",
        { answer: ans },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        let r = response.data.result;
        if (r && !response.data.quiz_finished) {
          this.setState((prevState) => {
            return { ...prevState, qsNo: prevState.qsNo + 1, answer: "" };
          });
          AnsAlert(1);
          this.setState({
            answer: ""
          });
          this.getQuestions();
        } else if (r && response.data.quiz_finished) {
          AnsAlert(1);
          clearTimeout(this.state.v);
          Router.push("/finale");
        } else {
          this.setState({
            answer: ""
          });
          AnsAlert(0);
        }
      });
  }

  render() {
    return (
      <>
        { (this.state.loaded === true) ?
          <Layout>
            <div
              style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center", minHeight: "100vh-100px" }}
              questions
            >
              <Question qs={this.state.questions} qsNo={this.state.qsNo} audio={this.state.audio} image={this.state.image} day={this.state.day} />
              <div>
                <Answer
                  change={this.change}
                  answer={this.state.answer}
                  submit={this.submit}
                />
                <Hint hint={this.state.hint}
                  submit={this.submit}
                // submit2={this.submit2}
                />
                <style jsx>{`
            div {
              text-align: center;
              margin: 5px;
              margin-bottom:100px;
            }
          `}</style>
              </div>
              <div className='footerBuff'>

              </div>
            </div>
          </Layout>
          : <Loader />}
      </>
    );
  }
}
export default game;