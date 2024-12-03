//range számoló
document.getElementById("usa").addEventListener("input", mutato)
function mutato(){
    document.getElementById("rangeValue").textContent = this.value;
    };

let pontszam = 0

//pont kalkulátor
document.getElementById("kuld").addEventListener("click", pont)
    function pont(){

        //első kérdés
        const a = document.getElementById("a").checked
        const b = document.getElementById("b").checked
        const c = document.getElementById("c").checked
        const d = document.getElementById("d").checked
        const e = document.getElementById("e").checked

        if(a == true && b == false && c == true && d == false && e == false){
            pontszam++
            m1.textContent = "Helyes!"
            m1.className = "megoldas helyes"
        }
        else{
            m1.textContent = "Rossz! Megoldás: Olszország, Svájc"
            m1.className = "megoldas rossz"
        }

        //második kérdés
        const f = document.getElementById("igaz").checked

        if(f == true){
            pontszam++
            m2.textContent = "Helyes!"
            m2.className = "megoldas helyes"
        }
        else{
            m2.textContent = "Rossz! Megoldás: Igaz"
            m2.className = "megoldas rossz"
        }

        //harmadik kérdés
        const g = document.getElementById("india").value

        if(g == "22"){
            pontszam++
            m3.textContent = "Helyes!"
            m3.className = "megoldas helyes"
        }
        else{
            m3.textContent = "Rossz! Megoldás: 22"
            m3.className = "megoldas rossz"
        }

        //negyedik kérdés
        const h = document.getElementById("nigeria").value
        if(h == "Nollywood"){
            pontszam++
            m4.textContent = "Helyes!"
            m4.className = "megoldas helyes"
        }
        else{
            m4.textContent = "Rossz! Megoldás: Nollywood"
            m4.className = "megoldas rossz"
        }

        //ötödik kérdés
        const i = document.getElementById("g").checked
        if (i == true) {
            pontszam++
            m5.textContent = "Helyes!"
            m5.className = "megoldas helyes"
        }
        else{
            m5.textContent = "Rossz! Megoldás: Olaszország"
            m5.className = "megoldas rossz"
        }

        //hatodik kérdés
        const j = document.getElementById("svajc").value
        if (j == 1815) {
            pontszam++
            m6.textContent = "Helyes!"
            m6.className = "megoldas helyes"
        }
        else{
            m6.textContent = "Rossz! Megoldás: 1815"
            m6.className = "megoldas rossz"
        }

        //hetedik kérdés
        const k = document.getElementById("bhutan").value
        if (k == "boldogság") {
            pontszam++
            m7.textContent = "Helyes!"
            m7.className = "megoldas helyes"
        }
        else{
            m7.textContent = "Rossz! Megoldás: boldogság"
            m7.className = "megoldas rossz"
        }

        //nyolcadik kérdés
        const l = document.getElementById("usa").value
        if (l == 63) {
            pontszam++
            m8.textContent = "Helyes!"
            m8.className = "megoldas helyes"
        }
        else{
            m8.textContent = "Rossz! Megoldás: 63"
            m8.className = "megoldas rossz"
        }

        //kilencedik kérdés
        const m = document.getElementById("japan").selectedIndex
        if (m == 2) {
            pontszam++
            m9.textContent = "Helyes!"
            m9.className = "megoldas helyes"
        }
        else{
            m9.textContent = "Rossz! Megoldás: Japán"
            m9.className = "megoldas rossz"
        }

        //tizedik kérdés
        const n = document.getElementById("m").checked
        if (n == true) {
            pontszam++
            m10.textContent = "Helyes!"
            m10.className = "megoldas helyes"
        }
        else{
            m10.textContent = "Rossz! Megoldás: Pápua Új-Guinea"
            m10.className = "megoldas rossz"
        }

        alert(`A kvízben elért pontszámod: ${pontszam}/10`);

        if(pontszam <= 3){
            alert("Tudsz ennél jobbat is!")
        }
        else if(pontszam <= 5){
            alert("Nem rossz, de a jó nem ilyen!")
        }
        else if(pontszam <= 8){
            alert("Egész jó eredmény, így tovább!")
        }
        else{
            alert("Gratulálok, egy zseni vagy!")
        }

    }

//csaló gomb
document.getElementById("funfact").addEventListener("click", segitseg)
function segitseg(){
    const csalas = confirm("Biztos, hogy csalni szeretnél?")
    if (csalas == false){
        alert("Büszke vagyok rád!")
        return 
    }

    const kerdes_szam = prompt("Melyik kérdéshez szeretnél segtséget? (1-10)")

    const valaszok = {    
            1: "Olaszország, Svájc",
            2: "Új-Zélandon több juh található, mint ember.",
            3: "India 22 hivatalos nyelvet ismer el.",
            4: "Nigériában a híres filmgyártó ipart Nollywoodnak hívják.",
            5: "Olaszországban található a legtöbb UNESCO világörökségi helyszín.",
            6: "Svájc régóta fenntartja semlegességét, 1815 óta nem vett részt háborúban.",
            7: "Bhután prioritása a boldogság.",
            8: "Az USA-ban 63 nemzeti park található.",
            9: "Japánban a legnagyobb az automaták sűrűsége.",
            10: "A közelmúltig a kannibalizmus elterjedt volt Pápua Új-Guineában."
        }
    if (kerdes_szam in valaszok){
        alert(`Segítség a(z) ${kerdes_szam}. kérdéshez: ${valaszok[kerdes_szam]}`)
        pontszam--
        alert("-1 pont")   
    }
    else {
        alert("Nem megfelelő számot írtál be!")
    }
}
