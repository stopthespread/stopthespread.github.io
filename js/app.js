getFormInput()
{
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        
        const firstname = form['firstname'].value;
        const lastname = form['lastname'].value;
        const email = form['email'].value;
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        
    } );

    // const firstname = document.getElementById('firstname').value;
    // const submit = document.querySelector();
}
