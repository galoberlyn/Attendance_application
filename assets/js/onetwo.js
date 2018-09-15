var storedAbsentLate130 = null;
function one(){	
	var storedSeventhSchedtxt = localStorage.getItem("130");
	var storedSeventhSched = JSON.parse(storedSeventhSchedtxt);
if(localStorage.getItem("saveChecker130")!="false"){	
		console.log('one');
		document.body.innerHTML = "<h1 class='timehead'> 1:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn7");
		backbutton.setAttribute("onclick","back()");
		document.body.appendChild(backbutton);
		backbutton.innerHTML = "Back";
	//table
		var table = document.createElement("table");
		var body = document.getElementsByTagName("body");
		var th1 = document.createElement('th');
		var th2 = document.createElement('th');
		var th3 = document.createElement('th');
		var th4 = document.createElement('th');


		var thtext1 = document.createTextNode("Name");
		var thtext2 = document.createTextNode("Room");
		var thtext3 = document.createTextNode("Absent");
		var thtext4 = document.createTextNode("Late(minutes)");

		th1.appendChild(thtext1);
		th2.appendChild(thtext2);
		th3.appendChild(thtext3);
		th4.appendChild(thtext4);
		table.appendChild(th1);
		table.appendChild(th2);
		table.appendChild(th3);
		table.appendChild(th4);

		var td1,td2,td3,text1,text2,tr,input;
		for(var i=0; i<storedSeventhSched.data.length; i++){
			tr=document.createElement("tr");
			td1=document.createElement("td");
			td2=document.createElement("td");
			td3=document.createElement("td");
			td4=document.createElement("td");
			button = document.createElement("button");
			button2 = document.createElement("button");
			button2.setAttribute("id", "button2"+i);
			input = document.createElement("input")
			input.setAttribute("type", "number");
			input.setAttribute("value","1");
			input.setAttribute("min","1");
			input.setAttribute("max","15");
			input.setAttribute("id", "late"+i); 
			text1 = document.createTextNode(storedSeventhSched.data[i].name);
			text2 = document.createTextNode(storedSeventhSched.data[i].room);
			text3 = document.createTextNode("ABSENT");
			text4 = document.createTextNode("LATE");
			td1.appendChild(text1);
			td2.appendChild(text2);
			button.appendChild(text3);
			button2.appendChild(text4);
			td3.appendChild(button);
			button.setAttribute("id", "absent"+i);
			button.setAttribute("class", "status-btn");
			button2.setAttribute("id", "latebtn"+i); //submit button nang late
			button2.setAttribute("class", "status-btn");
			td4.appendChild(button2);
			td4.appendChild(input);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);	
			table.appendChild(tr);
		 }
		//present button
		var presentBtn = document.createElement('button');
		var presentText = document.createTextNode('All Present');
		presentBtn.appendChild(presentText);
		presentBtn.setAttribute("id", "allpresent130");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent130").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			seventhSchedNew.data.push({"allpresent" : true});
			seventhSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate130", JSON.stringify(seventhSchedNew));
			storedAbsentLate130 = JSON.parse(localStorage.getItem("absentLate130"));
			localStorage.setItem("saveChecker130", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//130 row 1

			if(seventhSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){
							seventhSchedNew.data.push(storedSeventhSched.data[0]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[0]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedSeventhSched.data[0].name+" has been clicked");
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+0).value;
						seventhSchedNew.data.push(storedSeventhSched.data[0]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent130").setAttribute("disabled", "");
			}

			//2ndrow
			if(seventhSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							seventhSchedNew.data.push(storedSeventhSched.data[1]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[1]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+1).value;
						seventhSchedNew.data.push(storedSeventhSched.data[1]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent130").setAttribute("disabled", "");
			}
			//3rdrow
			if(seventhSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							seventhSchedNew.data.push(storedSeventhSched.data[2]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true; 
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[2]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}
				
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+2).value;
						seventhSchedNew.data.push(storedSeventhSched.data[2]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent130").setAttribute("disabled", "");
			}
			//4throw
			if(seventhSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){
							seventhSchedNew.data.push(storedSeventhSched.data[3]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[3]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+3).value;
						seventhSchedNew.data.push(storedSeventhSched.data[3]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent130").setAttribute("disabled", "");
			}
			//5throw
			if(seventhSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){
							seventhSchedNew.data.push(storedSeventhSched.data[4]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[4]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent130").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+4).value;
						seventhSchedNew.data.push(storedSeventhSched.data[4]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent130").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate130", JSON.stringify(seventhSchedNew));
					  storedAbsentLate130 = JSON.parse(localStorage.getItem("absentLate130"));
					 saveChecker130=false;
					 localStorage.setItem("saveChecker130", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn7").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				seventhSchedNew.data.length = 0;
				startUI();
			}
	}else{
		var div = document.createElement("div");
		div.setAttribute("class", "alert");
		var span = document.createElement("span");
		span.setAttribute("class", "closebtn");
		span.setAttribute("onclick", "this.parentElement.style.display='none';");
		var spanTxt = document.createTextNode("__")
		span.appendChild(spanTxt);
		var pTxt = document.createTextNode("You already checked that schedule!");
		var p = document.createElement("p");
		p.appendChild(pTxt);
		p.setAttribute("class", "alertContent");
		div.appendChild(span);
		div.appendChild(p);
		document.body.appendChild(div);
	}		
	
}
var storedAbsentLate230 = null;
function two(){	
	var storedEightSchedtxt = localStorage.getItem("230");
	var storedEightSched = JSON.parse(storedEightSchedtxt);
if(localStorage.getItem("saveChecker230")!="false"){	
		console.log('two');
		document.body.innerHTML = "<h1 class='timehead'> 2:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn8");
		backbutton.setAttribute("onclick","back()");
		document.body.appendChild(backbutton);
		backbutton.innerHTML = "Back";
	//table
		var table = document.createElement("table");
		var body = document.getElementsByTagName("body");
		var th1 = document.createElement('th');
		var th2 = document.createElement('th');
		var th3 = document.createElement('th');
		var th4 = document.createElement('th');


		var thtext1 = document.createTextNode("Name");
		var thtext2 = document.createTextNode("Room");
		var thtext3 = document.createTextNode("Absent");
		var thtext4 = document.createTextNode("Late(minutes)");

		th1.appendChild(thtext1);
		th2.appendChild(thtext2);
		th3.appendChild(thtext3);
		th4.appendChild(thtext4);
		table.appendChild(th1);
		table.appendChild(th2);
		table.appendChild(th3);
		table.appendChild(th4);

		var td1,td2,td3,text1,text2,tr,input;
		for(var i=0; i<storedEightSched.data.length; i++){
			tr=document.createElement("tr");
			td1=document.createElement("td");
			td2=document.createElement("td");
			td3=document.createElement("td");
			td4=document.createElement("td");
			button = document.createElement("button");
			button2 = document.createElement("button");
			button2.setAttribute("id", "button2"+i);
			input = document.createElement("input")
			input.setAttribute("type", "number");
			input.setAttribute("value","1");
			input.setAttribute("min","1");
			input.setAttribute("max","15");
			input.setAttribute("id", "late"+i); 
			text1 = document.createTextNode(storedEightSched.data[i].name);
			text2 = document.createTextNode(storedEightSched.data[i].room);
			text3 = document.createTextNode("ABSENT");
			text4 = document.createTextNode("LATE");
			td1.appendChild(text1);
			td2.appendChild(text2);
			button.appendChild(text3);
			button2.appendChild(text4);
			td3.appendChild(button);
			button.setAttribute("id", "absent"+i);
			button.setAttribute("class", "status-btn");
			button2.setAttribute("id", "latebtn"+i); //submit button nang late
			button2.setAttribute("class", "status-btn");
			td4.appendChild(button2);
			td4.appendChild(input);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);	
			table.appendChild(tr);
		 }
		//present button
		var presentBtn = document.createElement('button');
		var presentText = document.createTextNode('All Present');
		presentBtn.appendChild(presentText);
		presentBtn.setAttribute("id", "allpresent230");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent230").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			eightSchedNew.data.push({"allpresent" : true});
			eightSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate230", JSON.stringify(eightSchedNew));
			storedAbsentLate230 = JSON.parse(localStorage.getItem("absentLate230"));
			localStorage.setItem("saveChecker230", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//230 row 1

			if(eightSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eightSchedNew.data.push(storedEightSched.data[0]);
							eightSchedNew.data[eightSchedNew.data.length-1]["substitute"] = true;
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1;
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}else{
							eightSchedNew.data.push(storedEightSched.data[0]);
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1;
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");

						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+0).value;
						eightSchedNew.data.push(storedEightSched.data[0]);
						eightSchedNew.data[eightSchedNew.data.length-1]["late"] = lateValue;
						eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent230").setAttribute("disabled", "");
			}

			//2ndrow
			if(eightSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eightSchedNew.data.push(storedEightSched.data[1]);
							eightSchedNew.data[eightSchedNew.data.length-1]["substitute"] = true;
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}else{
							eightSchedNew.data.push(storedEightSched.data[1]);
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+1).value;
						eightSchedNew.data.push(storedEightSched.data[1]);
						eightSchedNew.data[eightSchedNew.data.length-1]["late"] = lateValue;
						eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent230").setAttribute("disabled", "");
			}
			//3rdrow
			if(eightSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eightSchedNew.data.push(storedEightSched.data[2]);
							eightSchedNew.data[eightSchedNew.data.length-1]["substitute"] = true;
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}else{
							eightSchedNew.data.push(storedEightSched.data[2]);
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						eightSchedNew.data.push(storedEightSched.data[2]);
						eightSchedNew.data[eightSchedNew.data.length-1]["late"] = lateValue;
						eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent230").setAttribute("disabled", "");
			}
			//4throw
			if(eightSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){
							eightSchedNew.data.push(storedEightSched.data[3]);
							eightSchedNew.data[eightSchedNew.data.length-1]["substitute"] = true;
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}else{
							eightSchedNew.data.push(storedEightSched.data[3]);
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+3).value;
						eightSchedNew.data.push(storedEightSched.data[3]);
						eightSchedNew.data[eightSchedNew.data.length-1]["late"] = lateValue;
						eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent230").setAttribute("disabled", "");
			}
			//5throw
			if(eightSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eightSchedNew.data.push(storedEightSched.data[4]);
							eightSchedNew.data[eightSchedNew.data.length-1]["substitute"] = true;
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}else{
							eightSchedNew.data.push(storedEightSched.data[4]);
							eightSchedNew.data[eightSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent230").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+4).value;
						eightSchedNew.data.push(storedEightSched.data[4]);
						eightSchedNew.data[eightSchedNew.data.length-1]["late"] = lateValue;
						eightSchedNew.data[eightSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent230").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate230", JSON.stringify(eightSchedNew));
					  storedAbsentLate230 = JSON.parse(localStorage.getItem("absentLate230"));
					 saveChecker230=false;
					 localStorage.setItem("saveChecker230", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn8").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				eightSchedNew.data.length = 0;
				startUI();
			}
	}else{
		var div = document.createElement("div");
		div.setAttribute("class", "alert");
		var span = document.createElement("span");
		span.setAttribute("class", "closebtn");
		span.setAttribute("onclick", "this.parentElement.style.display='none';");
		var spanTxt = document.createTextNode("__")
		span.appendChild(spanTxt);
		var pTxt = document.createTextNode("You already checked that schedule!");
		var p = document.createElement("p");
		p.appendChild(pTxt);
		p.setAttribute("class", "alertContent");
		div.appendChild(span);
		div.appendChild(p);
		document.body.appendChild(div);
	}		
	
}