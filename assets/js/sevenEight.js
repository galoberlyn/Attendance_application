var storedAbsentLate730 = null;

function seven(){	
if(localStorage.getItem("saveChecker730")!="false"){	
		var storedFirstSchedtxt = localStorage.getItem("730");
		var storedFirstSched = JSON.parse(storedFirstSchedtxt);
		console.log('seven');
		document.body.innerHTML = "<h1 class='timehead'> 7:30 </h1> ";

		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn1");
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
		for(var i=0; i<storedFirstSched.data.length; i++){
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
			text1 = document.createTextNode(storedFirstSched.data[i].name);
			text2 = document.createTextNode(storedFirstSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent730");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent730").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			firstSchedNew.data.push({"allpresent" : true});
			firstSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate730", JSON.stringify(firstSchedNew));
			storedAbsentLate730 = JSON.parse(localStorage.getItem("absentLate730"));
			localStorage.setItem("saveChecker730", "false");
			startUI();
			}
		}

		//MANUAL GAMING
			//730 row 1

			if(firstSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y == true){ //with substitute
							firstSchedNew.data.push(storedFirstSched.data[0]);
							firstSchedNew.data[firstSchedNew.data.length-1]["substitute"] = true;
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1;
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}else{ //without substitute
							firstSchedNew.data.push(storedFirstSched.data[0]);
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1;
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					var x = confirm("Are You Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+0).value;
						firstSchedNew.data.push(storedFirstSched.data[0]);
						firstSchedNew.data[firstSchedNew.data.length-1]["late"] = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent730").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent730").setAttribute("disabled", "");
			}

			//2ndrow
			if(firstSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y == true){ //with substitute
							firstSchedNew.data.push(storedFirstSched.data[1]);
							firstSchedNew.data[firstSchedNew.data.length-1]["substitute"] = true;
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1;
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}else{ //without substitute
							firstSchedNew.data.push(storedFirstSched.data[0]);
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1;
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
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
						firstSchedNew.data.push(storedFirstSched.data[1]);
						firstSchedNew.data[firstSchedNew.data.length-1]["late"] = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent730").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent730").setAttribute("disabled", "");
			}
			//3rdrow
			if(firstSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							firstSchedNew.data.push(storedFirstSched.data[2]);
							firstSchedNew.data[firstSchedNew.data.length-1]["substitute"] = true;
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1; //problem di masave
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}else{//without sub
							firstSchedNew.data.push(storedFirstSched.data[0]);
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1;
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
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
						firstSchedNew.data.push(storedFirstSched.data[2]);
						firstSchedNew.data[firstSchedNew.data.length-1]["late"] = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent730").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent730").setAttribute("disabled", "");
			}
			//4throw
			if(firstSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							firstSchedNew.data.push(storedFirstSched.data[3]);
							firstSchedNew.data[firstSchedNew.data.length-1]["substitute"] =true;
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1; //problem di masave
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}else{ //without sub
							firstSchedNew.data.push(storedFirstSched.data[3]);
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1; //problem di masave
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");;
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						firstSchedNew.data.push(storedFirstSched.data[3]);
						firstSchedNew.data[firstSchedNew.data.length-1]["late"] = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent730").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent730").setAttribute("disabled", "");
			}
			//5throw
			if(firstSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							firstSchedNew.data.push(storedFirstSched.data[4]);
							firstSchedNew.data[firstSchedNew.data.length-1]["substitute"] =true;
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1; //problem di masave
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
						}else{//wtiout sub
							firstSchedNew.data.push(storedFirstSched.data[4]);
							firstSchedNew.data[firstSchedNew.data.length-1]["absent"] = 1; //problem di masave
							firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent730").setAttribute("disabled", "");
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
						firstSchedNew.data.push(storedFirstSched.data[4]);
						firstSchedNew.data[firstSchedNew.data.length-1]["late"] = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent730").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent730").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate730", JSON.stringify(firstSchedNew));
					  storedAbsentLate730 = JSON.parse(localStorage.getItem("absentLate730"));
					 saveChecker730=false;
					 localStorage.setItem("saveChecker730", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn1").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				firstSchedNew.data.length = 0;
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
	
}//end seven
var storedAbsentLate830 = null;
function eight(){
	var storedSecondSchedtxt = localStorage.getItem("830");
	var storedSecondSched = JSON.parse(storedSecondSchedtxt);
	if(localStorage.getItem("saveChecker830")!="false"){	
		console.log('eight');
		document.body.innerHTML = "<h1 class='timehead'> 8:30 </h1>";

		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn2");
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
		for(var i=0; i<storedSecondSched.data.length; i++){
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
			text1 = document.createTextNode(storedSecondSched.data[i].name);
			text2 = document.createTextNode(storedSecondSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent830");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent830").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			secondSchedNew.data.push({"allpresent" : true});
			secondSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate830", JSON.stringify(secondSchedNew));
			storedAbsentLate830 = JSON.parse(localStorage.getItem("absentLate830"));
			localStorage.setItem("saveChecker830", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//830 row 1

			if(secondSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //with sub
							secondSchedNew.data.push(storedSecondSched.data[0]);
							secondSchedNew.data[secondSchedNew.data.length-1]["substitute"] = true;
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1;
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}else{//without sub
							secondSchedNew.data.push(storedSecondSched.data[0]);
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1;
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
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
						secondSchedNew.data.push(storedSecondSched.data[0]);
						secondSchedNew.data[secondSchedNew.data.length-1]["late"] = lateValue;
						secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent830").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent830").setAttribute("disabled", "");
			}

			//2ndrow
			if(secondSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //with sub
							secondSchedNew.data.push(storedSecondSched.data[1]);
							secondSchedNew.data[secondSchedNew.data.length-1]["substitute"] = true; 
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}else{ //without sub
							secondSchedNew.data.push(storedSecondSched.data[1]); 
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {;
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+1).value;
						secondSchedNew.data.push(storedSecondSched.data[1]);
						secondSchedNew.data[secondSchedNew.data.length-1]["late"] = lateValue;
						secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent830").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent830").setAttribute("disabled", "");
			}
			//3rdrow
			if(secondSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ // with sub
							secondSchedNew.data.push(storedSecondSched.data[2]);
							secondSchedNew.data[secondSchedNew.data.length-1]["substitute"] = true;
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}else{
							secondSchedNew.data.push(storedSecondSched.data[2]);
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						} //without sub
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+2).value;
						secondSchedNew.data.push(storedSecondSched.data[2]);
						secondSchedNew.data[secondSchedNew.data.length-1]["late"] = lateValue;
						secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent830").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent830").setAttribute("disabled", "");
			}
			//4throw
			if(secondSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					var x = confirm("Are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							secondSchedNew.data.push(storedSecondSched.data[3]);
							secondSchedNew.data[secondSchedNew.data.length-1]["substitute"] = true;
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}else{//without sub
							secondSchedNew.data.push(storedSecondSched.data[3]);
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
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
						secondSchedNew.data.push(storedSecondSched.data[3]);
						secondSchedNew.data[secondSchedNew.data.length-1]["late"] = lateValue;
						secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent830").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent830").setAttribute("disabled", "");
			}
			//5throw
			if(secondSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							secondSchedNew.data.push(storedSecondSched.data[4]);
							secondSchedNew.data[secondSchedNew.data.length-1]["substitute"] = true;
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
						}else{
							secondSchedNew.data.push(storedSecondSched.data[3]);
							secondSchedNew.data[secondSchedNew.data.length-1]["absent"] = 1; //problem di masave
							secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent830").setAttribute("disabled", "");
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
						secondSchedNew.data.push(storedSecondSched.data[4]);
						secondSchedNew.data[secondSchedNew.data.length-1]["late"] = lateValue;
						secondSchedNew.data[secondSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent830").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent830").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					 localStorage.setItem("absentLate830", JSON.stringify(secondSchedNew));
					 storedAbsentLate830 = JSON.parse(localStorage.getItem("absentLate830"));
					 saveChecker830=false;
					 localStorage.setItem("saveChecker830", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn2").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				secondSchedNew.data.length = 0;
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
}//end eight

