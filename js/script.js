document.addEventListener("DOMContentLoaded", function () {
    const roles = ['Web Developer','Software Engineer','Freelancer','Teacher','MERN Developer']
    let index = 0;
    let charIndex= 0 ;
    const textElement = document.getElementById('profession');
    const cursor = document.getElementById("cursor");

    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    function changeProfession(){
        let currrentWord = roles[index];
        let currentText = currrentWord.substring(0,charIndex);
        textElement.textContent = currentText;
       
        if(charIndex  <currrentWord.length ){
            charIndex++;
            setTimeout(changeProfession,100);
        } else {
            setTimeout(()=>{
                    index = (index +1)%roles.length;
                    charIndex = 0;
                    changeProfession();
            },1000)
        }
       
    }
    changeProfession();

setInterval(()=>{
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
},1000)
    
document.querySelectorAll('.card-text').forEach(desc => {
    let fullText = desc.innerText; // Store full text
    if (fullText.length > 200) { // Change 200 to your preferred limit
        let truncatedText = fullText.substring(0, 200) + '... ';
        let readMoreBtn = document.createElement('span');
        readMoreBtn.innerText = "Read More";
        readMoreBtn.style.color = "#00BFFF"; // Style as a link
        readMoreBtn.style.cursor = "pointer";

        // Initially show truncated text
        desc.innerText = truncatedText;
        desc.appendChild(readMoreBtn);

        // Toggle full text on click
        readMoreBtn.addEventListener('click', () => {
            if (desc.innerText.includes('...')) {
                desc.innerText = fullText; // Show full text
                readMoreBtn.innerText = "Read Less"; // Change button text
            } else {
                desc.innerText = truncatedText; // Collapse text
                desc.appendChild(readMoreBtn);
                readMoreBtn.innerText = "Read More";
            }
        });
    }
});

document.getElementById('year').textContent = new Date().getFullYear();


});
