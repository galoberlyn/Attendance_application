var storedAbsentLate930 = null;
function nine(){

if(localStorage.getItem("saveChecker930")!="false"){	
	var storedThirdSchedtxt = localStorage.getItem("930");
	var storedThirdSched = JSON.parse(storedThirdSchedtxt);
		console.log('nine');
		document.body.innerHTML = "<h1 class='timehead'> 9:30 </h1>";
		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn3");
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
		for(var i=0; i<storedThirdSched.data.length; i++){
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
			text1 = document.createTextNode(storedThirdSched.data[i].name);
			text2 = document.createTextNode(storedThirdSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent930");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent930").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			thirdSchedNew.data.push({"allpresent" : true});
			thirdSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate930", JSON.stringify(thirdSchedNew));
			storedAbsentLate930 = JSON.parse(localStorage.getItem("absentLate930"));
			localStorage.setItem("saveChecker930", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//930 row 1

			if(thirdSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							thirdSchedNew.data.push(storedThirdSched.data[0]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["substitute"] = true;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
						}else{ //wtihout sub
							thirdSchedNew.data.push(storedThirdSched.data[0]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
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
						thirdSchedNew.data.push(storedThirdSched.data[0]);
						thirdSchedNew.data[thirdSchedNew.data.length-1]["late"] = lateValue;
						thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent930").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent930").setAttribute("disabled", "");
			}

			//2ndrow
			if(thirdSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){
							thirdSchedNew.data.push(storedThirdSched.data[1]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["substitute"] = true;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
						}else{ //no sub
							thirdSchedNew.data.push(storedThirdSched.data[1]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
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
						thirdSchedNew.data.push(storedThirdSched.data[1]);
						thirdSchedNew.data[thirdSchedNew.data.length-1]["late"] = lateValue;
						thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent930").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent930").setAttribute("disabled", "");
			}
			//3rdrow
			if(thirdSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){ //with sub
							thirdSchedNew.data.push(storedThirdSched.data[2]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["substitute"] = true;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
						}else{ //without sub
							thirdSchedNew.data.push(storedThirdSched.data[2]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
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
						thirdSchedNew.data.push(storedThirdSched.data[2]);
						thirdSchedNew.data[thirdSchedNew.data.length-1]["late"] = lateValue;
						thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent930").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent930").setAttribute("disabled", "");
			}
			//4throw
			if(thirdSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ // with sub;
							thirdSchedNew.data.push(storedThirdSched.data[3]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["substitute"] = true;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
						}else{ //without sub
							thirdSchedNew.data.push(storedThirdSched.data[3]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
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
						thirdSchedNew.data.push(storedThirdSched.data[3]);
						thirdSchedNew.data[thirdSchedNew.data.length-1]["late"] = lateValue;
						thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent930").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent930").setAttribute("disabled", "");
			}
			//5throw
			if(thirdSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //with sub
							thirdSchedNew.data.push(storedThirdSched.data[4]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["substitute"] = true;
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
						}else{ //without sub
							thirdSchedNew.data.push(storedThirdSched.data[4]);
							thirdSchedNew.data[thirdSchedNew.data.length-1]["absent"] = 1; //problem di masave
							thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent930").setAttribute("disabled", "");
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
						thirdSchedNew.data.push(storedThirdSched.data[4]);
						thirdSchedNew.data[thirdSchedNew.data.length-1]["late"] = lateValue;
						thirdSchedNew.data[thirdSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent930").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent930").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate930", JSON.stringify(thirdSchedNew));
					  storedAbsentLate930 = JSON.parse(localStorage.getItem("absentLate930"));
					 saveChecker930=false;
					 localStorage.setItem("saveChecker930", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn3").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				thirdSchedNew.data.length = 0;
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
	
}//end nine
//1030
var storedAbsentLate1030 = null;
function ten(){	
	var storedFourthSchedtxt = localStorage.getItem("1030");
	var storedFourthSched = JSON.parse(storedFourthSchedtxt);
if(localStorage.getItem("saveChecker1030")!="false"){	
		console.log('ten');
		document.body.innerHTML = "<h1 class='timehead'> 10:30 </h1>";

		var backbutton = document.createElement("button");
		backbutton.setAttribute("class","bckbtn");
		backbutton.setAttribute("id" , "bckbtn4");
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
		for(var i=0; i<storedFourthSched.data.length; i++){
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
			text1 = document.createTextNode(storedFourthSched.data[i].name);
			text2 = document.createTextNode(storedFourthSched.data[i].room);
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
		presentBtn.setAttribute("id", "allpresent1030");
		presentBtn.setAttribute("class", "allpresent");
		document.body.appendChild(table);
		document.body.appendChild(presentBtn); 

		document.getElementById("allpresent1030").onclick = function(){
			var y = confirm("Save Changes? You cannot undo this process")
			if(y){
			fourthSchedNew.data.push({"allpresent" : true});
			fourthSchedNew.data[0]["date"] = today;
			localStorage.setItem("absentLate1030", JSON.stringify(fourthSchedNew));
			storedAbsentLate1030 = JSON.parse(localStorage.getItem("absentLate1030"));
			localStorage.setItem("saveChecker1030", "false");
			startUI();
			}
		}
		//MANUAL GAMING
			//1030 row 1

			if(fourthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute");
						if(y){ //w sub
							fourthSchedNew.data.push(storedFourthSched.data[0]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["substitute"] = true;
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1;
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}else{ //w/o sub
							fourthSchedNew.data.push(storedFourthSched.data[0]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1;
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
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
						fourthSchedNew.data.push(storedFourthSched.data[0]);
						fourthSchedNew.data[fourthSchedNew.data.length-1]["late"] = lateValue;
						fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
						document.getElementById("allpresent1030").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
				document.getElementById("allpresent1030").setAttribute("disabled", "");
			}

			//2ndrow
			if(fourthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {

					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){ //w sub
							fourthSchedNew.data.push(storedFourthSched.data[1]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["substitute"] = true;
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}else{//wo sub
							fourthSchedNew.data.push(storedFourthSched.data[1]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}
					}else{ // dont store anything
						console.log("canceled");
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var lateValue = document.getElementById('late'+1).value;
						fourthSchedNew.data.push(storedFourthSched.data[1]);
						fourthSchedNew.data[fourthSchedNew.data.length-1]["late"] = lateValue;
						fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
						document.getElementById("allpresent1030").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
				document.getElementById("allpresent1030").setAttribute("disabled", "");
			}
			//3rdrow
			if(fourthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {

					var x = confirm("Are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With substitute?");
						if(y){ //w sub
							fourthSchedNew.data.push(storedFourthSched.data[2]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["substitute"] = true; 
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}else{//wo sub
							fourthSchedNew.data.push(storedFourthSched.data[2]); 
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
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
						fourthSchedNew.data.push(storedFourthSched.data[2]);
						fourthSchedNew.data[fourthSchedNew.data.length-1]["late"] = lateValue;
						fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
						document.getElementById("allpresent1030").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
				document.getElementById("allpresent1030").setAttribute("disabled", "");
			}
			//4throw
			if(fourthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							fourthSchedNew.data.push(storedFourthSched.data[3]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["substitute"] = true;
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}else{//no sub
							fourthSchedNew.data.push(storedFourthSched.data[3]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
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
						fourthSchedNew.data.push(storedFourthSched.data[3]);
						fourthSchedNew.data[fourthSchedNew.data.length-1]["late"] = lateValue;
						fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
						document.getElementById("allpresent1030").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
				document.getElementById("allpresent1030").setAttribute("disabled", "");
			}
			//5throw
			if(fourthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					var x = confirm("Are you Sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("With Substitute?");
						if(y){//with sub
							fourthSchedNew.data.push(storedFourthSched.data[4]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["substitute"] = true; 
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
						}else{//wo sub
							fourthSchedNew.data.push(storedFourthSched.data[4]);
							fourthSchedNew.data[fourthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
							document.getElementById("allpresent1030").setAttribute("disabled", "");
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
						fourthSchedNew.data.push(storedFourthSched.data[4]);
						fourthSchedNew.data[fourthSchedNew.data.length-1]["late"] = lateValue;
						fourthSchedNew.data[fourthSchedNew.data.length-1]["date"] = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
						document.getElementById("allpresent1030").setAttribute("disabled", "");
					}else{ // dont store anything
						console.log("canceled");
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
				document.getElementById("allpresent1030").setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo this process");
				if(y == true){
					  localStorage.setItem("absentLate1030", JSON.stringify(fourthSchedNew));
					  storedAbsentLate1030 = JSON.parse(localStorage.getItem("absentLate1030"));
					 saveChecker1030=false;
					 localStorage.setItem("saveChecker1030", "false");
					 startUI();
				}
			}
			document.getElementById("bckbtn4").onclick = function(){
				confirm("All data will be cleared. Do you wish to continue?");
				fourthSchedNew.data.length = 0;
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