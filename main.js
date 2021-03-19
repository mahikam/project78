var i=0;
function nextslide() {
    i++;
    var numberfmembers=4;
    var updatedimg=fimgs[i];
    var updatednames=names[i];
    if (i>numberfmembers) {
        i=0;
    }
    document.getElementById("familyname").innerHTML=updatednames;
    document.getElementById("familyimg").src=updatedimg;
}
