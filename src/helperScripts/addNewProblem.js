import {isPalindrome} from "../problemScripts/isPalindrome";

export function addNewProblem(testCases, problemName){
    const outputElement = document.createElement("p").id(`${problemName}Output`);
    const buttonElement =
        document.createElement("button")
            .id(`run${problemName}`)
            .addEventListener("click", ()=> {

            });

    // <p id="romanToIntOutput"></p>
    //
    // <button type="button" id="runPalindrome" onClick={() => {
    //     let testCases = [121,10,-121]
    //     const testResult1 = isPalidrome(testCases[0]);
    //     const testResult2 = isPalidrome(testCases[1]);
    //     const testResult3 = isPalidrome(testCases[2]);
    //
    //     document.getElementById("isPalindromeOutput").innerText =
    //         (`isPalindrome of ${testCases[0]} returned ${testResult1}
    //             isPalindrome of ${testCases[1]} returned ${testResult2}
    //             isPalindrome of ${testCases[2]} returned ${testResult3}`);
    // }}>Run isPalindrome Tests</button>
}