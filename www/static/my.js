var imagePathA='';
var imagePathB='';
var imagePathC='';
var imageName='';
var imageName2='';
var imageName3='';


var select_town='';
var townCode='';
var townName='';
var posmCode='';
var a_qty='';
var routeName='';
var outlet_code='';
var outlet_name='';


//---Online
var apipath="http://w02.yeapps.com/postit/syncmobile_20181101/";
//--- local
//var apipath="http://127.0.0.1:8000/postit/syncmobile/";

url ="";

$(document).ready(function(){
	$('#bufferImageSync').hide();
	if (localStorage.synced!='YES'){
		url = "#pagesync";	
		$.mobile.navigate(url);					
	}else{
		
		if (localStorage.rep_type=='CM'){
			var usg='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" href="#leftpanel2" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets"><img src="menu.png" /></a><a data-role="button" onClick="exit();"><img src="exit.png"/></a> <h3 style="color:#fff;">POST-IT</h3></div>'
			$('#usg').empty();
			$('#usg').append(usg).trigger('create');
			
			$("#btn_submit_usages").hide();
			$("#allHide").hide();
			
			$("#entryAgency").hide();
			$("#summaryAgency").hide();
						
			$("#btn_receive").hide();
			$("#townSelct").show();
			
			var townCName=localStorage.town.replace('|', '-');
			$('#townSelct').html(townCName)
			
			$('#routeList').empty();
			$('#routeList').append(localStorage.route).trigger('create');
									
			$('#outletList').empty();
			$('#outletList').append(localStorage.outletList).trigger('create');
			
			$('#posmCodeList').empty();
			$('#posmCodeList').append(localStorage.posmCode).trigger('create');
			
			url = "#first_page";
			//$.mobile.navigate(url);	
				
		}else if (localStorage.rep_type == 'SUPERVISOR'){
			var rec='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" onClick="menuClick();" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets " ><img src="menu.png" /></a><a data-role="button" onclick="backClick();" data-rel="back" class="ui-btn-right" data-transition="slide"><img src="back.png" /></a> <h3 style="color:#fff;">POST-IT</h3></div>'
			$('#rec').empty();
			$('#rec').append(rec).trigger('create');
			
			$("#allHideR").hide();
			$("#btn_submit_receive").hide();
			
			$("#btn_submit_usages").hide();
			$("#allHide").hide();
			$("#entryAgency").hide();
			$("#summaryAgency").hide();
			$('#btn_receive').show();
			$('#btn_usages').show();
			$('#btn_stock').show();
			$('#reportbtn').show();
			
			$('#townList').empty();
			$('#townList').append(localStorage.townStr).trigger('create');

			$("#posm_code").empty();
			$("#posm_code").append(localStorage.posmCodeSup).trigger('create');
			
			$('#posmCodeList').empty();
			$('#posmCodeList').append(localStorage.posmCodeSup).trigger('create');
			
			$('#routeList').empty();
			$('#routeList').append(localStorage.routeListSup).trigger('create');
			
			$('#outletList').empty();
			$('#outletList').append(localStorage.outletList).trigger('create');
			
			url = "#homePage";
			//$.mobile.navigate(url);
			
		}else{
		
			var rec='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" onClick="menuClick();" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets " ><img src="menu.png" /></a><a data-role="button" onclick="backClick();" data-rel="back" class="ui-btn-right" data-transition="slide"><img src="back.png" /></a> <h3 style="color:#fff;">POST-IT</h3></div>'
			$('#rec').empty();
			$('#rec').append(rec).trigger('create');
			
			$("#allHideR").hide();
			$("#btn_submit_receive").hide();
			
			$("#btn_submit_usages").hide();
			$("#allHide").hide();
						
			$('#btn_receive').hide();
			$('#btn_usages').hide();
			$('#btn_stock').hide();
			$('#reportbtn').hide();
			
			$('#townList').empty();
			$('#townList').append(localStorage.townStr).trigger('create');

			$("#posmCodeAgn").empty();
			$("#posmCodeAgn").append(localStorage.posmCodeAgency).trigger('create');
			
			$('#posmCodeList').empty();
			$('#posmCodeList').append(localStorage.posmCodeAgency).trigger('create');
			
			$('#routeList').empty();
			$('#routeList').append(localStorage.routeListSup).trigger('create');
			
			$('#outletList').empty();
			$('#outletList').append(localStorage.outletList).trigger('create');
			
			url = "#homePage";
			//$.mobile.navigate(url);
		}
		$.mobile.navigate(url);
	}
	
});



function syncBasic(){
	var mobile=$("#mobile").val() ;
	var password=$("#password").val() ;
	
	if (mobile=="" || password==""){
		$('#bufferImageSync').hide();
		$(".errorMsg").html("Required mobile no and password");	
	}else{
		$('#bufferImageSync').show();	
		$('#syncBasic').hide();			 
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0;
		}
	
		//alert(apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		
		$.ajax({
		  url:apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) { 
			syncResult=result
			var syncResultArray = syncResult.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){
					$('#bufferImageSync').hide();	
					localStorage.sync_code=syncResultArray[1];										
					localStorage.repID=syncResultArray[2];					
					localStorage.repName=syncResultArray[3];
					localStorage.mobileNo=syncResultArray[4];
					localStorage.town=syncResultArray[5];
					localStorage.rep_type=syncResultArray[6];	
					localStorage.routeList=syncResultArray[7];
					localStorage.posmCode=syncResultArray[8];
					localStorage.outlet_agency=syncResultArray[9];
					//localStorage.posmCodeAll=syncResultArray[10];				
					
					var townlist=localStorage.town.split('fdfd');					
					var townStr='';
					for (i=0;i<townlist.length;i++){
						townLi=townlist[i].split('|');						
						townCode=townLi[0]
						townName=townLi[1]
						
						townStr+='<label for="'+townCode+'" id="radioRemove"><input type="radio" name="town_select"  id="'+townCode+'" value="'+townCode+'-'+townName+'">'+townCode+'-'+townName+'</label>'
					}
					localStorage.townStr=townStr;
					
					//=============================
					
					var outletAgency=localStorage.outlet_agency.split('fdfd');				
					var outStr='<ul data-role="listview"  class="list" data-filter="true" data-inset="true" style="height:450px; overflow:scroll;">';
					for (i=0;i<outletAgency.length;i++){
						outLi=outletAgency[i].split('|');						
						outletCode=outLi[0]
						outletName=outLi[1]
						outlet_route=outLi[2]
						outlet_town_code=outLi[3]
						outlet_town_name=outLi[4]						
						
						outStr+='<li onclick="agencySelectOutlet(\''+outletName+'|'+outletCode+'\');"><a>'+outletName+'-'+outletCode+'</a></li>'
					}
					outStr+='</ul>';
					localStorage.outStr=outStr;
							
					$(".errorMsg").html("Sync Successful");
					$('#syncBasic').show();
					
					//========================
					
					var cmRoute=localStorage.routeList.split('||');					
					var cmRouteStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px;  overflow:scroll;">';
					for (i=0;i<cmRoute.length;i++){						
						cmRouteStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="sRoute(\''+cmRoute[i]+'\')"><a>'+cmRoute[i]+'</a></li>'
					
					}
					cmRouteStr +='</ul>'
					localStorage.route=cmRouteStr;
					
										
					if (localStorage.rep_type=='CM'){
						var usg='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" href="#leftpanel2" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets"><img src="menu.png"/></a><a data-role="button" onClick="exit();"><img src="exit.png"/></a> <h3 style="color:#fff;">POST-IT</h3></div>'
						$('#usg').empty();
						$('#usg').append(usg).trigger('create');
						
						$("#entryAgency").hide();
						$("#summaryAgency").hide();
						$("#btn_receive").hide();
						$("#rec").hide();
						$("#usg").show();
						$('#btn_usages').show();
						$('#btn_stock').show();
						$('#reportbtn').show();			
						$("#townSelct").show();
						
						var townCodeName=localStorage.town.replace('|','-')					
						$("#townSelct").html(townCodeName);
						$('#routeList').empty();
						$('#routeList').append(localStorage.route).trigger('create');
						
						$('#posmCodeList').empty();
						$('#posmCodeList').append(localStorage.posmCode).trigger('create');
						
						$("#cmprepname").html("Name	:		"+localStorage.repName);
						$("#cmpreptype").html("Type	:		"+localStorage.rep_type);
						$("#cmprepid").html("ID	:		"+localStorage.repID);
												
						url = "#first_page";
						//$.mobile.navigate(url);		
						
					}else if (localStorage.rep_type == 'SUPERVISOR'){
						var rec='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" onClick="menuClick();" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets"><img src="menu.png"/></a><a data-role="button" onclick="backClick();" data-rel="back" class="ui-btn-right" data-transition="slide"><img src="back.png"/></a> <h3 style="color:#fff;">POST-IT</h3></div>'
						$('#rec').empty();
						$('#rec').append(rec).trigger('create');
						//$('#rec').html(rec);
						$("#usg").hide();
						$("#rec").show();						
						$('#btn_receive').show();
						$('#btn_usages').show();
						$('#btn_stock').show();
						$('#reportbtn').show();
			
						$("#entryAgency").hide();
						$("#summaryAgency").hide();
						$('#townList').empty();
						$('#townList').append(localStorage.townStr).trigger('create');
						
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						
						url = "#homePage";
						//$.mobile.navigate(url);	
					}else {

						var rec='<div data-theme="c" data-role="header" data-position="fixed" ><a data-role="button" onClick="menuClick();" data-icon="bullets" data-iconpos="left" class="ui-btn ui-shadow ui-corner-all ui-icon-bullets"><img src="menu.png"/></a><a data-role="button" onclick="backClick();" data-rel="back" class="ui-btn-right" data-transition="slide"><img src="back.png"/></a> <h3 style="color:#fff;">POST-IT</h3></div>'
						$('#rec').empty();
						$('#rec').append(rec).trigger('create');
						//$('#rec').html(rec);
						$("#rec").show();
						$("#usg").hide();
						
						
						$("#entryAgency").show();
						$("#summaryAgency").show();
												
						$('#btn_receive').hide();
						$('#btn_usages').hide();
						$('#btn_stock').hide();
						$('#reportbtn').hide();
						$('#townList').empty();
						$('#townList').append(localStorage.townStr).trigger('create');
						
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						
						url = "#homePage";
						//$.mobile.navigate(url);	
					}	
					$.mobile.navigate(url);													
				}else{
					$('#bufferImageSync').hide();						
					$(".errorMsg").html("Sync Failed. Authorization or Network Error.");
					$('#syncBasic').show();
					
					
				}				
		  }//----/success f
		});//------/ajax			
	
	}//-----/field			
}
	
function menuClick(){
	$(".sucChkR").text("");
	$(".errorChkP").text("");
	$(".errorChk").text("");
	$(".sucChk").text("");
	
	$("#btn_take_pic").show();
	$("#btn_ach_lat_long").show();
	
	if (localStorage.rep_type=='SUPERVISOR'){ 
		url = "#homePage";
	}else if (localStorage.rep_type=='CM'){
		url = "#first_page";	
	}else if (localStorage.rep_type=='AGENCY'){
		url = "#homePage";	
	}
	
	$.mobile.navigate(url);
}
//----------------back button
function backClick(){
	$(".errorChkP").text("");
	$(".errorChk").text("");
	$(".sucChk").text("");
	$(".sucChkR").text("");
}

//---------
function townSelect(){	
	if($("#townList").find("input[name='town_select']:checked").length==0){
		$(".errorChk").text("Select Town");
	}else{
		localStorage.select_town=$("input[name='town_select']:checked").val();
		//alert (apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID)
		$.ajax({
		  url:apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID,
		  success: function(result) {
			var resultArray = result.split('rdrd');
				if (resultArray[0]=='Success'){	
					localStorage.posmCodeSup=resultArray[1];
					localStorage.posmCodeSupUges=resultArray[2];					
					localStorage.posmCodeAgency=resultArray[3];
					
					$("#posm_code").empty();
					$("#posm_code").append(localStorage.posmCodeSup).trigger('create');
					
					$('#posmCodeList').empty();
					$('#posmCodeList').append(localStorage.posmCodeSupUges).trigger('create');
					
					$('#posmCodeAgn').empty();
					$('#posmCodeAgn').append(localStorage.posmCodeAgency).trigger('create');
					
					$("#townSelct").html("Town	:		"+localStorage.select_town);
					$('#townSelctRec').html("Town	:		"+localStorage.select_town);
					$('#townSelctAgency').html("Town	:		"+localStorage.select_town);
				
					
					$(".errorChk").text("");		
					url="#first_page";					
					$.mobile.navigate(url);
				}else{
					url="#homePage";					
					$.mobile.navigate(url);
					$(".errorChk").text("");
						
				}
		  	}
		  });
	}
}

/*********************outlet_agency_select**************************/

function alloDetailsagency(){
	var outletCode=$("#outlet_code").val();
	//alert(apipath+"getAllDataAgency?&outletCode="+outletCode);	
}

function receive(){
	
	$(".sucMsgR").hide();
	$(".errorChk").text("");
	$("#allHideR").hide();
	$("#btn_submit_receive").hide();			
	url="#second_page";					
	$.mobile.navigate(url);	
}

function alloDetails(){
	
	$(".errorChkP").text("");
	$("#received").val("");
	$(".errorChk").text("");
	$("#recPhoto").val("");
	$("#bufferImageR").hide();
	$("#recDataR").hide();	
	$(".sucMsgR").hide();
	var posmCode=$("#posmCodeSup").val();
	if(posmCode==""){
		$(".errorChkP").text("Select posm Code");
		$("#recDataR").hide();
		$("#allHideR").hide();
		$("#btn_submit_receive").hide();
	}else{
	
	//alert(apipath+"getAllData?&posmCode="+posmCode+"&townR="+localStorage.select_town);
	$("#bufferImageR").show();
	$.ajax({
		type: 'POST',
		url:apipath+"getAllData?&posmCode="+posmCode+"&townR="+localStorage.select_town,																																																											
		success: function(result) {	
			var resultArray = result.split('rdrd');
				recStatus=resultArray[0];
			if (recStatus=='Success'){
				$("#bufferImageR").hide();
				$("#btn_submit_receive").show();
				$("#recDataR").show();
				$("#allHideR").show();	
				var posmType=resultArray[1];	
				var brand=resultArray[2];
				var a_qty=resultArray[3];
				var due_qty=resultArray[4];
				var alc_id=resultArray[5];
					
				
				$("#posm_type").html("Posm Type	:	"+posmType);
				$("#brand").html("Brand			:	"+brand);
				$("#allocation").html("Allocation Qty	:	"+a_qty);
				$("#due").html("Due Qty	:	"+due_qty);
				
				$("#posm_type").val(posmType);
				$("#brand").val(brand);
				$("#allocation").val(a_qty);
				$("#due").val(due_qty);
				$("#alcId").val(alc_id);
				$(".errorChkP").text("");
			}else{
				$(".errorChk").text("Please check internet connection");
			}
		}
	});
	}
}


function submit_data_receive(){
	
	$("#btn_submit_receive").hide();
	var d = new Date();	
	var get_time=d.getTime();
	
	var posm_code=$("#posmCodeSup").val();
	var posm_type=$("#posm_type").val();
	
	var brand=$("#brand").val();
	var dueRec=$("#due").val();
	var reg = /^[0-9]*$/;
	var received=$("#received").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	//alert (typeof(parseInt(received)))
	imageName=$("#recPhoto_name").val();
	imagePathA=$("#recPhoto_path").val();
	var alcId=$("#alcId").val();
	
	
	if(received=='' || received==0){
		$(".errorChk").text("Required Receive Qty");
		$("#btn_submit_receive").show();
	}else if (!reg.test(received)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_receive").show();
	}else{
				
		//alert(apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					
					$("#received").val("");
					//$("#posm_code").val("");
					$("#posm_type").val("");
					$("#brand").val("");
					$("#dueRec").val("");
					$("#alcId").val("");
				
					document.getElementById('myImageA').src = '';
									
					$(".errorChk").text("");
					$(".sucMsgR").show();
					$("#allHideR").hide();
					$("#btn_submit_receive").hide();
					
					
					uploadPhotoRec(imagePathA, imageName);
					
					$(".sucMsgR").text('Successfully Submitted');
						
					url="#second_page";					
					$.mobile.navigate(url);	
					/*setTimeout(function(){
						location.reload();
					},500);*/	
				}else if (result=='Faild'){
					
						$(".errorChk").text("Can't Receive more than Due Qty");
						$("#allHideR").show();
						$("#btn_submit_receive").show();
				}else{		
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_receive").show();
					$("#allHideR").show();
					
				}
				
			}//end result
		});//end ajax	
		
	}
}


function getReceiveImage() {
	var get_time=$.now();
	var image_Name = localStorage.mobileNo+"_"+get_time+".jpg";
	$("#recPhoto_path").val(image_Name);
	$("#recPhoto_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	var image_path = "recPhoto_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFailA(message) {
	imagePathA="";
	$("#recPhoto_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoRec(imageURI, imageName) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win,onfail,options);
}

function win(r) {	
	$(".errorChk").text('');
}

function onfail(r) {
	$(".errorChk").text('');
	$("#btn_submit_receive").hide();
}

/*================usagepage3=================*/
function usages(Usages){
	if (localStorage.rep_type!='CM'){	

		$.ajax({
			type: 'POST',
			url:apipath+"getRoute?&townCodeName="+localStorage.select_town,
																																																													
			success: function(result) {	
				var resultArray = result.split('rdrd');	
				//alert(resultArray[1]);
				if(resultArray[0]=='Success'){				
					localStorage.routeListSupALL=resultArray[1];
					var routeListSupALL=localStorage.routeListSupALL.split('||');
					var routeStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px; overflow:scroll;">';
				for (i=0;i<routeListSupALL.length;i++){								
					routeStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="sRoute(\''+ routeListSupALL[i]+'\')"><a>'+ routeListSupALL[i]+'</a></li>'
				}
					routeStr +='</ul>';
					localStorage.routeListSup=routeStr;
					
					$('#routeList').empty();
					$('#routeList').append(localStorage.routeListSup).trigger('create');
					
				}else{
					$(".errorChk").text("");
				}
			}
		});
		$("#town").html('Town		:		' + localStorage.select_town);
		//$("#usagesBtnShow").html(Usages);
		$(".errorChk").text("");			
		url="#page3";					
		$.mobile.navigate(url);
	}else{
		$("#town").html('Town		:		' + localStorage.town);	
		//$("#usagesBtnShow").html(Usages);
		$(".errorChk").text("");			
		url="#page3";					
		$.mobile.navigate(url);
	}
}

/************************usage*page4********************/

var rName='';
function sRoute(routeName){
	
	rName=routeName;
	if (localStorage.rep_type =='CM'){
		//alert(apipath+"getOutlet?&routeName="+rName+"&townCode="+localStorage.town);
		
		$.ajax({
		type: 'POST',
		url:apipath+"getOutlet?&routeName="+rName+"&townCode="+localStorage.town,
																																																												
		success: function(result) {	
			var syncResultArray = result.split('|||');	
			
			if(syncResultArray[0]=='Success'){				
				localStorage.outletLi=syncResultArray[1];
				//alert (localStorage.outletLi)
				var outletListaAll=localStorage.outletLi.split('rdrd');
				
				var outletStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px; overflow:scroll;">';
				for (i=0;i<outletListaAll.length;i++){					
					outletLi=outletListaAll[i].split('|');
					
					outletStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="outlet(\''+ outletLi[0]+'|'+ outletLi[1]+'\')"><a>'+ outletLi[0]+'-'+ outletLi[1]+'</a></li>'
				}
				outletStr +='</ul>';
				localStorage.outletList=outletStr;		
				$('#outletList').empty();
				$('#outletList').append(localStorage.outletList).trigger('create');
				
			}
			
			}
		})
		
	}else{
		var selectTown=localStorage.select_town.replace('-','|');
		//alert (apipath+"getOutlet?&routeName="+rName+"&townCode="+selectTown);
		$.ajax({
		type: 'POST',
		url:apipath+"getOutlet?&routeName="+rName+"&townCode="+selectTown,
																																																												
		success: function(result) {	
			var syncResultArray = result.split('|||');	
			if(syncResultArray[0]=='Success'){				
				localStorage.outletLi=syncResultArray[1];
				var outletListaAll=localStorage.outletLi.split('rdrd');
				var outletStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px; overflow:scroll;">';
				for (i=0;i<outletListaAll.length;i++){					
					outletLi=outletListaAll[i].split('|');
					
					outletStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="outlet(\''+ outletLi[0]+'|'+ outletLi[1]+'\')"><a>'+ outletLi[0]+'-'+ outletLi[1]+'</a></li>'
				}
				outletStr +='</ul>';
				localStorage.outletList=outletStr;		
				$('#outletList').empty();
				$('#outletList').append(localStorage.outletList).trigger('create');
				
			}
			
			}
		})
		
	}	if(localStorage.rep_type =='CM'){
			$("#townAbc").html('Town	:		' + localStorage.town);
		}else{
			$("#townAbc").html('Town	:		' + localStorage.select_town);
			}
		
		$("#routeSelect").html('Route	:		' + rName);
		$(".errorChk").text("");			
		url="#page4";					
		$.mobile.navigate(url);		

}

function outlet(outletIDName){

		//alert(outletIDName)
		outletS=outletIDName.split('|');
		outlet_name=outletS[0]
		outlet_code=outletS[1]
		//alert (outlet_code)
		
		$("#routeSelectA").html('Route	:		' + rName);
		$("#outletSelect").html('Outlet	:	' + outletIDName);
		$(".errorChk").text("");	
		
		$(".sucMsgU").hide();
		$("#btn_submit_usages").hide();
		$("#allHide").hide();	
		if(localStorage.rep_type =='CM'){
			$("#townAusa").html('Town	:		' + localStorage.town);	
			url="#page5";					
		}else if (localStorage.rep_type =='SUPERVISOR'){
			$("#townAusa").html('Town	:		' + localStorage.select_town);
			url="#page5";
		}else{
			$("#routeSelectAbc").html('Route		:		' + rName);
			$("#outletSelectAbc").html('Outlet		:	' + outletIDName);
			$("#sucMsgAgency").hide();
			$("#bufferImageAgency").hide();
			$("#btn_submit_Agency").hide();
			$("#recDataAgency").hide();
			$("#allHideAgency").hide();
			url="#page14";					
			
		}
		$.mobile.navigate(url);
}		
/*=======================usage page5============================*/
function alloDetailsU(){
	$("#qty").val("");
	$(".errorChk").text("");
	$(".errorChkP").text("");
	$("#usagesPhoto").val("");
	$("#bufferImage").hide();
	$("#recData").hide();	
	$(".sucMsgU").hide();
	
	if (localStorage.rep_type =='SUPERVISOR'){
		posmCode=$("#posmCodeSupUges").val();		
	}else{ 
		posmCode=$("#posmCodeCm").val();
	}
	if (localStorage.rep_type =='SUPERVISOR'){
		town=localStorage.select_town.replace('-', '|');
		
	}else{
		town=localStorage.town;	
	}
	if (posmCode==''){
		$(".errorChkP").text("Select posm Code");
		$("#btn_submit_usages").hide();
		$("#recData").hide();
		$("#allHide").hide();	
	}else{
		//alert (apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+town);
		$("#bufferImage").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+town,																																																											
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){	
					$("#bufferImage").hide();
					$("#btn_submit_usages").show();
					$("#recData").show();
					$("#allHide").show();
					$(".errorChkP").text("");
						
					var posmType=resultArray[1];	
					var brand=resultArray[2];
					var a_qty=resultArray[3];
					var balance_qty=resultArray[4];
					var alc_id=resultArray[5];
					
					
					$("#uposm_type").html("Posm Type	:	"+ posmType);
					$("#ubrand").html("Brand	:	"+brand);
					$("#uallocation").html("Stock Qty:	"+a_qty);
					$("#balance").html("Balance Qty:	"+balance_qty);
					$("#uposm_type").val(posmType);
					$("#ubrand").val(brand);
					$("#balance").val(balance_qty);
					$("#ualcId").val(alc_id);
				}else{
					$(".errorChk").text("Please check internet connection");
				}
			}
		})
	}
}

function submit_data_usages(){
	
	$("#btn_submit_usages").hide();
	var d = new Date();	
	var get_time=d.getTime();

	if (localStorage.rep_type =='SUPERVISOR'){
		town=localStorage.select_town.replace('-', '|');
		
	}else{
		town=localStorage.town;	
	}
	var uposm_type=$("#uposm_type").val();
	
	var ubrand=$("#ubrand").val();
	var baUsage=$("#balance").val();
	var alcId=$("#ualcId").val();
	var regg = /^[0-9]*$/;
	var a_qty=$("#qty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	imageName2=$("#usePhoto_name").val();
	imagePathB=$("#usePhoto_path").val();
	
	if (!regg.test(a_qty)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_usages").show();
	}else if(a_qty=='' || a_qty==0){
		$(".errorChk").text("Required Usage Qty");
		$("#btn_submit_usages").show();
	}else{
				
		//alert(apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
						
					$("#uposm_type").val("");
					$("#ubrand").val("");
					$("#baUsage").val("");
					$("#qty").val("");	
					
					
					document.getElementById('myImageB').src = '';
					
					$(".errorChk").text("");
					$(".sucMsgU").show();
					$("#allHide").hide();
					$("#btn_submit_usages").hide();
					
					uploadPhotoUsa(imagePathB, imageName2);
					
					$(".sucMsgU").text('Successfully Submitted');
					
					url="#page5";					
					$.mobile.navigate(url);	
				}else if (result=='Faild'){					
						$(".errorChk").text("Usage Qty less then Balance Qty");
						$("#allHide").show();
						$("#btn_submit_usages").show();	
				}else{
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_usages").show();
					$("#allHide").show();
					
				}
				
			}//end result
		});//end ajax
		
	}
}


function getUsagesImage() {
	var get_time=$.now();
	var image_Name = localStorage.mobileNo+"_"+get_time+".jpg";
	$("#usePhoto_path").val(image_Name);
	$("#usePhoto_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccessB, onFailB, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessB(imageURI) {		
    var image = document.getElementById('myImageB');
    image.src = imageURI;
	var image_path = "usePhoto_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFailB(message) {
	imagePathB="";
	$("#usePhoto_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoUsa(imageURI, imageName2) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win2,onfail2,options);
}

function win2(r) {	
	$(".errorChk").text('');
}

function onfail2(r) {
	$(".errorChk").text('');
	$("#btn_submit_usages").hide();
}

/**------------------------page 6 ----------------------------********/

function agency(){
	$(".errorChk").text("");			
	url="#page6";				
	$.mobile.navigate(url);	
}
/**------------------------page 7 ----------------------------********/
function searchoutlet(){
	
	$("#routeTown").hide();
	$(".errorChk").text("");			
	url="#page7";				
	$.mobile.navigate(url);	
}
/**------------------------page 8 ----------------------------********/
var outletIdNameAgency='';
function execution(){
	
	$("#btn_submit_agency").show();
	$("#allhideA").show();
	$("#sucMsgAgency").hide();
	
	if($("#outletListAgency").find("input[name='outlet_agency_select']:checked").length==0){
		$(".errorChk").text("Select Outlet");
	}else{
		outletIdNameAgency=$("input[name='outlet_agency_select']:checked").val();
		$("#OutletNameAgency").html("Outlet	:		"+outletIdNameAgency);
		$(".errorChk").text("");
				
		url="#page8";				
		$.mobile.navigate(url);	
	}
}


var outletIdNameAgency='';
function agencySelectOutlet(outlet_agency){
	
	
	
	outletIdNameAgency=outlet_agency;
	//alert(apipath+"getAllDataAgency?&outlet_agency_select="+outletIdNameAgency);
	$.ajax({
		type: 'POST',
		url:apipath+"getAllDataAgency?&outlet_agency_select="+outletIdNameAgency,																																																											
		success: function(result) {	
			var resultArray = result.split('rdrd');
			if (resultArray[0]=='Success'){	
				var outletCode=resultArray[1];	
				var outletRoute=resultArray[2];
				var outletTownCode=resultArray[3];	
				var outletTownName=resultArray[4];
				$("#outlet_route_code").val(outletRoute);
				
				$("#outlet_town_name").val(outletTownCode+'|'+outletTownName);
				
				$("#OutletNameAgency").html ("Outlet	:		"+outletIdNameAgency);
				$("#RouteNameAgency").html ("Route	:		"+outletRoute);
				$("#TownNameAgency").html ("Town	:		"+outletTownCode+'|'+outletTownName);
				
				url="#page8";					
				$.mobile.navigate(url);	
			}else{
				$(".errorChk").text("Please check internet connection");
			}
		}
	})
	
	
}
/**------------------------Agency Submit Data ----------------------------********/
function alloDetailsAgency(){
	$("#agencyQty").val("");
	$("#set").val("");
	$("#light").val("");
	$("#paint").val("");
	$("#citycor").val("");
	$("#imageName3").val("");
	$(".errorChk").text("");
	$(".errorChkP").text("");
	$("#bufferImageAgency").hide();
	$("#recDataAgency").hide();
	$("#btn_submit_Agency").hide();	
	$("#sucMsgAgency").hide();
	
	
	var posmCode=$("#posmCodeAgency").val();
	var town=localStorage.select_town.replace('-', '|');
	
	if (posmCode==''){
		$(".errorChkP").text("Select posm Code");
		$("#btn_submit_Agency").hide();
		$("#recDataAgency").hide();
		$("#allHideAgency").hide();	
	}else{
		//alert (apipath+"getAllDataAgncy?&posmCode="+posmCode+"&town="+town);
		$("#bufferImageAgency").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataAgncy?&posmCode="+posmCode+"&town="+town,																																																										
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){	
					$("#bufferImageAgency").hide();
					$("#btn_submit_Agency").show();
					$("#recDataAgency").show();
					$("#allHideAgency").show();
					$(".errorChk").text("");
						
					var posmType=resultArray[1];	
					var brand=resultArray[2];
					var allo_qty=resultArray[3];
					var balance_qty=resultArray[4];
					
					$("#agencyposm_type").html("Posm Type	:	"+ posmType);
					$("#agencybrand").html("Brand	:	"+brand);
					$("#agencyallocation").html("Stock Qty:	"+allo_qty);
					$("#agencydue").html("Balance Qty:	"+balance_qty);
					$("#agencyposm_type").val(posmType);
					$("#agencybrand").val(brand);
					$("#agencydue").val(balance_qty);
					$("#agencyallocation").val(allo_qty);
					
				}else{
					$(".errorChk").text("Please check internet connection");
				}
			}
		})
	}
}


function submit_data_agency(){
	
	$("#btn_submit_Agency").hide();
	
	var posmCode=$("#posmCodeAgency").val();
	var posmType=$("#agencyposm_type").val();
	var brandAgency=$("#agencybrand").val();
	var balanceAgency=$("#agencydue").val();
	var allocationAgency=$("#agencyallocation").val();
	//alert (brandAgency+"-"+balanceAgency+"-"+allocationAgency)
	var reggg = /^[0-9]*$/;
	var aqty=$("#agencyQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var aset=$("#set").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var alight=$("#light").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var apaint=$("#paint").val();
	var acity=$("#citycor").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	//alert (aqty+"-"+aset+"-"+alight+"-"+apaint+"-"+acity)
	imageName3=$("#agnPhoto_name").val();
	imagePathC=$("#agnPhoto_path").val();
	
	var town=localStorage.select_town.replace('-', '|');
	
	if(aqty==''|| aqty==0){
		$(".errorChk").text("Required Qty ");
		$("#btn_submit_Agency").show();
		$("#allHideAgency").show();
		$("#sucMsgAgency").hide();
	}else if (!reggg.test(aqty)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_Agency").show();
		$("#allHideAgency").show();
		$("#sucMsgAgency").hide();
	}else{
		
		//alert(apipath+"submitData_agency?&syncCode="+localStorage.sync_code+"&posmCode="+posmCode+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_agency?&syncCode="+localStorage.sync_code+"&posmCode="+posmCode+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					
					$("#aqty").val("");
					$("#aset").val("");
					$("#alight").val("");
					$("#apaint").val("");
					$("#acity").val("");
					
					
					
					$("#allHideAgency").hide();
					$("#sucMsgAgency").show();
					$(".errorChk").text("");
					$("#btn_submit_Agency").hide();
					
					document.getElementById('myImageC').src = '';
					
					uploadPhotoAgency(imagePathC, imageName3);
					
					//$(".sucChk").text('Successfully Submitted');
				
				
					url="#page14";					
					$.mobile.navigate(url);
					/*setTimeout(function(){
						location.reload();
					},500);*/				
				}else if (result=='Faild'){					
						$(".errorChk").text("Usage Qty less then Balance Qty");
						$("#allHideAgency").show();
						$("#btn_submit_Agency").show();	
				}else{
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_Agency").show();
					$("#allHideAgency").show();
					
				}
				
			}//end result
		});//end ajax
	}
}


function getAgencyImage() {
	var get_time=$.now();
	var image_Name = localStorage.mobileNo+"_"+get_time+".jpg";
	$("#agnPhoto_path").val(image_Name);
	$("#agnPhoto_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccessC, onFailC, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessC(imageURI) {		
    var image = document.getElementById('myImageC');
    image.src = imageURI;
	var image_path = "agnPhoto_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFailC(message) {
	imagePathC="";
	$("#recPhoto_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoAgency(imageURI, imageName3) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName3;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win3,onfail3,options);
}

function win3(r) {	
	$(".errorChk").text('');
}

function onfail3(r) {
	$(".errorChk").text('');
	$("#btn_submit_agency").hide();
}



function repo(){
	if (localStorage.rep_type == 'CM'){
		$("#recReport").hide();
		
	}else{
		$("#allHide").show();
	}
	
	$(".errorChk").text("");			
	url="#page9";				
	$.mobile.navigate(url);	
}

function recReport(){
	if (localStorage.rep_type == 'CM'){
		town=localStorage.town;
		
	}else{
		town=localStorage.select_town;
	}
	
	//alert (apipath+"receive_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town)
	$("#bufferImageRecR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"receive_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,																																																				
			success: function(result) {
				getResult=result.split('||');	
				if(getResult[0]=='Success'){
				$("#bufferImageRecR").hide();				
				localStorage.receiveReportR=getResult[1];	
				
				var ReceiveRpt=localStorage.receiveReportR.split('rdrd');					
				var rectable='<table id="reccRepp">';
					rectable += '<tr style="font-size:12px;" ><th>Rec_Date</th><th>Brand</th><th>POSM_Type</th><th>POSM_Code</th><th>Rec_Qty</th><th>Stock</th></tr>'
					for (i=0;i<ReceiveRpt.length;i++){	
						recordR=ReceiveRpt[i].split('|');
						dateR=recordR[0];
						brand=recordR[1];
						posmType=recordR[2];
						recQty=recordR[3];
						stock=recordR[4];
						posmCode=recordR[5];
										
						rectable +='<tr style="font-size:11px;"><td>'+dateR+'</td><td>'+brand+'</td><td>'+posmType+'</td><td>'+posmCode+'</td><td style="text-align:center;">'+recQty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					rectable +='</table>'
					
					
					$('#receiveReportR').empty();
					$('#receiveReportR').append(rectable).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameR").html ("Town	:		"+townName);
					$("#repIDR").html ("Rep ID	:		"+repid);
					
				
			}else{
				var townName=town;
				var repid=localStorage.repID;
				$("#townNameR").html ("Town	:		"+townName);
				$("#repIDR").html ("Rep ID	:		"+repid);
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	$(".errorChk").text("");
	url="#page10";
	$.mobile.navigate(url);
		
}

function recUsage(){
	if (localStorage.rep_type == 'CM'){
		town=localStorage.town;
	}else{
		town=localStorage.select_town;
	}
	
	//alert (apipath+"usage_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town)
	$("#bufferImageUsaR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"usage_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$("#bufferImageUsaR").hide();				
				localStorage.usageReportR=getResult[1];
				var UsageRpt=localStorage.usageReportR.split('rdrd');			
				var usatable='<table id="usageRepp">';
					usatable +='<tr style="font-size:12px;" ><th>Usage_Date</th><th>Outlet_Code</th><th>Outlet_Name</th><th>Brand</th><th>POSM_Type</th><th>POSM_Code</th><th>Usage_Qty</th></tr>'
					for (i=0;i<UsageRpt.length;i++){	
						usageR=UsageRpt[i].split('|');
						dateU=usageR[0];
						outletcode=usageR[1];
						outletname=usageR[2];
						uposmType=usageR[3];
						Uqty=usageR[4];
						uposmCode=usageR[5];
						brand=usageR[6];
				
						usatable += '<tr style="font-size:11px;"><td>'+dateU+'</td><td>'+outletcode+'</td><td>'+outletname+'</td><td>'+brand+'</td><td>'+uposmType+'</td><td>'+uposmCode+'</td><td style="text-align:center;">'+Uqty+'</td></tr>'
					
					}
					usatable +='</table>'
					
					
					$('#usageReportR').empty();
					$('#usageReportR').append(usatable).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameU").html ("Town	:		"+townName);
					$("#repIDU").html ("Rep ID	:		"+repid);
					
				
			}else{
				var townName=town;
				var repid=localStorage.repID;
				$("#townNameU").html ("Town	:		"+townName);
				$("#repIDU").html ("Rep ID	:		"+repid);
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	$(".errorChk").text("");
	url="#page12";
	$.mobile.navigate(url);
		
}


function stockReport(){
	if (localStorage.rep_type == 'CM'){
		town=localStorage.town;
		
	}else{
		town=localStorage.select_town;
	}

	//alert (apipath+"stock_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town)
	$("#bufferImageStockR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"stock_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#bufferImageStockR").hide();				
				localStorage.stockReport=getResult[1];	
				
				var stockRPT=localStorage.stockReport.split('rdrd');			
				var cmRouteSTr='<table id="stockRepp">';
					cmRouteSTr += '<tr style="font-size:12px;"><th>Brand</th><th>POSM_Type</th><th>POSM_Code</th><th>Allocation</th><th>Stock</th></tr>'
					for (i=0;i<stockRPT.length;i++){	
						stockR=stockRPT[i].split('|');
						//alert (stockR)
						brand=stockR[0];
						posmType=stockR[1];
						posmCode=stockR[2];
						allocation=stockR[3];
						stock=stockR[4];	
											
						cmRouteSTr += '<tr style="font-size:11px;"><td>'+brand+'</td><td>'+posmType+'</td><td>'+posmCode+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					cmRouteSTr +='</table>'
					//alert (cmRouteSTr)
					$('#stockReport').empty();
					$('#stockReport').append(cmRouteSTr).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townName").html ("Town	:		"+townName);
					$("#repID").html ("Rep ID	:		"+repid);
				
			}else{
				
				var townName=town;
				var repid=localStorage.repID;
				$("#townName").html ("Town	:		"+townName);
				$("#repID").html ("Rep ID	:		"+repid);
				$("#bufferImageStockR").hide();
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChk").text("");			
	url="#page11";				
	$.mobile.navigate(url);
}

function summary_report(){
	var posmCode=$("#posmCodeAgency").val();
	var town=localStorage.select_town.replace('-', '|');
	
	//alert (apipath+"agency_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town)
	$("#bufferImageAgencyA").show();
	$.ajax({
			type: 'POST',
			url:apipath+"agency_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$("#bufferImageAgencyA").hide();				
				localStorage.usageReportA=getResult[1];
				var agnRpt=localStorage.usageReportA.split('rdrd');			
				var agentable='<table id="sumRepp">';
					agentable +='<tr style="font-size:12px;" ><th>Date</th><th>Outlet_ID</th><th>Outlet_Name</th><th>Brand</th><th>POSM_Type</th><th>POSM_Code</th><th>Usage_Qty</th></tr>'
					for (i=0;i<agnRpt.length;i++){	
						agnR=agnRpt[i].split('|');
						date=agnR[0];
						outletid=agnR[1];
						outletname=agnR[2];
						posmcode=agnR[3];
						qty=agnR[4];
						brand=agnR[5];
						posmtype=agnR[6];
				
						agentable += '<tr style="font-size:11px;"><td>'+date+'</td><td>'+outletid+'</td><td>'+outletname+'</td><td>'+brand+'</td><td>'+posmtype+'</td><td>'+posmcode+'</td><td style="text-align:center;">'+qty+'</td></tr>'
					
					}
					agentable +='</table>'
					
					
					$('#usageReportAgency').empty();
					$('#usageReportAgency').append(agentable).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameA").html ("Town	:		"+townName);
					$("#repIDA").html ("Rep ID	:		"+repid);
					
				
			}else{
				var townName=town;
				var repid=localStorage.repID;
				$("#townNameA").html ("Town	:		"+townName);
				$("#repIDA").html ("Rep ID	:		"+repid);
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	$(".errorChk").text("");			
	url="#page13";				
	$.mobile.navigate(url);
		
}


function exit() {
	navigator.app.exitApp();
	//navigator.device.exitApp();
}


