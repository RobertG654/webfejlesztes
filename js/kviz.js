//range számoló
document.getElementById('usa').addEventListener('input', mutato)
function mutato(){
    document.getElementById('rangeValue').textContent = this.value;
    };

//csaló gomb
document.getElementById('funfact').addEventListener('click', segitseg)
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
        alert(`-1 pont`)   
    }
    else {
        alert("Nem megfelelő számot írtál be!")
    }


//pont kalkulátor
document.getElementById("kuld").addEventListener("click", pont)
    function pont(event){
        event.preventDefault()
        
        let pontszam = 0

        //első kérdés
        const a = document.getElementById("a").checked
        const b = document.getElementById("b").checked
        const c = document.getElementById("c").checked
        const d = document.getElementById("d").checked
        const e = document.getElementById("e").checked

        if(a == true && b == false && c == true && d == false && e == false){
            pontszam++
        }

        //második kérdés
        const f = document.getElementById("igaz").checked

        if(f == true){
            pontszam++
        }

        //harmadik kérdés
        const g = document.getElementById("india").value

        if(g == "22"){
            pontszam++
        }

        //negyedik kérdés
        const h = document.getElementById("nigeria").value
        if(h == "Nollywood"){
            pontszam++
        }

        //ötödik kérdés
        const i = document.getElementById("g").checked
        if (i == true) {
            pontszam++
        }

        //hatodik kérdés
        const j = document.getElementById("svajc").value
        if (j == 1815) {
            pontszam++
        }

        //hetedik kérdés
        const k = document.getElementById("bhutan").value
        if (k == "boldogság") {
            pontszam++
        }

        //nyolcadik kérdés
        const l = document.getElementById("usa").value
        if (l == 63) {
            pontszam++
        }

        //kilencedik kérdés
        const m = document.getElementById("japan").selectedIndex
        if (m == 2) {
            pontszam++
        }

        //tizedik kérdés
        const n = document.getElementById("m").checked
        if (n == true) {
            pontszam++
        }

        alert(`A kvízben elért pontszámod: ${pontszam}/10`);
    }

}

