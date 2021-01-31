
document.getElementById('download1').disabled = false;
document.getElementById('download1').style.cursor = "pointer";

document.getElementById('download2').style.cursor = "no-drop";
document.getElementById('download2').style.pointerEvents = 'none';
document.getElementById('download3').style.pointerEvents = 'none';
document.getElementById('download3').style.cursor = "no-drop";
document.getElementById('download4').style.pointerEvents = 'none';
document.getElementById('download4').style.cursor = "no-drop";
document.getElementById('download5').style.pointerEvents = 'none';
document.getElementById('download5').style.cursor = "no-drop";
document.getElementById('downloadf').style.pointerEvents = 'none';
document.getElementById('downloadf').style.cursor = "no-drop";



document.getElementById('download1').onclick = () => {
    window.open('https://www.youtube.com/watch?v=rrZqkiN_LeI');
    document.getElementById('download1').classList.add('refresh')
    setTimeout(() => {
        document.getElementById('download1').classList.remove('refresh')
        document.getElementById('download1').classList.add('active')
        document.getElementById('download2').style.pointerEvents = 'auto';
        document.getElementById('download2').style.cursor = "pointer";
    }, 10000)

};


document.getElementById('download2').onclick = () => {
    window.open('https://www.youtube.com/channel/UC87m1Fk0SsrQ8Esk9XnsIuA?sub_confirmation=1');
    document.getElementById('download2').classList.add('refresh')
    setTimeout(() => {
        document.getElementById('download2').classList.remove('refresh')
        document.getElementById('download2').classList.add('active')
        document.getElementById('download3').style.pointerEvents = 'auto';
        document.getElementById('download3').style.cursor = "pointer";
    }, 10000)

};


document.getElementById('download3').onclick = () => {
    window.open('https://twitter.com/reyasaltoyt');
    document.getElementById('download3').classList.add('refresh')
    setTimeout(() => {
        document.getElementById('download3').classList.remove('refresh')
        document.getElementById('download3').classList.add('active')
        document.getElementById('download4').style.pointerEvents = 'auto';
        document.getElementById('download4').style.cursor = "pointer";
    }, 10000)

};


document.getElementById('download4').onclick = () => {
    window.open('https://www.instagram.com/rey_asalto_yt/');
    document.getElementById('download4').classList.add('refresh')
    setTimeout(() => {
        document.getElementById('download4').classList.remove('refresh')
        document.getElementById('download4').classList.add('active')
        document.getElementById('download5').style.pointerEvents = 'auto';
        document.getElementById('download5').style.cursor = "pointer";
    }, 10000)
};

document.getElementById('download5').onclick = () => {
    window.open('http://www.reyasaltoyt.blogspot.com/'); 
    document.getElementById('download5').classList.add('refresh')
    setTimeout(() => {
        document.getElementById('download5').classList.remove('refresh')
        document.getElementById('download5').classList.add('active')
        document.getElementById('downloadf').style.pointerEvents = 'auto';
        document.getElementById('downloadf').style.cursor = "pointer";
    }, 10000)
};

// document.getElementById('downloadf').onclick = () => {
//     document.getElementById('hideMe').style.display = "block"
// }





