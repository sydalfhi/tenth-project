const hasil = document.querySelector('p.hasil');
const kartu = document.querySelector('.kartu');
const card = document.querySelector('.card');
const cardHeader = document.querySelector('.card-header');
const cardBody = document.querySelector('.card-body');
const cardFooter = document.querySelector('.card-footer');
const kirim = document.querySelector('button');
const tulisan = document.querySelector('p.hasil');
const antah = document.querySelectorAll('ul li');
kartu.classList.add('disnone')
kartu.style.opacity= "0";


let isi = 0;
function hapus() {
    antah.forEach(e => e.classList.remove('oren'));
}


antah.forEach(e=>{
    e.addEventListener('click', (i)=>{
        hapus();
        i.target.classList.add('oren');
        isi = i.target.value;
    });
});



kirim.addEventListener('click',()=> {
    cardHeader.classList.add('disnone');
    cardBody.classList.add('disnone');
    cardFooter.style.display = 'none';  
    kirim.classList.add('disnone');
    kartu.style.display= 'flex';
    kartu.style.opacity= "1";

    hasil.innerHTML= `You selected ${isi} out of 5`
});
