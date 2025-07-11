
//accordian
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  acc.addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


const accordion = document.querySelectorAll('.accordions')

  accordion.forEach(acc => {
    acc.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });





















  
  


  
  
  

  
  

  
  
  

  
  
  
  
  
  
  
  
  

  
  
  
  


























  
  

  

  
  

  
  
  













 
  function showTab(tabElement) {
    const tabName = tabElement.getAttribute('data-tab');
    const section = tabElement.closest('.tab-section');
  
    // Remove active from all tabs in this section
    section.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  
    // Remove active from all contents in this section
    section.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
    // Add active to clicked tab
    tabElement.classList.add('active');
  
    // Show the matching content in this section
    const contentToShow = section.querySelector(`.tab-content[data-content="${tabName}"]`);
    if (contentToShow) {
      contentToShow.classList.add('active');
    }
  }
  










































 //shows section
















  


  function showSection(id) {
  
    document.querySelectorAll("section").forEach(section => {
      section.style.display = "none";
      section.classList.remove("active");
    });

    
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
      target.classList.add("active");
    }

    
    document.querySelectorAll("nav a").forEach(link => {
      link.classList.remove("active");
    });

    
    document.querySelectorAll("nav a").forEach(link => {
      if (link.getAttribute("onclick")?.includes(id)) {
        link.classList.add("active");
      }
    });
  }












 
 


 
  





 
   































/* ---------- 1.  Reveal / copy phone & set flag ----------------- */
const phoneBox      = document.getElementById('phoneValue');
let   phoneConfirmed = false;            // <‑‑ NEW flag

phoneBox.addEventListener('click', () => {
  phoneConfirmed = true;                 // user has “given” the number
  phoneBox.innerHTML = phoneBox.dataset.full;   // show full number

  /* optional copy‑to‑clipboard */
  const tmp = document.createElement('textarea');
  tmp.value = phoneBox.textContent.replace(/\s/g, ''); // 919000090000
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);

  alert('91 9000090000 copied to clipboard');
});

/* ---------- 2.  Continue button logic -------------------------- */
document.getElementById('continueBtn').addEventListener('click', () => {
  const checksOK = [...document.querySelectorAll('.agree')]
                     .every(cb => cb.checked);

  /* Guard clauses keep the logic easy to read */
  if (!phoneConfirmed) {
    alert('Please confirm your mobile number first.');
    return;
  }

  if (!checksOK) {
    alert('Please tick both checkboxes before continuing.');
    return;
  }
  showSection('payment');
  /* All conditions satisfied → show payment section */
  
});


















/* ---------- 1.  “Click‑to‑fill” behaviour (unchanged) ---------- */
const inputs  = document.querySelectorAll('.click-to-fill');

inputs.forEach(input => {
  input.addEventListener('click', () => {
    input.value = input.dataset.real;        // auto‑fill
    checkAllFilled();                        
  });
});

/* ---------- 2.  Guard PAY NOW with a validation gate ----------- */
const payBtn = document.getElementById('payBtn');

// disable button until everything is filled
payBtn.disabled = true;

payBtn.addEventListener('click', () => {
  // by this point every field is guaranteed full, so go ahead
  showSection('paynow');                     // your existing function
});

/* ---------- 3.  Helper that (re)checks the form ---------------- */
function checkAllFilled() {
  const allFilled = [...inputs].every(inp => inp.value.trim() !== '');

  // enable or disable the button accordingly
  payBtn.disabled = !allFilled;
}

/* 4.  Run once on page load in case any inputs start pre‑filled */
checkAllFilled();

  
  

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.querySelector('button');

let emailClicked = false;
let passwordClicked = false;

emailInput.addEventListener('click', () => {
  emailInput.value = 'selahseraphina@gmail.com';
  emailClicked = true;
  checkFields();
});

passwordInput.addEventListener('click', () => {
  passwordInput.type = 'password';
  passwordInput.value = 'password'; // hidden as ***
  passwordClicked = true;
  checkFields();
});

function checkFields() {
  if (emailClicked && passwordClicked) {
    button.disabled = false;
  }
}

// Initially disable button
button.disabled = true;


  
//icrease/decrease
const minusBtn = document.querySelectorAll('.counter-btn')[0];
const plusBtn = document.querySelectorAll('.counter-btn')[1];
const counterValue = document.querySelector('.counter-value');

let count = 1;

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
    counterValue.textContent = `${count} ADULT${count > 1 ? 'S' : ''}`;
  }
});

plusBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = `${count} ADULT${count > 1 ? 'S' : ''}`;
});





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

  
  
  


  
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
  
  



























