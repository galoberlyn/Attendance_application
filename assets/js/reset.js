function reset(){
	var conf = confirm("Are you sure you want to reset everything?");
	if(conf == true){
				localStorage.setItem("saveChecker730", "true");
				localStorage.setItem("saveChecker830", "true");
				localStorage.setItem("saveChecker930", "true");
				localStorage.setItem("saveChecker1030", "true");
				localStorage.setItem("saveChecker1130", "true");
				localStorage.setItem("saveChecker1230", "true");
				localStorage.setItem("saveChecker130", "true");
				localStorage.setItem("saveChecker230", "true");
				localStorage.setItem("saveChecker330", "true");
				localStorage.setItem("saveChecker430", "true");
				localStorage.setItem("saveChecker530", "true");
				firstSchedNew.data.length = 0;
				secondSchedNew.data.length = 0;
				thirdSchedNew.data.length = 0;
				fourthSchedNew.data.length = 0;
				fifthSchedNew.data.length = 0;
				sixthSchedNew.data.length = 0;
				seventhSchedNew.data.length = 0;
				eightSchedNew.data.length = 0;
				ninthSchedNew.data.length = 0;	
				tenthSchedNew.data.length = 0;
				eleventhSchedNew.data.length = 0;
				localStorage.removeItem("absentLate730");
				localStorage.removeItem("absentLate830");
				localStorage.removeItem("absentLate930");
				localStorage.removeItem("absentLate1030");
				localStorage.removeItem("absentLate1130");
				localStorage.removeItem("absentLate1230");
				localStorage.removeItem("absentLate130");
				localStorage.removeItem("absentLate230");
				localStorage.removeItem("absentLate330");
				localStorage.removeItem("absentLate430");
				localStorage.removeItem("absentLate530");
			

				alert("All data has been cleared");
				startUI();
	}
}