let emptyNotificationWrap = document.querySelector(".emptyNotificationWrap");
let notificationBell = document.querySelector(".notification-bell");

// code to show the hidden notification bell which has nothing inside
notificationBell.addEventListener("click", () => {
  emptyNotificationWrap.classList.toggle("showNotificationWrap");
  allStoreWrapAbsolute.classList.remove("showAllStoreWrapAbsolute");
});

let showCollectionsList = document.querySelectorAll(".showCollectionsList");
let allStoreWrapAbsolute = document.querySelector(".allStoreWrapAbsolute");
showCollectionsList.forEach((click) => {
  click.addEventListener("click", () => {
    allStoreWrapAbsolute.classList.toggle("showAllStoreWrapAbsolute");
    emptyNotificationWrap.classList.remove("showNotificationWrap");
  });
});

// remove extend trials for three months section with javascript styling after clicking on the remove icon
let removeIcon = document.querySelector(".remove-icon");
let extendTrialWrapSection = document.querySelector(".extendTrialWrapSection");

removeIcon.addEventListener("click", () => {
  extendTrialWrapSection.style.display = "none";
});

// starting the onboarding section
let onSubOnBoardWrap = document.querySelector(".onSubOnBoardWrap");
let arrowUp = document.querySelector(".arrowUp");
let arrowDown = document.querySelector(".arrowDown");

// hide the whole onboard steps
onSubOnBoardWrap.style.display = "none";

// attached an event listener to the first arrow. so when the arrow is clicked on the onboard steps appear and the first arrow itself disAppear while the second arrow appears
arrowDown.addEventListener("click", () => {
  arrowDown.classList.add("arrowUp");

  arrowUp.classList.remove("arrowUp");

  arrowUp.classList.add("showArrowUp");
  onSubOnBoardWrap.style.display = "grid";
});

// attached and event listener to the second arrow that appears , so when the second arrow is clicked on the onboard steps closes and the second arrow itself disappear then the first arrow re-appears
arrowUp.addEventListener("click", () => {
  arrowDown.classList.remove("arrowUp");

  arrowUp.classList.add("arrowUp");

  arrowUp.classList.remove("showArrowUp");

  onSubOnBoardWrap.style.display = "none";
});

// getting all the content and the images that are inside the onboard steps
hiddenContent = document.querySelectorAll(".hiddenContent");
let hiddenImage = document.querySelectorAll(".hiddenImage");
let numberOfChecked = document.querySelector(".numberOfChecked");
let DataCheckBox = document.querySelectorAll(".DataCheckBox");
let allLoad = document.querySelectorAll(".loading");
let progressRange = document.querySelector(".progressRange");
if (window.innerWidth <= 768){
    hiddenImage.forEach((img)=>{
        img.style.display='none'
    })
}
// code to hide the second,third,fourth and fifth content and the image that is inside the onboarding steps while leaving the first one opened,
hiddenContent[1].style.display = "none";
hiddenImage[1].style.display = "none";

hiddenContent[2].style.display = "none";
hiddenImage[2].style.display = "none";

hiddenContent[3].style.display = "none";
hiddenImage[3].style.display = "none";

hiddenContent[4].style.display = "none";
hiddenImage[4].style.display = "none";

// bring onboard step text from html
let onBoardStep=document.querySelectorAll('.onBoardStep')

let onBoardWrap=document.querySelectorAll('.onBoardWrap')
onBoardWrap[0].style.backgroundColor="#f7f7f7"

onBoardWrap[0].addEventListener('click',()=>{
    onBoardWrap[1].style.backgroundColor=""
    onBoardWrap[0].style.backgroundColor="#f7f7f7"
    onBoardWrap[2].style.backgroundColor=""
    onBoardWrap[3].style.backgroundColor=""
    onBoardWrap[4].style.backgroundColor=""



})

onBoardWrap[1].addEventListener('click',()=>{
    onBoardWrap[0].style.backgroundColor=""
    onBoardWrap[1].style.backgroundColor="#f7f7f7"
    onBoardWrap[2].style.backgroundColor=""
    onBoardWrap[3].style.backgroundColor=""
    onBoardWrap[4].style.backgroundColor=""



})
onBoardWrap[2].addEventListener('click',()=>{
    onBoardWrap[0].style.backgroundColor=""
    onBoardWrap[2].style.backgroundColor="#f7f7f7"
    onBoardWrap[1].style.backgroundColor=""
    onBoardWrap[3].style.backgroundColor=""
    onBoardWrap[4].style.backgroundColor=""



})
onBoardWrap[3].addEventListener('click',()=>{
    onBoardWrap[0].style.backgroundColor=""
    onBoardWrap[3].style.backgroundColor="#f7f7f7"
    onBoardWrap[2].style.backgroundColor=""
    onBoardWrap[1].style.backgroundColor=""
    onBoardWrap[4].style.backgroundColor=""



})
onBoardWrap[4].addEventListener('click',()=>{
    onBoardWrap[0].style.backgroundColor=""
    onBoardWrap[4].style.backgroundColor="#f7f7f7"
    onBoardWrap[2].style.backgroundColor=""
    onBoardWrap[3].style.backgroundColor=""
    onBoardWrap[1].style.backgroundColor=""



})
 
  // Attach click event listeners to each box
  

onBoardStep[0].addEventListener("click", () => {
  
  
    hiddenContent[1].style.display = "none";
    hiddenImage[1].style.display = "none";
    hiddenContent[2].style.display = "none";
    hiddenImage[2].style.display = "none";
    hiddenContent[3].style.display = "none";
    hiddenImage[3].style.display = "none";
    hiddenContent[4].style.display = "none";
    hiddenImage[4].style.display = "none";
  
    hiddenContent[0].style.display = "initial";
    // hiddenImage[0].style.display = "initial";
    if (window.innerWidth <= 768) {
        // Toggle image visibility if not on a mobile device
  hiddenImage[0].style.display = "none";
  
      }else{
          hiddenImage[0].style.display = "initial";
      }
   
  });

  onBoardStep[1].addEventListener("click", () => {
   
  
    hiddenContent[0].style.display = "none";
    hiddenImage[0].style.display = "none";
    hiddenContent[2].style.display = "none";
    hiddenImage[2].style.display = "none";
    hiddenContent[3].style.display = "none";
    hiddenImage[3].style.display = "none";
    hiddenContent[4].style.display = "none";
    hiddenImage[4].style.display = "none";
  
    hiddenContent[1].style.display = "initial";
    // hiddenImage[1].style.display = "initial";

    
        // Check if the image is already visible
        if (window.innerWidth <= 768) {
          // Toggle image visibility if not on a mobile device
    hiddenImage[1].style.display = "none";
    
        }else{
            hiddenImage[1].style.display = "initial";
        }
     
    
  });
  
  // same functionality for the third circle
  
  onBoardStep[2].addEventListener("click", () => {
   
  
    hiddenContent[0].style.display = "none";
    hiddenImage[0].style.display = "none";
    hiddenContent[1].style.display = "none";
    hiddenImage[1].style.display = "none";
    hiddenContent[3].style.display = "none";
    hiddenImage[3].style.display = "none";
    hiddenContent[4].style.display = "none";
    hiddenImage[4].style.display = "none";
  
    hiddenContent[2].style.display = "initial";
    // hiddenImage[2].style.display = "initial";
    if (window.innerWidth <= 768) {
        // Toggle image visibility if not on a mobile device
  hiddenImage[2].style.display = "none";
  
      }else{
          hiddenImage[2].style.display = "initial";
      }
  
  
});


//   });
  // same functionality for the fourth circle
  
  onBoardStep[3].addEventListener("click", () => {
  
    hiddenContent[0].style.display = "none";
    hiddenImage[0].style.display = "none";
    hiddenContent[1].style.display = "none";
    hiddenImage[1].style.display = "none";
    hiddenContent[2].style.display = "none";
    hiddenImage[2].style.display = "none";
    hiddenContent[4].style.display = "none";
    hiddenImage[4].style.display = "none";
  
    hiddenContent[3].style.display = "initial";
    // hiddenImage[3].style.display = "initial";

    if (window.innerWidth <= 768) {
        // Toggle image visibility if not on a mobile device
  hiddenImage[3].style.display = "none";
  
      }else{
          hiddenImage[3].style.display = "initial";
      }
    
  });
  
  // same functionality for the fifth circle
  onBoardStep[4].addEventListener("click", () => {
   
  
    hiddenContent[0].style.display = "none";
    hiddenImage[0].style.display = "none";
    hiddenContent[1].style.display = "none";
    hiddenImage[1].style.display = "none";
    hiddenContent[3].style.display = "none";
    hiddenImage[3].style.display = "none";
    hiddenContent[2].style.display = "none";
    hiddenImage[2].style.display = "none";
  
    hiddenContent[4].style.display = "initial";
    // hiddenImage[4].style.display = "initial";

    if (window.innerWidth <= 768) {
        // Toggle image visibility if not on a mobile device
  hiddenImage[4].style.display = "none";
  
      }else{
          hiddenImage[4].style.display = "initial";
      }
   
  });
  


// getting the circle,loading circle and the checked image from html, meanwhile i have hide the loading circle and check image with css so only the circle will
// be shown to the user
let loading = document.querySelectorAll(".loading");
let checked = document.querySelectorAll(".checked");
let circle = document.querySelectorAll(".circle");

// creating the count to 0
let count = 0;

// attaching an event listener to the first circle so when a user clicks on it and if the condition giving to it is true which is true
// the count should update by  1 after a second  then i multiply count by 20 to determine the width of the rangeWidth

// NOTE: please be notified that there is already a code that would automatically make the first circle disAppear after clicking on it  and make the loading circle image
// appear for a second this loading image will also disappear after a second before the checked will finally appear so when this checked is also clicked on
// the count would be decreased by 1 so the rangeWidth reduces.

// here is where i get the rangeWidth from html
let rangeWidth = document.querySelector(".rangeWidth");

circle[0].addEventListener("click", () => {
  if (circle[0].getAttribute("data-checked") === "true") {
    setTimeout(()=>{
        count++;

        let width = count * 20;
        console.log(count);
        rangeWidth.style.width = width + "%";
        rangeWidth.style.backgroundColor = "black";
        progressRange.textContent =
        count + " of " + DataCheckBox.length + " completed";
    },1000)
    // i added this '%' so if the count is 1 the 1 should be multiply by 10 which will give us 10 the add "%" to it so the rangeWidth
    // would be 10%
 

    // the text of the progressRange

  }
});

// when the first circle is clicked on and the functionality works as expected here is the check box that would appears then decrease the count by 1
// when it is clicked on the the checked would also disappears and bring the first circle back.
checked[0].addEventListener("click", () => {
  if (checked[0].getAttribute("data-checked") === "true") {
    count--;
    let width = count * 20;
    rangeWidth.style.width = width + "%";
    rangeWidth.style.backgroundColor = "black";
    progressRange.textContent =
      count + " of " + DataCheckBox.length + " completed";
  }
});

// attaching an event listener to the second circle so when a user clicks on it and if the condition giving to it is true which is true
// the count should update by 1 after a second  then i multiply count by 20 to determine the width of the rangeWidth
circle[1].addEventListener("click", () => {
  if (circle[1].getAttribute("data-checked") === "true") {
    setTimeout(()=>{
        count++;

        let width = count * 20;
        console.log(count);
        rangeWidth.style.width = width + "%";
        rangeWidth.style.backgroundColor = "black";
        progressRange.textContent =
        count + " of " + DataCheckBox.length + " completed";
    },1000)
  }
});

//when the second circle is clicked on and the functionality works as expected here is the check box that would appears then decrease the count by 1
// when it is clicked on the the checked would also disappears and bring the first circle back.
checked[1].addEventListener("click", () => {
  if (checked[1].getAttribute("data-checked") === "true") {
    count--;
    let width = count * 20;
    rangeWidth.style.width = width + "%";
    rangeWidth.style.backgroundColor = "black";
    progressRange.textContent =
      count + " of " + DataCheckBox.length + " completed";
  }
});

//samething for third circle
circle[2].addEventListener("click", () => {
  if (circle[2].getAttribute("data-checked") === "true") {
    setTimeout(()=>{
        count++;

        let width = count * 20;
        console.log(count);
        rangeWidth.style.width = width + "%";
        rangeWidth.style.backgroundColor = "black";
        progressRange.textContent =
        count + " of " + DataCheckBox.length + " completed";
    },1000)
  }
});

//samething for third checked
checked[2].addEventListener("click", () => {
  if (checked[2].getAttribute("data-checked") === "true") {
    count--;
    let width = count * 20;
    rangeWidth.style.width = width + "%";
    rangeWidth.style.backgroundColor = "black";
    progressRange.textContent =
      count + " of " + DataCheckBox.length + " completed";
  }
});

//samething for fourth circle

circle[3].addEventListener("click", () => {
  if (circle[3].getAttribute("data-checked") === "true") {
    setTimeout(()=>{
        count++;

        let width = count * 20;
        console.log(count);
        rangeWidth.style.width = width + "%";
        rangeWidth.style.backgroundColor = "black";
        progressRange.textContent =
        count + " of " + DataCheckBox.length + " completed";
    },1000)
  }
});

//samething for fourth checked

checked[3].addEventListener("click", () => {
  if (checked[3].getAttribute("data-checked") === "true") {
    count--;
    let width = count * 20;
    rangeWidth.style.width = width + "%";
    rangeWidth.style.backgroundColor = "black";
    progressRange.textContent =
      count + " of " + DataCheckBox.length + " completed";
  }
});

//samehting for fifth circle
circle[4].addEventListener("click", () => {
  if (circle[4].getAttribute("data-checked") === "true") {
    setTimeout(()=>{
        count++;

        let width = count * 20;
        console.log(count);
        rangeWidth.style.width = width + "%";
        rangeWidth.style.backgroundColor = "black";
        progressRange.textContent =
        count + " of " + DataCheckBox.length + " completed";
    },1000)
  }
});

//samething for fifth checked

checked[4].addEventListener("click", () => {
  if (checked[4].getAttribute("data-checked") === "true") {
    count--;
    let width = count * 20;
    rangeWidth.style.width = width + "%";
    rangeWidth.style.backgroundColor = "black";
    progressRange.textContent =
      count + " of " + DataCheckBox.length + " completed";
  }
});

//attaching an event listener to the first circle so if the circle is clicked on the first circle would disappears and brings the loading image,
// the hidden content and the image of the remaining onboarding steps should close if any of them is opened and opens its own content
// and image of the steps.

// then i created a setTimeout inside it so the circle image will disappear after a second then brings the circle image back

circle[0].addEventListener("click", () => {
  circle[0].style.display = "none";

  loading[0].style.display = "inline-block";

  hiddenContent[1].style.display = "none";
  hiddenImage[1].style.display = "none";
  hiddenContent[2].style.display = "none";
  hiddenImage[2].style.display = "none";
  hiddenContent[3].style.display = "none";
  hiddenImage[3].style.display = "none";
  hiddenContent[4].style.display = "none";
  hiddenImage[4].style.display = "none";



  hiddenContent[0].style.display = "initial";
//   hiddenImage[0].style.display = "initial";
if (window.innerWidth <= 768) {
    // Toggle image visibility if not on a mobile device
hiddenImage[0].style.display = "none";

  }else{
      hiddenImage[0].style.display = "initial";
  }

  setTimeout(() => {
    loading[0].style.display = "none";
    checked[0].style.display = "inline-block";
    checked[0].addEventListener("click", () => {
      checked[0].style.display = "none";
      circle[0].style.display = "inline-block";
    });
  }, 1000);
});

// same functionality for the second circle
circle[1].addEventListener("click", () => {
  circle[1].style.display = "none";

  loading[1].style.display = "inline-block";

  hiddenContent[0].style.display = "none";
  hiddenImage[0].style.display = "none";
  hiddenContent[2].style.display = "none";
  hiddenImage[2].style.display = "none";
  hiddenContent[3].style.display = "none";
  hiddenImage[3].style.display = "none";
  hiddenContent[4].style.display = "none";
  hiddenImage[4].style.display = "none";

  hiddenContent[1].style.display = "initial";
//   hiddenImage[1].style.display = "initial";
if (window.innerWidth <= 768) {
    // Toggle image visibility if not on a mobile device
hiddenImage[1].style.display = "none";

  }else{
      hiddenImage[1].style.display = "initial";
  }
  setTimeout(() => {
    loading[1].style.display = "none";
    checked[1].style.display = "inline-block";
    checked[1].addEventListener("click", () => {
      checked[1].style.display = "none";
      circle[1].style.display = "inline-block";
    });
  }, 1000);
});

// same functionality for the third circle

circle[2].addEventListener("click", () => {
  circle[2].style.display = "none";

  loading[2].style.display = "inline-block";

  hiddenContent[0].style.display = "none";
  hiddenImage[0].style.display = "none";
  hiddenContent[1].style.display = "none";
  hiddenImage[1].style.display = "none";
  hiddenContent[3].style.display = "none";
  hiddenImage[3].style.display = "none";
  hiddenContent[4].style.display = "none";
  hiddenImage[4].style.display = "none";

  hiddenContent[2].style.display = "initial";
//   hiddenImage[2].style.display = "initial";
if (window.innerWidth <= 768) {
    // Toggle image visibility if not on a mobile device
hiddenImage[2].style.display = "none";

  }else{
      hiddenImage[2].style.display = "initial";
  }
  setTimeout(() => {
    loading[2].style.display = "none";
    checked[2].style.display = "inline-block";
    checked[2].addEventListener("click", () => {
      checked[2].style.display = "none";
      circle[2].style.display = "inline-block";
    });
  }, 1000);
});
// same functionality for the fourth circle

circle[3].addEventListener("click", () => {
  circle[3].style.display = "none";

  loading[3].style.display = "inline-block";

  hiddenContent[0].style.display = "none";
  hiddenImage[0].style.display = "none";
  hiddenContent[1].style.display = "none";
  hiddenImage[1].style.display = "none";
  hiddenContent[2].style.display = "none";
  hiddenImage[2].style.display = "none";
  hiddenContent[4].style.display = "none";
  hiddenImage[4].style.display = "none";

  hiddenContent[3].style.display = "initial";
//   hiddenImage[3].style.display = "initial";
if (window.innerWidth <= 768) {
    // Toggle image visibility if not on a mobile device
hiddenImage[3].style.display = "none";

  }else{
      hiddenImage[3].style.display = "initial";
  }
  setTimeout(() => {
    loading[3].style.display = "none";
    checked[3].style.display = "inline-block";
    checked[3].addEventListener("click", () => {
      checked[3].style.display = "none";
      circle[3].style.display = "inline-block";
    });
  }, 1000);
});

// same functionality for the fifth circle
circle[4].addEventListener("click", () => {
  circle[4].style.display = "none";

  loading[4].style.display = "inline-block";

  hiddenContent[0].style.display = "none";
  hiddenImage[0].style.display = "none";
  hiddenContent[1].style.display = "none";
  hiddenImage[1].style.display = "none";
  hiddenContent[3].style.display = "none";
  hiddenImage[3].style.display = "none";
  hiddenContent[2].style.display = "none";
  hiddenImage[2].style.display = "none";

  hiddenContent[4].style.display = "initial";
//   hiddenImage[4].style.display = "initial";
if (window.innerWidth <= 768) {
    // Toggle image visibility if not on a mobile device
hiddenImage[4].style.display = "none";

  }else{
      hiddenImage[4].style.display = "initial";
  }
  setTimeout(() => {
    loading[4].style.display = "none";
    checked[4].style.display = "inline-block";
    checked[4].addEventListener("click", () => {
      checked[4].style.display = "none";
      circle[4].style.display = "inline-block";
    });
  }, 1000);
});

// e no easy chaiiiiii ..bhad coder wan kill person
