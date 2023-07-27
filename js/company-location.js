// Define your elements
const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => {
  return {
    st: document.querySelector(`.st${num}`),
    num
  };
});

// Define the elements you want to add the listener to and their corresponding textContainer
const activeElements = {
  0: { stNums: [5, 7, 8], hoverNums: [5, 7, 8], tcNum: 0 },
  1: { stNums: [3, 4, 9], hoverNums: [4], tcNum: 1 },
  2: { stNums: [1, 2, 10], hoverNums: [2], tcNum: 2 },
  3: { stNums: [6], hoverNums: [6], tcNum: 3 },
  4: { stNums: [11], hoverNums: [11], tcNum: 4 }
};

Object.values(activeElements).forEach(group => {
  let textContainer = document.getElementById(`text-container${group.tcNum}`);
  
  // Create a list of st elements for each group
  const stElements = group.stNums.map(num => document.querySelector(`.st${num}`));
  const hoverElements = group.hoverNums.map(num => document.querySelector(`.st${num}`));
  
  // Attach mouseover and mouseout events to each st element
  stElements.forEach(st => {
    if (st) {
      st.addEventListener('mouseover', () => {
        // Hide all other textContainers and remove hover-fill class
        Object.values(activeElements).forEach(otherGroup => {
          if (otherGroup !== group) {
            document.getElementById(`text-container${otherGroup.tcNum}`).style.display = 'none';
            otherGroup.hoverNums.forEach(num => {
              let element = document.querySelector(`.st${num}`);
              if (element) {
                element.classList.remove('hover-fill');
              }
            });
          }
        });

        // Show current textContainer and add hover-fill class
        textContainer.style.display = 'block';
        hoverElements.forEach(element => {
          if (element) {
            element.classList.add('hover-fill');
          }
        });
      });
    }
  });
});