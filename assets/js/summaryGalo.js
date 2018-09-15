	function summaryGalo(){

		var seven = localStorage.getItem("absentLate730");
		var eight = localStorage.getItem("absentLate830");
		var nine = localStorage.getItem("absentLate930");
		var ten = localStorage.getItem("absentLate1030");
		var eleven = localStorage.getItem("absentLate1130");
		var twelve = localStorage.getItem("absentLate1230");
		var one = localStorage.getItem("absentLate130");
		var two = localStorage.getItem("absentLate230");
		var three = localStorage.getItem("absentLate330");
		var four = localStorage.getItem("absentLate430");
		var five = localStorage.getItem("absentLate530");

		var table = document.createElement("table");
		var th1 = document.createElement("th");
		var th2 = document.createElement("th");
		var th3 = document.createElement("th");
		var th4 = document.createElement("th");
		var thtext1 = document.createTextNode("Time");
		var thtext2 = document.createTextNode("Name");
		var thtext3 = document.createTextNode("Absent");
		var thtext4 = document.createTextNode("Late");
		table.setAttribute("id","tab-mod");
		th1.appendChild(thtext1);
		table.appendChild(th1);
		th2.appendChild(thtext2);
		table.appendChild(th2);
		th3.appendChild(thtext3);
		table.appendChild(th3);
		th4.appendChild(thtext4);
		table.appendChild(th4);
		

		if(seven!=null){
			var sevenStored = JSON.parse(seven);
			for(var i = 0; i< sevenStored.data.length; i++){
				if(sevenStored.data[i].absent != undefined && sevenStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(sevenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(sevenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(sevenStored.data[i].absent == undefined && sevenStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(sevenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(sevenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(sevenStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(eight!=null){
			var eightStored = JSON.parse(eight);
			for(var i = 0; i< eightStored.data.length; i++){
				if(eightStored.data[i].absent != undefined && eightStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(eightStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(eightStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(eightStored.data[i].absent == undefined && eightStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(eightStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(eightStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(eightStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(nine!=null){
			var nineStored = JSON.parse(nine);
			for(var i = 0; i< nineStored.data.length; i++){
				if(nineStored.data[i].absent != undefined && nineStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(nineStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(nineStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(nineStored.data[i].absent == undefined && nineStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(nineStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(nineStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(nineStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(ten!=null){
			var tenStored = JSON.parse(ten);
			for(var i = 0; i< tenStored.data.length; i++){
				if(tenStored.data[i].absent != undefined && tenStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(tenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(tenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(tenStored.data[i].absent == undefined && tenStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(tenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(tenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(tenStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(eleven!=null){
			var elevenStored = JSON.parse(eleven);
			for(var i = 0; i< elevenStored.data.length; i++){
				if(elevenStored.data[i].absent != undefined && elevenStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(elevenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(elevenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(elevenStored.data[i].absent == undefined && elevenStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(elevenStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(elevenStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(elevenStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(twelve!=null){
			var twelveStored = JSON.parse(twelve);
			for(var i = 0; i< twelveStored.data.length; i++){
				if(twelveStored.data[i].absent != undefined && twelveStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(twelveStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(twelveStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(twelveStored.data[i].absent == undefined && twelveStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(twelveStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(twelveStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(twelveStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(one!=null){
			var oneStored = JSON.parse(one);
			for(var i = 0; i< oneStored.data.length; i++){
				if(oneStored.data[i].absent != undefined && oneStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(oneStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(oneStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(oneStored.data[i].absent == undefined && oneStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(oneStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(oneStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(oneStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(two!=null){
			var twoStored = JSON.parse(two);
			for(var i = 0; i< twoStored.data.length; i++){
				if(twoStored.data[i].absent != undefined && twoStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(twoStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(twoStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(twoStored.data[i].absent == undefined && twoStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(twoStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(twoStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(twoStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(three!=null){
			var threeStored = JSON.parse(three);
			for(var i = 0; i< threeStored.data.length; i++){
				if(threeStored.data[i].absent != undefined && threeStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(threeStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(threeStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(threeStored.data[i].absent == undefined && threeStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(threeStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(threeStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(threeStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(four!=null){
			var fourStored = JSON.parse(four);
			for(var i = 0; i< fourStored.data.length; i++){
				if(fourStored.data[i].absent != undefined && fourStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(fourStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(fourStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(fourStored.data[i].absent == undefined && fourStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(fourStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(fourStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(fourStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		if(five!=null){
			var fiveStored = JSON.parse(five);
			for(var i = 0; i< fiveStored.data.length; i++){
				if(fiveStored.data[i].absent != undefined && fiveStored.data[i].late == undefined){ // pag may laman absent at wala ang late
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(fiveStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(fiveStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("ABSENT");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode("-");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}else if(fiveStored.data[i].absent == undefined && fiveStored.data[i].late !=undefined){ //vice versahehe
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var tdTime = document.createTextNode(fiveStored.time);
				td1.appendChild(tdTime);
				var td2 = document.createElement("td");
				var tdName = document.createTextNode(fiveStored.data[i].name);
				td2.appendChild(tdName);
				var td3 = document.createElement("td");
				var tdAbsent = document.createTextNode("-");
				td3.appendChild(tdAbsent);
				var td4 = document.createElement("td");
				var tdLate = document.createTextNode(fiveStored.data[i].late+" minute/s");
				td4.appendChild(tdLate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				table.appendChild(tr);
			}
			}
		}
		//modal
		var div = document.createElement("div");
        div.setAttribute("id","openModal");
        div.setAttribute("class", "modalDialog");
        var div2 = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute("href","#close");
        a.setAttribute("title", "Close");
        a.setAttribute("class","close");
        var close = document.createTextNode("x");
        a.appendChild(close);
        div2.appendChild(a);
        div2.appendChild(table);
        div.appendChild(div2);
        document.body.appendChild(div);


}		
		