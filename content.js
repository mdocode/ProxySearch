console.log("find?");

function findTerm (src, term) {
	console.log("function findTerm "+term);
	if (src.search(term) > 0)
		{
			findList.push(term);
			console.log("findlist: "+findList);
		}
}

var searchList = ["compensation consult", "Administaff", "American Compensation Resources", "Analytic Consulting", "AON", "Ascend", "Astron", "Cole", "Benefits Partners", "Buck ", "Capital H", "CBIZ", "CCA Strategies", " CEL ", "Charles Mazza", "Clark Consulting", "Cogent", "CompAnalyst", "Compass", "Compensation Design Group", "Compensation Resources", "Compensation Strategies", "Compensation Venture", "Compensia", "Cooley Godward", "Cowden Associates", "Culpepper", "David Larcker", "Davis Polk", "Deloitte", "Delves", "Denver Management Advisors", "McDermott", "Dolmat", "ECG Advisors", "Economic Research Institute", "Effective Compensation", "Equilar", "Ernst", "Exequity", "Findley", "First Niagara Consulting", " FPL", "Franks", "Cook", "Georgeson", "Gibson", "GK", "Goodwin Procter", "Gough Management", "Gressle", "Gunderson", "Hay", "Hewitt", "HRG", "Hugessen", "Independent Compensation Committee Advisor", "Integis", "ISS Corporate", "Reda", "Janco Associates", "Johnson Associates", "Jones Day", "Rand Consulting", "Korn", "KPMG", "Longnecker", "Lyons", "Marsh", "McDaniel", "McLagan", "Mercer", "Meridian", "Meyercord", "MG Management", "Miller", "Milliman", "Arnosti", "National Association of Corporate Directors", "Melveny", "Oliveri", "Organization Resources Counselors", "PayCraft", "Pay Governance", "Meyer", "POE Group", "PriceWaterhouseCoopers", "Private Executive Survey", "Brian Hall", "Radford", "RP Financial", "SAJE", "Salary.com", "Schneiderman", "Schuster", "Semler Brossy", "Setren", "Shareholder Value Advisors", "Shearman", "Sibson", "SMG Advisory Group", "SNI Financial", "SNL Financial", "Stephen Hall", "Stern Stewart", "Stone Partners", "Strategic Apex", "Altman", "Amalfi", "Barney", "BDO", "Blanchard", "Chain Restaurant Compensation Association Survey", "Chernoff", "ClearBridge", "Compensation Advisory Partners", "Croner", "Denver Management Advisors", "EmpSight", "EW Partners", "Farient", "FTI", "Grant Thornton", "Hewitt New Bridge", "ICR", "International Pay Analysis", "John, Parry", "LOMA", "Markson", "Nadel Consult", "New Bridge", "Payscale", "PSI Stanton", "SCHips", "Tatum", "Kinsley", "Mazzitelli ", "Quinson", "Total Rewards Strategies", "Veritas", "The Conference Board", "Strategic Compensation Planning", "Sullivan & Cotter", "Syzygy ConsultingKerstetter", "TBG Financial", "The Conference Board", " Ross", "Schonbraun", "Top Five Data", "Total Compensation Solutions", "Towers", " UBS", "Upstart Solutions", "Vedder", "VenturePay", "Dashboard Report", "Villareal", "Haigh", "Wachovia", "Watson", "Westervelt", "Wiegman", "Wilson Group", "WorldatWork", "Corporate Compensation Parters", "Assets Unlimited", "Executive Compensation Advisors", "Remedy Compensation Consultants", "Cable and Telecommunications Human Resources Cable Programmers/Broadcast Networks Compensation Survey", "Clark Consulting", "Reed Smith LLP", "National Association of Real Estate Investment Trusts", "Spencer Stuart", "Robert Half", "Thomas E. Shea and Associates", "Willis HRH"];
var findList = new Array();
var inner = document.body.innerHTML.toLowerCase();

for (var i = 0; i < searchList.length; i++){
	var term = searchList[i].toLowerCase();
	console.log(term);
	findTerm(inner, term);
}
chrome.extension.sendMessage({terms: findList, recipient: "background"});

