import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {isPalindrome} from "./problemScripts/isPalindrome";
import {romanToInt} from "./problemScripts/romanToInt";

//class versus functional components
export const App = () => {
    //useState returns an [] where [0] is the value and [1] is a function to update the value.
    const [testResults, setTestResults] = useState([])
    const runTests = () => {
            let testCases = [121,10,-121]
            const testResult1 = isPalindrome(testCases[0]);
            const testResult2 = isPalindrome(testCases[1]);
            const testResult3 = isPalindrome(testCases[2]);

            const results =  [
                {test: testCases[0], result: testResult1},
                {test: testCases[1], result: testResult2},
                {test: testCases[2], result: testResult3}
            ]

            setTestResults(results)
    }

  return (
    <div className="App">
      <p>Goal for leetcode</p>
      <p>Code quality: produced code that is legible=, easy to iterate upon, and follows the best practices of their
        chosen language.</p>
      <p>Communication: quickly understood the prompt, asked relevant questions, and responded well to feedback</p>
      <p>problem solving: independently worked through the requirements of the challenge, unblocking themselves when they
        got stuck.</p>


      function(testCases, id, corresponding js file?){
            //create <p></p> element with appropriate ID
      }
      <br/>
        {testResults.map((testResult, i) => <p>{`test: ${testResult.test} result: ${testResult.result}`}</p>)}
        <br/>
        <button type="button" id="runPalindrome" onClick={runTests}>Run isPalindrome Tests</button>
        <button type="button" id="runPalindrome" onClick={() => {
            let copy = [...testResults, {test:'rawr', result:'will it re-render?'}];
            setTestResults(copy);
        }}>Add to Screen Example</button>
    </div>
  );
}
