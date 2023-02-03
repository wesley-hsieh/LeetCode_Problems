import logo from './logo.svg';
import './App.css';
import {isPalindrome} from "./problemScripts/isPalindrome";
import {romanToInt} from "./problemScripts/romanToInt";

//class versus functional components
export const App = () => {
  return (
    <div className="App">
      <p>Goal for leetcode</p>
      <p>Code quality: produced code that is legible=, easy to iterate upon, and follows the best practices of their
        chosen language.</p>
      <p>COmmunication: quickly understood the prompt, asked relevant uesiotns, and responded well to feedback</p>
      <p>problem solving: independlty worked through the reuiqremenst of the challenge, unblocking themselves when they
        got stuck.</p>


      function(testCases, id, corresponding js file?){
            //create <p></p> element with appropriate ID

      }

      <p id="isPalindromeOutput"></p>
      <p id="romanToIntOutput"></p>

      <button type="button" id="runPalindrome" onClick={() => {
          let testCases = [121,10,-121]
          const testResult1 = isPalindrome(testCases[0]);
          const testResult2 = isPalindrome(testCases[1]);
          const testResult3 = isPalindrome(testCases[2]);

          document.getElementById("isPalindromeOutput").innerText =
              (`isPalindrome of ${testCases[0]} returned ${testResult1}
                isPalindrome of ${testCases[1]} returned ${testResult2}
                isPalindrome of ${testCases[2]} returned ${testResult3}`);
      }}>Run isPalindrome Tests</button>

      <button type="button" id="runRomanToInt" onClick={() => {
          let testCases = ["III","LVIII","MCMXCIV"]
          const testResult1 = romanToInt(testCases[0]);
          const testResult2 = romanToInt(testCases[1]);
          const testResult3 = romanToInt(testCases[2]);

          document.getElementById("romanToIntOutput").innerText =
              (`romanToInt of ${testCases[0]} returned ${testResult1}
                romanToInt of ${testCases[1]} returned ${testResult2}
                romanToInt of ${testCases[2]} returned ${testResult3}`);
      }}>Run romanToInt Tests</button>

    </div>
  );
}
