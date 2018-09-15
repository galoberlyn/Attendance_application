var storedAbsentLate530 = null;
function five(){	
	var storedEleventhSchedtxt = localStorage.getItem("530");
	var storedEleventhSched = JSON.parse(storedEleventhSchedtxt);	
if(localStorage.getItem("saveChecker530")!="false"){

		console.log('four');
		document.body.innerHTML = "<h1 class='timehead'> 5:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn11");
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
		for(var i=0; i<storedEleventhSched.data.length; i++){
			tr=document.createElement("tr");
			td1=document.createElement("td");
			td2=document.createElement("td");
			td3=document.createElement("td");
			td4=document.createElement("td");
			button = document.createElement("button");
			button2 = document.createElement("button");
			button2.setAttribute("id", "button2"+i);
			input = document.createElement("input")
			input.setAttribute("type", "number"); //-----------------------------------------------------------------
			input.setAttribute("value","1");//---------------------------------------------------------
			input.setAttribute("min","1");//---------------------------------------------------------
			input.setAttribute("max","15"); //---------------------------------------------------------
			input.setAttribute("id", "late"+i); //---------------------------------------------------------
			text1 = document.createTextNode(storedEleventhSched.data[i].name);
			text2 = document.createTextNode(storedEleventhSched.data[i].room);
			text3 = document.createTextNode("ABSENT");
			text4 = document.createTextNode("LATE");
			td1.appendChild(text1);
			td2.appendChild(text2);
			button.appendChild(text3);
			button2.appendChild(text4);
			td3.appendChild(button);
			button.setAttribute("id", "absent"+i);//---------------------------------------------------------
			button.setAttribute("class", "status-btn");//---------------------------------------------------------
			button2.setAttribute("id", "latebtn"+i); //submit button nang late//---------------------------------------------------------
			button2.setAttribute("class", "status-btn");//---------------------------------------------------------
			td4.appendChild(button2);//---------------------------------------------------------
			td4.appendChild(input);//---------------------------------------------------------
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
		presentBtn.setAttribute("id", "allpresent530");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent530").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			eleventhSchedNew.data.push({"allpresent" : true});
			eleventhSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate530", JSON.stringify(eleventhSchedNew));
			storedAbsentLate530 = JSON.parse(localStorage.getItem("absentLate530"));
			localStorage.setItem("saveChecker530", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//530 row 1

			if(eleventhSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedEleventhSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute?");
						if(y){
							console.log('nice');
							eleventhSchedNew.data.push(storedEleventhSched.data[0]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["substitute"] = true;
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1;
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}else{
							console.log('nice');
							eleventhSchedNew.data.push(storedEleventhSched.data[0]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1;
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+0).value;
						eleventhSchedNew.data.push(storedEleventhSched.data[0]);
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["late"] = lateValue;
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent530").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent530").setAttribute("disabled", "");
			}

			//2ndrow
			if(eleventhSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					var x = confirm("Are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eleventhSchedNew.data.push(storedEleventhSched.data[1]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["substitute"] = true; 
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}else{
							eleventhSchedNew.data.push(storedEleventhSched.data[1]); 
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					var x = confirm("Are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+1).value;
						eleventhSchedNew.data.push(storedEleventhSched.data[1]);
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["late"] = lateValue;
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent530").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent530").setAttribute("disabled", "");
			}
			//3rdrow
			if(eleventhSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute?");
						if(y){
							eleventhSchedNew.data.push(storedEleventhSched.data[2]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["substitute"] = true; 
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}else{
							eleventhSchedNew.data.push(storedEleventhSched.data[2]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
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
						eleventhSchedNew.data.push(storedEleventhSched.data[2]);
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["late"] = lateValue;
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent530").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent530").setAttribute("disabled", "");
			}
			//4throw
			if(eleventhSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eleventhSchedNew.data.push(storedEleventhSched.data[3]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["substitute"] = true;
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}else{
							eleventhSchedNew.data.push(storedEleventhSched.data[3]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
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
						eleventhSchedNew.data.push(storedEleventhSched.data[3]);
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["late"] = lateValue;
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent530").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent530").setAttribute("disabled", "");
			}
			//5throw
			if(eleventhSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							eleventhSchedNew.data.push(storedEleventhSched.data[4]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["substitute"] = true;
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
						}else{
							eleventhSchedNew.data.push(storedEleventhSched.data[4]);
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent530").setAttribute("disabled", "");
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
						eleventhSchedNew.data.push(storedEleventhSched.data[4]);
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["late"] = lateValue;
						eleventhSchedNew.data[eleventhSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent530").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent530").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate530", JSON.stringify(eleventhSchedNew));
					  storedAbsentLate530 = JSON.parse(localStorage.getItem("absentLate530"));
					 saveChecker530=false;
					 localStorage.setItem("saveChecker530", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn11").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				eleventhSchedNew.data.length = 0;
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