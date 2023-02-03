const init = () => {
    if (annyang) {
        console.log("annyang");
        const text = document.querySelector("#text");
        // ========================================
        // Real Deal
        // ========================================

        // Add our commands to annyang
        // annyang.addCommands({
        //     'start': function () { console.log("start") },
        //     'stop': function () { console.log("stop") },
        // });

        // ========================================
        // Single words
        // ========================================

        // annyang.addCommands({
        //     ':word': function (word) { console.log("maybe ", word) },
        // });

        // ========================================
        // Multiple words
        // ========================================
        annyang.addCommands({
            "*sentence": function (tag) {
                console.log(tag);
                text.innerHTML = tag;
            },
        });

        // annyang.start(); // if theres not SpeechKITT

        // ========================================
        // UI
        // ========================================

        // Tell KITT to use annyang
        SpeechKITT.annyang();

        // Define a stylesheet for KITT to use
        // SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
        SpeechKITT.setInstructionsText("Geni doesn't want it. Lets Go Moo!");

        // Render KITT's interface
        SpeechKITT.vroom();
    } else {
        console.log("no yang");
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("loaded");
    init();
});
