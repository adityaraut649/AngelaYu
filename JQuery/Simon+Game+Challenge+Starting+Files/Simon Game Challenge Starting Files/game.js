
nextSequence();

function nextSequence() {
    var sequence = getRandomSequence();
    $("#level-title").text(sequence.title);
    $(".btn").removeClass("green red yellow blue");
    $("#" + sequence.color).addClass(sequence.color);
    setTimeout(nextSequence, sequence.delay);
}

function getRandomSequence() {
    var colors = ["green", "red", "yellow", "blue"];
    var titles = ["Press A Key to Start", "Green", "Red", "Yellow", "Blue"];
    var delays = [1000, 1000, 1000, 1000];
    var index = Math.floor(Math.random() * colors.length);
    return {
        color: colors[index],
        title: titles[index],
        delay: delays[index]
    };
}   