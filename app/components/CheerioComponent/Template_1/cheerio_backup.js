
var cheerio = require("cheerio");


var JSONData = {}
var data = ''
var $ = cheerio.load(data);

/* ##########  Tags  ###########3 */

var list=[];
var d = $("#serviceSection").clone();
var servicelist = $("#serviceList").clone();
if(d.html()){
	var freelancer = JSONData["info"]["profileTags"]["status"];
	if(freelancer=="Yes"){
		var element = JSONData["info"]["profileTags"];
		var keys = Object.keys(element);
		for(var i = 0; i < keys.length; i++){
			var temp = servicelist.clone();
			var inner_keys = Object.keys(element[i]);
			for(var j = 0; j < inner_keys.length; j++){
				if(inner_keys[j] == "tag"){ 	temp.find(".serviceTag").text(element[i].tag);     }
				else if(inner_keys[j] == "summary"){   temp.find(".serviceSummary").text(element[i].summary);   } 
			}
			list.push(temp.html());  
		}
		$("#serviceList").replaceWith(list.join('\n'))
	}
	else{
		$("#serviceSection").replaceWith("")
	}
}
else{console.log("Service Banner NULL")}

// ##############################################


/* ##########  Personal Information  ###########3 */
var element = JSONData;
var keys = Object.keys(element);
for(var i = 0; i < keys.length; i++){
	if(keys[i] == "firstName"){    $(".firstName").text(element.firstName);    }
	else if(keys[i] == "lastName"){   $(".lastName").text(element.lastName);   } 
	else if(keys[i] == "info"){
		inner_keys=Object.keys(element.info);
		for(var k = 0; k < inner_keys.length; k++){
			if(inner_keys[k] == "brief"){ 	$(".profileSummary").text(element.info.brief);    }
			else if(inner_keys[k] == "dateOfBirth"){   $(".age").text(element.info.dateOfBirth);   } 
			else if(inner_keys[k] == "profilePhotoURL"){   $(".profilePhotoURL").attr("src" , element.info.profilePhotoURL);  } 
			else if(inner_keys[k] == "profileTags"){  
			var datalist=[]
			var tags=element.info.profileTags['list'];
			for(var j=0 ; j<tags.length ; j++){ datalist.push('"'+tags[j]+'."') }
			datalist="["+datalist.join(",")+"]"
			console.log(datalist)
			$(".profileTags").attr("data-rotate" , datalist);  
			
			} 
		}
	} 
	else if(keys[i] == "contact"){
		inner_keys=Object.keys(element.contact);
		for(var k = 0; k < inner_keys.length; k++){
			if(inner_keys[k] == "phone"){ 	$(".phone").text(element.contact.phone);    }
			else if(inner_keys[k] == "email"){   $(".email").text(element.contact.email);   } 
		}
	} 
	else if(keys[i] == "location"){
		inner_keys=Object.keys(element.location);
		for(var k = 0; k < inner_keys.length; k++){
			if(inner_keys[k] == "address"){   $(".address").text(element.location.address);   } 
			else if(inner_keys[k] == "city"){   $(".city").text(element.location.city);   } 
			else if(inner_keys[k] == "state"){   $(".state").text(element.location.state);   } 
			else if(inner_keys[k] == "code"){   $(".fullName1").text(element.location.code);   } 
			else if(inner_keys[k] == "country"){   $(".country").text(element.location.country);   } 
		}
	}  
}
$(".fullName").text(element.firstName+ " " + element.lastName);
//###################################################################################


/* ##########  capabilities  ###########3 */
var list=[];
var d = $("#serviceSection").clone();
var servicelist = $("#serviceList").clone();
var element = JSONData["capabilities"]["list"];
var keys = Object.keys(element);

if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = servicelist.clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "tag"){ 	temp.find(".serviceTag").text(element[i].tag);     }
			else if(inner_keys[j] == "summary"){   temp.find(".serviceSummary").text(element[i].summary);   } 
		}
		list.push(temp.html());  
	}
	$("#serviceList").replaceWith(list.join('\n'))
}
else{
	console.log("SERVICES NULL")
	$("#serviceList").replaceWith("")	
}
//###################################################################################


var list=[];
var d = $("#interestesSection").clone();
var element = JSONData["interests"];
var keys = Object.keys(element);
	
if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		if(element[i].name.toLowerCase() == "music"){
			temp.find("span").attr("class" , "icon icon-music align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "singing"){
			temp.find("span").attr("class" , "icon icon-karaoke align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "reading"){
			temp.find("span").attr("class" , "icon icon-open-book align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "writing"){
			temp.find("span").attr("class" , "icon icon-edit1 align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "bloging"){
			temp.find("span").attr("class" , "icon icon-blogging align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "poetry"){
			temp.find("span").attr("class" , "icon icon-poetry align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "sketching"){
			temp.find("span").attr("class" , "icon icon-sketch align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "photography"){
			temp.find("span").attr("class" , "icon icon-camera align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "designing"){
			temp.find("span").attr("class" , "icon icon-sketch-1 align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "painting"){
			temp.find("span").attr("class" , "icon icon-paint-palette align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "volunteering"){
			temp.find("span").attr("class" , "icon icon-volunteer align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "socializing"){
			temp.find("span").attr("class" , "icon icon-social-media align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "gaming"){
			temp.find("span").attr("class" , "icon icon-console align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "sport"){
			temp.find("span").attr("class" , "icon icon-running align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "cycling"){
			temp.find("span").attr("class" , "icon icon-man-cycling align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "swimming"){
			temp.find("span").attr("class" , "icon icon-swimming-pool align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "hiking"){
			temp.find("span").attr("class" , "icon icon-adventurer align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "camping"){
			temp.find("span").attr("class" , "icon icon-camp align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "traveling"){
			temp.find("span").attr("class" , "icon icon-destination align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "cricket"){
			temp.find("span").attr("class" , "icon icon-cricket align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "dancing"){
			temp.find("span").attr("class" , "icon icon-dance align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "theater"){
			temp.find("span").attr("class" , "icon icon-tickets align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "acting"){
			temp.find("span").attr("class" , "icon icon-movie-camera align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "youtuber"){
			temp.find("span").attr("class" , "icon icon-youtube1 align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "coding"){
			temp.find("span").attr("class" , "icon icon-web-programming align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "cooking"){
			temp.find("span").attr("class" , "icon icon-cooking align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "craftandart"){
			temp.find("span").attr("class" , "icon icon-model-craft align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}
		else if(element[i].name.toLowerCase() == "sprout"){
			temp.find("span").attr("class" , "icon icon-googleplus align-middle");  
			temp.find("a").attr("title" , element[i].name); 
			list.push(temp.html());
		}

	}
	$("#interestesSection List").html(list.join('\n'))
}
else{
	console.log("INTEREST NULL")
	$("#interestesSection").replaceWith("")	
}
//###################################################################################



/* ##########  EDUCATION  ###########3 */
var list=[];
var d = $("#EducationSection").clone();
var element = JSONData["education"]["history"];
var keys = Object.keys(element);
//console.log(d.html())
if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		// console.log(temp.html())
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "title"){ 	temp.find(".educationTitle").text(element[i].title);     }
			else if(inner_keys[j] == "fieldOfStudy"){   temp.find(".educationFieldOfStudy").text(element[i].fieldOfStudy);   } 
			else if(inner_keys[j] == "institution"){   temp.find(".educationInstitution").text(element[i].institution);   } 
			else if(inner_keys[j] == "state"){   temp.find(".educationState").text(element[i].state);   } 
			else if(inner_keys[j] == "country"){   temp.find(".educationCountry").text(element[i].country);   } 
			else if(inner_keys[j] == "summary"){   temp.find(".educationSummary").text(element[i].summary);   } 
			else if(inner_keys[j] == "start"){   temp.find(".educationStart").text(element[i].start);   } 
			else if(inner_keys[j] == "end"){   temp.find(".educationEnd").text(element[i].end);   } 
		}
		list.push(temp.html());  
	}
	//console.log(list.join('\n'))
	$("#EducationSection List").html(list.join('\n'))
}
else{
	console.log("EDUCATION NULL")
	$("#EducationSection").replaceWith("")	
}
//###################################################################################

/* ##########  Employment  ###########3 */
var list=[];
var d = $("#EmploymentSection").clone();
var element = JSONData["employment"]["history"];
var keys = Object.keys(element);
	
if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "position"){ 	temp.find(".employmentPosition").text(element[i].position);     }
			else if(inner_keys[j] == "employer"){   temp.find(".employmentEmployer").text(element[i].employer);   } 
			else if(inner_keys[j] == "state"){   temp.find(".employmentState").text(element[i].state);   } 
			else if(inner_keys[j] == "country"){   temp.find(".employmentCountry").text(element[i].country);   } 
			else if(inner_keys[j] == "summary"){   temp.find(".employmentSummary").text(element[i].summary);   } 
			else if(inner_keys[j] == "start"){   temp.find(".employmentStart").text(element[i].start);   } 
			else if(inner_keys[j] == "end"){   temp.find(".employmentEnd").text(element[i].end);   } 
		}
		list.push(temp.html());
	}
	$("#EmploymentSection List").html(list.join('\n'))
}
else{
	console.log("Employment NULL")
	$("#EmploymentSection").replaceWith("")
}
//###################################################################################

/* ##########  Affiliation  ###########3 */
var list=[];
var d = $("#AffiliationSection").clone();
var element = JSONData["affiliation"]["history"];
var keys = Object.keys(element);

if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "organization"){ 	temp.find(".affiliationOrganization").text(element[i].organization);     }
			else if(inner_keys[j] == "role"){   temp.find(".affiliationRole").text(element[i].role);   }  
			else if(inner_keys[j] == "summary"){   temp.find(".affiliationSummary").text(element[i].summary);   } 
			else if(inner_keys[j] == "start"){   temp.find(".affiliationStart").text(element[i].start);   } 
			else if(inner_keys[j] == "end"){   temp.find(".affiliationEnd").text(element[i].end);   } 
		}
		list.push(temp.html());
	}
	$("#AffiliationSection List").html(list.join('\n'))
}
else{
	console.log("Affiliation NULL")
	$("#AffiliationSection").replaceWith("")
}
//###################################################################################

/* ##########  Accomplishment  ###########3 */
var list=[];
var d = $("#AccomplishmentSection").clone();
var element = JSONData["accomplishment"];
var keys = Object.keys(element);

if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "title"){ 	temp.find(".accomplishmentTitle").text(element[i].title);     }
			else if(inner_keys[j] == "rank"){   temp.find(".accomplishmentRank").text(element[i].rank);   } 
			else if(inner_keys[j] == "date"){   temp.find(".accomplishmentDate").text(element[i].date);   } 	
			else if(inner_keys[j] == "summary"){   temp.find(".accomplishmentSummary").text(element[i].summary);   } 
		}
		list.push(temp.html());
	}
	$("#AccomplishmentSection List").html(list.join('\n'))
}
else{
	console.log("Accomplishment NULL")
	$("#AccomplishmentSection").replaceWith("")
}
//###################################################################################

/* ##########  Research and Publications  ###########3 */
var list=[];
var d = $("#publicationSection").clone();
var element = JSONData["writing"];
var keys = Object.keys(element);

if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "title"){ 	temp.find(".publicationTitle").text(element[i].title);     }
			else if(inner_keys[j] == "url"){   temp.find(".publicationURL").text(element[i].url);   } 
			else if(inner_keys[j] == "date"){   temp.find(".publicationDate").text(element[i].date);   } 	
			else if(inner_keys[j] == "summary"){   temp.find(".publicationSummary").text(element[i].summary);   } 
		}
		list.push(temp.html());
	}
	$("#publicationSection List").html(list.join('\n'))
}
else{
	console.log("Research and Publications NULL")
	$("#publicationSection").replaceWith("")
}
//###################################################################################

/* ##########  Social  ###########3 */
var list=[];
var d = $("#SocialSection").clone();
var element = JSONData["social"];
var keys = Object.keys(element);

if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		if(element[i].label.toLowerCase() == "facebook"){
			temp.find("span").attr("class" , "icon icon-facebook align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "googleplus"){
			temp.find("span").attr("class" , "icon icon-googleplus align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "twitter"){
			temp.find("span").attr("class" , "icon icon-twitter align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());	
		}
		else if(element[i].label.toLowerCase() == "instagram"){
			temp.find("span").attr("class" , "icon icon-instagram align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "linkedin"){
			temp.find("span").attr("class" , "icon icon-linkedin align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "youtube"){
			temp.find("span").attr("class" , "icon icon-youtube align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "dribble"){
			temp.find("span").attr("class" , "icon icon-dribble align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}
		else if(element[i].label.toLowerCase() == "github"){
			temp.find("span").attr("class" , "icon icon-github align-middle");  
			temp.find("a").attr("href" , element[i].url); 
			list.push(temp.html());
		}		
	}
	$("#SocialSection List").html(list.join('\n'))
}
else{
	console.log("Social NULL")
	$("#SocialSection").replaceWith("")
}
//###################################################################################

/* ##########  PROJECT  ###########3 */
var list=[];
var d = $("#ProjectSection").clone();
var element = JSONData["projects"];
var keys = Object.keys(element);

//console.log(d.html())
if( d.html() && keys.length!=0  ){
	for(var i = 0; i < keys.length; i++){
		var temp = d.find("List").clone();
		var inner_keys = Object.keys(element[i]);
		for(var j = 0; j < inner_keys.length; j++){
			if(inner_keys[j] == "title"){   temp.find(".projectTitle").text(element[i].title); } 
			else if(inner_keys[j] == "description"){   temp.find(".projectDescription").text(element[i].description);   } 
			else if(inner_keys[j] == "url"){   temp.find(".projectImgURL").text(element[i].url);   } 
			else if(inner_keys[j] == "summary"){   temp.find(".projectSummary").text(element[i].summary);   } 
			else if(inner_keys[j] == "start"){   temp.find(".projectStart").text(element[i].start);   } 
			else if(inner_keys[j] == "end"){   temp.find(".projectEnd").text(element[i].end);   } 
			else if(inner_keys[j] == "keywords"){  
				inner_list=[]
				for(var k = 0; k < element[i].keywords.length; k++){
					var key_html = temp.find(".projectTechnoloyUsed").clone()
					inner_list.push(key_html.text(element[i].keywords[k]).html())
				}
				temp.find(".projectTechnoloyUsed").text(inner_list.join(","))
				// console.log(key_html)
			}
		}
		//console.log(temp.html())
		//console.log("################################################")
		list.push(temp.html());  
	}
	//console.log(list)
	$("#ProjectSection List").html(list.join("\n"))
}
else{
	console.log("PROJECT NULL")
	$("#ProjectSection").replaceWith("")
}
//###################################################################################


/* ##########  Skill  ###########3 */
var list=[];
var list_inner=[];
var d = $("#SkillSection").clone();
var element = JSONData["skills"]['sets'];
var keys = Object.keys(element);

//console.log(d.html())
if( d.html() && keys.length!=0  ){
	//console.log(d.html())
	for(var i = 0; i < keys.length; i++){
		var temp_section = d.find("List").clone();
		temp_section.find(".skillSectionTitle").text(element[i].name);
		var inner_keys = Object.keys(element[i]['skills']);
		//console.log(inner_keys[0])
		list_inner=[]
		for(var j = 0; j < inner_keys.length; j++){
			var temp_item = d.find("listItem").clone();
			var inner_most_keys = Object.keys(element[i]['skills'][j]);
			for(var k = 0; k < inner_most_keys.length; k++){
				if(inner_most_keys[k] == "name"){ 	temp_item.find(".skillItemsName").text(element[i]['skills'][j].name);   }
				else if(inner_most_keys[k] == "level"){   temp_item.find(".skillItemsLevelProgress").attr("style" , "width: "+element[i]['skills'][j].level+"%");  } 
			}
			list_inner.push(temp_item.html())
		}
		temp_section.find("listItem").html(list_inner.join("\n"))
		list.push(temp_section.html());
	}

	// console.log(list)
	// var temp_list = []
	// for(var i = 0, j=list.length ; i < j; i+=2){
		// temp_list.push(list.slice(i,i+2))
	// }

	// var final_list = []
	// for(var i=0; i<temp_list.length; i++){
		// var temp_row = row.clone()
		// temp_row.children().html(temp_list[i].join("\n"))
		// final_list.push(temp_row.html())	
	// }

	$("#SkillSection List").html(list.join("\n"))
}
else{
	console.log("Skill NULL")
	$("#SkillSection").replaceWith("")
}
//###################################################################################


//  ***** Cheerio Component :START *****
export function InjectJSONUsingCheerio(HTMLString , JSONString){
	console.log("inside convert");
	var $ = cheerio.load(HTMLString);
	var JSONData = JSON.parse(JSONString);
	console.log(JSONData);
	console.log(JSONString);
	/* ##########  EDUCATION  ###########3 */
    var list=[];
    var d = $("#EducationSection").clone();
    var element = JSONData["history"];
    var keys = Object.keys(element);
    if( d.html() && keys.length!=0  ){
        for(var i = 0; i < keys.length; i++){
            var temp = d.find("List").clone();
            // console.log(temp.html())
            var inner_keys = Object.keys(element[i]);
            for(var j = 0; j < inner_keys.length; j++){
                if(inner_keys[j] == "title"){ 	temp.find(".educationTitle").text(element[i].title);     }
                else if(inner_keys[j] == "fieldOfStudy"){   temp.find(".educationFieldOfStudy").text(element[i].fieldOfStudy);   } 
                else if(inner_keys[j] == "institution"){   temp.find(".educationInstitution").text(element[i].institution);   } 
                else if(inner_keys[j] == "state"){   temp.find(".educationState").text(element[i].state);   } 
                else if(inner_keys[j] == "country"){   temp.find(".educationCountry").text(element[i].country);   } 
                else if(inner_keys[j] == "summary"){   temp.find(".educationSummary").text(element[i].summary);   } 
                else if(inner_keys[j] == "start"){   temp.find(".educationStart").text(element[i].start);   } 
                else if(inner_keys[j] == "end"){   temp.find(".educationEnd").text(element[i].end);   } 
            }
            list.push(temp.html());  
        }
        //console.log(list.join('\n'))
        $("#EducationSection List").html(list.join('\n'))
    }
    else{
        console.log("EDUCATION NULL")
        $("#EducationSection").replaceWith("")	
    }
	console.log(list.join('\n'));
	return $.html();
}


