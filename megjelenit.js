$(function() {
    kepgaleria();
    $("article div img").click(lapozas);
});

var kepTomb = [
    {
        src: "https://picsum.photos/id/100/2500/1656",
        cim: "1. kép címe",
        leiras: "1. kép leírása"
    },
    {
        src: "https://picsum.photos/id/1002/4312/2868",
        cim: "2. kép címe",
        leiras: "2. kép leírása"
    },
    {
        src: "https://picsum.photos/id/1003/1181/1772",
        cim: "3. kép címe",
        leiras: "3. kép leírása"
    },
    {
        src: "https://picsum.photos/id/1004/5616/3744",
        cim: "4. kép címe",
        leiras: "4. kép leírása"
    },
    {
        src: "https://picsum.photos/id/10/2500/1667",
        cim: "5. kép címe",
        leiras: "5. kép leírása"
    }
]

function kepgaleria() {
    kepCsere(0);
    
    for (var i = 1; i < kepTomb.length; i++) {
        var elem = '<div><img data-id="' + [i] + '" src="' + kepTomb[i].src + '" alt="" /><h3>' + kepTomb[i].cim + '</h3><p>' + kepTomb[i].leiras + '</p></div>';
        $("article").append(elem);
    }
};

function lapozas() {
    //lekérdezem az eseményt kiváltó elem azonosítóját
    var index = $(this).attr("data-id");
    kepCsere(index);
}

function kepCsere (mire) {
    $("#nagyKep").html('<h3>' + kepTomb[mire].cim + '</h3><img data-id="' + mire + '" src="' + kepTomb[mire].src + '" alt="" /><p>' + kepTomb[mire].leiras + '</p>');
}