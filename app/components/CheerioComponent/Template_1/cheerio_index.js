
var cheerio = require("cheerio");

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


