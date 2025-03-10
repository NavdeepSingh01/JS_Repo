const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#h').value)
    const weight=parseInt(document.querySelector('#w').value)
    const result=document.querySelector('#output')
    const bmi=(weight/((height*height)/10000).toFixed(2));
    result.innerHTML+=`${bmi}`
})