    var czerwonyNapis = "";
    var niebieskiNapis = "";
    var zoltyNapis = "";
    var brazowyNapis = "";

    var literki = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];


    function tdclick(object) {
        czerwonyNapis = "";
        niebieskiNapis = "";
        zoltyNapis = "";
        brazowyNapis = "";

        console.log("");

        // console.log("jest " + JSON.stringify(object.style.backgroundColor));
        // alert("clicked cell at: " + object.cellIndex + ", " + object.parentNode.rowIndex);
        // if (object.style.backgroundColor == "rgb(255, 255, 255)") {
        if ((object.style.backgroundColor == "") || (object.style.backgroundColor == "rgb(255, 255, 255)")) {
            // console.log("z białego na czerwony");
            object.style.backgroundColor = '#FF0000';
        } else if (object.style.backgroundColor == "rgb(255, 0, 0)") {
            // console.log("z czerwonego na niebieski");
            object.style.backgroundColor = '#0665c2';
        } else if (object.style.backgroundColor == "rgb(6, 101, 194)") {
            // console.log("z niebieskiego na żółty");
            object.style.backgroundColor = '#FFFF00';
        } else if (object.style.backgroundColor == "rgb(255, 255, 0)") {
            // console.log("z żółtego na brązowy");
            object.style.backgroundColor = '#61380B';
        } else if (object.style.backgroundColor == "rgb(97, 56, 11)") {
            // console.log("z brązowego na biały");
            object.style.backgroundColor = '#FFFFFF';
        }

        var table = document.getElementById("mytab1");
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var j = 0, col; col = row.cells[j]; j++) {
                //iterate through columns
                //columns would be accessed using the "col" variable assigned in the for loop

                if (col.style.backgroundColor == "rgb(255, 0, 0)") {
                    czerwonyNapis = czerwonyNapis + (i + 1) + literki[j] + ","

                } else if (col.style.backgroundColor == "rgb(6, 101, 194)") {

                    niebieskiNapis = niebieskiNapis + (i + 1) + literki[j] + ","
                } else if (col.style.backgroundColor == "rgb(255, 255, 0)") {

                    zoltyNapis = zoltyNapis + (i + 1) + literki[j] + ","
                } else if (col.style.backgroundColor == "rgb(97, 56, 11)") {

                    brazowyNapis = brazowyNapis + (i + 1) + literki[j] + ","
                }
            }



        }
        // console.log("Czerwony: " + czerwonyNapis);
        document.getElementById("textelement").innerHTML = "czerwony: " + czerwonyNapis;
        //console.log("Niebieski: " + niebieskiNapis);
        document.getElementById("textelement2").innerHTML = "niebieski: " + niebieskiNapis;
        //console.log("Żółty: " + zoltyNapis);
        document.getElementById("textelement3").innerHTML = "żółty: " + zoltyNapis;
        //console.log("Brązowy: " + brazowyNapis);
        document.getElementById("textelement4").innerHTML = "brązowy: " + brazowyNapis;

    }
    