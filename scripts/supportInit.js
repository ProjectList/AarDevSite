window.onload = (function(data){
    var systems = data.systems;
    var date = data.updated;
    var setTbody = function(tbody,html){
        var div = document.createElement('div');
        div.innerHTML = '<table>' + html + '</table>';
        tbody.parentNode.replaceChild(div.firstChild.firstChild, tbody);
    }
    var addToTable = function(table,items){
        var tbody = "";
        for(var i in items){
            var tds = items[i].split("\t");
            var tr = "<tr>"
            for(var j in tds){
                tr+= "<td>"+tds[j]+"</td>";
            }
            tr+="</td>";
            tbody+=tr;
        }
        setTbody(document.getElementById("supportSystems").children[1],tbody);
    };
    var updateDate = function(id,newDate){
        document.getElementById(id).innerText=newDate;
    };
    updateDate("updateDate",date);
    addToTable("supportSystems",systems);
}(data));