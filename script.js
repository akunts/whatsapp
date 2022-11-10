document.querySelector('button').onclick = myClick;

function myClick(){
    let name = document.querySelector('.name').value;
    let link = 'https://api.whatsapp.com/send?phone=' + name;
    let wa = '<a href=\"' + link + '\">Написать в WhatsApp</a>';
    document.querySelector('.chat').innerHTML = ('Держи ссылку: ' + wa);
    
    
    
}

