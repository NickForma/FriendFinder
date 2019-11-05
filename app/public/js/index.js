$(document).ready(function() {
  //   let friends = require("/Users/nickf/School/HW/Friendfinder/FriendFinder/app/data/friends");
  //   console.log(friends[0].name);

  $(".dropdown-toggle").dropdown();

  let answers = [];

  let questions = [
    "You enjoy vibrant social events with lots of people.",
    "You often spend time exploring unrealistic yet intriguing ideas.",
    "Your travel plans are more likely to look like a rough list of ideas than a",
    "You often think about what you should have said in a conversation long after it has taken place.",
    "If your friend is sad about something, your first instinct is to support them emotionally, not try to solve their problem.",
    "People can rarely upset you.",
    "You often rely on other people to be the ones to start a conversation and keep it going.",
    "If you have to temporarily put your plans on hold, you make sure it is your top priority to get back on track as soon as possible.",
    "You rarely worry if you made a good impression on someone you met.",
    "It would be a challenge for you to spend the whole weekend all by yourself without feeling bored."
  ];

  questions.forEach((elem, index) => {
    $(".questionBox").append(`
    <br>
    <div class="dropdown">
    <h3>Question ${index + 1}</h3>
    <p class="choosing">Choose from 1 for Strongly Disagree to 5 for Strongly Agree </p>
      <p>${elem}</p>
        <button
          class="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select An Option
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item ans1${index}" href="#">1</a>
          <a class="dropdown-item ans2${index}" href="#">2</a>
          <a class="dropdown-item ans3${index}" href="#">3</a>
          <a class="dropdown-item ans4${index}" href="#">4</a>
          <a class="dropdown-item ans5${index}" href="#">5</a>
        </div>
      </div>
      `);
  });

  $(".dropdown-item").click(data => {
    data.preventDefault();
    // console.log(data, data.value, data.target.innerHTML);
    answers.push(data.target.innerHTML);

    console.log(data.target.innerHTML);
    console.log(answers);
  });

  $(".btn-success").click(data => {
    console.log(answers);
    alert(answers);
  });
});
