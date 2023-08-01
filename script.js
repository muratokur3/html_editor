
//buton aktif edilirse ilgili kod
// her butona tıklandığında içeriği browser divine ata

// function calis(){
//     document.getElementById("browser").innerHTML= 
//     document.getElementById("txtcode").value;
// }


function running(){
    document.getElementById("browser").innerHTML= 
    document.getElementById("txtcode").value;
}

function copyCode()
{
    document.getElementById('txtcode').select();
    document.execCommand('copy');
    alert('Panoya kopyalandı');
}

function deneme()
{
    window.alert("Selam Çalışıyorum");
} 