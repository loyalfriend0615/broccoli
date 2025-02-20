
export function copyToClipboard1() {
    const input = document.getElementById("ca1");
    const button = document.getElementById("btn1");

    // Copy text to clipboard
    navigator.clipboard.writeText(input.value).then(() => {
        // Change button text to ✔
        button.innerHTML = "✔";
        
        // Restore original text after 2 seconds
        setTimeout(() => {
            button.innerHTML = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}
export  function copyToClipboard2() {
    const input = document.getElementById("ca2");
    const button = document.getElementById("btn2");

    // Copy text to clipboard
    navigator.clipboard.writeText(input.value).then(() => {
        // Change button text to ✔
        button.innerHTML = "✔";
        
        // Restore original text after 2 seconds
        setTimeout(() => {
            button.innerHTML = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}