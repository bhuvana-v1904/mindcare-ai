function selectMood(mood) {

    const responseBox = document.getElementById("moodResponse");

    const responses = {
        great: "Glad you're having a positive day! Consider noting one thing that helped you feel good today.",

        good: "Nice! Keep supporting your well-being with rest, movement, hobbies and time with people you trust.",

        okay: "An okay day is still worth checking in on. A short break, some water, or doing something you enjoy may help you reset.",

        stressed: "It sounds like things may feel stressful. Try breaking what you need to do into smaller steps, taking a short break, or talking with someone you trust.",

        low: "Thanks for checking in. Consider reaching out to a trusted adult, family member, counselor, or another supportive person rather than handling difficult feelings alone."
    };

    responseBox.innerText = responses[mood];

    responseBox.classList.remove("hidden");
}