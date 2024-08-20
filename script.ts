document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    if (name && email && message) {
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('お問い合わせありがとうございます！');
    } else {
        alert('全てのフィールドを入力してください。');
    }
});
