function findAndReplace() {
    const inputText = document.getElementById('inputText').value;
    const findText = document.getElementById('findText').value;
    const replaceText = document.getElementById('replaceText').value;

    if (findText === "") {
        alert("Please enter a word or phrase to find.");
        return;
    }

    const updatedText = inputText.replace(new RegExp(findText, 'g'), replaceText);
    document.getElementById('outputText').value =updatedText;
}