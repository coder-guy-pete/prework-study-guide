const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
  console.log('Here are the topics we learned throguh Prework:');
  listTopics();
  console.log('Which topic should we study first?');
  selectTopic();

// Get all sections
const sections = document.querySelectorAll('section');

// Add event listeners to each section
sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    // Highlight the section on hover
    section.style.backgroundColor = '#d4d8d2';
  });

  section.addEventListener('mouseout', () => {
    // Remove the highlight when the mouse leaves the section
    section.style.backgroundColor = ''; // Reset the background color
  });
});