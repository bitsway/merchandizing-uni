var imagePathA='';
var imagePathB='';
var imagePathC='';
var imagePathD='';
var imagePathE='';

var imageName='';
var imageName2='';
var imageName3='';
var imageName5='';
var imageName6='';

var select_town='';
var townCode='';
var townName='';
var posmCode='';
var a_qty='';
var routeName='';
var outlet_code='';
var outlet_name='';
var boardCresteN='';
var posmCreateN='';
var posmBoardConditionN='';
var posmMegaHangerCrestN='';
var posmMegaHangerConditionCrestN='';
var posmPlugInDispenserCrestN='';
var plugInDispenserConditionCrestN='';
var posmMiniSolomonCrestN='';
var posmMiniSkinCareCrestN='';
var posmMiniskinCareConditionCrestN='';
var posmMiniHairCareCrestN='';
var posmhairCareConditionCrestN='';
var posmDrugStorePOSMCrestN='';
var posmdrugStorePosmConditionCrestN='';
var auditBoardAvailableC='';
var auditPOSMTypeC='';
var auditFasciaStatusC='';
var auditProfileBoxStatusC='';
var auditStoreTypeC='';
var agencyAuditPaintComboN='';

//localStorage.rep_type='';

//---Online
var apipath="http://w02.yeapps.com/postit/syncmobile_20190522/";
var apipath_image="http://w02.yeapps.com/postit/";

//--- local
//var apipath="http://127.0.0.1:8000/postit/syncmobile/";
//var apipath_image="http://127.0.0.1:8000/postit/";

url ="";

$(document).ready(function(){
	$('#bufferImageSync').hide();
	$("#bufferImageSelectTown").hide();
	
	/*if (localStorage.synced=="NO"){*/
	
	//$("#routeList").next().css("background-color", "yellow");
	
	if (localStorage.rep_type=='CM'){
		$('#dff_Usages_Audit').hide();
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$('#townSUP').show();
		$('#townList').show();
		$("#auditorDiv").hide();
		$("#auditorHead").hide();
		$("#btn_defective").hide();
		$("#btn_dff").show();
		$("#btn_submit_usages").hide();
		$("#allHide").hide();
		$("#stockAgency").hide();
		$("#reportbtnAgency").hide();
		$("#reportAuditSub").hide();
		$("#entryAgency").hide();
		$("#summaryAgency").hide();
					
		$("#btn_receive").show();
		$("#townSelct").show();
		
		var townCName=localStorage.town.replace('|', '-');
		$('#townSelct').html(townCName);
		
		$('#townList').empty();
		$('#townList').append(localStorage.townStr).trigger('create');
					
		$("#usagePOSMSelect").empty();
		$("#usagePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
		
		$('#routeList').empty();
		$('#routeList').append(localStorage.route).trigger('create');
								
		$('#outletList').empty();
		$('#outletList').append(localStorage.outletList).trigger('create');
		
		url = "#homePage";
		$.mobile.navigate(url);	
			
	}else if (localStorage.rep_type == 'SUPERVISOR'){
		
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$('#townSUP').show();
		$('#townList').show();
		$("#auditorDiv").hide();
		$("#auditorHead").hide();
		$("#btn_defective").show();
		$("#btn_dff").show();
		$("#reportAuditSub").hide();
		$("#allHideR").hide();
		$("#btn_submit_receive").hide();
		
		$("#btn_submit_usages").hide();
		$("#allHide").hide();
		$("#stockAgency").hide();
		$("#reportbtnAgency").hide();
		$("#entryAgency").hide();
		$("#summaryAgency").hide();
		$('#btn_receive').show();
		$('#btn_usages').show();
		$('#dff_Usages_Audit').hide();
		$('#btn_stock').show();
		$('#reportbtn').show();
		
		$('#townList').empty();
		$('#townList').append(localStorage.townStr).trigger('create');
		
		$("#receivePOSMSelect").empty();
		$("#receivePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
		
		$("#usagePOSMSelect").empty();
		$("#usagePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
					
		$('#routeList').empty();
		$('#routeList').append(localStorage.routeListSup).trigger('create');
		
		$('#outletList').empty();
		$('#outletList').append(localStorage.outletList).trigger('create');
		
		url = "#homePage";
		$.mobile.navigate(url);
		
	}else if(localStorage.rep_type == 'AGENCY'){
		
		$("#reportbtnAgency").show();
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$('#townSUP').show();
		$('#townList').show();
		$("#auditorDiv").hide();
		$("#auditorHead").hide();
		$("#btn_defective").hide();
		$("#reportAuditSub").hide();
		$("#btn_dff").hide();
		$("#allHideR").hide();
		$("#btn_submit_receive").hide();
		
		$("#btn_submit_usages").hide();
		$("#allHide").hide();
		$('#dff_Usages_Audit').hide();			
		$('#btn_receive').hide();
		$('#btn_usages').hide();
		$('#btn_stock').hide();
		$('#reportbtn').hide();
		
		$('#townList').empty();
		$('#townList').append(localStorage.townStr).trigger('create');

		$("#agencyPOSMrec").empty();
		$("#agencyPOSMrec").append(localStorage.posmCode_agency).trigger('create');	
		
		$('#routeList').empty();
		$('#routeList').append(localStorage.routeListSup).trigger('create');
		
		$('#outletList').empty();
		$('#outletList').append(localStorage.outletList).trigger('create');
		
		url = "#homePage";
		$.mobile.navigate(url);
	}else if(localStorage.rep_type == 'AUDITOR'){
		
		$('#dff_Usages_Audit').hide();
		$('#bufferImageOutletAudt').hide();
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$("#auditorDiv").show();
		$("#reportAuditSub").show();
		$("#auditorBrandListShow").empty();
		$("#auditorBrandListShow").append(localStorage.auditorBrand).trigger('create');
		$('#headerName').html('POST-IT');
		$('#townList').hide();
		$('#townSUP').hide();
		$("#btn_defective").hide();
		$("#btn_dff").hide();
		$("#stockAgency").hide();
		$("#reportbtnAgency").hide();
		$(".errAudit").text("");
		$("#btn_audit_entry").hide();
		$("#auditorHead").hide();
		$("#auditOutletList").hide();
		url = "#homePage";
		$.mobile.navigate(url);
		
	}else if(localStorage.rep_type == 'DFF'){
		
		
		//$("#boarAvailableCrest").empty();
		//$("#boarAvailableCrest").append(boardCresteN).trigger('create');
		$('#stockAgency').hide();
		$("#reportbtnAgency").hide();
		$('#summaryAgency').hide();
		$('#entryAgency').hide();
		$('#btn_stock').hide();
		$('#reportbtn').hide();
		$('#btn_dff').hide();
		$('#btn_usages').hide();
		$('#btn_defective').hide();
		$('#btn_receive').hide();
		$('#dff_Usages_Audit').show();
		$("#posmReportAuditSub").show();
		$("#hairCareConditionShow").hide();
		$("#skinCareConditionShow").hide();
		$("#megaHangerConditionShow").hide();
		$("#posmAuditBrandShow").hide();
		$("#posmAuditposmShow").hide();
		$("#posmAuditBoardQtyShow").hide();
		$("#posmAuditBoardConditionShow").hide();
		$("#plugInDispenserConditionShow").hide();
		$("#miniSolomonConditionSkinShow").hide();
		$("#miniSolomonConditionHairShow").hide()
		$("#drugStorePosmQtyShow").hide();
		$("#drugStorePosmConditionShow").hide();
		$("#btn_posm_entry").hide();
		$("#posmAuditor").hide();
		$('#bufferImageOutletposm').hide();
		$("#posmAuditDiv").show();
		$("#auditorDiv").hide();
		$("#reportAuditSub").hide();
		$("#auditorBrandListShow").empty();
		$("#auditorBrandListShow").append(localStorage.auditorBrand).trigger('create');
		$('#headerName').html('POST-IT');
		$('#townList').show();
		$('#townList').empty();
		$('#townList').append(localStorage.townStr).trigger('create');
		$('#townSUP').show();
		$("#btn_defective").hide();
		$("#btn_dff").hide();
		$("#stockAgency").hide();
		$("#reportbtnAgency").hide();
		$(".errAudit").text("");
		$("#btn_audit_entry").hide();
		$("#auditorHead").hide();
		$("#auditOutletList").hide();
		url = "#homePage";
		$.mobile.navigate(url);
	}else{
		$(".errorChk").text('');
		url = "#pagesync";	
		$.mobile.navigate(url);
	}
});



function syncBasic(){
	$("#bufferImageSelectTown").hide();
	$(".errorChk").html("");
	var mobile=$("#mobile").val();
	var password=$("#password").val();
	if (mobile=="" || password==""){
		$('#bufferImageSync').hide();
		$(".errorMsg").html("Required mobile no and password");	
	}else{
		$('#bufferImageSync').show();	
		$('#syncBasicBtn').hide();	
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0;
		}	
	//alert(apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		$.ajax({
		  url:apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) { 
			var syncResultArray = result.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){
					
					$('#bufferImageSync').hide();	
					localStorage.synced="YES"
					localStorage.sync_code=syncResultArray[1];										
					localStorage.repID=syncResultArray[2];					
					localStorage.repName=syncResultArray[3];
					localStorage.mobileNo=syncResultArray[4];
					localStorage.town=syncResultArray[5];
					localStorage.rep_type=syncResultArray[6];	
					localStorage.routeList=syncResultArray[7];
					localStorage.townListPosm=syncResultArray[8].replace("['","").replace("']","").replace("'" ,"").replace("'","").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "");
					
					$('#townListPosmAuditDFF').html("Town Code	:		"+localStorage.townListPosm);
					
					
					$(".errorMsg").html("Sync Successful");
					$('#syncBasicBtn').show();		
					if(localStorage.town!=''){
					var townlist=localStorage.town.split('fdfd');					
					var townStr='';
					/*for (i=0;i<townlist.length;i++){
						townLi=townlist[i].split('|');						
						townCode=townLi[0];
						townName=townLi[1];
						
						townStr+='<label for="'+townCode+'" id="radioRemove"><input type="radio" name="town_select" onclick="townSelect()" id="'+townCode+'" value="'+townCode+'-'+townName+'">'+townCode+'-'+townName+'</label>'
					}
					localStorage.townStr=townStr;
					*/
					

					var townStr='<ul data-role="listview" data-inset="true" >';	 
					for (i=0;i<townlist.length;i++){
						townLi=townlist[i].split('|');	
		
						townCode=townLi[0];
						townName=townLi[1];
						//onclick="sRoute(\''+cmRoute[i]+'\')"		
						townStr += '<li id="town_select" style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="townSelect(\''+ townCode+'-'+ townName+'\')">'+ townCode+'-'+ townName+'</li>'
						
					}
					townStr +='</ul>';
					localStorage.townStr=townStr;
					
					
					$('#townList').empty();
					$('#townList').append(localStorage.townStr).trigger('create');
					}else{
						if ((localStorage.rep_type=='CM')|| (localStorage.rep_type=='SUPERVISOR')|| (localStorage.rep_type=='AGENCY')){
						$('#townList').empty();
						$(".errorChk").html("Town Not Available");
						}else{
							$(".errorChk").html("");
							}
						}
					//========================
					
					var cmRoute=localStorage.routeList.split('||');					
					var cmRouteStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px;  overflow:scroll;">';
					for (i=0;i<cmRoute.length;i++){						
						cmRouteStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="sRoute(\''+cmRoute[i]+'\')"><a>'+cmRoute[i]+'</a></li>'
					
					}
					cmRouteStr +='</ul>'
					localStorage.route=cmRouteStr;
					if (localStorage.rep_type=='CM'){
						$('#dff_Usages_Audit').hide();
						$("#posmReportAuditSub").hide();	
						$("#posmAuditDiv").hide();					
						$('#townSUP').show();
						$('#townList').show();
						$("#auditorDiv").hide();
						$("#auditorHead").hide();
						$("#reportAuditSub").hide();
						
						$("#entryAgency").hide();
						$("#stockAgency").hide();
						$("#reportbtnAgency").hide();
						$("#summaryAgency").hide();
						$("#btn_receive").show();
						$("#btn_defective").hide();
						$("#btn_dff").show();
						$('#btn_usages').show();
						$('#btn_stock').show();
						$('#reportbtn').show();			
						$("#townSelct").show();
						
						var townCodeName=localStorage.town.replace('|','-');				
						$("#townSelct").html(townCodeName);
												
						$('#routeList').empty();
						$('#routeList').append(localStorage.route).trigger('create');
												
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						url = "#homePage";						
						$.mobile.navigate(url);
					}else if (localStorage.rep_type == 'SUPERVISOR'){
						$('#dff_Usages_Audit').hide();
						$("#posmReportAuditSub").hide();	
						$("#posmAuditDiv").hide();
						$('#townSUP').show();
						$('#townList').show();
						$("#auditorDiv").hide();
						$("#auditorHead").hide();
						$("#reportAuditSub").hide();
						$("#btn_defective").show();
						$("#btn_dff").show();		
						$('#btn_receive').show();
						$('#btn_usages').show();
						$('#btn_stock').show();
						$('#reportbtn').show();
						
						$("#entryAgency").hide();
						$("#stockAgency").hide();
						$("#reportbtnAgency").hide();
						$("#summaryAgency").hide();
						
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						url = "#homePage";
						$.mobile.navigate(url);
							
					}else if(localStorage.rep_type == 'AGENCY'){
						$('#dff_Usages_Audit').hide();
						$("#posmReportAuditSub").hide();	
						$("#posmAuditDiv").hide();
						$('#townSUP').show();
						$('#townList').show();
						$("#auditorDiv").hide();
						$("#auditorHead").hide();
						$("#reportAuditSub").hide();
						$("#btn_defective").hide();
						$("#btn_dff").hide();
						$("#entryAgency").show();
						$("#stockAgency").show();
						$("#reportbtnAgency").show();
						$("#summaryAgency").show();
												
						$('#btn_receive').hide();
						$('#btn_usages').hide();
						$('#btn_stock').hide();
						$('#reportbtn').hide();
						
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						url = "#homePage";
						$.mobile.navigate(url);						
					}else if(localStorage.rep_type == 'AUDITOR'){
						
						$('#dff_Usages_Audit').hide();
						$('#bufferImageOutletAudt').hide();
						$("#posmReportAuditSub").hide();	
						$("#posmAuditDiv").hide();
						$("#auditOutSearch").val('');
						$("#auditorDiv").show();
						$("#reportAuditSub").show();
						$('#headerName').html('POST-IT');
						$('#townList').hide();
						$('#townSUP').hide();
						$("#btn_defective").hide();
						$("#btn_dff").hide();
						$("#btn_audit_entry").hide();
						$("#stockAgency").hide();
						$("#reportbtnAgency").hide();
						$(".errAudit").text("");
						$("#auditOutletList").hide();
						$("#auditorHead").hide();
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						url = "#homePage";
						$.mobile.navigate(url);
					}else{
						$('#stockAgency').hide();
						$("#reportbtnAgency").hide();
						$('#summaryAgency').hide();
						$('#entryAgency').hide();
						$('#btn_stock').hide();
						$('#reportbtn').hide();
						$('#btn_dff').hide();
						$('#btn_usages').hide();
						$('#btn_defective').hide();
						$('#btn_receive').hide();
						$('#dff_Usages_Audit').show();
						$("#posmReportAuditSub").show();	
						$('#bufferImageOutletposm').hide();
						$("#hairCareConditionShow").hide();
						$("#skinCareConditionShow").hide();
						$("#megaHangerConditionShow").hide();
						$("#posmAuditBrandShow").hide();
						$("#posmAuditposmShow").hide();
						$("#posmAuditBoardQtyShow").hide();
						$("#posmAuditBoardConditionShow").hide();
						$("#plugInDispenserConditionShow").hide();
						$("#miniSolomonConditionSkinShow").hide();
						$("#miniSolomonConditionHairShow").hide()
						$("#drugStorePosmQtyShow").hide();
						$("#drugStorePosmConditionShow").hide();
							
						$("#btn_posm_entry").hide();
						$("#posmAuditor").hide();
						$("#posmAuditDiv").show();
						$("#auditOutSearch").val('');
						$("#auditorDiv").hide();
						$("#reportAuditSub").hide();
						$('#headerName').html('POST-IT');
						$('#townList').show();
						$('#townSUP').show();
						$("#btn_defective").hide();
						$("#btn_dff").hide();
						$("#btn_audit_entry").hide();
						$("#stockAgency").hide();
						$("#reportbtnAgency").hide();
						$(".errAudit").text("");
						$("#auditOutletList").hide();
						$("#auditorHead").hide();
						$("#suprepname").html("Name	:		"+localStorage.repName);
						$("#supreptype").html("Type	:		"+localStorage.rep_type);
						$("#suprepid").html("ID	:		"+localStorage.repID);
						url = "#homePage";
						$.mobile.navigate(url);
						}													
				}else{
					$("#auditorHead").hide();
					$('#bufferImageSync').hide();						
					$(".errorMsg").html("Sync Failed. Authorization Error.");
					$('#syncBasicBtn').show();					
				};				
		  },error:function(){
			  $(".errorMsg").text("Please check internet connection");
			 }
		});//------/ajax			
	
	}//-----/field			
}

function attandance(){
	$(".errMsg").html("");
	$("input:radio").removeAttr('checked');
	
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	var today = new Date();
	var dd = today.getDate();
	var allM = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var mm=allM[today.getMonth()];
	var yyyy=today.getFullYear();
	
	document.getElementById("currentDate").innerHTML =  dd +' '+ mm +' '+yyyy +' | '+ days[d.getDay()];	
	$("#bufferImageAtendance").hide();
	$.mobile.navigate("#salfiePage");
	}


function salfie_next_page(){
		$("#bufferImageAtendance").hide();
		$(".successMsg").html("");
		$(".errMsg").html("");
		var salfie_image_name=$("#salfie_image_name_hidden").val();				
		var attendance=$("input[name='attendance']:checked").val();
		
		selfie_lat=$("#selfie_lat").val();
		selfie_long=$("#selfie_long").val();
		 //alert(selfie_lat+"-"+selfie_long);
		if (attendance=="" || attendance==undefined){
			$(".errMsg").html("Check Attendance Type");
			
		}else if((attendance!="" || attendance!=undefined) && salfie_image_name==''){
		
		$(".errMsg").text("Required Salfie");
		
		/*}else if (selfie_lat==0 || selfie_lat==undefined|| selfie_long==0 || selfie_long==undefined){
			$(".errMsg").html("Required Location");*/
		
		}else{		
			var salfie_image_name=$("#salfie_image_name_hidden").val();
			var salfie_image_path=$("#salfie_image_div_hidden").val();					
			
			if (salfie_image_path.length < 10){				
					var url = "#salfiePage";
					$.mobile.navigate(url);
			}else{															
				$("#bufferImageAtendance").show();
				//alert(apipath+'syncAttendanceData?select_town='+localStorage.select_town+"&repID="+localStorage.repID+'&salfie_data='+salfie_image_name+'&attendance='+encodeURIComponent(attendance)+'&selfie_lat='+selfie_lat+'&selfie_long='+selfie_long);
				
				$.ajax({
				//type: 'POST',
				url: apipath+'syncAttendanceData?select_town='+localStorage.select_town+"&repID="+localStorage.repID+'&salfie_data='+salfie_image_name+'&attendance='+encodeURIComponent(attendance)+'&selfie_lat='+selfie_lat+'&selfie_long='+selfie_long,
				 success: function(result) {	
						
						if (result==''){
							alert ('Sorry Network not available');
						}else if(result=='Success'){
							$("#bufferImageAtendance").hide();
							$("#salfie_data").val("");
							
							/*localStorage.attendanceType=attendance;
							
							if (localStorage.attendanceType=="Day Start"){
								localStorage.attendanceFlag=1;								
							}else{
								localStorage.attendanceFlag=0;
								localStorage.attendanceType="";
							}*/
							//alert(localStorage.attendanceFlag);	
							//localStorage.selfie_flag=1;
							$(".successMsg").text("Submitted Successfully");													
							upload_salfie()
							
							
							/*if (localStorage.attendanceFlag==1){ // Faisal
								$.mobile.navigate("#routePage");	
							}*/
									
						}else if(result=='Already Exists'){
							$("#bufferImageAtendance").hide();
							$(".errMsg").html('Already Exists'); // Faisal
							//$.mobile.navigate("#salfiePage");// Faisal
							//$.mobile.navigate("#routePage");												
						}else{
							$(".errMsg").html(result);						
						}
				 	}
				 })				
			}
		}
}

function getLocationInfoSelfe(){
	//$("#bufferImageAtendance").show();	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccessSelfie, onErrorSelfie, options);				
	//$(".errMsg").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccessSelfie(position) {
	$("#bufferImageAtendance").hide();	
	$("#selfie_lat").val(position.coords.latitude);
	$("#selfie_long").val(position.coords.longitude);
	//$(".errMsg").html("Location Confirmed");
	//$("#btn_submit_audit").show();
}
// onError Callback receives a PositionError object
function onErrorSelfie(error) {
	$("#bufferImageAtendance").hide();	
   $("#selfie_lat").val(1);
   $("#selfie_long").val(1);
  // $(".errMsg").html("Failed to Confirmed Location.");
  // $("#btn_submit_audit").hide();
}	


function get_salfie() {
	var tempTime = $.now();
	salfie_image_name=tempTime.toString()+"_"+localStorage.mobileNo+"_salfie.jpg";
	$("#salfie_image_name_hidden").val(salfie_image_name);
	$("#salfie_image_div_hidden").val(salfie_image_name);
	navigator.camera.getPicture(onSuccessSalfie, onFailSalfie, { quality: 60,
		targetWidth: 350,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}

function onSuccessSalfie(imageURI) {
	var image = document.getElementById('salfie_image_div');
    image.src = imageURI;
    var hidden_path="salfie_image_div_hidden";
	$("#"+hidden_path).val(imageURI);
}

function onFailSalfie(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}

function syncValueClean(){
	
	localStorage.synced="NO"
	/*$("#mobile").val("");
	$("#password").val("");*/
	localStorage.repID=""				
	localStorage.repName=""
	localStorage.mobileNo=""
	localStorage.town=""
	localStorage.rep_type=""	
	localStorage.routeList=""
	$(".errorMsg").text("");
	url = "#pagesync";
	$.mobile.navigate(url);
	}
	
function menuClick(){
	$('#menuBufferingImage').hide();
	$(".errorMsg").text("");
	$(".sucChkR").text("");
	$(".errorChkP").text("");
	$(".errorChk").text("");
	$(".sucChk").text("");
	$(".errPOSMAudit").text("");
	$(".errAudit").text("");
	$("#btn_audit_entry").hide();
	$("#reportAuditSub").show();
		
	$("#posmAuditor").hide();
	$("#btn_posm_entry").hide();
	$("#posmAuditOutSearch").val('');	
	
	
	if(localStorage.synced != 'YES'){
		$(".errorMsg").html("Required Sync");
		url = "#pagesync";
		$.mobile.navigate(url);
	}else{
		url = "#homePage";
		$.mobile.navigate(url);
	}
	//location.reload();
}
//----------------back button
function backClick(){
	$(".errPOSMAudit").text("");
	$(".errorChkP").text("");
	$(".errorChk").text("");
	$(".sucChk").text("");
	$(".sucChkR").text("");	
	$(".errAudit").text("");
	$("#btn_audit_entry").hide();
	$("#reportAuditSub").show();
		
	$("#posmAuditor").hide();
	$("#btn_posm_entry").hide();
	$("#posmAuditOutSearch").val('');
	$('#menuBufferingImage').hide();
	$('#bufferImageRoute').hide();
		
}

//---------
function townSelect(town){

	$('#menuBufferingImage').hide();
	$("#cmprepname").text("");
	$("#cmpreptype").text("");
	$("#cmprepid").text("");
	
	if (localStorage.synced!='YES'){
		$(".errorChk").text("Required Sync");
	}else{
		$("#bufferImageSelectTown").show();
		/*if($("#townList").find("input[name='town_select']:checked").length==0){
			$(".errorChk").text("Select Town");
		}else{
			$("#bufferImageSelectTown").show();*/
			//localStorage.select_town=$("input[name='town_select']:checked").val();
			localStorage.select_town=town;
			
			//alert (apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID)
			$.ajax({
			  url:apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID,
			  success: function(result) {
				var resultArray = result.split('rdrd');
					if (resultArray[0]=='Success'){	
						
						$("#bufferImageSelectTown").hide();
						localStorage.posmCodeAgency=resultArray[2];	
						localStorage.agencyTaxarea=resultArray[4];
						localStorage.posmAll=resultArray[5];
					
						var recPOSMcode=localStorage.posmAll.split('fdfd');
						var posmAllStr='<input list="posmAllRec" name="selectPOSM" id="selectPOSM"><datalist id="posmAllRec">';
						
						for (i=0;i<recPOSMcode.length;i++){								
						posmAllStr += '<option style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;"(\''+ recPOSMcode[i]+'\')"><a>'+ recPOSMcode[i]+'</a></option>'
					}
						posmAllStr +='</datalist>';
						localStorage.posmAllStr=posmAllStr;
					
						$('#posmAllStrListAllRec').empty();
						$('#posmAllStrListAllRec').append(localStorage.posmAllStr).trigger('create');
						
					//=======Agency
					if(localStorage.posmCodeAgency!=''){
					var posmCodeAgency=localStorage.posmCodeAgency.split('fdfd');
					var posmAgencyStr = '<select id="posmCodeAgn" class="auto_break" name="posmCodeAgn" onchange="alloDetailsAgency();"><option selected="selected" value="">Select POSM</option>'
					for (i=0;i<posmCodeAgency.length;i++){	
						posmCodeAgencyStr=posmCodeAgency[i].split('-');								
						posmAgencyStr += '<option value='+posmCodeAgencyStr[1]+'>'+posmCodeAgencyStr[0]+'-'+posmCodeAgencyStr[1]+'</option>'
					}
					posmAgencyStr+='</select>'
					posmAgencyStr =posmAgencyStr
					localStorage.posmCode_agency=posmAgencyStr;
					$("#agencyPOSMrec").empty();
					$("#agencyPOSMrec").append(localStorage.posmCode_agency).trigger('create');	
					}else{
						$("#agencyPOSMrec").empty();
						}
					$("#townSelct").html("Town	:		"+localStorage.select_town);
					$('#townSelctRec').html("Town	:		"+localStorage.select_town);
					$('#townSelctdef').html("Town	:		"+localStorage.select_town);
					$('#townSelctAgency').html("Town	:		"+localStorage.select_town);
				
					
					$(".errorChk").text("");		
					url="#first_page";					
					$.mobile.navigate(url);
					}else{
						$(".errorChk").text("");
						url="#homePage";					
						$.mobile.navigate(url);
						
							
					}
				}
			  });
		//}
	}
}

/*********************outlet_agency_select**************************/

function alloDetailsagency(){
	var outletCode=$("#outlet_code").val();
}

function receive(){
	$('#menuBufferingImage').hide();
	$.ajax({
			  url:apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID,
			  success: function(result) {
				var resultArray = result.split('rdrd');
					if (resultArray[0]=='Success'){
						$('#menuBufferingImage').show();	
						localStorage.posmCodeCmSup=resultArray[1];
						if(localStorage.posmCodeCmSup!=''){			
					//====CM/Sup	
					var posmCodeCmSup=localStorage.posmCodeCmSup.split('fdfd');
					var posmStrRec = '<select style="background:none;" id="posmCodeRec" class="auto_break" name="posmCodeRec" onchange="alloDetails();"><option selected="selected" value="">Select POSM</option>'
           
					for (i=0;i<posmCodeCmSup.length;i++){	
						posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
						posmStrRec += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
					}
					 posmStrRec +='</select>'
					posmStrRec =posmStrRec
					localStorage.posmCodeSup=posmStrRec;
					//alert(localStorage.posmCodeSup);
					$("#receivePOSMSelect").empty();
					$("#receivePOSMSelect").append(localStorage.posmCodeSup).trigger('create');
					}else{
						$("#receivePOSMSelect").empty();
						
					}
				}
			  }
		});
					
	
		$(".sucMsgR").hide();
		$(".errorChk").text("");
		$("#allHideR").hide();
		$("#btn_submit_receive").hide();
		$("#receiveSubmitbufferImage").hide();			
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
	var posmCode=$("#posmCodeRec").val();
	
	if(posmCode==""|| posmCode==null){
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
				var balance_qty=resultArray[6];
				var imageRec=resultArray[7];
				
				
				var imageRec = '<img height="100px"  src="'+apipath_image+'static/images/alc_image/'+imageRec+'" alt="Receive Image" />';
				
				$("#imageReceive").empty();
				$("#imageReceive").append(imageRec).trigger('create');
				
				//$("#imageReceive").val(imageRec);
				
				$("#posm_type").html("Posm Type	:	"+posmType);
				$("#brand").html("Brand			:	"+brand);
				$("#allocation").html("Allocation Qty	:	"+a_qty);
				$("#due").html("Due Qty	:	"+due_qty);
				$("#balance_qty").html("Balance Qty	:	"+balance_qty);
				
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
	
	var posm_code=$("#posmCodeRec").val();
	var posm_type=$("#posm_type").val();
	
	var brand=$("#brand").val();
	var dueRec=$("#due").val();
	var reg = /^[0-9]*$/;
	var received=$("#received").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	imageName=$("#recPhoto_name").val();
	imagePathA=$("#recPhoto_path").val();
	var alcId=$("#alcId").val();
	
	var regg = /^[0-9]*$/;
	var def_qty=$("#def_qty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	
	imageName6=$("#defPhoto_name").val();
	imagePathE=$("#defPhoto_path").val();
	
	//alert(received);
	/*var rec_flag=false;
	
	if (Number(received)==0){
		$(".errorChk").text("Receive Qty must Number");
		$("#btn_submit_receive").show();
	}else{
		if(imageName==''){
			$(".errorChk").text("Required Receive Picture");
			$("#btn_submit_receive").show();
			
			}else{
				rec_flag=true;
				$(".errorChk").text("Receive Image Upload Successfully");
				}
	}
	
	//alert (a_qty);
	var def_flag=false;
	if (Number(a_qty)==0){
		$(".errorChk").text("Def Qty must Number");
		$("#btn_submit_receive").show();
	}else{
		if(imageName6==''){
			$(".errorChk").text("Required Defective Picture");
			$("#btn_submit_receive").show();
			
			}else{
				def_flag=true;
				$(".errorChk").text("Defective Image Upload Successfully");
				}
	}*/
	
	/*if (rec_flag==false && def_flag==false){
		$(".errorChk").text("Required Qty");
		$("#btn_submit_receive").show();
	}else{*/
	if (received==''){
		received=0;
		}
	if(def_qty==''){
		def_qty=0;
		}
	
	if (received==0 && def_qty==0){
		
		$(".errorChk").text("Required Qty");
		$("#btn_submit_receive").show();
	}else if(!reg.test(received)){
		$(".errorChk").text("Receive Qty must Number");
		$("#btn_submit_receive").show();
	}else if(received!=0 && imageName==''){
		$(".errorChk").text("Required Receive Image");
		$("#btn_submit_receive").show();
	}else if(!regg.test(def_qty)){
		$(".errorChk").text("Defective Qty must Number");
		$("#btn_submit_receive").show();
	}else if(def_qty!=0 && imageName6==''){
		
		$(".errorChk").text("Required Defective Image");
		$("#btn_submit_receive").show();
	}else{
	
	
	/*if(received=='' || received==0){
		$(".errorChk").text("Required Receive Qty");
		$("#btn_submit_receive").show();
	}else*/ 
	/*if (!reg.test(received)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_receive").show();
	}else if ((received != '' || received!=0) && imageName == ''){
		$(".errorChk").text("Required Receive Picture");
		$("#btn_submit_receive").show();
	}else if(!regg.test(a_qty)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_receive").show();*/
	/*}else if(a_qty=='' || a_qty==0){
		$(".errorChk").text("Required Defective Qty");
		$("#btn_submit_receive").show();*/
	/*}else if((a_qty != '' || a_qty==0) && imageName6 == ''){
		$(".errorChk").text("Required Defective Picture");
		$("#btn_submit_receive").show();
	}else if(a_qty != '' || a_qty!=0 || received=='' || received==0){
		$(".errorChk").text("Required Qty");
		$("#btn_submit_receive").show();	
	}else{*/
		$("#receiveSubmitbufferImage").show();			
		//alert(apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId+"&def_qty="+def_qty+"&imageName6="+imageName6);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId+"&def_qty="+def_qty+"&imageName6="+imageName6,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#receivePOSMSelect").empty();
					$("#receivePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
					$("#receiveSubmitbufferImage").hide();
					$("#received").val("");
					$("#def_qty").val("");
					$("#posm_type").val("");
					$("#brand").val("");
					$("#dueRec").val("");
					$("#alcId").val("");
					$("#recPhoto_name").val("");
					$("#recPhoto_path").val("");
					
					$("#defPhoto_name").val("");
					$("#defPhoto_path").val("");
					
					document.getElementById('myImageA').src = '';
					document.getElementById('myImageE').src = '';
									
					$(".errorChk").text("");
					$(".sucMsgR").show();
					$("#allHideR").hide();
					$("#btn_submit_receive").hide();
					
					
					
					
					uploadPhotoRec(imagePathA, imageName);
					uploadPhotoDefective(imagePathE, imageName6);
					
					$(".sucMsgR").text('Successfully Submitted');
						
					url="#second_page";					
					$.mobile.navigate(url);
					/*setTimeout(function(){
						location.reload();
					},500);*/	
				}else if (result=='Faild'){
						$("#receiveSubmitbufferImage").hide();
						$(".errorChk").text("Can't Receive more than Due Qty");
						$("#allHideR").show();
						$("#btn_submit_receive").show();
				}else if (result=='Faild2'){
						$("#receiveSubmitbufferImage").hide();
						$(".errorChk").text("Can't Defective more than Balance Qty");
						$("#allHideR").show();
						$("#btn_submit_receive").show();
				}else{
					$("#receiveSubmitbufferImage").hide();		
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_receive").show();
					$("#allHideR").show();
					
				}
				
			}//end result
		});//end ajax*/	
		
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
var outletSeperator='';
function usages(outletSep){
	/*$(".ui-input-search").attr(placeholder,"asad");*/
	
	outletSeperator=outletSep;
	/*if (localStorage.rep_type!='CM'){	*/
	$('#bufferImageRoute').hide();
	$('#menuBufferingImage').show();	
		//$('#bufferImageOutlet').show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getRoute?&townCodeName="+localStorage.select_town,
																																																													
			success: function(result) {	
				var resultArray = result.split('rdrd');	
				if(resultArray[0]=='Success'){
					$('#menuBufferingImage').hide();	
					//$('#bufferImageOutlet').hide();			
					localStorage.routeListSupALL=resultArray[1];
					if(localStorage.routeListSupALL!=''){
					var routeListSupALL=localStorage.routeListSupALL.split('||');
					var routeStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:450px; overflow:scroll;">';
				for (i=0;i<routeListSupALL.length;i++){								
					routeStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="sRoute(\''+ routeListSupALL[i]+'\')"><a>'+ routeListSupALL[i]+'</a></li>'
				}
					routeStr +='</ul>';
					localStorage.routeListSup=routeStr;
					
					$('#routeList').empty();
					$('#routeList').append(localStorage.routeListSup).trigger('create');
					/*$(".placeholder").attr('placeholder',"asad");*/
					$("#town").html('Town		:		' + localStorage.select_town.replace('|','-'));
					$(".errorChk").text("");
					$.ajax({
					  url:apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID,
					  success: function(result) {
						var resultArray = result.split('rdrd');
							if (resultArray[0]=='Success'){	
								localStorage.posmCodeCMUsage=resultArray[3];			
							//====CM/Sup	
							if(localStorage.posmCodeCMUsage!=''){
							var posmCodeCmSup=localStorage.posmCodeCMUsage.split('fdfd');
							var posmStr = '<select id="posmCodeUsges" class="auto_break" name="posmCodeUsges" onchange="alloDetailsU();"><option selected="selected" value="">Select POSM</option>'
							for (i=0;i<posmCodeCmSup.length;i++){	
								posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
								posmStr += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
							}
							posmStr+='</select>'
							posmStr =posmStr
							localStorage.posmCodeSup=posmStr;	
							
							$("#usagePOSMSelect").empty();
							$("#usagePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
							
								}else{
									$("#usagePOSMSelect").empty();
									}
							}
							}
						});
					url="#page3";					
					$.mobile.navigate(url);					
					}else{
						$(".errorChk").text("Route not Available");
					}
				}
			},error: function(result){
				$(".errorChk").text("Please check internet connection");
			}
		});
		
}

/************************usage*page4********************/

var rName='';
function sRoute(routeName){
	
	rName=routeName;
			
			//alert(apipath+"getOutlet?&routeName="+rName+"&townCode="+localStorage.select_town+"&outletSeperator="+outletSeperator);
			//$('#bufferImageOutlet').show();	
			$('#bufferImageRoute').show();
			$.ajax({
			type: 'POST',
			url:apipath+"getOutlet?&routeName="+rName+"&townCode="+localStorage.select_town+"&outletSeperator="+outletSeperator,
																																																													
			success: function(result) {	
				var syncResultArray = result.split('|||');	
				if(syncResultArray[0]=='Success'){
					$('#bufferImageRoute').hide();		
					//$('#bufferImageOutlet').hide();			
					localStorage.outletLi=syncResultArray[1];
					if(	localStorage.outletLi!=''){
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
					
					$("#townAbc").html('Town	:		' + localStorage.select_town.replace('|','-'));
					$("#routeSelect").html('Route	:		' + rName);
					$(".errorChk").text("");			
					url="#page4";					
					$.mobile.navigate(url);		
					}else{
						$(".errorChk").text("Outlet Not Available");
						
						}
				}
			},error: function(result){
				$(".errorChk").text("Please check internet connection");
			}
		})
}

function auditorOutlet(){
		$(".errAudit").text("");
		if (localStorage.synced!='YES'){
			$(".errorChk").text("Required Sync");
		}else{
			var auditSerach=$("#auditOutSearch").val();
			if(auditSerach==''){
				$(".errAudit").text("Please Search Outlet");
				$("#auditorHead").hide();
				$("#auditOutletList").hide();
				$("#btn_audit_entry").hide();
				$("#reportAuditSub").show();
			}else{
				$("#reportAuditSub").hide();
				
				$('#bufferImageOutletAudt').show();	
				//alert(apipath+"getOutletAuditor?&auditSerach="+auditSerach);
				$.ajax({
				type: 'POST',
				url:apipath+"getOutletAuditor?&auditSerach="+auditSerach,
																																																														
				success: function(result) {	
					var syncResultArray = result.split('rdrd');	
					if(syncResultArray[0]=='Success'){		
						$('#bufferImageOutletAudt').hide();
						$("#btn_audit_entry").show();
						
						localStorage.outletLi=syncResultArray[1];
						localStorage.aOutletCode=syncResultArray[2];
						localStorage.aOutletName=syncResultArray[3];
						localStorage.aOutletAddress=syncResultArray[4];
						localStorage.aOutletRoute=syncResultArray[5];
						localStorage.aTown=syncResultArray[6];
						//localStorage.aBrand=syncResultArray[7];
						localStorage.auditTaxArea=syncResultArray[7];
						//alert (localStorage.auditTaxArea);
						
						var recTaxArea=localStorage.auditTaxArea.split('|');
						var taxStr='<input list="taxArea" name="a_cityCorp" id="a_cityCorp"><datalist id="taxArea">';
						
						for (i=0;i<recTaxArea.length;i++){								
						taxStr += '<option style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;"(\''+ recTaxArea[i]+'\')"><a>'+ recTaxArea[i]+'</a></option>'
					}
						taxStr +='</datalist>';
						localStorage.taxAreaListAll=taxStr;
					
					$('#taxAreaListAllRec').empty();
					$('#taxAreaListAllRec').append(localStorage.taxAreaListAll).trigger('create');					
						 
						
						if (localStorage.aOutletCode !='' || localStorage.outletLi!=''){			//
							if (localStorage.aOutletCode !=''){
								$("#auditorHead").show();
								$("#auditOutletList").show();
								$('#oCode').text(localStorage.aOutletCode+'|'+localStorage.aOutletName);
								$('#oAddress').text(localStorage.aOutletAddress);
								$('#oRoute').text(localStorage.aOutletRoute);
								$('#oTown').text(localStorage.aTown);
								
							}else{
								$("#auditorHead").hide();
								$(".errAudit").text("দোকানটি লিষ্টে নাই, সাবমিট করতে চাইলে Next বাটন চাপুন |");
									
							}
							
							if (localStorage.outletLi !=''){
								$("#auditOutletList").show();	
								var outletDetails = localStorage.outletLi.split('fdfd');
								
								var auditOutletStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
									for (i=0;i<outletDetails.length;i++){					
										outletLi=outletDetails[i].split('|');
										
										auditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Outlet:"+outletLi[0]+' | '+"Brand:"+outletLi[3]+' | '+"POSM Type:"+outletLi[4]+' | '+"Height:"+outletLi[5]+' | '+"Length:"+outletLi[6]+' | '+"Total Light:"+outletLi[1]+' | '+"Defective Light:"+outletLi[2]+'| '+"Tax_Area:"+outletLi[8]+'| '+"Status:"+outletLi[7]+'</p>'
									}
									localStorage.auditOutletList=auditOutletStr;		
									$('#auditOutletList').empty();
									$('#auditOutletList').append(localStorage.auditOutletList).trigger('create');
							}else{
								$('#auditOutletList').empty();
								
							}
						}else{
							$("#auditorHead").hide();
							$('#auditOutletList').empty();
							$(".errAudit").text("দোকানটি লিষ্টে নাই, সাবমিট করতে চাইলে Next বাটন চাপুন |");
						}
						
					}	
				},error: function(){
					$('#bufferImageOutletAudt').hide();
					$("#auditorHead").hide();
					$('#auditOutletList').empty();
					$(".errAudit").text("Please check internet connection");
				}
			});
		}
	}
}



/*function posmAuditorOutlet(){
	
		
		
		$(".errPOSMAudit").text("");
		$(".errposmAudit").text("");
		if (localStorage.synced!='YES'){
			$(".errorChk").text("Required Sync");
		}else{
			var posmAuditOutSearch=$("#posmAuditOutSearch").val();
			alert (posmAuditOutSearch);
			if(posmAuditOutSearch==''){
				$(".errPOSMAudit").text("Please Search Outlet");
				
				$('#posmOuditOutletList').hide();
				$("#posmAuditor").hide();
				$("#posmReportAuditSub").show();
				$("#btn_posm_entry").hide();
			}else{
				
				$("#posmAuditor").hide();
				$("#posmReportAuditSub").hide();
				$('#bufferImageOutletposm').show();	
				//alert(apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.repID);
				$.ajax({
				type: 'POST',
				url:apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.repID,
																																																														
				success: function(result) {	
					var syncResultArray = result.split('rdrd');	
					if(syncResultArray[0]=='Success'){	
					
						$('#bufferImageOutletposm').hide();
						$("#posmAuditor").show();	
						
						localStorage.posmOutletCode=syncResultArray[1];
						localStorage.posmOutletName=syncResultArray[2];
						localStorage.posmOutletTerritory=syncResultArray[3];
						localStorage.posmOutletRoute=syncResultArray[4];
						localStorage.posmTown=syncResultArray[5];
						localStorage.posmBrand=syncResultArray[6];
						localStorage.outletDetailsLi=syncResultArray[7];
						localStorage.outletTaxAreaDFF=syncResultArray[8];
						
						//alert (localStorage.outletTaxAreaDFF);
						
						if(localStorage.outletTaxAreaDFF!=''){
							var rectaxStrDFF=localStorage.outletTaxAreaDFF.split('|');
							var posmStrTaxAreaDFF = '<option selected="selected" value="">Select Tax Area</option>'
							for (i=0;i<rectaxStrDFF.length;i++){	
								
								posmStrTaxAreaDFF += '<option value="'+rectaxStrDFF[i]+'">'+rectaxStrDFF[i]+'</option>'
							}
							posmStrTaxAreaDFF =posmStrTaxAreaDFF
							localStorage.rectaxStrDFF=posmStrTaxAreaDFF;
							
							$("#outletTaxAreaDFFListRec").empty();
							$("#outletTaxAreaDFFListRec").append(localStorage.rectaxStrDFF).trigger('create');	
						}else{
								$("#outletTaxAreaDFFListRec").empty();
								}
						
						
							
						var auditorBrand=localStorage.posmBrand.split(',');
						var brandStr = '<option selected="selected" value="">Select Brand</option>'
						for (i=0;i<auditorBrand.length;i++){	
							brandStr += '<option value="'+auditorBrand[i]+'">'+auditorBrand[i]+'</option>'
						}
						localStorage.auditorPOSMBrand=brandStr;
						$("#auditorPOSMBrandList").empty();
						$("#auditorPOSMBrandList").append(localStorage.auditorPOSMBrand).trigger('create');
						
						if (localStorage.posmOutletCode==''){
								$('#posmOuditOutletList').hide();
								$("#posmReportAuditSub").hide();
								$("#btn_posm_entry").hide();
								$("#posmAuditor").hide();
								$(".errposmAudit").text("দোকানটি লিষ্টে নাই |");								
							}else{								
								$('#posmOuditOutletList').show();
								$('#posmOutletCode').text(localStorage.posmOutletCode+'|'+localStorage.posmOutletName);
								$('#posmOutleAddress').text(localStorage.posmOutletTerritory);
								$('#posmOutleRoute').text(localStorage.posmOutletRoute);
								$('#posmOutleTown').text(localStorage.posmTown);
								
								if (localStorage.outletDetailsLi ==''){
									
									$('#posmOuditOutletList').hide();
									$("#btn_posm_entry").show();
									$('#posmOuditOutletList').empty();
								}else{
									
									$('#posmOuditOutletList').show();
									$("#posmAuditor").show();	
									$("#btn_posm_entry").hide();
									
									var posmOutletDetails = localStorage.outletDetailsLi.split('fdfd');
									
									var posmAuditOutletStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
										for (i=0;i<posmOutletDetails.length;i++){					
											posmOutletLi=posmOutletDetails[i].split('|');
											
											posmAuditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Board Available : "+posmOutletLi[0]+' | '+"Brand : "+posmOutletLi[1]+' | '+"POSM type : "+posmOutletLi[2]+' | '+"Board Qty : "+posmOutletLi[3]+' | '+"Board Condition : "+posmOutletLi[4]+' | '+"Mega Hanger : "+posmOutletLi[5]+' | '+"Mega Hanger Condition : "+posmOutletLi[6]+' | '+"Plugin Dispenser : "+posmOutletLi[7]+' | '+"Plugin Dispenser Condition : "+posmOutletLi[8]+' | '+"Mini Solomon : "+posmOutletLi[9]+' | '+"Skin Care : "+posmOutletLi[10]+' | '+"Skin Care Condition : "+posmOutletLi[11]+' | '+"Hair Care : "+posmOutletLi[12]+' | '+"Hair Care Condition : "+posmOutletLi[13]+' | '+"Drug Store Posm : "+posmOutletLi[14]+' | '+"POSM Qty : "+posmOutletLi[15]+' | '+"POSM Condition : "+posmOutletLi[16]+' | '+"Tax Area : "+posmOutletLi[17]+'</p>'
										}
										//alert(posmAuditOutletStr);
										localStorage.posmOuditOutletList=posmAuditOutletStr;
										//alert (localStorage.posmOuditOutletList);		
										$('#posmOuditOutletList').empty();
										$('#posmOuditOutletList').append(localStorage.posmOuditOutletList).trigger('create');
									}
							}
					}	
				},error: function(){
					$('#bufferImageOutletposm').hide();
					$('#posmOuditOutletList').hide();
					$("#posmAuditor").hide();
					$(".errAudit").text("Please check internet connection");
				}
			});
		}
	}
	

}*/

function outletAudit(){
	var auditSerach=$("#auditOutSearch").val();
	if (auditSerach==''){
		$(".errAudit").text("Please Search Outlet");
	}else{
		//alert(apipath+"auditor_brand");
		$.ajax({//?&auditorbrandF="+auditorbrandF
		 url:apipath+"auditor_brand",
			success: function(result) {
			var auditorBrand=result.split(',');
				var brandStr = '<select id="auditorBrandList" class="auto_break" name="auditorBrandList"  style="display:inline-block;"><option selected="selected" value="">Select Brand</option>'
				for (i=0;i<auditorBrand.length;i++){	
					brandStr += '<option value="'+auditorBrand[i]+'">'+auditorBrand[i]+'</option>'
				}
				brandStr+='</select>'
				localStorage.auditorBrand=brandStr;
				$("#auditorBrandListShow").empty();
				$("#auditorBrandListShow").append(localStorage.auditorBrand).trigger('create');
			}
		})
	$(".errorChk").text("");
	$("#allHideAudit").show();
	
	$("#btn_submit_audit").hide();	
	$("#msg_submit_audit").hide();
	$("#auditBrandShow").hide();
	$("#auditposmShow").hide();
	
	$("#auditLighthShow").hide();
	$("#auditDefectiveShow").hide();
	$("#auditFasciaShow").hide();
	$("#auditProfileShow").hide();
	
	auditBoardAvailableC='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="a_board" id="radio-choice-h-6a" value="1"  type="radio" onchange="boardYesNo();"><label for="radio-choice-h-6a">YES</label><input name="a_board" id="radio-choice-h-6b"  value="0" type="radio" onchange="boardYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#auditBoardAvailable").empty();
	$("#auditBoardAvailable").append(auditBoardAvailableC).trigger('create');
	
	auditPOSMTypeC='<input type="hidden" id="rowID" name="rowID" /><fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_posm_type" id="radio-choice-h-6a" value="SHOPBOARD_BACKLIT"   type="radio"><label for="radio-choice-h-6a">Lit</label><input name="a_posm_type" id="radio-choice-h-6b"  value="SHOPBOARD_NONLIT" type="radio"><label for="radio-choice-h-6b">Non-Lit</label></fieldset>'
	
	$("#auditPOSMType").empty();
	$("#auditPOSMType").append(auditPOSMTypeC).trigger('create');
	
	auditFasciaStatusC='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_fStatus" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="a_fStatus" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#auditFasciaStatus").empty();
	$("#auditFasciaStatus").append(auditFasciaStatusC).trigger('create');
	
	auditProfileBoxStatusC='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_paStatus" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="a_paStatus" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#auditProfileBoxStatus").empty();
	$("#auditProfileBoxStatus").append(auditProfileBoxStatusC).trigger('create');
	
	auditStoreTypeC='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_storeType" id="radio-choice-h-6a" value="PS"  type="radio"><label for="radio-choice-h-6a">PS</label><input name="a_storeType" id="radio-choice-h-6b"  value="NPS" type="radio"><label for="radio-choice-h-6b">NPS</label><input name="a_storeType" id="radio-choice-h-6c"  value="DS" type="radio"><label for="radio-choice-h-6c">DS</label></fieldset>'
	
	$("#auditStoreType").empty();
	$("#auditStoreType").append(auditStoreTypeC).trigger('create');
	
	$("#auditSubmitLocationBufferImage").hide();
	$("#auditSubmitBufferImage").hide();
	$("#outletCodeAA").html("Outlet Code	:		"+auditSerach);
	url="#page15";
	}
	$.mobile.navigate(url);	
}

function boardYesNo(){

	var a_board=$('input[name=a_board]:checked').val();
	
	if(a_board==0){
		$("#auditBrandShow").hide();
		$("#auditposmShow").hide();
		
		$("#auditLighthShow").hide();
		$("#auditDefectiveShow").hide();
		$("#auditFasciaShow").hide();
		$("#auditProfileShow").hide();

	}else{
		$("#auditBrandShow").show();
		$("#auditposmShow").show();
		
		$("#auditLighthShow").show();
		$("#auditDefectiveShow").show();
		$("#auditFasciaShow").show();
		$("#auditProfileShow").show();

		}
		
}
var a_board='';
var a_brand='';
var a_posm_type='';
var a_nShopkeeper='';
var a_cNoShopkeeper='';
var a_taxArea='';
var a_storeType='';
var a_paStatus='';
var a_fStatus='';
var a_dLight='';
var a_light='';
var a_height='';
var remarksAudit='';
function submit_data_auditor(){
	
	$("#btn_submit_audit").hide();
	var auditSerach=$("#auditOutSearch").val().replace('+','').replace('.','').replace('/','').replace('*','').replace(',','');
	$("#msg_submit_audit").hide();
	var d = new Date();	
	var get_time=d.getTime();
	
	a_board=$('input[name=a_board]:checked').val();
	a_brand=$("#auditorBrandList").val();
	a_posm_type=$('input[name=a_posm_type]:checked').val();
	a_nShopkeeper=$("#a_nShopkeeper").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	a_cNoShopkeeper=$("#a_cNoShopkeeper").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	a_taxArea=$("#a_cityCorp").val();

	a_storeType=$('input[name=a_storeType]:checked').val();
	a_paStatus=$('input[name=a_paStatus]:checked').val();
	a_fStatus=$('input[name=a_fStatus]:checked').val();
	a_dLight=$("#a_dLight").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	a_light=$("#a_light").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	a_length=$("#a_length").val().replace('+','').replace('-','').replace('/','').replace('*','').replace(',','');
	a_height=$("#a_height").val().replace('+','').replace('-','').replace('/','').replace('*','').replace(',','');
	remarksAudit=$("#remarksAudit").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	
	if(a_posm_type==undefined){
		a_posm_type='';
	}
	if(a_height==''){
		a_height=0;
	}
	if(a_length==''){
		a_length=0;
	}
	
	if(a_light==''){
		a_light='0';
	}
	if(a_dLight==''){
		a_dLight='0';
	}
	if(a_fStatus==undefined){
		a_fStatus='';
	}
	
	if(a_paStatus==undefined){
		a_paStatus='';
	}
	
	if(a_storeType==undefined){
		a_storeType='';
	}

	imageName5=$("#agnAudPhoto_name").val();
	imagePathD=$("#agnAudPhoto_path").val();
	
	aud_lat=$("#aud_lat").val();
	aud_long=$("#aud_long").val();
	
	if(a_brand=='' && a_board==1 ){
		$(".errorChk").text("Required Brand");
		$("#btn_submit_audit").show();
		
	}else if((a_posm_type==undefined || a_posm_type=='') && a_board==1 ){
		$(".errorChk").text("Required Posm Type");
		$("#btn_submit_audit").show();
		
	}else if(a_board==undefined || a_board==''){
		$(".errorChk").text("Required Board");
		$("#btn_submit_audit").show();	
		
	}else if(a_height==''){
		$(".errorChk").text("Required Height Qty");
		$("#btn_submit_audit").show();
			
	}else if(a_length==''){
		$(".errorChk").text("Required Length Qty");
		$("#btn_submit_audit").show();
			
	}else if(a_light=='' && a_board==1 ){
		$(".errorChk").text("Required Light Qty");
		$("#btn_submit_audit").show();
			
	}else if(a_dLight=='' && a_board==1 ){
		$(".errorChk").text("Required Defective Light");
		$("#btn_submit_audit").show();
				
	}else if((a_fStatus==undefined || a_fStatus=='') && a_board==1 ){
		$(".errorChk").text("Required Fascia Status");
		$("#btn_submit_audit").show();	
		
	}else if((a_paStatus==undefined || a_paStatus=='') && a_board==1 ){
		$(".errorChk").text("Required Profile Box Status");
		$("#btn_submit_audit").show();
				
	}else if ((a_storeType==undefined || a_storeType=='')  && (a_board==1 )||(a_storeType==undefined || a_storeType=='')  && (a_board==0 )){
		$(".errorChk").text("Required Store Type");
		$("#btn_submit_audit").show();
			
	}else if ((a_nShopkeeper=='' && a_board==1)||(a_nShopkeeper=='' && a_board==0)){
		$(".errorChk").text("Required Name of Shopkeeper");
		$("#btn_submit_audit").show();
		
	}else if ((a_cNoShopkeeper=='' && a_board==1 )||(a_cNoShopkeeper=='' && a_board==0)){
		$(".errorChk").text("Required Contact No of Shopkeeper");
		$("#btn_submit_audit").show();
		
	}else if ((a_taxArea=='' && a_board==1 )||(a_taxArea=='' && a_board==0 )){
		$(".errorChk").text("Required City Corporation");
		$("#btn_submit_audit").show();
		
	}else if (imageName5==''){
		$(".errorChk").text("Required Picture");
		$("#btn_submit_audit").show();
		
	}else if (aud_lat==0|| aud_long==0 ){
		$(".errorChk").text("Required Location");
		$("#btn_submit_audit").show();	
	}else{
	
				
	$("#auditSubmitBufferImage").show();	
	//alert(apipath+"submitData_auditor?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&a_brand="+a_brand+"&a_posm_type="+a_posm_type+"&a_board="+a_board+"&a_height="+a_height+"&a_length="+a_length+"&a_light="+a_light+"&a_dLight="+a_dLight+"&a_fStatus="+a_fStatus+"&a_paStatus="+a_paStatus+"&a_storeType="+a_storeType+"&a_nShopkeeper="+a_nShopkeeper+"&a_cNoShopkeeper="+a_cNoShopkeeper+"&a_taxArea="+a_taxArea+"&imageName5="+imageName5+"&aud_lat="+aud_lat+"&aud_long="+aud_long+"&auditSerach="+auditSerach+"&remarksAudit="+remarksAudit);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_auditor?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&a_brand="+a_brand+"&a_posm_type="+a_posm_type+"&a_board="+a_board+"&a_height="+a_height+"&a_length="+a_length+"&a_light="+a_light+"&a_dLight="+a_dLight+"&a_fStatus="+a_fStatus+"&a_paStatus="+a_paStatus+"&a_storeType="+a_storeType+"&a_nShopkeeper="+a_nShopkeeper+"&a_cNoShopkeeper="+a_cNoShopkeeper+"&a_taxArea="+a_taxArea+"&imageName5="+imageName5+"&aud_lat="+aud_lat+"&aud_long="+aud_long+"&auditSerach="+auditSerach+"&remarksAudit="+remarksAudit,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#auditSubmitBufferImage").hide();
					$("#auditorBrandList").val('');	
					$('input[name=a_posm_type]:checked').val('');
					//$('input[name=a_board]:checked').val('');
					$("#a_height").val('');
					$("#a_length").val('');
					$("#a_light").val('');
					$("#a_dLight").val('');
					$('input[name=a_fStatus]:checked').val('');
					$('input[name=a_paStatus]:checked').val('');
					$('input[name=a_storeType]:checked').val('');
					$("#a_nShopkeeper").val('');
					$("#a_cNoShopkeeper").val('');
					$("#a_cityCorp").val('');	
					$("#agnAudPhoto_name").val('');
					$("#agnAudPhoto_path").val('');
					$("#aud_lat").val(0);
					$("#aud_long").val(0);
					$("#remarksAudit").val('');
					$("#auditBoardAvailable").empty();
					$("#auditBoardAvailable").append(auditBoardAvailableC).trigger('create');
					$("#auditPOSMType").empty();
					$("#auditPOSMType").append(auditPOSMTypeC).trigger('create');
					$("#auditFasciaStatus").empty();
					$("#auditFasciaStatus").append(auditFasciaStatusC).trigger('create');
					$("#auditProfileBoxStatus").empty();
					$("#auditProfileBoxStatus").append(auditProfileBoxStatusC).trigger('create');
					$("#auditStoreType").empty();
					$("#auditStoreType").append(auditStoreTypeC).trigger('create');
					$("#auditorBrandListShow").empty();
					$("#auditorBrandListShow").append(localStorage.auditorBrand).trigger('create');
					
					document.getElementById('myImageD').src = '';
					
					$(".errorChk").text("");
					$("#msg_submit_audit").show();
					$("#allHideAudit").hide();
					$("#btn_submit_audit").hide();
					
					uploadPhotoAudit(imagePathD, imageName5);
					
					$(".sucMsgU").text('Successfully Submitted');
					//location.reload();
						
				}else if (result=='Failed'){
						$("#auditSubmitBufferImage").hide();
						$(".errorChk").text('Outlet Already Exists')
						$("#msg_submit_audit").hide();
						$("#allHideAudit").show();	
						$("#btn_submit_audit").show();	
				}
				
			}//end result
		
		});//end ajax
	}
	
}



function getAgencyAuditImage() {
	var get_time=$.now();
	var image_Name = localStorage.mobileNo+"_"+get_time+".jpg";
	$("#agnAudPhoto_path").val(image_Name);
	$("#agnAudPhoto_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccessD, onFailD, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessD(imageURI) {		
    var image = document.getElementById('myImageD');
    image.src = imageURI;
	var image_path = "agnAudPhoto_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFailD(message) {
	imagePathD="";
	$("#agnAudPhoto_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoAudit(imageURI, imageName5) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName5;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win5,onfail5,options);
}

function win5(r) {	
	$(".errorChk").text('');
}

function onfail5(r) {
	$(".errorChk").text('');
	$("#btn_submit_audit").hide();
}

//-----------Location----------------------------------

function getLocationInfo() {
	$("#auditSubmitLocationBufferImage").show();	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess(position) {
	$("#auditSubmitLocationBufferImage").hide();
	$("#aud_lat").val(position.coords.latitude);
	$("#aud_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
	$("#btn_submit_audit").show();
}
// onError Callback receives a PositionError object
function onError(error) {
	$("#auditSubmitLocationBufferImage").hide();
   $("#aud_lat").val(0);
   $("#aud_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
   $("#btn_submit_audit").hide();
}	
//----------------------------------------------
var outlet_codeDFF='';
function outlet(outletIDName){
		$('#dffsubmittedDetailsData').hide();
		$("#dffsubmitfrom").hide();
	
		outletS=outletIDName.split('|');
		outlet_name=outletS[0]
		outlet_code=outletS[1]
		outlet_codeDFF=outletS[1]
		
		$(".errPOSMAudit").text("");
		$(".errposmAudit").text("");
		if (localStorage.synced!='YES'){
			$(".errorChk").text("Required Sync");
		}else{
			var posmAuditOutSearch=outlet_code
			//alert (posmAuditOutSearch);
			if(posmAuditOutSearch==''){
				$(".errPOSMAudit").text("Please Search Outlet");
				
				$('#posmOuditOutletList').hide();
				$("#posmAuditor").hide();
				
				$("#btn_posm_entry").hide();
			}else{
				
				$("#posmAuditor").hide();
				
				$('#bufferImageOutletposm').show();	
				//alert(apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.repID);
				$.ajax({
				type: 'POST',
				url:apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.repID+"&town="+localStorage.select_town,
																																																														
				success: function(result) {	
					var syncResultArray = result.split('rdrd');	
					if(syncResultArray[0]=='Success'){	
						$('#bufferImageOutletposm').hide();
						$("#posmAuditor").show();
						localStorage.posmOutletCode=syncResultArray[1];
						localStorage.posmOutletName=syncResultArray[2];
						localStorage.posmOutletTerritory=syncResultArray[3];
						localStorage.posmOutletRoute=syncResultArray[4];
						localStorage.posmTown=syncResultArray[5];
						localStorage.posmBrand=syncResultArray[6];
						localStorage.outletDetailsLi=syncResultArray[7];
						localStorage.outletTaxAreaDFF=syncResultArray[8];
						
						if(localStorage.outletTaxAreaDFF!=''){
							var rectaxStrDFF=localStorage.outletTaxAreaDFF.split('|');
							var posmStrTaxAreaDFF = '<select id="outletTaxAreaDFFListRec" class="auto_break" name="outletTaxAreaDFFListRec"  style="width:150px; display:inline-block;"><option selected="selected" value="">Select Tax Area</option>'
							for (i=0;i<rectaxStrDFF.length;i++){	
								
								posmStrTaxAreaDFF += '<option value="'+rectaxStrDFF[i]+'">'+rectaxStrDFF[i]+'</option>'
							}
							posmStrTaxAreaDFF+='</select>'
							posmStrTaxAreaDFF =posmStrTaxAreaDFF
							localStorage.rectaxStrDFF=posmStrTaxAreaDFF;
							
							$("#TaxAreaDFFRec").empty();
							$("#TaxAreaDFFRec").append(localStorage.rectaxStrDFF).trigger('create');	
						}else{
								$("#TaxAreaDFFRec").empty();
								}
						
						var auditorBrand=localStorage.posmBrand.split(',');
						var brandStr = '<select id="auditorPOSMBrandList" class="auto_break" name="auditorPOSMBrandList"  style="display:inline-block;"><option selected="selected" value="">Select Brand</option>'
						for (i=0;i<auditorBrand.length;i++){	
							brandStr += '<option value="'+auditorBrand[i]+'">'+auditorBrand[i]+'</option>'
						}
						brandStr+='</select>'
						localStorage.auditorPOSMBrand=brandStr;
						$("#auditorPOSMBrandListShow").empty();
						$("#auditorPOSMBrandListShow").append(localStorage.auditorPOSMBrand).trigger('create');
						
						if (localStorage.posmOutletCode==''){
								$('#posmOuditOutletList').hide();
								$("#posmReportAuditSub").hide();
								$("#btn_posm_entry").hide();
								$("#posmAuditor").hide();
								$(".errposmAudit").text("দোকানটি লিষ্টে নাই |");								
							}else{								
								$('#posmOuditOutletList').show();
								$('#posmOutletCode').text(localStorage.posmOutletCode+'|'+localStorage.posmOutletName);
								$('#posmOutleAddress').text(localStorage.posmOutletTerritory);
								$('#posmOutleRoute').text(localStorage.posmOutletRoute);
								$('#posmOutleTown').text(localStorage.posmTown);
								
								if (localStorage.outletDetailsLi ==''){
									
									$('#dffsubmittedDetailsData').hide();
									$("#dffsubmitfrom").show();
									$('#posmOuditOutletList').empty();
								}else{
									
									$('#dffsubmittedDetailsData').show();
									$("#posmAuditor").show();	
									$("#dffsubmitfrom").hide();
									
									var posmOutletDetails = localStorage.outletDetailsLi.split('fdfd');
									
									var posmAuditOutletStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
										for (i=0;i<posmOutletDetails.length;i++){					
											posmOutletLi=posmOutletDetails[i].split('|');
											
											posmAuditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Shop Board Available : "+posmOutletLi[0]+' | '+"Brand : "+posmOutletLi[1]+' | '+"POSM type : "+posmOutletLi[2]+' | '+"Board Qty : "+posmOutletLi[3]+' | '+"Board Condition : "+posmOutletLi[4]+' | '+"Mega Hanger : "+posmOutletLi[5]+' | '+"Mega Hanger Condition : "+posmOutletLi[6]+' | '+"Plugin Dispenser : "+posmOutletLi[7]+' | '+"Plugin Dispenser Condition : "+posmOutletLi[8]+' | '+"Mini Solomon : "+posmOutletLi[9]+' | '+"Skin Care : "+posmOutletLi[10]+' | '+"Skin Care Condition : "+posmOutletLi[11]+' | '+"Hair Care : "+posmOutletLi[12]+' | '+"Hair Care Condition : "+posmOutletLi[13]+' | '+"Drug Store Posm : "+posmOutletLi[14]+' | '+"POSM Qty : "+posmOutletLi[15]+' | '+"POSM Condition : "+posmOutletLi[16]+' | '+"Tax Area : "+posmOutletLi[17]+'</p>'
										}
										//alert(posmAuditOutletStr);
										localStorage.posmOuditOutletList=posmAuditOutletStr;
										//alert (localStorage.posmOuditOutletList);		
										$('#dffsubmittedDetailsData').empty();
										$('#dffsubmittedDetailsData').append(localStorage.posmOuditOutletList).trigger('create');
									}
							}
					}	
				},error: function(){
					$('#bufferImageOutletposm').hide();
					$('#posmOuditOutletList').hide();
					$("#posmAuditor").hide();
					$(".errAudit").text("Please check internet connection");
				}
			});
		}
	}
		
			$("#routeSelectA").html('Route	:		' + rName);
			$("#outletSelect").html('Outlet	:	' + outletIDName);
			$(".errorChk").text("");	
			
			$(".sucMsgU").hide();
			$("#btn_submit_usages").hide();
			$("#allHide").hide();
			$("#bufferImageU").hide();
			$("#usageSubmitbufferImage").hide();		
			if(localStorage.rep_type =='CM'){
				$("#townAusa").html('Town	:		' + localStorage.select_town.replace('|','-'));	
				url="#page5";					
			}else if (localStorage.rep_type =='SUPERVISOR'){
				$("#townAusa").html('Town	:		' + localStorage.select_town.replace('|','-'));
				url="#page5";
				
			}else if (localStorage.rep_type =='DFF'){
				$("#townDFFAudit").html('Town	:		' + localStorage.select_town.replace('|','-'));
				$("#routeSelectDFF").html('Route		:		' + rName);
				$("#outletSelectDFF").html('Outlet		:	' + outletIDName);
				
				/*localStorage.auditorPOSMBrand=brandStr;
				$("#auditorPOSMBrandList").empty();
				$("#auditorPOSMBrandList").append(localStorage.auditorPOSMBrand).trigger('create');*/
				
				boardCresteN = '<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="posmBoard" id="radio-choice-h-6a" value="YES"  type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6a">YES</label><input name="posmBoard" id="radio-choice-h-6b"  value="NO" type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
				$("#boarAvailableCrest").empty();
				$("#boarAvailableCrest").append(boardCresteN).trigger('create');
				
				posmCreateN = '<input type="hidden" id="rowID" name="rowID" /><fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="auditPosm_type" id="radio-choice-h-6a" value="SHOPBOARD_BACKLIT"   type="radio"><label for="radio-choice-h-6a">Lit</label><input name="auditPosm_type" id="radio-choice-h-6b"  value="SHOPBOARD_NONLIT" type="radio"><label for="radio-choice-h-6b">Non-Lit</label></fieldset>'
				
				$("#posmConditionCrest").empty();
				$("#posmConditionCrest").append(posmCreateN).trigger('create');
				
				posmBoardConditionN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="boardCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="boardCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>';
				
				$("#posmBoardConditionCrest").empty();
				$("#posmBoardConditionCrest").append(posmBoardConditionN).trigger('create');
				
				posmMegaHangerCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="megaHanger" id="radio-choice-h-6a" value="YES"  type="radio" onchange="megaHangerYesNo();"><label for="radio-choice-h-6a">YES</label><input name="megaHanger" id="radio-choice-h-6b"  value="NO" type="radio" onchange="megaHangerYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmMegaHangerCrest").empty();
				$("#posmMegaHangerCrest").append(posmMegaHangerCrestN).trigger('create');
				
				posmMegaHangerConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="megaHangerCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="megaHangerCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
				
				$("#posmMegaHangerConditionCrest").empty();
				$("#posmMegaHangerConditionCrest").append(posmMegaHangerConditionCrestN).trigger('create');
				
				posmPlugInDispenserCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="plugInDispenser" id="radio-choice-h-6a" value="YES"  type="radio" onchange="plugInDispenserYesNo();"><label for="radio-choice-h-6a">YES</label><input name="plugInDispenser" id="radio-choice-h-6b"  value="NO" type="radio" onchange="plugInDispenserYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmPlugInDispenserCrest").empty();
				$("#posmPlugInDispenserCrest").append(posmPlugInDispenserCrestN).trigger('create');
				
				plugInDispenserConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="plugInDispenserCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="plugInDispenserCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
				
				$("#plugInDispenserConditionCrest").empty();
				$("#plugInDispenserConditionCrest").append(plugInDispenserConditionCrestN).trigger('create');
				
				posmMiniSolomonCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="miniSolomon" id="radio-choice-h-6a" value="YES"  type="radio" onchange="miniSolomonYesNo();"><label for="radio-choice-h-6a">YES</label><input name="miniSolomon" id="radio-choice-h-6b"  value="NO" type="radio" onchange="miniSolomonYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmMiniSolomonCrest").empty();
				$("#posmMiniSolomonCrest").append(posmMiniSolomonCrestN).trigger('create');
				
				posmMiniSkinCareCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="skinCare" id="radio-choice-h-6a" value="YES"  type="radio" onchange="skinCareYesNo();"><label for="radio-choice-h-6a">YES</label><input name="skinCare" id="radio-choice-h-6b"  value="NO" type="radio" onchange="skinCareYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmMiniSkinCareCrest").empty();
				$("#posmMiniSkinCareCrest").append(posmMiniSkinCareCrestN).trigger('create');
				
				posmMiniskinCareConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="skinCareCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="skinCareCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
				
				$("#posmMiniskinCareConditionCrest").empty();
				$("#posmMiniskinCareConditionCrest").append(posmMiniskinCareConditionCrestN).trigger('create');
				
				posmMiniHairCareCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="hairCare" id="radio-choice-h-6a" value="YES"  type="radio" onchange="hairCareYesNo();"><label for="radio-choice-h-6a">YES</label><input name="hairCare" id="radio-choice-h-6b"  value="NO" type="radio" onchange="hairCareYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmMiniHairCareCrest").empty();
				$("#posmMiniHairCareCrest").append(posmMiniHairCareCrestN).trigger('create');
				
				posmhairCareConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="hairCareCondition" id="radio-choice-h-6a" value="Good"  type="radio" ><label for="radio-choice-h-6a">Good</label><input name="hairCareCondition" id="radio-choice-h-6b"  value="Bad" type="radio" ><label for="radio-choice-h-6b">Bad</label></fieldset>'
				
				$("#posmhairCareConditionCrest").empty();
				$("#posmhairCareConditionCrest").append(posmhairCareConditionCrestN).trigger('create');
				
				posmDrugStorePOSMCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="drugStorePosm" id="radio-choice-h-6a" value="YES"  type="radio" onchange="drugStorePosmYesNo();"><label for="radio-choice-h-6a">YES</label><input name="drugStorePosm" id="radio-choice-h-6b"  value="NO" type="radio" onchange="drugStorePosmYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
				
				$("#posmDrugStorePOSMCrest").empty();
				$("#posmDrugStorePOSMCrest").append(posmDrugStorePOSMCrestN).trigger('create');
				
				posmdrugStorePosmConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="drugStorePosmCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="drugStorePosmCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
				
				$("#posmdrugStorePosmConditionCrest").empty();
				$("#posmdrugStorePosmConditionCrest").append(posmdrugStorePosmConditionCrestN).trigger('create');
				
				$("#drugStorePosmQtyShow").hide();
				$("#drugStorePosmConditionShow").hide();
				$("#miniSolomonConditionSkinShow").hide();
				$("#miniSolomonConditionHairShow").hide();
				$("#skinCareConditionShow").hide();
				$("#hairCareConditionShow").hide();
				$("#plugInDispenserConditionShow").hide();
				$("#megaHangerConditionShow").hide();
				$("#posmAuditBrandShow").hide();
				$("#posmAuditposmShow").hide();
				$("#posmAuditBoardQtyShow").hide();
				$("#posmAuditBoardConditionShow").hide();
				$("#btn_submit_posmAudit").show();
				$("#submit_data_posmAuditor_Save").show();
				$("#allHideAuditPosm").show();
				$("#posmAuditSubmitBufferImage").hide();
				$("#msg_submit_posmAudit").hide();
				$("#msg_Save_posmAudit").hide();
				
				
				url="#page18";				
				
			}else{
				$("#routeSelectAbc").html('Route		:		' + rName);
				$("#outletSelectAbc").html('Outlet		:	' + outletIDName);
				$("#sucMsgAgency").hide();
				$("#bufferImageAgency").hide();
				$("#btn_submit_Agency").hide();
				$("#recDataAgency").hide();
				$("#allHideAgency").hide();
				$("#auditAgencySubmitBufferImage").hide();
				
				 agencyAuditPaintComboN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="paint" id="radio-choice-h-6a" value="YES"  type="radio"><label for="radio-choice-h-6a">YES</label><input name="paint" id="radio-choice-h-6b"  value="NO" type="radio"><label for="radio-choice-h-6b">NO</label></fieldset>'
				 
				$("#agencyAuditPaintCombo").empty();
				$("#agencyAuditPaintCombo").append(agencyAuditPaintComboN).trigger('create');

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
	$("#imageName2").val("");
	
	$("#recData").hide();	
	$(".sucMsgU").hide();

	posmCode=$("#posmCodeUsges").val();

	if (posmCode=='' || posmCode==null){
		$(".errorChkP").text("Select posm Code");
		$("#btn_submit_usages").hide();
		$("#recData").hide();
		$("#allHide").hide();	
	}else{
		
		//alert (apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.select_town);
		$("#bufferImageU").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.select_town,																																																											
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){	
					$("#bufferImageU").hide();
					$("#btn_submit_usages").show();
					$("#recData").show();
					$("#allHide").show();
					$(".errorChkP").text("");
						
					var posmType=resultArray[1];	
					var brand=resultArray[2];
					var a_qty=resultArray[3];
					var balance_qty=resultArray[4];
					var alc_id=resultArray[5];
					var imageUsage=resultArray[6];
					var imageUsa = '<img height="100px"  src="'+apipath_image+'static/images/alc_image/'+imageUsage+'" alt="Execution Image" />';
					$("#imageExecution").empty();
					$("#imageExecution").append(imageUsa).trigger('create');
					
					$("#uposm_type").html("Posm Type	:	"+ posmType);
					$("#ubrand").html("Brand	:	"+brand);
					$("#uallocation").html("Received Qty:	"+a_qty);
					$("#balance").html("Balance Qty:	"+balance_qty);
					$("#uposm_type").val(posmType);
					$("#ubrand").val(brand);
					$("#balance").val(balance_qty);
					$("#ualcId").val(alc_id);
				}else{
					$("#bufferImageU").hide();
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

	
	town=localStorage.select_town.replace('-', '|');
		
	
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
	}else if (imageName2==''){
		$(".errorChk").text("Required Picture");
		$("#btn_submit_usages").show();	
	}else{
		$("#usageSubmitbufferImage").show();		
		//alert(apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#usagePOSMSelect").empty();
					$("#usagePOSMSelect").append(localStorage.posmCodeSup).trigger('create');
					$("#usageSubmitbufferImage").hide();	
					$("#uposm_type").val("");
					$("#ubrand").val("");
					$("#baUsage").val("");
					$("#qty").val("");	
					$("#usePhoto_name").val("");
					$("#usePhoto_path").val("");
					
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
						$("#usageSubmitbufferImage").hide();				
						$(".errorChk").text("Usage Qty less then Balance Qty");
						$("#allHide").show();
						$("#btn_submit_usages").show();	
				}else{
					$("#usageSubmitbufferImage").hide();
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

/**------------------------Agency Submit Data ----------------------------********/
function alloDetailsAgency(){
	$("#agencyQty").val("");
	$("#set").val("");
	$("#light").val("");
	$("#paint").val("");
	$("#citycor").val("");
	$("#acity").val('');
	$("#imageName3").val("");
	$(".errorChk").text("");
	$(".errorChkP").text("");
	$("#bufferImageAgency").hide();
	$("#recDataAgency").hide();
	$("#btn_submit_Agency").hide();	
	$("#sucMsgAgency").hide();
	
	
	var posmCode=$("#posmCodeAgn").val();
	if (posmCode=='' || posmCode==null){
		$(".errorChkP").text("Select posm Code");
		$("#btn_submit_Agency").hide();
		$("#recDataAgency").hide();
		$("#allHideAgency").hide();	
	}else{
		//alert (apipath+"getAllDataAgncy?&posmCode="+posmCode+"&town="+town);
		$("#bufferImageAgency").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataAgncy?&posmCode="+posmCode+"&town="+localStorage.select_town,																																																										
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){
						
					
					$("#bufferImageAgency").hide();
					$("#btn_submit_Agency").show();
					$("#recDataAgency").show();
					$("#allHideAgency").show();
					$(".errorChk").text("");
						
					if(localStorage.agencyTaxarea!=''){
					var posmagencyTaxarea=localStorage.agencyTaxarea.split('fdfd');
					var posmStrTaxArea = '<select id="taxAreaComboSelect" class="auto_break" name="taxAreaComboSelect"><option selected="selected" value="">Select Tax Area</option>'
					for (i=0;i<posmagencyTaxarea.length;i++){	
						
						posmStrTaxArea += '<option value="'+posmagencyTaxarea[i]+'">'+posmagencyTaxarea[i]+'</option>'
					}
					posmStrTaxArea+='</select>'
					posmStrTaxArea =posmStrTaxArea
					localStorage.posmagencyTaxarea=posmStrTaxArea;
					
					$("#taxAreaComboSelectRec").empty();
					$("#taxAreaComboSelectRec").append(localStorage.posmagencyTaxarea).trigger('create');	
					}else{
						$("#taxAreaComboSelectRec").empty();
						}
						
					var posmType=resultArray[1];	
					var brand=resultArray[2];
					var allo_qty=resultArray[3];
					var balance_qty=resultArray[4];
					var imageAgn=resultArray[5];
					
					var imageAgency = '<img height="100px"  src="'+apipath_image+'static/images/alc_image/'+imageAgn+'" alt="Execution Image" />';
					$("#imageExecutionAgency").empty();
					$("#imageExecutionAgency").append(imageAgency).trigger('create');
					
					
					$("#agencyposm_type").html("Posm Type	:	"+ posmType);
					$("#agencybrand").html("Brand	:	"+brand);
					$("#agencyallocation").html("Allocation Qty:	"+allo_qty);
					$("#agencydue").html("Balance Qty:	"+balance_qty);
					$("#agencyposm_type").val(posmType);
					$("#agencybrand").val(brand);
					$("#agencydue").val(balance_qty);
					$("#agencyallocation").val(allo_qty);
					
				}else{
					$("#bufferImageAgency").hide();
					$(".errorChk").text("Please check internet connection");
				}
			}
		})
	}
}

var acity=''
function submit_data_agency(){
	
	$("#btn_submit_Agency").hide();
	var posmCode=$("#posmCodeAgn").val();
	var posmType=$("#agencyposm_type").val();
	var brandAgency=$("#agencybrand").val();
	var balanceAgency=$("#agencydue").val();
	var allocationAgency=$("#agencyallocation").val();
	var reggg = /^[0-9]*$/;
	var aqty=$("#agencyQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var aset=$("#set").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var alight=$("#light").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	var apaint=$('input[name=paint]:checked').val();
	if(apaint==undefined){
		apaint='';
	}
	
	acity=$("#taxAreaComboSelect").val();
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
	}else if (acity=='' || acity==undefined){
		$(".errorChk").text("Required City Corporation");
		$("#btn_submit_Agency").show();
	}else if (imageName3==''){
		$(".errorChk").text("Required Picture");
		$("#btn_submit_Agency").show();	
	}else{
		
		$("#auditAgencySubmitBufferImage").show();
		//alert(apipath+"submitData_agency?&syncCode="+localStorage.sync_code+"&posmCode="+posmCode+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_agency?&syncCode="+localStorage.sync_code+"&posmCode="+posmCode+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&routeName="+rName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#agencyPOSMrec").empty();
					$("#agencyPOSMrec").append(localStorage.posmCode_agency).trigger('create');
					$("#taxAreaComboSelectRec").empty();
					$("#taxAreaComboSelectRec").append(localStorage.posmagencyTaxarea).trigger('create');
					$("#auditAgencySubmitBufferImage").hide();
					$("#aqty").val("");
					$("#aset").val("");
					$("#alight").val("");
					$('input[name=paint]:checked').val("");
					$("#acity").val('');
					$("#agnPhoto_name").val("");
					$("#agnPhoto_path").val("");
					
					$("#agencyAuditPaintCombo").empty();
					$("#agencyAuditPaintCombo").append(agencyAuditPaintComboN).trigger('create');
					
					
					$("#allHideAgency").hide();
					$("#sucMsgAgency").show();
					$(".errorChk").text("");
					$("#btn_submit_Agency").hide();
					document.getElementById('myImageC').src = '';
					uploadPhotoAgency(imagePathC, imageName3);
					url="#page14";					
					$.mobile.navigate(url);				
				}else if (result=='Faild'){	
						$("#auditAgencySubmitBufferImage").hide();				
						$(".errorChk").text("Usage Qty less then Balance Qty");
						$("#allHideAgency").show();
						$("#btn_submit_Agency").show();	
				}else{
					$("#auditAgencySubmitBufferImage").hide();
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
	$("#agnPhoto_name").val('');
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
	/*if (localStorage.rep_type == 'CM'){
		$("#recReport").hide();
		
	}else{
		$("#recReport").show();
		$("#allHide").show();
	}*/
	
	$(".errorChk").text("");			
	url="#page9";				
	$.mobile.navigate(url);	
}

function repoAgency(){
	
	$(".errorChk").text("");			
	url="#reportPageA9";				
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
					rectable += '<tr style="font-size:12px;" ><th>Date and Time</th><th>Brand</th><th>POSM Type</th><th>POSM Code</th><th>Receive Qty</th><th>Defective Qty</th><th>Stock</th></tr>'
					for (i=0;i<ReceiveRpt.length;i++){	
						recordR=ReceiveRpt[i].split('|');
						dateR=recordR[0];
						brand=recordR[1];
						posmType=recordR[2];
						recQty=recordR[3];
						stock=recordR[4];
						posmCode=recordR[5];
						defectqty=recordR[6];
								
						rectable +='<tr style="font-size:11px;"><td>'+dateR+'</td><td>'+brand+'</td><td>'+posmType+'</td><td>'+posmCode+'</td><td style="text-align:center;">'+recQty+'</td><td style="text-align:center;">'+defectqty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					rectable +='</table>'
					$('#receiveReportR').empty();
					$('#receiveReportR').append(rectable).trigger('create');
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameR").html ("Town	:		"+townName);
					$("#repIDR").html ("Rep ID	:		"+repid);
					
			}else{
				$("#bufferImageRecR").hide();
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
	$('#usageReportR').empty();
	var fr_date=$("#fr_date").val();
	var to_date=$("#to_date").val();
	
	//alert (apipath+"usage_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+localStorage.select_town+"&fr_date="+fr_date+"&to_date="+to_date)
	$("#bufferImageUsaR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"usage_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+localStorage.select_town+"&fr_date="+fr_date+"&to_date="+to_date,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$("#bufferImageUsaR").hide();				
				localStorage.usageReportR=getResult[1];
				//alert(localStorage.usageReportR);
				var UsageRpt=localStorage.usageReportR.split('rdrd');			
				var usatable='<table id="usageRepp">';
					usatable +='<tr style="font-size:12px;" ><th>Date and Time</th><th>Outlet Code</th><th>Outlet Name</th><th>Brand</th><th>POSM Type</th><th>POSM Code</th><th>Usage Qty</th></tr>'
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
					$("#townNameU").html ("Town	:		"+localStorage.select_town);
					$("#repIDU").html ("Rep ID	:		"+repid);	
				}else if(getResult[0]=='failed'){
					$("#bufferImageUsaR").hide();
					$(".errorChk").text(getResult[1]);
			}else{
				$("#bufferImageUsaR").hide();
				var townName=town;
				var repid=localStorage.repID;
				$("#townNameU").html ("Town	:		"+localStorage.select_town);
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
	
	var selectPOSM=$("#selectPOSM").val();
	
	//alert (apipath+"stock_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+localStorage.select_town+"&selectPOSM="+selectPOSM)
	$("#bufferImageStockR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"stock_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+localStorage.select_town+"&selectPOSM="+selectPOSM,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#bufferImageStockR").hide();				
				localStorage.stockReport=getResult[1];	
				
				var stockRPT=localStorage.stockReport.split('rdrd');			
				var cmRouteSTr='<table id="stockRepp">';
					cmRouteSTr += '<tr style="font-size:12px;"><th>Brand</th><th>POSM Type</th><th>POSM Code</th><th>Allocation</th><th>Receive</th><th>Defective</th><th>Usage</th><th>Stock</th></tr>'
					for (i=0;i<stockRPT.length;i++){	
						stockR=stockRPT[i].split('|');
						brand=stockR[0];
						posmType=stockR[1];
						posmCode=stockR[2];
						allocation=stockR[3];
						stock=stockR[4];
						receiveQty=stockR[5];
						defectiveQty=stockR[6];
						usageQty=stockR[7];	
											
						cmRouteSTr += '<tr style="font-size:11px;"><td>'+brand+'</td><td>'+posmType+'</td><td>'+posmCode+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+receiveQty+'</td><td style="text-align:center;">'+defectiveQty+'</td><td style="text-align:center;">'+usageQty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					cmRouteSTr +='</table>'
					$('#stockReport').empty();
					$('#stockReport').append(cmRouteSTr).trigger('create');
					$('#posmAllStrListAllRec').empty();
					$('#posmAllStrListAllRec').append(localStorage.posmAllStr).trigger('create');
					
					var repid=localStorage.repID;
					$("#townName").html ("Town	:		"+localStorage.select_town);
					$("#repID").html ("Rep ID	:		"+repid);
				
			}else{
				
				$("#bufferImageStockR").hide();
				var repid=localStorage.repID;
				$("#townName").html ("Town	:		"+localStorage.select_town);
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
	$('#menuBufferingImage').show();
	$("#bufferImageAgencyA").show();
	$.ajax({
			type: 'POST',
			url:apipath+"agency_report?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$('#menuBufferingImage').hide();
				$("#bufferImageAgencyA").hide();				
				localStorage.usageReportA=getResult[1];
				var agnRpt=localStorage.usageReportA.split('rdrd');			
				var agentable='<table id="sumRepp">';
					agentable +='<tr style="font-size:12px;" ><th>Date and Time</th><th>Outlet Code</th><th>Outlet Name</th><th>Tax Area</th><th>Brand</th><th>POSM Type</th><th>POSM Code</th><th>Usage Qty</th></tr>'
					for (i=0;i<agnRpt.length;i++){	
						agnR=agnRpt[i].split('|');
						date=agnR[0];
						outletid=agnR[1];
						outletname=agnR[2];
						posmcode=agnR[3];
						qty=agnR[4];
						brand=agnR[5];
						posmtype=agnR[6];
						city_cor=agnR[7];
				
						agentable += '<tr style="font-size:11px;"><td>'+date+'</td><td>'+outletid+'</td><td>'+outletname+'</td><td>'+city_cor+'</td><td>'+brand+'</td><td>'+posmtype+'</td><td>'+posmcode+'</td><td style="text-align:center;">'+qty+'</td></tr>'
					
					}
					agentable +='</table>'
					
					
					$('#usageReportAgency').empty();
					$('#usageReportAgency').append(agentable).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameA").html ("Town	:		"+townName);
					$("#repIDA").html ("Rep ID	:		"+repid);
					
				
			}else{
				$("#bufferImageAgencyA").hide();
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

function stockAgency(){
	
	town=localStorage.select_town;
	
	//alert (apipath+"stock_RAgency?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town)
	$('#menuBufferingImage').show();
	$("#agencySTRimage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"stock_RAgency?&repID="+localStorage.repID+"&repName="+localStorage.repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$('#menuBufferingImage').hide();
				$("#agencySTRimage").hide();				
				localStorage.stockReportA=getResult[1];	
				
				var stockRPA=localStorage.stockReportA.split('rdrd');			
				var cmRouteSTA='<table id="stockAgnP">';
					cmRouteSTA += '<tr style="font-size:12px;"><th>Brand</th><th>POSM Type</th><th>POSM Code</th><th>Allocation</th><th>Usage</th><th>Stock</th></tr>'
					for (i=0;i<stockRPA.length;i++){	
						stockR=stockRPA[i].split('|');
						brand=stockR[0];
						posmType=stockR[1];
						posmCode=stockR[2];
						allocation=stockR[3];
						usage=stockR[4];
						balance=stockR[5];	
											
						cmRouteSTA += '<tr style="font-size:11px;"><td>'+brand+'</td><td>'+posmType+'</td><td>'+posmCode+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+usage+'</td><td style="text-align:center;">'+balance+'</td></tr>'
					
					}
					cmRouteSTA +='</table>'
					$('#stockAgencyS').empty();
					$('#stockAgencyS').append(cmRouteSTA).trigger('create');
					
					var townName=town;
					var repid=localStorage.repID;
					$("#townNameAgen").html ("Town	:		"+townName);
					$("#repIDAgen").html ("Rep ID	:		"+repid);
				
			}else{
				$("#agencySTRimage").hide();
				var townName=town;
				var repid=localStorage.repID;
				$("#townName").html ("Town	:		"+townName);
				$("#repID").html ("Rep ID	:		"+repid);
				$("#agencySTRimage").hide();
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChk").text("");			
	url="#page16";				
	$.mobile.navigate(url);
}

function exit() {
	navigator.app.exitApp();
}
function defective(){
	$('#menuBufferingImage').show();
$.ajax({
	  url:apipath+'get_posm_sup?select_town='+localStorage.select_town+"&repID="+localStorage.repID,
	  success: function(result) {
		var resultArray = result.split('rdrd');
			if (resultArray[0]=='Success'){	
			$('#menuBufferingImage').hide();
				localStorage.posmCodeCmSup=resultArray[1];
				localStorage.posmCodeAgency=resultArray[2];				
				localStorage.posmCodeCMUsage=resultArray[3];			
							//====CM/Sup	
			var posmCodeCmSup=localStorage.posmCodeCMUsage.split('fdfd');
			var posmStr = '<select id="posmCodedef" class="auto_break" name="posmCodedef" onchange="alloDetailsDef();"><option selected="selected" value="">Select POSM</option>'
			for (i=0;i<posmCodeCmSup.length;i++){	
				posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
				posmStr += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
			}
			posmStr +='</select>'
			posmStr =posmStr
			localStorage.posmCodeSup=posmStr;	
			
			$("#defectivePOSMSelect").empty();
			$("#defectivePOSMSelect").append(localStorage.posmCodeSup).trigger('create');	
				}
			}
		});
	$("#bufferImagedef").hide();
	$(".sucMsgdef").hide();
	$(".errorChk").text("");
	$("#allHideDef").hide();
	$("#btn_submit_defec").hide();	
	$("#defectiveSubmitbufferImage").hide();		
	url="#defective_page";					
	$.mobile.navigate(url);	
}
function alloDetailsDef(){
	$("#qty").val("");
	$(".errorChk").text("");
	$(".errorChkP").text("");
	$("#bufferImagedef").hide();
	$("#recDataDef").hide();	
	$(".sucMsgdef").hide();
	posmCode=$("#posmCodedef").val();
	if (posmCode=='' || posmCode=='undefined'){
		$(".errorChkP").text("Select posm Code");
		$("#btn_submit_defec").hide();
		$("#recDataDef").hide();
		$("#allHideDef").hide();	
	}else{
		
		//alert (apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.select_town);
		$("#bufferImagedef").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.select_town,																																																											
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){	
					$("#bufferImagedef").hide();
					$("#btn_submit_defec").show();
					$("#recDataDef").show();
					$("#allHideDef").show();
					$(".errorChkP").text("");
						
					var posmType=resultArray[1];	
					var brand=resultArray[2];
					var a_qty=resultArray[3];
					var balance_qty=resultArray[4];
					var alc_id=resultArray[5];
				
					
					$("#defposm_type").html("Posm Type	:	"+ posmType);
					$("#defbrand").html("Brand	:	"+brand);
					$("#defallocation").html("Stock Qty:	"+a_qty);
					$("#defbalance").html("Balance Qty:	"+balance_qty);
					$("#defposm_type").val(posmType);
					$("#defbrand").val(brand);
					$("#defbalance").val(balance_qty);
					$("#ualcId").val(alc_id);
				}else{
					$("#bufferImagedef").hide();
					$(".errorChk").text("Please check internet connection");
				}
			}
		})
	}
}

function submit_data_defective(){
	
	$("#btn_submit_defec").hide();
	var d = new Date();	
	var get_time=d.getTime();

	town=localStorage.select_town.replace('-', '|');

	var uposm_type=$("#defposm_type").val();
	
	var ubrand=$("#defbrand").val();
	var baUsage=$("#defbalance").val();
	var alcId=$("#ualcId").val();
	
	var regg = /^[0-9]*$/;
	var a_qty=$("#def_qty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	
	imageName6=$("#defPhoto_name").val();
	imagePathE=$("#defPhoto_path").val();
	
	if (!regg.test(a_qty)){
		$(".errorChk").text("Qty must Number");
		$("#btn_submit_defec").show();
	}else if(a_qty=='' || a_qty==0){
		$(".errorChk").text("Required Defective Qty");
		$("#btn_submit_defec").show();
	}else if (imageName6==''){
		$(".errorChk").text("Required Picture");
		$("#btn_submit_defec").show();	
	}else{
		$("#defectiveSubmitbufferImage").show();		
		//alert(apipath+"submitData_defective?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName6="+imageName6);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_defective?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+town+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName6="+imageName6,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#defectivePOSMSelect").empty();
					$("#defectivePOSMSelect").append(localStorage.posmCodeSup).trigger('create');
					$("#defectiveSubmitbufferImage").hide();
					$("#uposm_type").val("");
					$("#ubrand").val("");
					$("#baUsage").val("");
					$("#def_qty").val("");	
					$("#defPhoto_name").val("");
					$("#defPhoto_path").val("");
					
					document.getElementById('myImageE').src = '';
					
					$(".errorChk").text("");
					$(".sucMsgdef").show();
					$("#allHideDef").hide();
					$("#btn_submit_defec").hide();
					uploadPhotoDefective(imagePathE, imageName6);
					$(".sucMsgdef").text('Successfully Submitted');
					url="#defective_page";					
					$.mobile.navigate(url);	
				}else if (result=='Faild'){
						$("#defectiveSubmitbufferImage").hide();					
						$(".errorChk").text("Defective Qty less then Balance Qty");
						$("#allHideDef").show();
						$("#btn_submit_defec").show();	
				}else{
					$("#defectiveSubmitbufferImage").hide();
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_defec").show();
					$("#allHideDef").show();
					
				}
				
			}//end result
		});//end ajax
		
	}
}
function getdefectiveImage() {
	var get_time=$.now();
	var image_Name = localStorage.mobileNo+"_"+get_time+".jpg";
	$("#defPhoto_path").val(image_Name);
	$("#defPhoto_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccessE, onFailE, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessE(imageURI) {		
    var image = document.getElementById('myImageE');
    image.src = imageURI;
	var image_path = "defPhoto_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFailE(message) {
	imagePathE="";
	$("#defPhoto_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoDefective(imageURI, imageName6) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName6;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win6,onfail6,options);
}

function win6(r) {	
	$(".errorChk").text('');
}

function onfail6(r) {
	$(".errorChk").text('');
	$("#btn_submit_defec").hide();
}

function reportAuditSub(){
	
	//alert (apipath+"reports_AuditorAgency?&repID="+localStorage.repID)
	$("#agencyAuSTRimage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"reports_AuditorAgency?&repID="+localStorage.repID,
																																																													
			success: function(result) {
				//alert(result);
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#agencyAuSTRimage").hide();				
				localStorage.stockReporta=getResult[1];	
				
				var repkRPA=localStorage.stockReporta.split('rdrd');			
				var cmRouteSTAD='<table id="">';
					cmRouteSTAD += '<tr style="font-size:12px;"><th>DATE</th><th>Outlet Code</th><th>Outlet Name</th><th>Tax Area</th><th>BRAND</th><th>POSM Type</th><th>Board Qty</th><th>Status</th></tr>'
					for (i=0;i<repkRPA.length;i++){	
						stockR=repkRPA[i].split('|');
						auditdate=stockR[0];
						a_outlet_code=stockR[1];
						a_outlet_name=stockR[2];
						a_brand=stockR[3];
						a_posm_type=stockR[4];
						a_board_qty=stockR[5];
						a_status=stockR[6];
						a_tax_area=stockR[7];
						if (a_brand=='blank'){
							a_brand=''
						}
						if(a_posm_type=='blank'){
							a_posm_type=''
							}
											
						cmRouteSTAD += '<tr style="font-size:11px;"><td>'+auditdate+'</td><td>'+a_outlet_code+'</td><td>'+a_outlet_name+'</td><td>'+a_tax_area+'</td><td>'+a_brand+'</td><td style="text-align:center;">'+a_posm_type+'</td><td style="text-align:center;">'+a_board_qty+'</td><td style="text-align:center;">'+a_status+'</td></tr>'
					
					}
					cmRouteSTAD +='</table>'
					$('#reportAudAgencyS').empty();
					$('#reportAudAgencyS').append(cmRouteSTAD).trigger('create');
					
					var repid=localStorage.repID;
					$("#repIDAu").html ("Rep ID	:		"+repid);
				
				}else{
				$("#agencyAuSTRimage").hide();
				var repid=localStorage.repID;
				$("#repIDAu").html ("Rep ID	:		"+repid);
				$("#agencyAuSTRimage").hide();
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChk").text("");			
	url="#page17";				
	$.mobile.navigate(url);
}

function posmReportAuditSub(){
	$('#reportPosmAudRec').empty();
	//alert (apipath+"reports_posmAuditor?&repID="+localStorage.repID)
	$("#posmAuditRecordBufferImage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"reports_posmAuditor?&repID="+localStorage.repID,
																																																													
			success: function(result) {
				//alert(result);
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#posmAuditRecordBufferImage").hide();				
				localStorage.posmAuditRec=getResult[1];	
				
				var repPosmAud=localStorage.posmAuditRec.split('rdrd');			
				var cmRouteSTADA='<table id="">';
				
					cmRouteSTADA += '<tr style="font-size:12px;"><th>Date and Time </th><th>Region</th><th>Territory</th><th>Town Code</th><th>Town Name</th><th>Tax Area</th><th>Outlet Code</th><th>Outlet Name</th></tr>'
					for (i=0;i<repPosmAud.length;i++){	
						PosmAudData=repPosmAud[i].split('|');
						posmauditdate=PosmAudData[0];
						posmoutlet_region=PosmAudData[1];
						posmoutlet_territory=PosmAudData[2];
						posmtownCode=PosmAudData[3];
						posmTownName=PosmAudData[4];
						posmOutletCode=PosmAudData[5];
						posmOutletName=PosmAudData[6];
						posmTaxarea=PosmAudData[7];
											
						cmRouteSTADA += '<tr style="font-size:11px;"><td>'+posmauditdate+'</td><td>'+posmoutlet_region+'</td><td>'+posmoutlet_territory+'</td><td>'+posmtownCode+'</td><td style="text-align:center;">'+posmTownName+'</td><td style="text-align:center;">'+posmTaxarea+'</td><td style="text-align:center;">'+posmOutletCode+'</td><td style="text-align:center;">'+posmOutletName+'</td></tr>'
					
					}
					cmRouteSTADA +='</table>'
					$('#reportPosmAudRec').empty();
					$('#reportPosmAudRec').append(cmRouteSTADA).trigger('create');
					
					var repid=localStorage.repID;
					var repName=localStorage.repName;
					$("#repIDPosmAud").html ("Rep ID	:		"+repid);
					$("#repNamePosmAud").html ("Rep Name	:		"+repName);
				
				}else{
				$("#posmAuditRecordBufferImage").hide();
				var repid=localStorage.repID;
				$("#repIDPosmAud").html ("Rep ID	:		"+repid);
				$("#posmAuditRecordBufferImage").hide();
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChk").text("");			
	url="#page20";				
	$.mobile.navigate(url);
}

function posmAuditorNext(){
	
	boardCresteN = '<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="posmBoard" id="radio-choice-h-6a" value="YES"  type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6a">YES</label><input name="posmBoard" id="radio-choice-h-6b"  value="NO" type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#boarAvailableCrest").empty();
	$("#boarAvailableCrest").append(boardCresteN).trigger('create');
	
	posmCreateN = '<input type="hidden" id="rowID" name="rowID" /><fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="auditPosm_type" id="radio-choice-h-6a" value="SHOPBOARD_BACKLIT"   type="radio"><label for="radio-choice-h-6a">Lit</label><input name="auditPosm_type" id="radio-choice-h-6b"  value="SHOPBOARD_NONLIT" type="radio"><label for="radio-choice-h-6b">Non-Lit</label></fieldset>'
	
	$("#posmConditionCrest").empty();
	$("#posmConditionCrest").append(posmCreateN).trigger('create');
	
	posmBoardConditionN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="boardCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="boardCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>';
	
	$("#posmBoardConditionCrest").empty();
	$("#posmBoardConditionCrest").append(posmBoardConditionN).trigger('create');
	
	posmMegaHangerCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="megaHanger" id="radio-choice-h-6a" value="YES"  type="radio" onchange="megaHangerYesNo();"><label for="radio-choice-h-6a">YES</label><input name="megaHanger" id="radio-choice-h-6b"  value="NO" type="radio" onchange="megaHangerYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmMegaHangerCrest").empty();
	$("#posmMegaHangerCrest").append(posmMegaHangerCrestN).trigger('create');
	
	posmMegaHangerConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="megaHangerCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="megaHangerCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#posmMegaHangerConditionCrest").empty();
	$("#posmMegaHangerConditionCrest").append(posmMegaHangerConditionCrestN).trigger('create');
	
	posmPlugInDispenserCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="plugInDispenser" id="radio-choice-h-6a" value="YES"  type="radio" onchange="plugInDispenserYesNo();"><label for="radio-choice-h-6a">YES</label><input name="plugInDispenser" id="radio-choice-h-6b"  value="NO" type="radio" onchange="plugInDispenserYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmPlugInDispenserCrest").empty();
	$("#posmPlugInDispenserCrest").append(posmPlugInDispenserCrestN).trigger('create');
	
	plugInDispenserConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="plugInDispenserCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="plugInDispenserCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#plugInDispenserConditionCrest").empty();
	$("#plugInDispenserConditionCrest").append(plugInDispenserConditionCrestN).trigger('create');
	
	posmMiniSolomonCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="miniSolomon" id="radio-choice-h-6a" value="YES"  type="radio" onchange="miniSolomonYesNo();"><label for="radio-choice-h-6a">YES</label><input name="miniSolomon" id="radio-choice-h-6b"  value="NO" type="radio" onchange="miniSolomonYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmMiniSolomonCrest").empty();
	$("#posmMiniSolomonCrest").append(posmMiniSolomonCrestN).trigger('create');
	
	posmMiniSkinCareCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="skinCare" id="radio-choice-h-6a" value="YES"  type="radio" onchange="skinCareYesNo();"><label for="radio-choice-h-6a">YES</label><input name="skinCare" id="radio-choice-h-6b"  value="NO" type="radio" onchange="skinCareYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmMiniSkinCareCrest").empty();
	$("#posmMiniSkinCareCrest").append(posmMiniSkinCareCrestN).trigger('create');
	
	posmMiniskinCareConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="skinCareCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="skinCareCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#posmMiniskinCareConditionCrest").empty();
	$("#posmMiniskinCareConditionCrest").append(posmMiniskinCareConditionCrestN).trigger('create');
	
	posmMiniHairCareCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="hairCare" id="radio-choice-h-6a" value="YES"  type="radio" onchange="hairCareYesNo();"><label for="radio-choice-h-6a">YES</label><input name="hairCare" id="radio-choice-h-6b"  value="NO" type="radio" onchange="hairCareYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmMiniHairCareCrest").empty();
	$("#posmMiniHairCareCrest").append(posmMiniHairCareCrestN).trigger('create');
	
	posmhairCareConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="hairCareCondition" id="radio-choice-h-6a" value="Good"  type="radio" ><label for="radio-choice-h-6a">Good</label><input name="hairCareCondition" id="radio-choice-h-6b"  value="Bad" type="radio" ><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#posmhairCareConditionCrest").empty();
	$("#posmhairCareConditionCrest").append(posmhairCareConditionCrestN).trigger('create');
	
	posmDrugStorePOSMCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="drugStorePosm" id="radio-choice-h-6a" value="YES"  type="radio" onchange="drugStorePosmYesNo();"><label for="radio-choice-h-6a">YES</label><input name="drugStorePosm" id="radio-choice-h-6b"  value="NO" type="radio" onchange="drugStorePosmYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#posmDrugStorePOSMCrest").empty();
	$("#posmDrugStorePOSMCrest").append(posmDrugStorePOSMCrestN).trigger('create');
	
	posmdrugStorePosmConditionCrestN='<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="drugStorePosmCondition" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="drugStorePosmCondition" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#posmdrugStorePosmConditionCrest").empty();
	$("#posmdrugStorePosmConditionCrest").append(posmdrugStorePosmConditionCrestN).trigger('create');
	
	$("#drugStorePosmQtyShow").hide();
	$("#drugStorePosmConditionShow").hide();
	$("#miniSolomonConditionSkinShow").hide();
	$("#miniSolomonConditionHairShow").hide();
	$("#skinCareConditionShow").hide();
	$("#hairCareConditionShow").hide();
	$("#plugInDispenserConditionShow").hide();
	$("#megaHangerConditionShow").hide();
	$("#posmAuditBrandShow").hide();
	$("#posmAuditposmShow").hide();
	$("#posmAuditBoardQtyShow").hide();
	$("#posmAuditBoardConditionShow").hide();
	$("#btn_submit_posmAudit").show();
	$("#submit_data_posmAuditor_Save").show();
	$("#allHideAuditPosm").show();
	$("#posmAuditSubmitBufferImage").hide();
	$("#msg_submit_posmAudit").hide();
	$("#msg_Save_posmAudit").hide();
	var posmOutletCode=localStorage.posmOutletCode;
	var posmOutletName=localStorage.posmOutletName;
	
	$("#outletCodePosmAudit").html("Outlet	:		"+posmOutletCode+' | '+posmOutletName);
	
	url="#page18";				
	$.mobile.navigate(url);
	
}
function posmboardYesNo(){

	var posmBoard=$('input[name=posmBoard]:checked').val();
	//alert(posmBoard);
	if(posmBoard=="YES"){
		$("#posmAuditBrandShow").show();
		$("#posmAuditposmShow").show();
		$("#posmAuditBoardQtyShow").show();
		$("#posmAuditBoardConditionShow").show();
		

	}else{
		$("#posmAuditBrandShow").hide();
		$("#posmAuditposmShow").hide();
		$("#posmAuditBoardQtyShow").hide();
		$("#posmAuditBoardConditionShow").hide();
	
		}
		
}
function megaHangerYesNo(){

	var megaHanger=$('input[name=megaHanger]:checked').val();
	
	if(megaHanger=="YES"){
		$("#megaHangerConditionShow").show();
		

	}else{
		$("#megaHangerConditionShow").hide();
		
		}
}
function plugInDispenserYesNo(){

	var plugInDispenser=$('input[name=plugInDispenser]:checked').val();
	
	if(plugInDispenser=="YES"){
		$("#plugInDispenserConditionShow").show();

	}else{
		
		$("#plugInDispenserConditionShow").hide();
		
		}
}
function miniSolomonYesNo(){

	var miniSolomon=$('input[name=miniSolomon]:checked').val();
	
	if(miniSolomon=="YES"){
		$("#miniSolomonConditionSkinShow").show();
		$("#miniSolomonConditionHairShow").show();
		
	}else{
		
		$("#miniSolomonConditionSkinShow").hide();
		$("#miniSolomonConditionHairShow").hide();
		$("#skinCareConditionShow").hide();
		$("#hairCareConditionShow").hide();
		}
}
function skinCareYesNo(){

	var skinCare=$('input[name=skinCare]:checked').val();
	
	if(skinCare=="YES"){
		$("#skinCareConditionShow").show();
		

	}else{
		$("#skinCareConditionShow").hide();
		
		}
}
function hairCareYesNo(){

	var hairCare=$('input[name=hairCare]:checked').val();
	
	if(hairCare=="YES"){
		$("#hairCareConditionShow").show();

	}else{
		$("#hairCareConditionShow").hide();
		
		
		}
}
function drugStorePosmYesNo(){

	var drugStorePosm=$('input[name=drugStorePosm]:checked').val();
	
	if(drugStorePosm=="YES"){
		$("#drugStorePosmQtyShow").show();
		$("#drugStorePosmConditionShow").show();
	}else{
		$("#drugStorePosmQtyShow").hide();
		$("#drugStorePosmConditionShow").hide();
		}
}



var posmBoard='';
var auditorPOSMBrandList='';
var auditPosm_type='';
var boardQty='';
var boardCondition='';
var megaHanger='';
var megaHangerCondition='';
var plugInDispenser='';
var plugInDispenserCondition='';
var miniSolomon='';
var skinCare='';
var skinCareCondition='';
var hairCare='';
var hairCareCondition='';
var drugStorePosm='';
var posmQty='';
var drugStorePosmCondition='';
var cityCorp_DFF='';

function submit_data_posmAuditor(){
	
	
	$("#submit_data_posmAuditor_Save").hide();
	$("#btn_submit_posmAudit").hide();
	$("#msg_submit_posmAudit").hide();
	$("#msg_Save_posmAudit").hide();
	var posmAuditOutSearch=outlet_codeDFF
	
	
	var d = new Date();	
	var get_time=d.getTime();
	
	posmBoard=$('input[name=posmBoard]:checked').val();
	//alert(typeof posmBoard);
	auditorPOSMBrandList=$("#auditorPOSMBrandList").val();
	auditPosm_type=$('input[name=auditPosm_type]:checked').val();
	boardQty=$("#boardQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	boardCondition=$('input[name=boardCondition]:checked').val();
	megaHanger=$('input[name=megaHanger]:checked').val();
	megaHangerCondition=$('input[name=megaHangerCondition]:checked').val();
	plugInDispenser=$('input[name=plugInDispenser]:checked').val();
	plugInDispenserCondition=$('input[name=plugInDispenserCondition]:checked').val();
	miniSolomon=$('input[name=miniSolomon]:checked').val();
	skinCare=$('input[name=skinCare]:checked').val();
	skinCareCondition=$('input[name=skinCareCondition]:checked').val();
	hairCare=$('input[name=hairCare]:checked').val();
	hairCareCondition=$('input[name=hairCareCondition]:checked').val();
	drugStorePosm=$('input[name=drugStorePosm]:checked').val();
	posmQty=$("#posmQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	drugStorePosmCondition=$('input[name=drugStorePosmCondition]:checked').val();
	cityCorp_DFF=$("#outletTaxAreaDFFListRec").val();
	

	if(posmBoard==undefined || posmBoard==''){
		$(".errorChk").text("Required POSM Board");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((auditorPOSMBrandList==undefined || auditorPOSMBrandList=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Brand");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((auditPosm_type==undefined || auditPosm_type=='') && posmBoard=="YES"){
		$(".errorChk").text("Required POSM Type");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((boardQty==0 || boardQty=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Board Qty");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((boardCondition==undefined || boardCondition=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Board Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(megaHanger==undefined || megaHanger==''){
		$(".errorChk").text("Required Mega Hanger");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((megaHangerCondition==undefined || megaHangerCondition=='') && megaHanger=="YES"){
		$(".errorChk").text("Required Mega Hanger Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(plugInDispenser==undefined || plugInDispenser==''){
		$(".errorChk").text("Required Plug In Dispenser");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((plugInDispenserCondition==undefined || plugInDispenserCondition=='') && plugInDispenser=="YES"){
		$(".errorChk").text("Required Plug In Dispenser Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(miniSolomon==undefined || miniSolomon==''){
		$(".errorChk").text("Required Mini Solomon");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((skinCare==undefined || skinCare=='') && miniSolomon=="YES"){
		$(".errorChk").text("Required Skin Care");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((skinCareCondition==undefined || skinCareCondition=='') && miniSolomon=="YES" && skinCare=="YES"){
		$(".errorChk").text("Required Skin Care Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((hairCare==undefined || hairCare=='') && miniSolomon=="YES"){
		$(".errorChk").text("Required Hair Care");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((hairCareCondition==undefined || hairCareCondition=='') && miniSolomon=="YES" && hairCare=="YES"){
		$(".errorChk").text("Required Hair Care Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(drugStorePosm==undefined || drugStorePosm==''){
		$(".errorChk").text("Required Drug Store Posm");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((posmQty==0 || posmQty=='') && drugStorePosm=="YES"){
		$(".errorChk").text("Required posm Qty");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((drugStorePosmCondition==undefined || drugStorePosmCondition=='') && drugStorePosm=="YES"){
		$(".errorChk").text("Required Drug Store Posm Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(cityCorp_DFF==''){
		$(".errorChk").text("Required Tax Area");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else{
	
		$("#posmAuditSubmitBufferImage").show();		
		//alert(apipath+"submitData_PosmAuditor?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&posmBoard="+posmBoard+"&auditorPOSMBrandList="+auditorPOSMBrandList+"&auditPosm_type="+auditPosm_type+"&boardQty="+boardQty+"&boardCondition="+boardCondition+"&megaHanger="+megaHanger+"&megaHangerCondition="+megaHangerCondition+"&plugInDispenser="+plugInDispenser+"&plugInDispenserCondition="+plugInDispenserCondition+"&miniSolomon="+miniSolomon+"&skinCare="+skinCare+"&skinCareCondition="+skinCareCondition+"&hairCare="+hairCare+"&hairCareCondition="+hairCareCondition+"&drugStorePosm="+drugStorePosm+"&posmQty="+posmQty+"&drugStorePosmCondition="+drugStorePosmCondition+"&posmAuditOutSearch="+posmAuditOutSearch+"&cityCorp_DFF="+cityCorp_DFF);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_PosmAuditor?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&posmBoard="+posmBoard+"&auditorPOSMBrandList="+auditorPOSMBrandList+"&auditPosm_type="+auditPosm_type+"&boardQty="+boardQty+"&boardCondition="+boardCondition+"&megaHanger="+megaHanger+"&megaHangerCondition="+megaHangerCondition+"&plugInDispenser="+plugInDispenser+"&plugInDispenserCondition="+plugInDispenserCondition+"&miniSolomon="+miniSolomon+"&skinCare="+skinCare+"&skinCareCondition="+skinCareCondition+"&hairCare="+hairCare+"&hairCareCondition="+hairCareCondition+"&drugStorePosm="+drugStorePosm+"&posmQty="+posmQty+"&drugStorePosmCondition="+drugStorePosmCondition+"&posmAuditOutSearch="+posmAuditOutSearch+"&cityCorp_DFF="+cityCorp_DFF,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#posmAuditSubmitBufferImage").hide();
					$("#auditorPOSMBrandList").val('');	
					$("#posmAuditOutSearch").val('');	
					$("#boardQty").val('');
					$("#posmQty").val('');
					$("#cityCorp_DFF").val('');
					$("#auditorPOSMBrandListShow").empty();
					$("#auditorPOSMBrandListShow").append(localStorage.auditorPOSMBrand).trigger('create');
					$("#boarAvailableCrest").empty();
					$("#boarAvailableCrest").append(boardCresteN).trigger('create');
					$("#posmConditionCrest").empty();
					$("#posmConditionCrest").append(posmCreateN).trigger('create');
					$("#posmBoardConditionCrest").empty();
					$("#posmBoardConditionCrest").append(posmBoardConditionN).trigger('create');
					$("#posmMegaHangerCrest").empty();
					$("#posmMegaHangerCrest").append(posmMegaHangerCrestN).trigger('create');
					$("#posmMegaHangerConditionCrest").empty();
					$("#posmMegaHangerConditionCrest").append(posmMegaHangerConditionCrestN).trigger('create');
					$("#posmPlugInDispenserCrest").empty();
					$("#posmPlugInDispenserCrest").append(posmPlugInDispenserCrestN).trigger('create');
					$("#plugInDispenserConditionCrest").empty();
					$("#plugInDispenserConditionCrest").append(plugInDispenserConditionCrestN).trigger('create');
					$("#posmMiniSolomonCrest").empty();
					$("#posmMiniSolomonCrest").append(posmMiniSolomonCrestN).trigger('create');
					$("#posmMiniSkinCareCrest").empty();
					$("#posmMiniSkinCareCrest").append(posmMiniSkinCareCrestN).trigger('create');
					$("#posmMiniskinCareConditionCrest").empty();
					$("#posmMiniskinCareConditionCrest").append(posmMiniskinCareConditionCrestN).trigger('create');
					$("#posmMiniHairCareCrest").empty();
					$("#posmMiniHairCareCrest").append(posmMiniHairCareCrestN).trigger('create');
					$("#posmhairCareConditionCrest").empty();
					$("#posmhairCareConditionCrest").append(posmhairCareConditionCrestN).trigger('create');
					$("#posmDrugStorePOSMCrest").empty();
					$("#posmDrugStorePOSMCrest").append(posmDrugStorePOSMCrestN).trigger('create');
					$("#posmdrugStorePosmConditionCrest").empty();
					$("#posmdrugStorePosmConditionCrest").append(posmdrugStorePosmConditionCrestN).trigger('create');
					$('#TaxAreaDFFRec').empty();
					$("#TaxAreaDFFRec").append(localStorage.rectaxStrDFF).trigger('create');
					
					$(".errorChk").text("");
					$("#msg_submit_posmAudit").show();
					$("#allHideAuditPosm").hide();
					$("#btn_submit_posmAudit").hide();
					$("#submit_data_posmAuditor_Save").hide();
						
				}else if (result=='Failed'){
						$("#posmAuditSubmitBufferImage").hide();
						$(".errorChk").text('Please check internet connection')
						$("#msg_submit_posmAudit").hide();
						$("#allHideAuditPosm").show();	
						$("#btn_submit_posmAudit").show();	
						$("#submit_data_posmAuditor_Save").show();
				}
				
			}//end result
		
		});//end ajax
	}
	
}

<!----------------------------------------------- Save ----------------------------------------------------------------->

var posmBoard='';
var auditorPOSMBrandList='';
var auditPosm_type='';
var boardQty='';
var boardCondition='';
var megaHanger='';
var megaHangerCondition='';
var plugInDispenser='';
var plugInDispenserCondition='';
var miniSolomon='';
var skinCare='';
var skinCareCondition='';
var hairCare='';
var hairCareCondition='';
var drugStorePosm='';
var posmQty='';
var drugStorePosmCondition='';
var cityCorp_DFF='';

function submit_data_posmAuditor_Save(){
	
	$("#submit_data_posmAuditor_Save").hide();
	$("#btn_submit_posmAudit").hide();
	$("#msg_submit_posmAudit").hide();
	$("#msg_Save_posmAudit").hide();
	var posmAuditOutSearch=outlet_codeDFF
	
	var d = new Date();	
	var get_time=d.getTime();
	
	posmBoard=$('input[name=posmBoard]:checked').val();
	//alert(typeof posmBoard);
	auditorPOSMBrandList=$("#auditorPOSMBrandList").val();
	auditPosm_type=$('input[name=auditPosm_type]:checked').val();
	boardQty=$("#boardQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	boardCondition=$('input[name=boardCondition]:checked').val();
	megaHanger=$('input[name=megaHanger]:checked').val();
	megaHangerCondition=$('input[name=megaHangerCondition]:checked').val();
	plugInDispenser=$('input[name=plugInDispenser]:checked').val();
	plugInDispenserCondition=$('input[name=plugInDispenserCondition]:checked').val();
	miniSolomon=$('input[name=miniSolomon]:checked').val();
	skinCare=$('input[name=skinCare]:checked').val();
	skinCareCondition=$('input[name=skinCareCondition]:checked').val();
	hairCare=$('input[name=hairCare]:checked').val();
	hairCareCondition=$('input[name=hairCareCondition]:checked').val();
	drugStorePosm=$('input[name=drugStorePosm]:checked').val();
	posmQty=$("#posmQty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	drugStorePosmCondition=$('input[name=drugStorePosmCondition]:checked').val();
	cityCorp_DFF=$("#outletTaxAreaDFFListRec").val();
	

	if(posmBoard==undefined || posmBoard==''){
		$(".errorChk").text("Required POSM Board");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((auditorPOSMBrandList==undefined || auditorPOSMBrandList=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Brand");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((auditPosm_type==undefined || auditPosm_type=='') && posmBoard=="YES"){
		$(".errorChk").text("Required POSM Type");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((boardQty==0 || boardQty=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Board Qty");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((boardCondition==undefined || boardCondition=='') && posmBoard=="YES"){
		$(".errorChk").text("Required Board Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(megaHanger==undefined || megaHanger==''){
		$(".errorChk").text("Required Mega Hanger");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((megaHangerCondition==undefined || megaHangerCondition=='') && megaHanger=="YES"){
		$(".errorChk").text("Required Mega Hanger Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(plugInDispenser==undefined || plugInDispenser==''){
		$(".errorChk").text("Required Plug In Dispenser");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((plugInDispenserCondition==undefined || plugInDispenserCondition=='') && plugInDispenser=="YES"){
		$(".errorChk").text("Required Plug In Dispenser Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(miniSolomon==undefined || miniSolomon==''){
		$(".errorChk").text("Required Mini Solomon");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((skinCare==undefined || skinCare=='') && miniSolomon=="YES"){
		$(".errorChk").text("Required Skin Care");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((skinCareCondition==undefined || skinCareCondition=='') && miniSolomon=="YES" && skinCare=="YES"){
		$(".errorChk").text("Required Skin Care Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((hairCare==undefined || hairCare=='') && miniSolomon=="YES"){
		$(".errorChk").text("Required Hair Care");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((hairCareCondition==undefined || hairCareCondition=='') && miniSolomon=="YES" && hairCare=="YES"){
		$(".errorChk").text("Required Hair Care Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(drugStorePosm==undefined || drugStorePosm==''){
		$(".errorChk").text("Required Drug Store Posm");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((posmQty==0 || posmQty=='') && drugStorePosm=="YES"){
		$(".errorChk").text("Required posm Qty");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if((drugStorePosmCondition==undefined || drugStorePosmCondition=='') && drugStorePosm=="YES"){
		$(".errorChk").text("Required Drug Store Posm Condition");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else if(cityCorp_DFF==''){
		$(".errorChk").text("Required Tax Area");
		$("#btn_submit_posmAudit").show();
		$("#submit_data_posmAuditor_Save").show();
	}else{
	
		$("#posmAuditSubmitBufferImage").show();
		
	if (localStorage.saveDataDFF==undefined){		
		localStorage.saveDataDFF +="rdrd"+localStorage.repID+"fdfd"+localStorage.repName+"fdfd"+localStorage.mobileNo+"fdfd"+posmBoard+"fdfd"+auditorPOSMBrandList+"fdfd"+auditPosm_type+"fdfd"+boardQty+"fdfd"+boardCondition+"fdfd"+megaHanger+"fdfd"+megaHangerCondition+"fdfd"+plugInDispenser+"fdfd"+plugInDispenserCondition+"fdfd"+miniSolomon+"fdfd"+skinCare+"fdfd"+skinCareCondition+"fdfd"+hairCare+"fdfd"+hairCareCondition+"fdfd"+drugStorePosm+"fdfd"+posmQty+"fdfd"+drugStorePosmCondition+"fdfd"+posmAuditOutSearch+"fdfd"+cityCorp_DFF;
	}
	
	

					$("#posmAuditSubmitBufferImage").hide();
					$("#boarAvailableCrest").append(boardCresteN).trigger('create');
					$("#posmConditionCrest").append(posmCreateN).trigger('create');
					$("#posmBoardConditionCrest").append(posmBoardConditionN).trigger('create');
					$("#posmMegaHangerCrest").append(posmMegaHangerCrestN).trigger('create');
					$("#posmMegaHangerConditionCrest").append(posmMegaHangerConditionCrestN).trigger('create');
					$("#posmPlugInDispenserCrest").append(posmPlugInDispenserCrestN).trigger('create');
					$("#plugInDispenserConditionCrest").append(plugInDispenserConditionCrestN).trigger('create');
					$("#posmMiniSolomonCrest").append(posmMiniSolomonCrestN).trigger('create');
					$("#posmMiniSkinCareCrest").append(posmMiniSkinCareCrestN).trigger('create');
					$("#posmMiniskinCareConditionCrest").append(posmMiniskinCareConditionCrestN).trigger('create');
					$("#posmMiniHairCareCrest").append(posmMiniHairCareCrestN).trigger('create');
					$("#posmhairCareConditionCrest").append(posmhairCareConditionCrestN).trigger('create');
					$("#posmDrugStorePOSMCrest").append(posmDrugStorePOSMCrestN).trigger('create');
					$("#posmdrugStorePosmConditionCrest").append(posmdrugStorePosmConditionCrestN).trigger('create');
					
					
					$(".errorChk").text("");
					$("#msg_Save_posmAudit").show();
					$("#allHideAuditPosm").hide();
					$("#btn_submit_posmAudit").hide();
					$("#submit_data_posmAuditor_Save").hide();
				
	}
	
}
function posmSaveAuditSub(){
	
	if (localStorage.saveDataDFF !=''){
			
		var saveDataDFF = localStorage.saveDataDFF;
		
		var saveDataDFFStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Save Outlet</span>';
			for (i=0;i<saveDataDFF.length;i++){					
				outletSaveLi=saveDataDFF[i].split('fdfd');
				
				saveDataDFFStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Outlet:"+outletSaveLi[1]+' | '+"Brand:"+outletSaveLi[15]+' | '+"POSM Type:"+outletSaveLi[16]+' | '+"Height:"+outletSaveLi[17]+' | '+"Length:"+outletSaveLi[18]+' | '+"Total Light:"+outletSaveLi[19]+' | '+"Outlet Code :"+outletSaveLi[20]+'| '+"Tax_Area:"+outletSaveLi[21]+'</p>'
			}
			localStorage.saveDataDFFS=saveDataDFFStr;		
			$('#saveDataDFFSList').empty();
			$('#saveDataDFFSList').append(localStorage.saveDataDFFS).trigger('create');
	}else{
		$('#saveDataDFFSList').empty();
		
	}
	
	url="#saveDFF";				
	$.mobile.navigate(url);
}
