const loginElement = document.getElementById('login-button');
loginElement.addEventListener('click',() => {
    window.open('https://app.feedbacksense.io')
});

const bookDemoElement = document.getElementById('demo-button');
bookDemoElement.addEventListener('click',() => {
    // window.open('/','__self');
    location.replace("/book-a-demo.html")
});

const bookDemoElement2 = document.getElementById('live-demo-button');
bookDemoElement2.addEventListener('click',() => {
    window.open('https://calendly.com/feedbacksense/demo')
});

const bookDemoElement3 = document.getElementById('live-demo-button-2');
bookDemoElement2.addEventListener('click',() => {
    window.open('https://calendly.com/feedbacksense/demo')
});

const getStarted = document.getElementById('get-started');
getStarted.addEventListener('click',() => {
    window.open('https://app.feedbacksense.io')
});