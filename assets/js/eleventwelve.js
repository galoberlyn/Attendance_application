var storedAbsentLate1130 = null;

function eleven(){	
	var storedFifthSchedtxt = localStorage.getItem("1130");
	var storedFifthSched = JSON.parse(storedFifthSchedtxt);
if(localStorage.getItem("saveChecker1130")!="false"){	
		console.log('eleven');
		document.body.innerHTML = "<h1 class='timehead'> 11:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn5");
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
		for(var i=0; i<storedFifthSched.data.length; i++){
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
			text1 = document.createTextNode(storedFifthSched.data[i].name);
			text2 = document.createTextNode(storedFifthSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent1130");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent1130").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			fifthSchedNew.data.push({"allpresent" : true});
			fifthSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate1130", JSON.stringify(fifthSchedNew));
			storedAbsentLate1130 = JSON.parse(localStorage.getItem("absentLate1130"));
			localStorage.setItem("saveChecker1130", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//1130 row 1

			if(fifthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y =  confirm("With Substitute?");
						if(y){//with sub
							fifthSchedNew.data.push(storedFifthSched.data[0]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["substitute"] = true;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
						}else{ //wo suub
							fifthSchedNew.data.push(storedFifthSched.data[0]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
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
						fifthSchedNew.data.push(storedFifthSched.data[0]);
						fifthSchedNew.data[fifthSchedNew.data.length-1]["late"] = lateValue;
						fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent1130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent1130").setAttribute("disabled", "");
			}

			//2ndrow
			if(fifthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //with substitute
							fifthSchedNew.data.push(storedFifthSched.data[1]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["substitute"] = true;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
						}else{//without substitute
							fifthSchedNew.data.push(storedFifthSched.data[1]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
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
						fifthSchedNew.data.push(storedFifthSched.data[1]);
						fifthSchedNew.data[fifthSchedNew.data.length-1]["late"] = lateValue;
						fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent1130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent1130").setAttribute("disabled", "");
			}
			//3rdrow
			if(fifthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //w sub
							fifthSchedNew.data.push(storedFifthSched.data[2]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["substitute"] = true;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
						}else{//wo sub
							fifthSchedNew.data.push(storedFifthSched.data[2]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
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
						fifthSchedNew.data.push(storedFifthSched.data[2]);
						fifthSchedNew.data[fifthSchedNew.data.length-1]["late"] = lateValue;
						fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent1130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent1130").setAttribute("disabled", "");
			}
			//4throw
			if(fifthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							fifthSchedNew.data.push(storedFifthSched.data[3]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["substitute"] = true;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
						}else{//wo sub
							fifthSchedNew.data.push(storedFifthSched.data[3]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
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
						fifthSchedNew.data.push(storedFifthSched.data[3]);
						fifthSchedNew.data[fifthSchedNew.data.length-1]["late"] = lateValue;
						fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent1130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent1130").setAttribute("disabled", "");
			}
			//5throw
			if(fifthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							fifthSchedNew.data.push(storedFifthSched.data[4]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["substitute"] = true;
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
						}else{//wo sub
							fifthSchedNew.data.push(storedFifthSched.data[4]);
							fifthSchedNew.data[fifthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1130").setAttribute("disabled", "");
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
						fifthSchedNew.data.push(storedFifthSched.data[4]);
						fifthSchedNew.data[fifthSchedNew.data.length-1]["late"] = lateValue;
						fifthSchedNew.data[fifthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent1130").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent1130").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate1130", JSON.stringify(fifthSchedNew));
					  storedAbsentLate1130 = JSON.parse(localStorage.getItem("absentLate1130"));
					 saveChecker1130=false;
					 localStorage.setItem("saveChecker1130", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn5").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				fifthSchedNew.data.length = 0;
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
	
}//1130
var storedAbsentLate1230 = null;
function twelve(){	
	var storedSixthSchedtxt = localStorage.getItem("1230");
	var storedSixthSched = JSON.parse(storedSixthSchedtxt);
if(localStorage.getItem("saveChecker1230")!="false"){	
		console.log('twelve');
		document.body.innerHTML = "<h1 class='timehead'> 12:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn6");
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

		table.setAttribute("border", "1");
		table.setAttribute("cellspacing", "0");
		table.setAttribute("cellpadding","0");

		var td1,td2,td3,text1,text2,tr,input;
		for(var i=0; i<storedSixthSched.data.length; i++){
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
			text1 = document.createTextNode(storedSixthSched.data[i].name);
			text2 = document.createTextNode(storedSixthSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent1230");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent1230").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			sixthSchedNew.data.push({"allpresent" : true});
			sixthSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate1230", JSON.stringify(sixthSchedNew));
			storedAbsentLate1230 = JSON.parse(localStorage.getItem("absentLate1230"));
			localStorage.setItem("saveChecker1230", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//1230 row 1

			if(sixthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //with sub
							sixthSchedNew.data.push(storedSixthSched.data[0]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["substitute"] = true;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}else{ //without sub
							sixthSchedNew.data.push(storedSixthSched.data[0]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+0).value;
						sixthSchedNew.data.push(storedSixthSched.data[0]);
						sixthSchedNew.data[sixthSchedNew.data.length-1]["late"] = lateValue;
						sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent1230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent1230").setAttribute("disabled", "");
			}

			//2ndrow
			if(sixthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							sixthSchedNew.data.push(storedSixthSched.data[1]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["substitute"] = true;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}else{
							sixthSchedNew.data.push(storedSixthSched.data[1]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
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
						sixthSchedNew.data.push(storedSixthSched.data[1]);
						sixthSchedNew.data[sixthSchedNew.data.length-1]["late"] = lateValue;
						sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent1230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent1230").setAttribute("disabled", "");
			}
			//3rdrow
			if(sixthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							sixthSchedNew.data.push(storedSixthSched.data[2]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["substitute"] = true;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}else{ //no sub
							sixthSchedNew.data.push(storedSixthSched.data[2]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
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
						sixthSchedNew.data.push(storedSixthSched.data[2]);
						sixthSchedNew.data[sixthSchedNew.data.length-1]["late"] = lateValue;
						sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent1230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent1230").setAttribute("disabled", "");
			}
			//4throw
			if(sixthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							sixthSchedNew.data.push(storedSixthSched.data[3]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["substitute"] = true;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}else{ //without sub
							sixthSchedNew.data.push(storedSixthSched.data[3]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
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
						sixthSchedNew.data.push(storedSixthSched.data[3]);
						sixthSchedNew.data[sixthSchedNew.data.length-1]["late"] = lateValue;
						sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent1230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent1230").setAttribute("disabled", "");
			}
			//5throw
			if(sixthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							sixthSchedNew.data.push(storedSixthSched.data[4]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["substitute"] = true;
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
						}else{
							sixthSchedNew.data.push(storedSixthSched.data[4]);
							sixthSchedNew.data[sixthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1230").setAttribute("disabled", "");
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
						sixthSchedNew.data.push(storedSixthSched.data[4]);
						sixthSchedNew.data[sixthSchedNew.data.length-1]["late"] = lateValue;
						sixthSchedNew.data[sixthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent1230").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent1230").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate1230", JSON.stringify(sixthSchedNew));
					  storedAbsentLate1230 = JSON.parse(localStorage.getItem("absentLate1230"));
					 saveChecker1230=false;
					 localStorage.setItem("saveChecker1230", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn6").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				sixthSchedNew.data.length = 0;
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