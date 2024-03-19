const text = document.getElementById('text');

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{

    text.style.fontWeight = 'bold';
    text.textContent = 'ボタンをクリックしました';
});