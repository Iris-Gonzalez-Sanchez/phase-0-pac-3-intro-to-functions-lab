function shout(string) {

    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let lowerCase = string.toLowerCase();
    let upperCase = string.toUpperCase();

    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
    if (string === lowerCase){
        return "I can't hear you!";
    }
    if (string === upperCase){
        return "YES INDEED!";
    }

}


/* we made variables to store a lowercased version of string and an uppercased version of the string
we compared these altered versions of the string to the original to see if we had a match
based on that and also checking if the string matches the lets have dinner string, then return accordingly */
