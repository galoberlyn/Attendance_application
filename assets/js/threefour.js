var storedAbsentLate330 = null;
function three(){	
	var storedNinthSchedtxt = localStorage.getItem("330");
	var storedNinthSched = JSON.parse(storedNinthSchedtxt);
if(localStorage.getItem("saveChecker330")!="false"){	
		console.log('three');
		document.body.innerHTML = "<h1 class='timehead'> 3:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn9");
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
		for(var i=0; i<storedNinthSched.data.length; i++){
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
			text1 = document.createTextNode(storedNinthSched.data[i].name);
			text2 = document.createTextNode(storedNinthSched.data[i].room);
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
		presentBtn.setAttribute("class", "allpresent");
		presentBtn.setAttribute("id", "allpresent330");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent330").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			ninthSchedNew.data.push({"allpresent" : true});
			ninthSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate330", JSON.stringify(ninthSchedNew));
			storedAbsentLate330 = JSON.parse(localStorage.getItem("absentLate330"));
			localStorage.setItem("saveChecker330", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//330 row 1

			if(ninthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							ninthSchedNew.data.push(storedNinthSched.data[0]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["substitute"] = true;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
						}else{
							ninthSchedNew.data.push(storedNinthSched.data[0]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
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
						ninthSchedNew.data.push(storedNinthSched.data[0]);
						ninthSchedNew.data[ninthSchedNew.data.length-1]["late"] = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent330").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent330").setAttribute("disabled", "");
			}

			//2ndrow
			if(ninthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							ninthSchedNew.data.push(storedNinthSched.data[1]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["substitute"] = true;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
						}else{
							ninthSchedNew.data.push(storedNinthSched.data[1]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
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
						ninthSchedNew.data.push(storedNinthSched.data[1]);
						ninthSchedNew.data[ninthSchedNew.data.length-1]["late"] = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent330").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent330").setAttribute("disabled", "");
			}
			//3rdrow
			if(ninthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							ninthSchedNew.data.push(storedNinthSched.data[2]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["substitute"] = true;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
						}else{
							ninthSchedNew.data.push(storedNinthSched.data[2]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
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
						ninthSchedNew.data.push(storedNinthSched.data[2]);
						ninthSchedNew.data[ninthSchedNew.data.length-1]["late"] = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent330").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent330").setAttribute("disabled", "");
			}
			//4throw
			if(ninthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							ninthSchedNew.data.push(storedNinthSched.data[3]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["substitute"] = true;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
						}else{
							ninthSchedNew.data.push(storedNinthSched.data[3]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
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
						ninthSchedNew.data.push(storedNinthSched.data[3]);
						ninthSchedNew.data[ninthSchedNew.data.length-1]["late"] = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent330").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent330").setAttribute("disabled", "");
			}
			//5throw
			if(ninthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							ninthSchedNew.data.push(storedNinthSched.data[4]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["substitute"] = true;
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
						}else{
							ninthSchedNew.data.push(storedNinthSched.data[4]);
							ninthSchedNew.data[ninthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent330").setAttribute("disabled", "");
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
						ninthSchedNew.data.push(storedNinthSched.data[4]);
						ninthSchedNew.data[ninthSchedNew.data.length-1]["late"] = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent330").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent330").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate330", JSON.stringify(ninthSchedNew));
					  storedAbsentLate330 = JSON.parse(localStorage.getItem("absentLate330"));
					 saveChecker330=false;
					 localStorage.setItem("saveChecker330", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn9").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				ninthSchedNew.data.length = 0;
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
var storedAbsentLate430 = null;
function four(){
	var storedTenthSchedtxt = localStorage.getItem("430");
	var storedTenthSched = JSON.parse(storedTenthSchedtxt);	
if(localStorage.getItem("saveChecker430")!="false"){	
		console.log('four');
		document.body.innerHTML = "<h1 class='timehead'> 4:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn10");
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
		for(var i=0; i<storedTenthSched.data.length; i++){
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
			text1 = document.createTextNode(storedTenthSched.data[i].name);
			text2 = document.createTextNode(storedTenthSched.data[i].room);
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
		presentBtn.setAttribute("class", "allpresent");
		presentBtn.setAttribute("id", "allpresent430");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent430").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			tenthSchedNew.data.push({"allpresent" : true});
			tenthSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate430", JSON.stringify(tenthSchedNew));
			storedAbsentLate430 = JSON.parse(localStorage.getItem("absentLate430"));
			localStorage.setItem("saveChecker430", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//430 row 1

			if(tenthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							tenthSchedNew.data.push(storedTenthSched.data[0]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["substitute"] = true;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
						}else{
							tenthSchedNew.data.push(storedTenthSched.data[0]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
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
						tenthSchedNew.data.push(storedTenthSched.data[0]);
						tenthSchedNew.data[tenthSchedNew.data.length-1]["late"] = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent430").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent430").setAttribute("disabled", "");
			}

			//2ndrow
			if(tenthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							tenthSchedNew.data.push(storedTenthSched.data[1]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["substitute"] = true; 
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
						}else{
							tenthSchedNew.data.push(storedTenthSched.data[1]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
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
						tenthSchedNew.data.push(storedTenthSched.data[1]);
						tenthSchedNew.data[tenthSchedNew.data.length-1]["late"] = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent430").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent430").setAttribute("disabled", "");
			}
			//3rdrow
			if(tenthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							tenthSchedNew.data.push(storedTenthSched.data[2]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["substitute"] = true;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
						}else{
							tenthSchedNew.data.push(storedTenthSched.data[2]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
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
						tenthSchedNew.data.push(storedTenthSched.data[2]);
						tenthSchedNew.data[tenthSchedNew.data.length-1]["late"] = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent430").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent430").setAttribute("disabled", "");
			}
			//4throw
			if(tenthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							tenthSchedNew.data.push(storedTenthSched.data[3]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["substitute"] = true;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
						}else{
							tenthSchedNew.data.push(storedTenthSched.data[3]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
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
						tenthSchedNew.data.push(storedTenthSched.data[3]);
						tenthSchedNew.data[tenthSchedNew.data.length-1]["late"] = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent430").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent430").setAttribute("disabled", "");
			}
			//5throw
			if(tenthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							tenthSchedNew.data.push(storedTenthSched.data[4]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = true;
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
						}else{
							tenthSchedNew.data.push(storedTenthSched.data[4]);
							tenthSchedNew.data[tenthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent430").setAttribute("disabled", "");
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
						tenthSchedNew.data.push(storedTenthSched.data[4]);
						tenthSchedNew.data[tenthSchedNew.data.length-1]["late"] = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent430").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent430").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate430", JSON.stringify(tenthSchedNew));
					  storedAbsentLate430 = JSON.parse(localStorage.getItem("absentLate430"));
					 saveChecker430=false;
					 localStorage.setItem("saveChecker430", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn10").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				tenthSchedNew.data.length = 0;
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