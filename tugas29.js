function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let str = new RegExp("bersama");

    // menghitung index ke berapa data yg dalam kurung
    console.log(str.exec(data));
     
}
regex();