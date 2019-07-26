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
var attendanceTypeC='';
var joinCallQueNo1='';
var joinCallQueNo2='';
var joinCallQueNo3='';
var joinCallQueNo4='';
//localStorage.p_rep_type='';

//---Online
var apipath="http://w02.yeapps.com/postit/syncmobile_20190725_1/";
var apipath_image="http://w02.yeapps.com/postit/";

//--- local
//var apipath="http://127.0.0.1:8000/postit/syncmobile/";
//var apipath_image="http://127.0.0.1:8000/postit/";
url ="";

$(document).ready(function(){
	
	
	$('#bufferImageSync').hide();
	$("#bufferImageSelectTown").hide();
	
	$("#bufferImageAtendanceLocation").hide();
	$(".supreceiveTownSelect").empty();
	$(".supreceiveTownSelect").append(localStorage.p_townListRecSupData).trigger('create');
	$(".receivePOSMSelectNew").empty();
	$("#cmToolsRecRec").append(localStorage.p_ToolsListCM).trigger('create');
	$("#leaveTypeStrDataSTR").empty();
	$("#leaveTypeStrDataSTR").append(localStorage.p_lListStrRecSupData).trigger('create');
	$('#townListSupperVision').empty();
	$('#townListSupperVision').append(localStorage.p_townStr2).trigger('create');
	
	
	if (localStorage.p_rep_type=='CM'){
		
		$('#onHandStockSup').hide();
		$('#merchandizingToolsSup').hide();
		$('#allocationSup').hide();
		$('#attendanceButtonShow').show();
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
		$('#btn_stockSup').hide();			
		$("#btn_receive").show();
		$("#townSelct").show();
		
		var townCName=localStorage.p_town.replace('|', '-');
		$('#townSelct').html(townCName);
		
		$('#townList').empty();
		$('#townList').append(localStorage.p_townStr).trigger('create');
					
		$("#usagePOSMSelect").empty();
		$("#usagePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
		
		$('#routeList').empty();
		$('#routeList').append(localStorage.p_route).trigger('create');
								
		$('#outletList').empty();
		$('#outletList').append(localStorage.p_outletList).trigger('create');
		
		if (localStorage.p_attendanceCheck=='' || localStorage.p_attendanceCheck==undefined){			
			$(".successMsgATT").text("");
			$("#get_salfieButton").show();
			$("#attandanceButton").show();	
			url = "#salfiePage";						
			$.mobile.navigate(url);
		}else{
			url = "#homePage";					
			$.mobile.navigate(url);
		}	
	}else if (localStorage.p_rep_type == 'SUPERVISOR'){		
		$('#onHandStockSup').show();
		$('#merchandizingToolsSup').show();
		$('#allocationSup').show();
		$("#posmReportAuditSub").hide();
		$('#attendanceButtonShow').show();	
		$("#posmAuditDiv").hide();
		$('#townSUP').show();
		$('#townList').show();
		$("#auditorDiv").hide();
		$("#auditorHead").hide();
		$("#btn_defective").show();
		$("#btn_dff").show();
		$("#reportAuditSub").hide();
		$(".allHideR").hide();
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
		$('#btn_stockSup').show();
		$('#townList').empty();
		$('#townList').append(localStorage.p_townStr).trigger('create');
		
		$("#receivePOSMSelect").empty();
		$("#receivePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
		
		$("#usagePOSMSelect").empty();
		$("#usagePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
					
		$('#routeList').empty();
		$('#routeList').append(localStorage.p_routeListSup).trigger('create');
		
		$('#outletList').empty();
		$('#outletList').append(localStorage.p_outletList).trigger('create');
		
		
		
		if (localStorage.p_attendanceCheck=='' || localStorage.p_attendanceCheck==undefined){			
			$(".successMsgATT").text("");
			$("#get_salfieButton").show();
			$("#attandanceButton").show();	
			url = "#salfiePage";						
			$.mobile.navigate(url);
		}else{
			url = "#supHome";					
			$.mobile.navigate(url);
			}	
		
	}else if(localStorage.p_rep_type == 'AGENCY'){		
		$("#reportbtnAgency").show();
		$('#attendanceButtonShow').hide();
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$('#townSUP').show();
		$('#townList').show();
		$("#auditorDiv").hide();
		$("#auditorHead").hide();
		$("#btn_defective").hide();
		$("#reportAuditSub").hide();
		$("#btn_dff").hide();
		$(".allHideR").hide();
		$("#btn_submit_receive").hide();
		
		$("#btn_submit_usages").hide();
		$("#allHide").hide();
		$('#dff_Usages_Audit').hide();			
		$('#btn_receive').hide();
		$('#btn_usages').hide();
		$('#btn_stock').hide();
		$('#reportbtn').hide();
		
		$('#townList').empty();
		$('#townList').append(localStorage.p_townStr).trigger('create');

		$("#agencyPOSMrec").empty();
		$("#agencyPOSMrec").append(localStorage.p_posmCode_agency).trigger('create');	
		
		$('#routeList').empty();
		$('#routeList').append(localStorage.p_routeListSup).trigger('create');
		
		$('#outletList').empty();
		$('#outletList').append(localStorage.p_outletList).trigger('create');
		
		url = "#homePage";
		$.mobile.navigate(url);
	}else if(localStorage.p_rep_type == 'AUDITOR'){
		
		$('#dff_Usages_Audit').hide();
		$('#attendanceButtonShow').hide();
		$('#bufferImageOutletAudt').hide();
		$("#posmReportAuditSub").hide();	
		$("#posmAuditDiv").hide();
		$("#auditorDiv").show();
		$("#reportAuditSub").show();
		$("#auditorBrandListShow").empty();
		$("#auditorBrandListShow").append(localStorage.p_auditorBrand).trigger('create');
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
		
	}else if(localStorage.p_rep_type == 'DFF'){
		
		
		//$("#boarAvailableCrest").empty();
		//$("#boarAvailableCrest").append(boardCresteN).trigger('create');
		$('#stockAgency').hide();
		$('#attendanceButtonShow').hide();
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
		$("#auditorBrandListShow").append(localStorage.p_auditorBrand).trigger('create');
		$('#headerName').html('POST-IT');
		$('#townList').show();
		$('#townList').empty();
		$('#townList').append(localStorage.p_townStr).trigger('create');
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
	localStorage.selectedRoute='';
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
		if(localStorage.p_sync_code==undefined || localStorage.p_sync_code==""){
			localStorage.p_sync_code=0;
		}	
		//alert(apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.p_sync_code);
		$.ajax({
		  url:apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.p_sync_code,
		  success: function(result) { 
			var syncResultArray = result.split('rdrd');
				localStorage.p_synced=syncResultArray[0];
				if (localStorage.p_synced=='YES'){
					
					$('#bufferImageSync').hide();	
					localStorage.p_synced="YES"
					localStorage.p_SyncMobile=mobile;
					localStorage.p_SyncPass=password;
					localStorage.p_sync_code=syncResultArray[1];										
					localStorage.p_repID=syncResultArray[2];					
					localStorage.p_repName=syncResultArray[3];
					localStorage.p_mobileNo=syncResultArray[4];
					localStorage.p_town=syncResultArray[5];
					localStorage.p_rep_type=syncResultArray[6];	
					localStorage.p_routeList=syncResultArray[7];
					localStorage.p_townListPosm=syncResultArray[8].replace("['","").replace("']","").replace("'" ,"").replace("'","").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "").replace("'","").replace("'", "").replace("'", "").replace("'" ,"").replace("'","").replace("'", "").replace("'", "");
					localStorage.p_attendanceCheck=syncResultArray[9];
					localStorage.p_townSup=syncResultArray[10];
					localStorage.p_toolsStr=syncResultArray[11];
					localStorage.routeExList=syncResultArray[12];
					localStorage.cancelList=syncResultArray[13];
					localStorage.place_strList=syncResultArray[14];
					
					localStorage.sync_date=get_date();
					//alert(localStorage.sync_date);
					//alert(localStorage.routeExList+'====='+localStorage.cancelList+'====='+localStorage.place_strList);
					
					var routeExSingleArray = localStorage.routeExList.split('fdfd');	
					//alert(routeExSingleArray);
					var routeExSingleTtotal = routeExSingleArray.length;
					var routeExStringShow=''
					for (var re=0; re < routeExSingleTtotal-1; re++){
						routeExArray = routeExSingleArray[re].split('-');
						routeExID=routeExArray[0];
						routeExName=routeExArray[1];
						routeExStringShow=routeExStringShow+'<label><input type="radio" name="RadioRouteEx" value="'+routeExName+'" > '+routeExName+'</label>'
					}
					localStorage.routeExStringShow=routeExStringShow
					//alert(localStorage.routeExStringShow);
					$("#routeExString").html(localStorage.routeExStringShow);
					
					
					var cancelArray = localStorage.cancelList.split('fdfd');	
					var cancel_combo_str='<select name="cancel_cause" id="cancel_cause" >'
					cancel_combo_str=cancel_combo_str+'<option value="">Select Reason</option>'
					cancel_combo_str=cancel_combo_str+'<option value="Will try later">Will try later</option>'
					for (var i=0; i < cancelArray.length; i++){				
						cancel_combo_str=cancel_combo_str +'<option value="'+cancelArray[i].split('-')[0]+'">'+cancelArray[i].split('-')[1]+'</option>'			  	
					}
					cancel_combo_str=cancel_combo_str+'</select>'
					localStorage.cancel_combo_str=cancel_combo_str
					$('#cancel_reason').empty();
					$('#cancel_reason').append(localStorage.cancel_combo_str);
					
					
					//create place  combo
					var placeArray = localStorage.place_strList.split('rdrd');	
					var place_combo_str='Select Place Location: </br>'
					place_combo_str=place_combo_str +'<label><input type="checkbox" name="is_near_inFront_actual" id="is_near_inFront_actual" value=""/>Near or In front of Entrance</label>'	
					place_combo_str=place_combo_str +'<label ><input type="checkbox" name="is_beside_adjacent_actual" id="is_beside_adjacent_actual" value=""/>Beside or Adjacent Cash Counter</label>'	
					place_combo_str=place_combo_str +'<label  ><input type="checkbox" name="is_eyeLevel_actual" id="is_eyeLevel_actual" value=""/>Eye Level of Consumers</label>'	
					place_combo_str=place_combo_str +'<label  ><input type="checkbox" name="is_clearlyVis_noObs_actual" id="is_clearlyVis_noObs_actual" value=""/> Clearly Visible or No obstacle in front of the shelf</label>'	
													
					localStorage.place_combo_str=place_combo_str;
					$('#place_combo_show').empty();
					$('#place_combo_show').append(localStorage.place_combo_str);
		
		
					
					
					var csmListTools=localStorage.p_toolsStr.split('fdfd');
					var cmListStr = '<select id="cmToolsRecRecData" class="auto_break" name="cmToolsRecRecData" style="display:inline-block;"><option selected="selected" value="">Select Tool</option>'
					for (k=0;k<csmListTools.length;k++){	
						cmListStr += '<option value="'+csmListTools[k]+'">'+csmListTools[k]+'</option>'
					}
					cmListStr+='</select>'
					localStorage.p_ToolsListCM=cmListStr;
					$("#cmToolsRecRec").empty();
					$("#cmToolsRecRec").append(localStorage.p_ToolsListCM).trigger('create');
					
					$('#townListPosmAuditDFF').html("Town Code	:		"+localStorage.p_townListPosm);
					
					
					$(".errorMsg").html("Sync Successful");
					$('#syncBasicBtn').show();
					
					
					if(localStorage.p_townSup!=''){			
					//====CM/Sup	
					var csmListTools=localStorage.p_townSup.split('fdfd');
					var cmListStr = '<select class="supreceivePOSMSelectA" name="supreceivePOSMSelectA"  onChange="supPosmCreateCombo(this.value);" style="display:inline-block;"><option selected="selected" value="">Select Town</option>'
					for (j=0;j<csmListTools.length;j++){	
						cmListStr += '<option value="'+csmListTools[j]+'">'+csmListTools[j]+'</option>'
					}
					cmListStr+='</select>'
					localStorage.p_townListRecSupData=cmListStr;
					//alert (localStorage.p_townListRecSupData);
					$(".supreceiveTownSelect").empty();
					$(".supreceiveTownSelect").append(localStorage.p_townListRecSupData).trigger('create');
					
					}else{
						$(".supreceiveTownSelect").empty();
						
					}
							
					if(localStorage.p_town!=''){
					var townlist=localStorage.p_town.split('fdfd');					
					var townStr='';
					var townStr='<ul data-role="listview" data-inset="true" >';	 
					for (i=0;i<townlist.length;i++){
						townLi=townlist[i].split('|');	
						townCode=townLi[0];
						townName=townLi[1];
						//onclick="sRoute(\''+cmRoute[i]+'\')"		
						townStr += '<li id="town_select" style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); color:#fff; font-weight:1; border-radius:4px;" onclick="townSelect(\''+ townCode+'-'+ townName+'\')">'+ townCode+'-'+ townName+'</li>'
						
					}
					townStr +='</ul>';
					localStorage.p_townStr=townStr;
					$('#townList').empty();
					$('#townList').append(localStorage.p_townStr).trigger('create');
					
					var townlist2=localStorage.p_town.split('fdfd');
					var townStr2='';
					var townStr2='<ul data-role="listview" data-inset="true" >';	 
					for (w=0;w<townlist2.length;w++){
						townLi2=townlist2[w].split('|');	
						townCode2=townLi2[0];
						townName2=townLi2[1];
						//onclick="sRoute(\''+cmRoute[i]+'\')"		
						townStr2 += '<li id="town_select" style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); color:#fff; font-weight:1; border-radius:4px;" onclick="routeListSup(\''+ townCode2+'-'+ townName2+'\')">'+ townCode2+'-'+ townName2+'</li>'
						
					}
					townStr2 +='</ul>';
					localStorage.p_townStr2=townStr2;
					$('#townListSupperVision').empty();
					$('#townListSupperVision').append(localStorage.p_townStr2).trigger('create');
					
					}else{
						if ((localStorage.p_rep_type=='CM')|| (localStorage.p_rep_type=='SUPERVISOR')|| (localStorage.p_rep_type=='AGENCY')){
						$('#townList').empty();
						$('#townListSupperVision').empty();
						$(".errorChk").html("Town Not Available");
						}else{
							$(".errorChk").html("");
							}
						}
					//========================
					
					var cmRoute=localStorage.p_routeList.split('||');					
					var cmRouteStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:400px;  overflow:scroll;">';
					for (i=0;i<cmRoute.length;i++){						
						cmRouteStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="sRoute(\''+cmRoute[i]+'\')"><a>'+cmRoute[i]+'</a></li>'
					
					}
					cmRouteStr +='</ul>'
					localStorage.p_route=cmRouteStr;
					
					var leaveTypeStr = 'APPROVEDfdfdCENCELfdfdREQUEST';
					var typeListSTR=leaveTypeStr.split('fdfd');
					var lListStr = '<select class="" name=""  onChange="leaveManageSUP(this.value);" style="display:inline-block;"><option selected="selected" value="">Select Status</option>'
					for (p=0;p<typeListSTR.length;p++){	
						lListStr += '<option value="'+typeListSTR[p]+'">'+typeListSTR[p]+'</option>'
						
					}
					lListStr+='</select>'
					localStorage.p_lListStrRecSupData=lListStr;
					$("#leaveTypeStrDataSTR").empty();
					$("#leaveTypeStrDataSTR").append(localStorage.p_lListStrRecSupData).trigger('create');
					
					if (localStorage.p_rep_type=='CM'){
						$('#onHandStockSup').hide();
						$('#merchandizingToolsSup').hide();
						$('#allocationSup').hide();
						$('#attendanceButtonShow').show();
						$('#dff_Usages_Audit').hide();
						$("#posmReportAuditSub").hide();	
						$("#posmAuditDiv").hide();					
						$('#townSUP').show();
						$('#townList').show();
						$("#auditorDiv").hide();
						$("#auditorHead").hide();
						$("#reportAuditSub").hide();
						$('#btn_stockSup').hide();
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
						
						var townCodeName=localStorage.p_town.replace('|','-');				
						$("#townSelct").html(townCodeName);
												
						$('#routeList').empty();
						$('#routeList').append(localStorage.p_route).trigger('create');
												
						$("#suprepname").html("Name	:		"+localStorage.p_repName);
						$("#supreptype").html("Type	:		"+localStorage.p_rep_type);
						$("#suprepid").html("ID	:		"+localStorage.p_repID);
						
						if (localStorage.p_attendanceCheck=='' || localStorage.p_attendanceCheck==undefined){
							$("#salfie_image_div").hide();
							$(".successMsgATT").text("");
							$("#get_salfieButton").show();
							$("#attandanceButton").show();	
							url = "#salfiePage";						
							$.mobile.navigate(url);
						}else{
							url = "#homePage";					
							$.mobile.navigate(url);
							}	
			
					}else if (localStorage.p_rep_type == 'SUPERVISOR'){
						$('#onHandStockSup').show();
						$('#merchandizingToolsSup').show();
						$('#allocationSup').show();
						$('#dff_Usages_Audit').hide();
						$('#attendanceButtonShow').show();
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
						$('#btn_stockSup').show();
						$("#entryAgency").hide();
						$("#stockAgency").hide();
						$("#reportbtnAgency").hide();
						$("#summaryAgency").hide();
						
						$("#suprepname").html("Name	:		"+localStorage.p_repName);
						$("#supreptype").html("Type	:		"+localStorage.p_rep_type);
						$("#suprepid").html("ID	:		"+localStorage.p_repID);
						
						if (localStorage.p_attendanceCheck=='' || localStorage.p_attendanceCheck==undefined){
							$("#salfie_image_div").hide();
							$(".successMsgATT").text("");
							$("#get_salfieButton").show();
							$("#attandanceButton").show();	
							url = "#salfiePage";						
							$.mobile.navigate(url);
						}else{
							
							
							url = "#supHome";					
							$.mobile.navigate(url);
							}	
							
					}else if(localStorage.p_rep_type == 'AGENCY'){
						$('#attendanceButtonShow').hide();
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
						
						$("#suprepname").html("Name	:		"+localStorage.p_repName);
						$("#supreptype").html("Type	:		"+localStorage.p_rep_type);
						$("#suprepid").html("ID	:		"+localStorage.p_repID);
						url = "#homePage";
						$.mobile.navigate(url);						
					}else if(localStorage.p_rep_type == 'AUDITOR'){
						
						$('#attendanceButtonShow').hide();
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
						$("#suprepname").html("Name	:		"+localStorage.p_repName);
						$("#supreptype").html("Type	:		"+localStorage.p_rep_type);
						$("#suprepid").html("ID	:		"+localStorage.p_repID);
						url = "#homePage";
						$.mobile.navigate(url);
					}else{
						$('#attendanceButtonShow').hide();
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
						$("#suprepname").html("Name	:		"+localStorage.p_repName);
						$("#supreptype").html("Type	:		"+localStorage.p_rep_type);
						$("#suprepid").html("ID	:		"+localStorage.p_repID);
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

var select_townSupCombo='';
function supPosmCreateCombo(a){
	posmCodeCMTarget=''
	$(".errorChk").text('');
	$("#btn_submit_receive").hide();
	$(".allHideR").hide();
	select_townSupCombo =a
	
	$('#menuBufferingImage').hide();
	//alert(apipath+'get_posm_sup?select_town='+select_townSupCombo+"&repID="+localStorage.p_repID)
	$.ajax({
			  url:apipath+'get_posm_sup?select_town='+select_townSupCombo+"&repID="+localStorage.p_repID,
			  success: function(result) {
				var resultArray = result.split('rdrd');
					if (resultArray[0]=='Success'){
						$('#menuBufferingImage').show();	
						localStorage.p_posmCodeCmSupNew=resultArray[1];
						
						if(localStorage.p_posmCodeCmSupNew!=''){			
					//====CM/Sup	
					var posmCodeCmSup=localStorage.p_posmCodeCmSupNew.split('fdfd');
					var posmStrRec = '<select style="background:none;" class="posmCodeRecNewSup"  name="posmCodeRecNewSup" onchange="alloDetails(this.value);"><option selected="selected" value="">Select POSM</option>'
           
					for (i=0;i<posmCodeCmSup.length;i++){	
						posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
						posmStrRec += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
					}
					 posmStrRec +='</select>'
					posmStrRec =posmStrRec
					localStorage.p_posmCodeCmSupNewData=posmStrRec;
					$(".receivePOSMSelectNew").empty();
					$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
					
					localStorage.p_CMList=resultArray[6];
					
					var cmListTargetStr = localStorage.p_CMList.split('fdfd');
					var cmSubStr='';
					var cmListSTrec='<table id="stockReppOnHand" width="100%">';
					cmListSTrec += '<tr align="left" class="" style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); color:#fff; font-weight:1; border-radius:4px;"><td style="text-align:center;">CM ID</td><td style="text-align:center;">Target Qty</td><td style="text-align:center;">Date</td></tr> '
					
					for(m=0;m<cmListTargetStr.length;m++){
						cmListR=cmListTargetStr[m];
										
					cmListSTrec += '<tr id="'+cmListR+'" class="blackCat"  style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); color:#fff; font-weight:1; border-radius:4px; font-size:11px;"><td style="text-align:center;">'+cmListR+'</td><td style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); "><input type="number" id="targetQty" name="targetQty" style="background-color:#FFF; color:#000;"/></td> <td style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); "><input type="date" id="targetDate" name="targetDate" style="background-color:#FFF; color:#000;"/></td></tr>'
					
					if (cmSubStr == ''){
						cmSubStr = cmListR;
					}else{
						cmSubStr +='<fdfd>'+cmListR;
					}
					}
					
					cmListSTrec +='<tr id="" class="blackCat"  style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); color:#fff; font-weight:1; border-radius:4px; font-size:11px;"><td style="text-align:center;">DFF</td><td style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); "><input type="number" id="targetQty" name="targetQty" style="background-color:#FFF; color:#000;"/></td> <td style="background:linear-gradient(to top, #00468C -50%, #409FFF 100%); "><input type="date" id="targetDate" name="targetDate" style="background-color:#FFF; color:#000;"/></td></tr>'
					
					cmListSTrec +='</table>'
					
					
					$('#cmListSTrecListShow').empty();
					$('#cmListSTrecListShow').append(cmListSTrec).trigger('create');
						
					}else{
						$(".receivePOSMSelectNew").empty();
						
					}
				}
			  }
		});
	
}


function receiveAndIssu(){
	
	if(localStorage.p_rep_type!='SUPERVISOR'){
	$('#menuBufferingImage').hide();
	//alert(apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID)
	$.ajax({
			  url:apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID,
			  success: function(result) {
				var resultArray = result.split('rdrd');
					if (resultArray[0]=='Success'){
						$('#menuBufferingImage').show();	
						localStorage.p_posmCodeCmSup=resultArray[1];
						if(localStorage.p_posmCodeCmSup!=''){			
					//====CM/Sup	
					var posmCodeCmSup=localStorage.p_posmCodeCmSup.split('fdfd');
					var posmStrRec = '<select style="background:none;" id="posmCodeRec" class="auto_break" name="posmCodeRec" onchange="alloDetails();"><option selected="selected" value="">Select POSM</option>'
           
					for (i=0;i<posmCodeCmSup.length;i++){	
						posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
						posmStrRec += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
					}
					 posmStrRec +='</select>'
					posmStrRec =posmStrRec
					localStorage.p_posmCodeSup=posmStrRec;
					$("#receivePOSMSelect").empty();
					$("#receivePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');
					
					}else{
						$("#receivePOSMSelect").empty();
						
					}
				}
			  }
		});
	
	
	url = "#receiveAndissuPage";
	$.mobile.navigate(url);
	
	}else{
		url = "#receiveAndissuPage";
		$.mobile.navigate(url);
		}
	
	}

function supTownGo(){
	$(".errorChkP").text("");
	$(".bufferImageSupCall").hide();
	url = "#supervisionCallTownList";
	$.mobile.navigate(url);
	}

function alloDetailsTarget(){
	
	$(".errorChkP").text("");
	$("#received").val("");
	$(".errorChk").text("");
	$("#recPhoto").val("");
	$("#bufferImageTarget").hide();
	$("#recDataTarget").hide();	
	$(".sucMsgTarget").hide();
	var posmCode=$("#targetPOSMS").val();
	
	if(posmCode==""|| posmCode==null){
		$(".errorChk").text("Select posm Code");
		$("#recDataTarget").hide();
		$("#allHideTarget").hide();
		//$("#submitDataTarget").hide();
	}else{
	
	//alert(apipath+"getAllData?&posmCode="+posmCode+"&townR="+localStorage.p_select_town);
	$("#bufferImageTarget").show();
	$.ajax({
		type: 'POST',
		url:apipath+"getAllData?&posmCode="+posmCode+"&townR="+localStorage.p_select_town,																																																											
		success: function(result) {	
			var resultArray = result.split('rdrd');
				recStatus=resultArray[0];
			if (recStatus=='Success'){
				$("#bufferImageTarget").hide();
				//$("#submitDataTarget").show();
				$("#recDataTarget").show();
				$("#allHideTarget").show();	
				var posmType=resultArray[1];	
				var brand=resultArray[2];
				var a_qty=resultArray[3];
				var dueTarget=resultArray[4];
				var alc_idT=resultArray[5];
				var balance_qty=resultArray[6];
				var imageRec=resultArray[7];
				var inagUrl=apipath_image+'static/images/alc_image/'+imageRec;
				
				var imageIss = '<img height="100px"  src="'+inagUrl+'"  alt="POSM Image"/>';
				
				$("#imageTarget").empty();
				$("#imageTarget").append(imageIss).trigger('create');
				
				//$("#imageReceive").val(imageRec);
				
				$("#posm_typeT").html("Posm Type	:	"+posmType);
				$("#brandT").html("Brand			:	"+brand);
				$("#allocationT").html("Allocation Qty	:	"+a_qty);
				$("#dueTarget").html("Due	:	"+dueTarget);
				$("#balanceT").html("Balance	:	"+balance_qty);
				
				$("#posm_typeT").val(posmType);
				$("#brandT").val(brand);
				$("#allocationT").val(a_qty);
				$("#dueTarget").val(dueTarget);
				$("#alc_idT").val(alc_idT);
				
				$(".errorChkP").text("");
			}else{
				$("#bufferImageTarget").hide();
				$(".errorChk").text("Please check internet connection");
			}
		}
	});
	}
}

function submitDataTargetCM(){
	$(".sucMsgTarget").text('');
	$("#submitDataTarget").hide();
	//alert(localStorage.p_target_li);
	
	$(".errorChk").html('');
	var posm_code = posmCodeCMTarget
	var town = select_townSupCombo;
	var targetQty=$("#targetQty").val();
	var targetDate=$("#targetDate").val();
	
	var posm_type=$(".posm_type").val();
	
	var brand=$(".brand").val();
	var alcQty=$(".allocation").val();
	var dueTarg=$(".due").val();
	var alcId=$(".alcId").val();
	
	if (targetQty==''){
		targetQty=0;
		}
	
	if (targetQty==0){
		$(".errorChk").html('Required Target Qty');
		$("#submitDataTarget").show();
	}else if(targetDate==''){
		$(".errorChk").html('Required Target Date');
		$("#submitDataTarget").show();
	}else{
	
	$("#TargetSubmitbufferImage").show();			
		//alert(apipath+"submitDataCmTarget?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&select_town="+select_townSupCombo+"&recordDataTargget="+localStorage.p_target_li);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitDataCmTarget?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&select_town="+select_townSupCombo+"&recordDataTargget="+localStorage.p_target_li,
																																																													
			success: function(result) {	
				var resultArray = result.split('rdrd');
				
				if(resultArray[0]=='Success'){
					
					$("#TargetSubmitbufferImage").hide();
					localStorage.p_target_li='';
					$("#target_table").empty();
					$("#targetPOSMSelect").empty();
					$("#targetPOSMSelect").append(localStorage.p_posmCodeTarget).trigger('create');	
					$(".errorChk").text("");
					$(".sucMsgTarget").show();
					$(".allHideR").hide();
					$(".sucMsgTarget").text('Successfully Submitted');
						
					url="#targetSetCM";					
					$.mobile.navigate(url);
					
				/*}else if(result=='Failed'){
					$("#TargetSubmitbufferImage").hide();
					$(".errorChk").text("Already Exists");
					url="#targetSetCM";					
					$.mobile.navigate(url);*/
					
					
				}else{
					rec_target_del(resultArray[1]);
					$("#TargetSubmitbufferImage").hide();	
					$(".errorChk").text(resultArray[2]);	
					$(".allHideR").show();
				}
				
			}//end result
		});//end ajax*/	
		
	}

}



/*function attandance(){	
	$(".successMsgATT").text("");
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
	$("#get_salfieButton").show();
	$("#attandanceButton").show();
	$.mobile.navigate("#salfiePage");
}*/


function salfie_next_page(){
	$("#get_salfieButton").hide();
	$("#attandanceButton").hide();
	$(".errMsg").html("");
	var salfie_image_name=$("#salfie_image_name_hidden").val();				
	var attendance=$("#attendance").val();
	
	selfie_lat=$("#selfie_lat").val();
	selfie_long=$("#selfie_long").val();
	if(salfie_image_name==''){
		$("#get_salfieButton").show();
		$("#attandanceButton").show();
		$(".errMsg").text("Required Salfie");	
	}else{		
		var salfie_image_name=$("#salfie_image_name_hidden").val();
		var salfie_image_path=$("#salfie_image_div_hidden").val();					
		//alert(salfie_image_path.length);
		if (salfie_image_name.length < 10){							
			var url = "#salfiePage";
			$.mobile.navigate(url);
		/*}else if(selfie_lat==0 || selfie_long==0){
			$("#attandanceButton").show();
			$("#get_salfieButton").show();
			$(".errMsg").html("Failed to Confirmed Location.");
			var url = "#salfiePage";
			$.mobile.navigate(url);*/
		}else{															
			$("#bufferImageAtendanceLocation").show();
			//alert(apipath+'syncAttendanceData?select_town='+localStorage.p_town+"&repID="+localStorage.p_repID+'&salfie_data='+salfie_image_name+'&selfie_lat='+selfie_lat+'&selfie_long='+selfie_long+'&attendance='+attendance);
			
			$.ajax({
			//type: 'POST',
			url: apipath+'syncAttendanceData?select_town='+localStorage.p_town+"&repID="+localStorage.p_repID+'&salfie_data='+salfie_image_name+'&selfie_lat='+selfie_lat+'&selfie_long='+selfie_long+'&attendance='+attendance,
			 success: function(result) {	
					
					if (result==''){
						alert ('Sorry Network not available');
					}else if(result=='Success'){
						
						localStorage.p_attendanceCheck="Day Start"
						$("#get_salfieButton").hide();
						$("#attandanceButton").hide();
						$("#bufferImageAtendanceLocation").hide();
						$("#salfie_image_name_hidden").val("");
						$("#salfie_image_div_hidden").val("");
						$("#attendance").val("");
						$("#selfie_lat").val(0);
						$("#selfie_long").val(0);
						$(".successMsgATT").text("Submitted Successfully");
						goHomePage()
						document.getElementById('salfie_image_div').src = '';
						
						/*var url = "#homePage";
						$.mobile.navigate(url);*/
						uploadPhotoRecSelfie(salfie_image_path, salfie_image_name);
											
						
					}else if(result=='Already Exists'){
						
						$("#bufferImageAtendanceLocation").hide();
						$(".errMsg").html('Already Exists'); // Faisal
						
															
					}else{
						$("#attandanceButton").show();
						$(".errMsg").html(result);
											
					}
				}
			 })				
		}
	}
}

function getLocationInfoSelfe(){	
	$("#attandanceButton").show();
	$("#bufferImageAtendanceLocation").show();
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccessSelfie, onErrorSelfie, options);				
	$(".errMsg").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccessSelfie(position) {
	
	$("#bufferImageAtendanceLocation").hide();
	$("#selfie_lat").val(position.coords.latitude);
	$("#selfie_long").val(position.coords.longitude);
	$(".errMsg").html("Location Confirmed");
	$("#attandanceButton").show();
}
// onError Callback receives a PositionError object
function onErrorSelfie(error) {
	
	$("#bufferImageAtendanceLocation").hide();
    $("#selfie_lat").val(0);
    $("#selfie_long").val(0);
    $(".errMsg").html("Failed to Confirmed Location.");
    $("#attandanceButton").show();
}	


function get_salfie() {
	var tempTime = $.now();
	salfie_image_name=tempTime.toString()+"_"+localStorage.p_mobileNo+"_salfie.jpg";
	$("#salfie_image_name_hidden").val(salfie_image_name);
	$("#salfie_image_div_hidden").val(salfie_image_name);
	navigator.camera.getPicture(onSuccessSalfie, onFailSalfie, { quality: 60,
	targetWidth: 350,
	destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}

function onSuccessSalfie(imageURI) {
	$("#salfie_image_div").show();
	var image = document.getElementById('salfie_image_div');
    image.src = imageURI;
    var hidden_path="salfie_image_div_hidden";
	$("#"+hidden_path).val(imageURI);
}

function onFailSalfie(message) {
	$("#salfie_image_div").hide();
	imagePathA="";
    alert('Failed because: ' + message);
}
function uploadPhotoRecSelfie(imageURI, salfie_image_name) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=salfie_image_name;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),winS,onfailS,options);
	
}

function winS(s) {	
	
	$(".errorChk").text('');
}

function onfailS(s) {
	$(".errorChk").text('');
	
}


function syncValueClean(){
	
	//localStorage.p_synced="NO"
	/*$("#mobile").val("");
	$("#password").val("");*/
	localStorage.p_repID=""				
	localStorage.p_repName=""
	localStorage.p_mobileNo=""
	localStorage.p_town=""
	localStorage.p_rep_type=""	
	localStorage.p_routeList=""
	$(".errorMsg").text("");
	url = "#pagesync";
	$.mobile.navigate(url);
	}
	
function menuClick(){
	
	$(".allHideR").hide();
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
	
	
	if(localStorage.p_synced != 'YES'){
		$(".errorMsg").html("Required Sync");
		url = "#pagesync";
		$.mobile.navigate(url);
	}else{
		if(localStorage.p_rep_type!='SUPERVISOR'){
		url = "#homePage";
		$.mobile.navigate(url);
		}else{
			url = "#supHome";
			$.mobile.navigate(url);
			}
	}
	
}
//----------------back button
function backClick(){
	$(".allHideR").hide();
	$("#targetVSach").hide();
	$("#psInstallSummary").hide();
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
var outletSeperator='';
var routeDate='';
function townSelect(town){
	localStorage.selectedRoute='';
	$('#menuBufferingImage').hide();
	$("#cmprepname").text("");
	$("#cmpreptype").text("");
	$("#cmprepid").text("");
	
	if (localStorage.p_synced!='YES'){
		$(".errorChk").text("Required Sync");
	}else{
		$("#bufferImageSelectTown").show();
		$('#townList').hide();
		/*if($("#townList").find("input[name='town_select']:checked").length==0){
			$(".errorChk").text("Select Town");
		}else{
			$("#bufferImageSelectTown").show();*/
			//localStorage.p_select_town=$("input[name='town_select']:checked").val();
		localStorage.p_select_town=town;
		
		var current_date=get_date();
		var bak_date1=get_bak_date_one();
		var bak_date2=get_bak_date_two();
		var bak_date3=get_bak_date_three();
		//alert(current_date+'=='+bak_date1+'=='+bak_date2+'=='+bak_date3);
		//outletSeperator=outletSep;
		/*if (localStorage.p_rep_type!='CM'){	*/
		$('#bufferImageRoute').hide();
		$('#menuBufferingImage').show();	
			//$('#bufferImageOutlet').show();	

		//alert(apipath+"getRoutetest?&townCodeName="+localStorage.p_select_town+"&cm_id="+localStorage.p_repID);
		$.ajax({
			type: 'POST',
			url:apipath+"getRoutetest?&townCodeName="+localStorage.p_select_town+"&cm_id="+localStorage.p_repID,																																																															
			success: function(result) {	
				var resultArray = result.split('rdrd');	
				if(resultArray[0]=='Success'){
					$('#menuBufferingImage').hide();	
					//$('#bufferImageOutlet').hide();			
					localStorage.p_routeListSupALL=resultArray[1];
					//localStorage.p_scheduleDate=resultArray[2].split('|');
					
					//alert(localStorage.p_routeListSupALL);
					if(localStorage.p_routeListSupALL!=''){
						var routeListSupALL=localStorage.p_routeListSupALL.split('fdfd');
						//var routeStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:400px; overflow:scroll;">';
						var routeStr='';
						var routeDate='';
						for (i=0;i<routeListSupALL.length;i++){	
							var routeS=routeListSupALL[i].split('|');
							var routeName=routeS[0]	
							routeDate=routeS[1]
							
							//alert(routeDate+'==='+current_date);
							if (routeDate==current_date){
								routeStr +='<label style="background:#81C0C0"><input type="radio" name="RadioRoute" value="'+routeName+'|'+routeDate+'" id="RadioGroup1_0"> '+routeName+'</label>'
							}else if((routeDate==bak_date1)||(routeDate==bak_date2)||(routeDate==bak_date3)){
								routeStr +='<label><input type="radio" name="RadioRoute" value="'+routeName+'|'+routeDate+'" id="RadioGroup1_0"> '+routeName+'</label>'
							}else{
								routeStr +='<label style="background:#ddeeee"><input type="radio" name="RadioRoute" value="'+routeName+'|'+routeDate+'|'+routeDate+'" id="RadioGroup1_0"> '+routeName+'</label>'
							}						
						}
						//routeStr +=routeStr;
						localStorage.p_routeListSup=routeStr;
						
						$('#routeList').empty();
						$('#routeList').append(localStorage.p_routeListSup).trigger('create');
							
					}
				}
			}
		})
			
			
			
		$("#town").html('Town		:		' + localStorage.p_select_town.replace('|','-'));
		$(".errorChk").text("");
		$.ajax({
			url:apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID,
			success: function(result) {
				var resultArray = result.split('rdrd');
				if (resultArray[0]=='Success'){	
					localStorage.p_posmCodeCMUsage=resultArray[3];			
				//====CM/Sup	
					if(localStorage.p_posmCodeCMUsage!=''){
						var posmCodeCmSup=localStorage.p_posmCodeCMUsage.split('fdfd');
						var posmStr = '<select id="posmCodeUsges" class="auto_break" name="posmCodeUsges" onchange="alloDetailsU();"><option selected="selected" value="">Select POSM</option>'
						for (i=0;i<posmCodeCmSup.length;i++){	
							posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
							posmStr += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
						}
						posmStr+='</select>'
						posmStr =posmStr
						localStorage.p_posmCodeSup=posmStr;	
						
						$("#usagePOSMSelect").empty();
						$("#usagePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
					
					}else{
						$("#usagePOSMSelect").empty();
					}
				}
			}
		});
		
			
/*},error: function(result){
		$(".errorChk").text("Please check internet connection");
	}	*/		
			
			
		//alert (apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID)
		$.ajax({
		    url:apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID,
		    success: function(result) {
				var resultArray = result.split('rdrd');
				if (resultArray[0]=='Success'){						
					$("#bufferImageSelectTown").hide();
					$('#townList').show();
					localStorage.p_posmCodeAgency=resultArray[2];	
					localStorage.p_agencyTaxarea=resultArray[4];
					localStorage.p_posmAll=resultArray[5];
					localStorage.p_csmListTools=resultArray[6];
					
					
					var csmListTools=localStorage.p_csmListTools.split('fdfd');
					var cmListStr = '<select id="csmToolsRecRec" class="auto_break" name="csmToolsRecRec" style="display:inline-block;"><option selected="selected" value="">Select CM</option>'
					for (j=0;j<csmListTools.length;j++){	
						cmListStr += '<option value="'+csmListTools[j]+'">'+csmListTools[j]+'</option>'
					}
					cmListStr+='</select>'
					localStorage.p_cmListToolsList=cmListStr;
					$("#csmListToolsRecRec").empty();
					$("#csmListToolsRecRec").append(localStorage.p_cmListToolsList).trigger('create');
					
					
					
					var recPOSMcode=localStorage.p_posmAll.split('fdfd');
					var posmAllStr='<input list="posmAllRec" name="selectPOSM" id="selectPOSM"><datalist id="posmAllRec">';					
					for (i=0;i<recPOSMcode.length;i++){								
						posmAllStr += '<option style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;"(\''+ recPOSMcode[i]+'\')"><a>'+ recPOSMcode[i]+'</a></option>'
					}
					posmAllStr +='</datalist>';
					localStorage.p_posmAllStr=posmAllStr;				
					$('#posmAllStrListAllRec').empty();
					$('#posmAllStrListAllRec').append(localStorage.p_posmAllStr).trigger('create');
					
				//=======Agency
					if(localStorage.p_posmCodeAgency!=''){
						var posmCodeAgency=localStorage.p_posmCodeAgency.split('fdfd');
						var posmAgencyStr = '<select id="posmCodeAgn" class="auto_break" name="posmCodeAgn" onchange="alloDetailsAgency();"><option selected="selected" value="">Select POSM</option>'
						for (k=0;k<posmCodeAgency.length;k++){	
							posmCodeAgencyStr=posmCodeAgency[k].split('-');								
							posmAgencyStr += '<option value='+posmCodeAgencyStr[1]+'>'+posmCodeAgencyStr[0]+'-'+posmCodeAgencyStr[1]+'</option>'
						}
						posmAgencyStr+='</select>'
						posmAgencyStr =posmAgencyStr
						localStorage.p_posmCode_agency=posmAgencyStr;
						$("#agencyPOSMrec").empty();
						$("#agencyPOSMrec").append(localStorage.p_posmCode_agency).trigger('create');	
					}else{
						$("#agencyPOSMrec").empty();
					}
					$("#townSelct").html("Town	:		"+localStorage.p_select_town);
					$('#townSelctRec').html("Town	:		"+localStorage.p_select_town);
					$('#townSelctdef').html("Town	:		"+localStorage.p_select_town);
					$('#townSelctAgency').html("Town	:		"+localStorage.p_select_town);
			
				}
			}
		});
		if (localStorage.p_rep_type == 'CM'){
			//$("#menuBufferingImage").hide();
			$("#btn_receive").show();
			$("#btn_usages").show();
			$("#summarytbtn").show();
			$("#leavebtn").show();
			$("#reportbtn").show();
			$("#noticeForCM").show();
			$("#entryAgency").hide();
			$("#reportbtnAgency").hide();
			$("#townSelctAll").html("Town	:		"+localStorage.p_select_town);
			$(".errorChk").text("");
			url="#first_page";					
			$.mobile.navigate(url);
		}else if (localStorage.p_rep_type == 'AGENCY'){			
			$("#btn_receive").hide();
			$("#btn_usages").hide();
			$("#summarytbtn").hide();
			$("#leavebtn").hide();
			$("#reportbtn").hide();
			$("#noticeForCM").hide();
			$("#entryAgency").show();
			$("#reportbtnAgency").show();
			$("#townSelctAll").html("Town	:		"+localStorage.p_select_town);
			$(".errorChk").text("");
			url="#first_page";					
			$.mobile.navigate(url);
		}else if (localStorage.p_rep_type == 'DFF'){			
			$("#btn_receive").hide();
			$("#btn_usages").hide();
			$("#summarytbtn").hide();
			$("#leavebtn").hide();
			$("#reportbtn").hide();
			$("#noticeForCM").hide();
			$("#entryAgency").hide();
			$("#reportbtnAgency").hide();
			$("#dff_Usages_Audit").show();
			$("#posmReportAuditSub").show();
			$("#townSelctAll").html("Town	:		"+localStorage.p_select_town);
			$(".errorChk").text("");
			url="#first_page";					
			$.mobile.navigate(url);
		}else if (localStorage.p_rep_type == 'SUPERVISOR'){
			$("#btn_receive").show();
			$(".errorChk").text("");
			url="#supHome";					
			$.mobile.navigate(url);
		}else{
			$(".errorChk").text("");
			url="#homePage";					
			$.mobile.navigate(url);
		}
	}
}

/*********************outlet_agency_select**************************/

function alloDetailsagency(){
	var outletCode=$("#outlet_code").val();
}

function receive(){
		$(".receivePOSMSelectNew").empty();
		$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
		posmCodeCMTarget='';
		posmCodeCMTarget='';
		select_townSupCombo='';
	
		$(".sucMsgR").hide();
		$(".errorChk").text("");
		$(".allHideR").hide();
		$("#btn_submit_receive").hide();
		$("#receiveSubmitbufferImage").hide();
		
		if (localStorage.p_rep_type == 'CM'){			
			$("#cmPOSMdivShow").show();
			$("#supTownDivShow").hide();
		}else{
			
			$("#cmPOSMdivShow").hide();
			$("#supTownDivShow").show();
			}
		url="#second_page";					
		$.mobile.navigate(url);
}

var posmCodeCMTarget=''
function alloDetails(ab){
	posmCodeCMTarget = ab
	$(".errorChkP").text("");
	$("#received").val("");
	$(".errorChk").text("");
	$("#recPhoto").val("");
	$(".bufferImageR").hide();
	$(".recDataR").hide();	
	$(".sucMsgR").hide();
	
	if(localStorage.p_rep_type=="CM"){
		var posmCode=$("#posmCodeRec").val();
		var town = localStorage.p_select_town;
	}else{
		var posmCode=posmCodeCMTarget;
		var town = select_townSupCombo;
		}
	
	if(localStorage.p_rep_type!="CM" && select_townSupCombo==''){
		
		$(".errorChkP").text("Select Town");
			
	}else if(posmCode==""|| posmCode==null){
		$(".errorChkP").text("Select posm Code");
		$(".recDataR").hide();
		$(".allHideR").hide();
		$("#btn_submit_receive").hide();
	}else{
	
	//alert(apipath+"getAllData?&posmCode="+posmCode+"&townR="+town);
	$(".bufferImageR").show();
	$.ajax({
		type: 'POST',
		url:apipath+"getAllData?&posmCode="+posmCode+"&townR="+town,																																																											
		success: function(result) {	
			var resultArray = result.split('rdrd');
				recStatus=resultArray[0];
			if (recStatus=='Success'){
				$(".bufferImageR").hide();
				$("#btn_submit_receive").show();
				$(".recDataR").show();
				$(".allHideR").show();	
				var posmType=resultArray[1];	
				var brand=resultArray[2];
				var a_qty=resultArray[3];
				var due_qty=resultArray[4];
				var alc_id=resultArray[5];
				var balance_qty=resultArray[6];
				var imageRec=resultArray[7];
				var inagUrl=apipath_image+'static/images/alc_image/'+imageRec;
				
				var imageRec = '<img height="100px"  src="'+inagUrl+'"  alt="Receive Image"/>';
				
				$(".imageReceive").empty();
				$(".imageReceive").append(imageRec).trigger('create');
				
				//$("#imageReceive").val(imageRec);
				
				$(".posm_type").html("Posm Type	:	"+posmType);
				$(".brand").html("Brand			:	"+brand);
				//$("#allocation").html("Allocation : "+a_qty +" , Due : "+due_qty +" , Balance : "+balance_qty);
				$(".allocation").html("Allocation Qty: "+a_qty);
				$(".due").html("Due Qty	:	"+due_qty);
				$(".balance_qty").html("Balance Qty	:	"+balance_qty);
				$(".alc_id").html("Alc ID	:	"+alc_id);
				
				$(".posm_type").val(posmType);
				$(".brand").val(brand);
				$(".allocation").val(a_qty);
				$(".due").val(due_qty);
				$(".alcId").val(alc_id);
				$(".errorChkP").text("");
			}else{
				$(".errorChk").text("Please check internet connection");
			}
		}
	});
	}
}


function submitData_ReceiveList(){
	
	$(".errorChk_medicienList").html('');	
	var receiveQtyR=$("#receiveQty").val();
	var damageQtyR=$("#damageQty").val();
	var posm_code=$("#posmCodeRec").val();
	var posm_type=$("#posm_type").val();
	//alert(posm_code+'=='+receiveQtyR +'=='+damageQtyR);
	var brand=$("#brand").val();
	var dueRec=$("#due").val();
	var alcId=$("#alcId").val();
	
	
	if (receiveQtyR==''){
		receiveQtyR=0;
		}
	if(damageQtyR==''){
		damageQtyR=0;
		}
	
	if (receiveQtyR!=0){
		if ( receiveQty <= 0){
			$(".errorChk").html('Qty Greater Then Zero');	
		
		}else if (receiveQty!=''){
			if((localStorage.p_receive_li==undefined)||(localStorage.p_receive_li=='')){	
				
				localStorage.p_receive_li=posm_code+'||'+posm_type+'||'+brand+'||'+dueRec+'||'+alcId+'||'+receiveQtyR+'||'+damageQtyR;
				$("#posm_code").val('');
				$("#posm_type").val('');
				$("#brand").val('');	
				$("#dueRec").val('');
				$("#alcId").val('');
				$("#receiveQty").val('');
				$("#damageQty").val('');	
				
			}else{
				if( localStorage.p_receive_li.indexOf(posm_code) >-1 ){
					$(".errorChk").html('Already Exits');	
				}else{
					localStorage.p_receive_li+='<rdrd>'+posm_code+'||'+posm_type+'||'+brand+'||'+dueRec+'||'+alcId+'||'+receiveQtyR+'||'+damageQtyR;
					//alert(localStorage.p_receive_li);
					$("#posm_code").val('');
					$("#posm_type").val('');
					$("#brand").val('');	
					$("#dueRec").val('');
					$("#alcId").val('');
					$("#receiveQty").val('');
					$("#damageQty").val('');
				}
			}
		}
	}else{
		$(".errorChk").html('Required Qty');
	}
	receive_list_show();
}

function receive_list_show(){
	
	if ((localStorage.p_receive_li==undefined) || (localStorage.p_receive_li=="")){
		
	}else{
		var medicien_rx=localStorage.p_receive_li.split('<rdrd>');
		
		var medicienStr='';
		medicienStr += '<tr style="font-size:12px;"><th>POSM_CODE_BRAND</th><th>Rec_Qty</th><th>Def_Qty</th></tr>'
		for(i=0;i<medicien_rx.length;i++){
			medicienList=medicien_rx[i].split('||');
			posm_code=medicienList[0];
			//posm_type=medicienList[1];
			brand=medicienList[2];
			//dueRec=medicienList[3];
			//alcId=medicienList[4];
			receiveQtyLi=medicienList[5];
			damageQtyLi=medicienList[6];
			
			
			medicienStr+='<tr id="'+posm_code+'" style="font-size:12px;"><td width="60%">'+posm_code+'-'+brand+'</td><td width="15%" style="text-align:center;">'+receiveQtyLi+'</td><td width="15%" style="text-align:center;">'+damageQtyLi+'</td><td width="5%"><input type="button" onClick="rec_defe_del(\''+posm_code+'\')" value="X" style="background-color: #0E5887;color: #fff;"></td></tr>'
			
		}
		
		$("#med_table").empty();
		$("#med_table").append(medicienStr);
		
	}
}
function rec_defe_del(id){
		var successData = id.split('|');
		var iStrS=localStorage.p_receive_li
		for(j=0;j<successData.length;j++){
			var listS1='';
			iStrS=iStrS.split('<rdrd>');
			iLenS=iStrS.length
			for(i=0;i<iLenS;i++){
				iStrDS=iStrS[i].split('||');
				if(iStrDS[0]!=successData[j]){					
					if (listS1==''){
						listS1=iStrS[i]	
					}else{
						listS1+='<rdrd>'+iStrS[i]		
					}
				}
			}
			iStrS=listS1		
		}
	$("#med_table").empty();
	localStorage.p_receive_li=iStrS
	receive_list_show()
}

function submitData_TargetList(){
	
	$(".errorChk").html('');
	var posm_code = posmCodeCMTarget
	var town = select_townSupCombo;
	var targetQty=$("#targetQty").val();
	var targetDate=$("#targetDate").val();
	
	var posm_type=$(".posm_type").val();
	
	var brand=$(".brand").val();
	var alcQty=$(".allocation").val();
	var dueTarg=$(".due").val();
	var alcId=$(".alcId").val();
	
	
	if (targetQty==''){
		targetQty=0;
		}
	
	if (targetQty==0){
		$(".errorChk").html('Required Target Qty');
	}else if(targetDate!=''){
		
			if((localStorage.p_target_li==undefined)||(localStorage.p_target_li=='')){	
				
				localStorage.p_target_li=posm_code+'||'+town+'||'+posm_type+'||'+brand+'||'+alcQty+'||'+dueTarg+'||'+alcId+'||'+targetQty+'||'+targetDate;
				$("#targetQty").val('');
				$("#targetDate").val('');	
				$(".posm_type").val('');
				$(".brand").val('');
				$(".due").val('');
				$(".alcId").val('');	
				
			}else{
				if( localStorage.p_target_li.indexOf(posm_code) >-1 ){
					$(".errorChk").html('Already Exits');	
				}else{
					localStorage.p_target_li+='<rdrd>'+posm_code+'||'+town+'||'+posm_type+'||'+brand+'||'+alcQty+'||'+dueTarg+'||'+alcId+'||'+targetQty+'||'+targetDate;
					//alert(localStorage.p_receive_li);
					
					$("#targetQty").val('');
					$("#targetDate").val('');	
					$(".posm_type").val('');
					$(".brand").val('');
					$(".due").val('');
					$(".alcId").val('');
				}
			}
		target_list_show();
		
	}else{
		$(".errorChk").html('Required Target Date');
	}
	
}

function target_list_show(){
	
	if ((localStorage.p_target_li==undefined) || (localStorage.p_target_li=="")){
		
	}else{
		var medicien_rx=localStorage.p_target_li.split('<rdrd>');
		
		var medicienStr='';
		medicienStr += '<tr style="font-size:12px;"><th>Town POSM</th><th>Tar_Qty</th><th>Tar_Date</th></tr>'
		for(i=0;i<medicien_rx.length;i++){
			medicienList=medicien_rx[i].split('||');
			
			posmCodeT=medicienList[0];
			town=medicienList[1];
			targetQty=medicienList[7];
			targetDate=medicienList[8];
			
			
			medicienStr+='<tr id="'+posmCodeT+'" style="font-size:12px;"><td width="60%">'+town+'</br>'+posmCodeT+'</td><td width="9%" style="text-align:center;">'+targetQty+'</td><td width="20%" style="text-align:center;">'+targetDate+'</td><td width="5%"><input type="button" onClick="rec_target_del(\''+posmCodeT+'\')" value="X" style="background-color: #0E5887;color: #fff;"></td></tr>'
			
		}
		
		$("#target_table").empty();
		$("#target_table").append(medicienStr).trigger('create');
		$("#submitDataTarget").show();
	}
}

function rec_target_del(id){
	
	var successData = id.split('|');
		var iStrS=localStorage.p_target_li
		for(j=0;j<successData.length;j++){
			var listS1='';
			iStrS=iStrS.split('<rdrd>');
			iLenS=iStrS.length
			for(i=0;i<iLenS;i++){
				iStrDS=iStrS[i].split('||');
				if(iStrDS[0]!=successData[j]){					
					if (listS1==''){
						listS1=iStrS[i]	
					}else{
						listS1+='<rdrd>'+iStrS[i]		
					}
				}
			}
			iStrS=listS1		
		}
	$("#target_table").empty();
	localStorage.p_target_li=iStrS
	target_list_show()
	
}


function submit_data_receive(){
	
	if(localStorage.p_rep_type=="CM"){
		var posmCode=$("#posmCodeRec").val();
		var town = localStorage.p_select_town;
	}else{
		var posmCode = posmCodeCMTarget
		var town = select_townSupCombo;
		}
	
	$("#btn_submit_receive").hide();
	var d = new Date();	
	var get_time=d.getTime();
	
	//var posm_code=$("#posmCodeRec").val();
	var posm_type=$(".posm_type").val();
	
	var brand=$(".brand").val();
	var dueRec=$(".due").val();
	var reg = /^[0-9]*$/;
	var received=$("#received").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	imageName=$("#recPhoto_name").val();
	imagePathA=$("#recPhoto_path").val();
	var alcId=$(".alcId").val();
	
	var regg = /^[0-9]*$/;
	var def_qty=$("#def_qty").val().replace('+','').replace('-','').replace('.','').replace('/','').replace('*','').replace(',','');
	//alert(brand+'-'+dueRec+'-'+received+'-'+imageName);
	imageName6=$("#defPhoto_name").val();
	imagePathE=$("#defPhoto_path").val();
	
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
	
		$("#receiveSubmitbufferImage").show();			
		//alert(apipath+"submitData_receive?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&select_town="+town+"&posm_code="+posmCode+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId+"&def_qty="+def_qty+"&imageName6="+imageName6);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_receive?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&select_town="+town+"&posm_code="+posmCode+"&posm_type="+posm_type+"&brand="+brand+"&dueRec="+dueRec+"&received="+received+"&imageName="+imageName+"&alcId="+alcId+"&def_qty="+def_qty+"&imageName6="+imageName6,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#receivePOSMSelect").empty();
					$("#receivePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
					$("#receiveSubmitbufferImage").hide();
					$("#received").val("");
					$("#def_qty").val("");
					$("#posm_type").val("");
					$("#brand").val("");
					$("#dueRec").val("");
					$("#alcId").val("");
					$("#recPhoto_name").val("");
					$("#recPhoto_path").val("");
					
					$(".receivePOSMSelectNew").empty();
					$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
					
					$("#defPhoto_name").val("");
					$("#defPhoto_path").val("");
					
					document.getElementById('myImageA').src = '';
					document.getElementById('myImageE').src = '';
									
					$(".errorChk").text("");
					$(".sucMsgR").show();
					$(".allHideR").hide();
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
						$(".allHideR").show();
						$("#btn_submit_receive").show();
				}else if (result=='Faild2'){
						$("#receiveSubmitbufferImage").hide();
						$(".errorChk").text("Can't Defective more than Balance Qty");
						$(".allHideR").show();
						$("#btn_submit_receive").show();
				}else{
					$("#receiveSubmitbufferImage").hide();		
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_receive").show();
					$(".allHideR").show();
					
				}
				
			}//end result
		});//end ajax*/	
		
	}
}




function getReceiveImage() {
	var get_time=$.now();
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
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


function cmToolsSubmit(){
	
	$(".sucMsgTools").text('');
	var town=select_townSupCombo
	var cmToolsRecRec=$("#cmToolsRecRecData").val();
	var toolqty=$("#toolqty").val();
	
	if(town==''){
		$(".errorChk").text("Required Town");
		
	}else if(cmToolsRecRec==''){
		$(".errorChk").text("Required Tool");
		
	}else if(toolqty==0){
		$(".errorChk").text("Required Qty");
		
	}else{
		$("#toolSubmitbufferImage").show();			
		//alert(apipath+"submitData_toolsRec?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&town="+town+"&toolsName="+cmToolsRecRec+"&toolqty="+toolqty);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_toolsRec?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&town="+town+"&toolsName="+cmToolsRecRec+"&toolqty="+toolqty,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					
					$("#toolSubmitbufferImage").hide();
					$("#toolqty").val('');
					/*$("#csmListToolsRecRec").empty();
					$("#csmListToolsRecRec").append(localStorage.p_cmListToolsList).trigger('create');*/
					$("#cmToolsRecRec").empty();
					$("#cmToolsRecRec").append(localStorage.p_ToolsListCM).trigger('create');
					$(".errorChk").text("");
					$(".sucMsgTools").text('Successfully Submitted');
	
				}else{
					$(".errorChk").text("Please Check Your Internet Connection");
					
					$("#toolSubmitbufferImage").hide();
					}
			}
		});
	}
	
}
/*================usagepage3=================*/
function get_date() {
	var currentdate = new Date(); 
	var y = currentdate.getFullYear() 
	var rm = currentdate.getMonth()+1
	var rd = currentdate.getDate()
	lm=rm.toString().length;
	if (lm==1){
		m='0'+rm
	}else{
		m=rm
	}
	ld=rd.toString().length;
	if (ld==1){
		d='0'+rd
	}else{
		d=rd
	}
	
	var datetime=y + "-" + m + "-" + d;
	//alert(datetime);
	return datetime;
}

function get_bak_date_one() {
	var currentdate = new Date(); 
	var y = currentdate.getFullYear() 
	var rm = currentdate.getMonth()+1
	var rd = currentdate.getDate()-1
	lm=rm.toString().length;
	if (lm==1){
		m='0'+rm
	}else{
		m=rm
	}
	ld=rd.toString().length;
	if (ld==1){
		d='0'+rd
	}else{
		d=rd
	}
	
	var datetime=y + "-" + m + "-" + d;
	//alert(datetime);
	return datetime;
}
function get_bak_date_two() {
	var currentdate = new Date(); 
	var y = currentdate.getFullYear() 
	var rm = currentdate.getMonth()+1
	var rd = currentdate.getDate()-2
	lm=rm.toString().length;
	if (lm==1){
		m='0'+rm
	}else{
		m=rm
	}
	ld=rd.toString().length;
	if (ld==1){
		d='0'+rd
	}else{
		d=rd
	}
	
	var datetime=y + "-" + m + "-" + d;
	//alert(datetime);
	return datetime;
}
function get_bak_date_three() {
	var currentdate = new Date(); 
	var y = currentdate.getFullYear() 
	var rm = currentdate.getMonth()+1
	var rd = currentdate.getDate()-3
	lm=rm.toString().length;
	if (lm==1){
		m='0'+rm
	}else{
		m=rm
	}
	ld=rd.toString().length;
	if (ld==1){
		d='0'+rd
	}else{
		d=rd
	}
	
	var datetime=y + "-" + m + "-" + d;
	//alert(datetime);
	return datetime;
}


function usages(){	
	if ((localStorage.selectedRoute=="") || (localStorage.selectedRoute=='undefined')){
		$(".errorChk").text("");
		//url="#outletPage";	
		url="#page3";				
		$.mobile.navigate(url);
	}else{
		$(".errorChk").text("");
		url="#outletPage";	
		//url="#page3";					
		$.mobile.navigate(url);
	}
}

function usages_panel(){	
		$(".errorChk").text("");	
		url="#page3";	
		$.mobile.navigate(url);
}
/************************=====================================================================================********************/

function selectRouteException() { 
	var selected_route_exception=($("input:radio[name='RadioRouteEx']:checked").val())
    //alert(selected_route_exception);
	if(selected_route_exception!=undefined){
		localStorage.routeException=selected_route_exception;
		var url = "#outletPage";
		$.mobile.navigate(url);	
	}
}

function selectOutletException() { 
	var selected_outlet_exception=($("input:radio[name='RadioOutletEx']:checked").val())
	//alert(selected_outlet_exception);
	if(selected_outlet_exception!=undefined){
		localStorage.outletException=selected_outlet_exception;
		
		if (localStorage.fdSkip==0){
			var url = "#fixedDisplay";
			$.mobile.navigate(url);	
			$(url).trigger('create');	
		}else if (localStorage.qpdsSkip==0){
			var url = "#qpdsPage";
			$.mobile.navigate(url);
			$(url).trigger('create');
		}else{
			var url = "#npdPage";
			$.mobile.navigate(url);
			$(url).trigger('create');
		}
		$.mobile.navigate(url);
		//$(url).trigger('create');
	}
}
localStorage.selectedRoute='';
function syncRoute() { 
	var selected_route_exception=($("input:radio[name='RadioRouteEx']:checked").val())
	var selected_route=($("input:radio[name='RadioRoute']:checked").val())
	
	$("#bufferImageRoute").show();
	$("#RSButton").hide();
	
	var d=new Date();
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	
	var today_get = weekday[d.getDay()];
	
	var sync_date_get=get_date();
	//var sync_date=sync_date_get.substring(0,10);
	var sync_y=sync_date_get.split('-')[0];
	var sync_m=sync_date_get.split('-')[1];
	if (sync_m.length==1){sync_m='0'+sync_m}
	var sync_d=sync_date_get.split('-')[2].split(' ')[0];
	if (sync_d.length==1){sync_d='0'+sync_d}
	var sync_date=sync_y +'-'+ sync_m +'-'+sync_d;
	//sync_date.substring(1,10)
	
	var current_date=get_date();
	var bak_date1=get_bak_date_one();
	var bak_date2=get_bak_date_two();
	var bak_date3=get_bak_date_three();

	localStorage.sync_date=sync_date;
	
	//alert(selected_route.length);
	var selected_routeArray = selected_route.split('|');
	var selected_routeID=selected_routeArray[0];
	var selected_date=selected_routeArray[1];
	//var selected_routeDay=selected_routeArray[2];
	
	//localStorage.routeIDName=selected_routeName+" | "+selected_routeID
	//alert(selected_date);
	localStorage.routeIDName=selected_routeID;
	localStorage.p_routeIDName=selected_routeID;
	//alert(selected_date+'=='+sync_date_get);
	localStorage.selectedRoute=selected_routeID;
	/*if (selected_date==sync_date_get){
		localStorage.selectedRoute=selected_routeID;
		localStorage.routeException_found='0';		
	}else if(selected_date==bak_date1 || selected_date==bak_date2 || selected_date==bak_date3){
		localStorage.selectedRoute=selected_routeID;
		localStorage.routeException_found='1';
	}else{
		localStorage.routeException_found='2';			
	}*/
	if(localStorage.selectedRoute!=undefined){
		//alert(apipath+'sync_route?cm_id='+localStorage.p_repID+'&mobileNo='+localStorage.p_mobileNo+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&route='+localStorage.selectedRoute+'&townCodeName='+localStorage.p_select_town);
		localStorage.routeException='';
		$.ajax({
			type: 'POST',
			url: apipath+'sync_route?cm_id='+localStorage.p_repID+'&mobileNo='+localStorage.p_mobileNo+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&route='+localStorage.selectedRoute+'&townCodeName='+localStorage.p_select_town,
			success: function(result) {
				if (result==''){
					alert ('Sorry Network not available');
				}else{
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){
						$("#errorChk").html('Unauthorized User');
					}
					if (resultArray[0]=='SUCCESS'){
						result_string=resultArray[1];
						//alert(result_string);
						if (result_string=='N'){
							outletStringShow_n='<label style="color:#800000; font-size:18px" ><table width="100%" border="0"> <tr> <td >Schedule Not Available </td>	</tr></table></label>'
							$("#errorChk").html(outletStringShow_n);
							$("#bufferImageRoute").hide();
							$("#RSButton").show();
						}else{
							var outletArray = result_string.split('</outletList>');	
							var outletSArray = result_string.split('<outletexList>');	
							
							outletList = outletSArray[0].replace("<outletList>","");									
							var outletAllArray = outletSArray[1].split('</outletexList>');	
															
							outletExList = outletAllArray[0];
							allOutletString = outletAllArray[1];
							
							localStorage.allOutletString=allOutletString;
							//alert(localStorage.allOutletString);
							
							//	============Create exception list============	
							var outletExStringShow=''
							var outletExSingleArray = outletExList.split('rdrd');	
							var outletExSingleTtotal = outletExSingleArray.length;
							var outletExStringShow=''
							for (var oe=0; oe < outletExSingleTtotal-1; oe++){
								outletExArray = outletExSingleArray[oe].split('fdfd');
								outletExID=outletExArray[0];
								outletExName=outletExArray[1];
								outletExStringShow=outletExStringShow+'<label><input type="radio" name="RadioOutletEx"    value="'+outletExName+'" > '+outletExName+'</label>'
							}
							localStorage.outletExStringShow=outletExStringShow;
							//alert(localStorage.outletExStringShow);
							$("#outletExString").html(localStorage.outletExStringShow);
							
							//==========Create outlet list
							var outletSingleArray = outletList.split('rdrd');
							//alert(outletSingleArray);
							var outletSingleTtotal = outletSingleArray.length;
							var outletStringShow=''
							//alert(outletSingleArray);
							outletStringShow=outletStringShow+'<table width="100%" border="0" cellpadding="0" cellspacing="0"><tr style="color:#006A6A; font-size:18px;"><td>'+localStorage.routeIDName+'</td></tr></table>'
							
							for (var o=0; o < outletSingleTtotal-1; o++){
								outletArray = outletSingleArray[o].split('fdfd');
								outletID=outletArray[0];
								outletName=outletArray[1];
								//total_visit=outletArray[2];
								//total_visit_done=outletArray[3];
								//outlet_c=outletArray[4];
								//depot_id=outletArray[5];
								//schedule_date=outletArray[6];
								channel=outletArray[2];
								scheduleDate=outletArray[3];
								//alert(outletName+'==='+schedule_date);
								
								/*outletColor="";
								if (outlet_c=='g'){
									outletColor='<img style="height:20px; width:20px" src="green.png">';
								}
								if (outlet_c=='b'){
									outletColor='<img style="height:20px; width:20px" src="orange.png">';
								}
								if (outlet_c=='r'){
									outletColor='<img style="height:20px; width:20px" src="red.png">';
								}*/
								
								//alert(scheduleDate+'=='+current_date);
								
								if (scheduleDate==current_date){
									outletStringShow=outletStringShow+'<label style="background:#81C0C0"><table width="100%" border="0"><tr><td width="5%">'+
												'<input type="radio" name="RadioOutlet" value="'+outletID+'rdrd'+scheduleDate+'"></td><td width="60%">'+outletName +' | '+ outletID +' | '+  scheduleDate +' | '+channel +'</td> </tr></table></label>'
												
								}else if(scheduleDate==bak_date1 || scheduleDate==bak_date2 || scheduleDate==bak_date3){
									outletStringShow=outletStringShow+'<label ><table width="100%" border="0"> <tr> <td width="5%">'+
												'<input type="radio" name="RadioOutlet" value="'+outletID+'rdrd'+scheduleDate+'"></td><td width="60%">'+outletName +' | '+ outletID +' | '+  scheduleDate +' | '+channel +'</td> </tr></table></label>'
												
								}else{
									outletStringShow=outletStringShow+'<label style="background:#ddeeee"><table width="100%" border="0"><tr><td width="5%">'+
												'<input type="radio" name="RadioOutlet" value="'+outletID+'rdrd'+scheduleDate+'"></td><td width="60%">'+outletName +' | '+ outletID +' | '+  scheduleDate +' | '+channel +'</td> </tr></table></label>'
								}
												
												
												
							/*<td width="15%">'+ total_visit+'/'+total_visit_done+' </td>	<td>'+outletColor+'</td>*/
								
							}
								
								
							// If schedule not available
							if (outletSingleArray.length==1){
								outletStringShow=outletStringShow+'<label style="color:#800000; font-size:18px" ><table width="100%" border="0"> <tr> <td >Schedule Not Available </td>	</tr></table></label>'
							}
							outletStringShow=outletStringShow+'<br/><br/> <a id="selectOButton" data-role="button" onClick="select_outlet();" >Next</a>'
							
							//outletStringShow=outletStringShow+'<div id="outletWait" style="display:none"><img height="40px" width="40px" src="loading.gif"></div>'
							
							localStorage.outletString=outletStringShow
							$("#outletString").empty();
							$("#outletString").append(localStorage.outletString).trigger('create');
							
							$("#bufferImageRoute").hide();
							$("#RSButton").show();
							//alert(selected_date+'=='+sync_date_get);
							//if (selected_date==sync_date_get){
								//localStorage.selectedRoute=selected_routeID;
								//localStorage.selectedRoute=selected_routeID;
								//localStorage.routeException_found='0';
								
								var url = "#outletPage";
							   $.mobile.navigate(url);	
							/*}else if(selected_date==bak_date1 || selected_date==bak_date2 || selected_date==bak_date3){
								//localStorage.selectedRoute=selected_routeID;
								localStorage.selectedRoute=selected_routeID;
								//localStorage.routeException_found='1';								
								
								var url = "#routeexceptionPage";
								$.mobile.navigate(url);	
								$('#routeexceptionPage').trigger('create');
							}else {
								//localStorage.selectedRoute=selected_routeID;
								//localStorage.selectedRoute=selected_routeID;
								//localStorage.routeException_found='2';								
								
								var url = "#outletPage";
								$.mobile.navigate(url);	
								$('#routeexceptionPage').trigger('create');
							}*/
							
							//=======end outlet list====================								
						}
					}
				}//end else
			},
			error: function(result) {					  
				$("#errorChk").html('Network timeout. Please ensure you have good network signal and working Internet.');
				
				$("#outletCancel").hide();
				$("#bufferImageRoute").hide();
				$("#RSButton").show();
				
				var url = "#page3";
				$.mobile.navigate(url);
			}
		});//end ajax*/
		
	}
}

function select_outlet() { 		
		localStorage.latlongSubmit=0;
		localStorage.dataSubmit=0;
		localStorage.fddataSubmit=0;
		localStorage.qpdsdataSubmit=0;
		localStorage.npddataSubmit=0;
		localStorage.giftdataSubmit=0;
		localStorage.shopdataSubmit=0;
		localStorage.placedataSubmit=0;
		localStorage.placeLatLongCount=0
		
		localStorage.m_new="";
		localStorage.submitted_outlet="";
		
		localStorage.npdSkip=0;
		localStorage.fdSkip=0;
		localStorage.qpdsSkip=0;
		localStorage.giftSkip=0;
		
		localStorage.latitude=0;
		localStorage.longitude=0;
		
		var selected_outletID_get=($("input:radio[name='RadioOutlet']:checked").val())	
		var selected_outletID_list = selected_outletID_get.split('rdrd');
		localStorage.selectedOutlet=selected_outletID_list[0];	
		localStorage.p_selectedOutlet=selected_outletID_list[0];	
		localStorage.selected_date=selected_outletID_list[1];
		//alert(localStorage.selectedOutlet+'===='+localStorage.selected_date);
		/*var saved_outlet_flag=0;
		if  (localStorage.saved_req.length > 10){
			var saved_req=localStorage.saved_req
			if  ((saved_req.indexOf(selected_outletID))!=-1){
				saved_outlet_flag=1;
			}
		}*/
		//alert(selected_outletID);
		//localStorage.selected_outletID_get=selected_outletID_get;
		
		
		
		
		//if (saved_outlet_flag==0){
			if ((localStorage.selectedOutlet!=undefined) && (localStorage.selectedOutlet!='undefined')){
				
				// ---------
				$("#outletExString").html(localStorage.outletExStringShow);
	
				/*localStorage.selectedOutlet=selected_outletID;
				localStorage.p_selectedOutlet=selected_outletID;
				
				localStorage.selected_date_get=selected_date_get;
				//alert(localStorage.selected_date_get);
				selected_date=selected_date_get;
				localStorage.selected_date=selected_date.substr(0,10);
				//alert(localStorage.selected_date);*/
				//--------
				div_change();
				
				$("#dataerrorOutlet").html('');
				$("#outletWait").show();
				
				// $("#selectOButton").hide();
				
				var all_outlet=localStorage.allOutletString;
				//alert(all_outlet);
				var outlet_s="<"+localStorage.selectedOutlet+">"
				
				var outlet_end="</"+localStorage.selectedOutlet+">"
				//alert(outlet_s);
				var selected_outletinfo_list = all_outlet.split(outlet_s);
				
				var selected_outletinfo=selected_outletinfo_list[1];
				//alert(selected_outletinfo);
				
				var selected_outletinfo_list_end = selected_outletinfo.split(outlet_end);
				
				var selected_outletinfo_all=selected_outletinfo_list_end[0];
				//alert(selected_outletinfo_all);
				
				if (selected_outletinfo.length > 20){
					var selected_outletinfo_show_list =  selected_outletinfo.split('<mhskusList>');
					//alert(selected_outletinfo_show_list);
					var outlet_show=selected_outletinfo_show_list[0]
					var outlet_show_list =  outlet_show.split(',');
					var channel=outlet_show_list[0];
					var outlet=outlet_show_list[2] +" | "+outlet_show_list[1]+" | "+channel
					//alert(outlet);
					
					var replace_str=outlet_show_list[0] + "," + outlet_show_list[1] + "," + outlet_show_list[2] 
					var selected_outletinfo_all_final=selected_outletinfo_all.replace(replace_str,"");
					
					localStorage.selected_outletinfo_all_final=selected_outletinfo_all_final;
					//alert(localStorage.selected_outletinfo_all_final);
					
					var outletStringShow='';
					outletStringShow=outletStringShow+'<table width="100%" border="0" cellpadding="0" cellspacing="0">'
					outletStringShow=outletStringShow+'<tr> <td colspan="3" style="color:#006A6A; font-size:18px;">'+outlet+'</td></tr> '
					outletStringShow=outletStringShow+'</table>'						
					
					localStorage.outletinfoString=outletStringShow
					localStorage.outletChannel=channel
					localStorage.outletNameID=outlet
					//alert(localStorage.outletNameID);
					$("#outletName_show").html(localStorage.outletNameID);
					$("#outletInfo").html(localStorage.outletinfoString);
							  
					//alert(localStorage.outletChannel);
					syncOutlet();
					
					/*var current_date=get_date();
					var bak_date1=get_bak_date_one();
					var bak_date2=get_bak_date_two();
					var bak_date3=get_bak_date_three();
					if (localStorage.selected_date==current_date){						
						var url = "#outletPage";
						$.mobile.navigate(url);
						$(url).trigger('create');
					}else if ((localStorage.selected_date==bak_date1)||(localStorage.selected_date==bak_date2)||(localStorage.selected_date==bak_date3)){
						var url = "#outletexceptionPage";
						$.mobile.navigate(url);
						$(url).trigger('create');
					}else{
						$(".errorChk").text("");				
						$(".sucMsgU").hide();
						$("#btn_submit_usages").hide();
						$("#allHide").hide();
						$("#bufferImageU").hide();
						$("#usageSubmitbufferImage").hide();
						$("#NOutlet_button").hide();
						var url = "#page5";
						$.mobile.navigate(url);
						$(url).trigger('create');	
					}*/
				}else{
				  
				  localStorage.show_cancel=0;
				  
				  $("#selectOButton").show();
				  
				  //cancel_outlet();
				  $("#outletCancel").hide();
				  var url = "#outletPage";
				  $.mobile.navigate(url);	
				  $(url).trigger('create');
				  location.reload();
				  
			  }
		}else{
			$("#dataerrorOutlet").html('Please submit from saved data');
			 var check_outlet= localStorage.outletString;
						
			//localStorage.outletString=check_outlet.replace('<input type="radio" name="RadioOutlet" value="'+selected_outletID+'rdrd'+selected_date_get+'">','<input type="radio" name="RadioOutlet" value="'+selected_outletID+'rdrd'+selected_date_get+'" disabled="True">')
			
			$("#outletString").empty();
			$("#outletString").append(localStorage.outletString).trigger('create');
		}
		
}

function div_change(){
	localStorage.show_cancel=1;
	$("#outletCancel").show();
	$("#outletString").hide();
	$("#menujpj").hide();
	$("#menujpj1").hide();
	
	$("#backjpj").hide();
	//$("#link_route").hide();
	//alert(localStorage.outletNameID);
	$("#outletName_show").html(localStorage.outletNameID);
}

function cancel_outlet_next(){
	$("#next_option").hide();
	$("#cancel_option").show()
	$("#c_reason").html('');
	
	localStorage.cancel_page=0;
	
	$("#place_outlet_nameID").empty();
	$("#place_outlet_nameID").append(localStorage.outletIDnameShow).trigger('create');
	$("#cpageOutletNameID").empty();
	$("#cpageOutletNameID").append(localStorage.outletIDnameShow).trigger('create');
	
	$('#mhskus').find('input, textarea, button, select').attr('disabled',false);
	$('#npd').find('input, textarea, button, select').attr('disabled',false);
	//$('#fdisplayStringShowBefore').find('input, textarea, button, select').attr('disabled',false);
	$('#fdisplay').find('input, textarea, button, select').attr('disabled',false);
	$('#qpds').find('input, textarea, button, select').attr('disabled',false);
	$('#gift').find('input, textarea, button, select').attr('disabled',false);
	$('#place_show').find('input, textarea, button, select').attr('disabled',false);
	$('#shop_show').find('input, textarea, button, select').attr('disabled',false);
	
	var url = "#cancelPage";
	$.mobile.navigate(url);
	//location.reload();
	
}

function cancel_outlet_next_next(){
	$("#next_option").show();
	$("#cancel_option").hide();
	//alert(localStorage.cancel_page);
	localStorage.cancel_page=1;
	
	$("#place_outlet_nameID").empty();
	$("#place_outlet_nameID").append(localStorage.outletIDnameShow).trigger('create');
	$("#cpageOutletNameID").empty();
	$("#cpageOutletNameID").append(localStorage.outletIDnameShow).trigger('create');
	
	//alert(localStorage.selected_date+'==='+current_date);
	
	$('#mhskus').find('input, textarea, button, select').attr('disabled',false);
	$('#npd').find('input, textarea, button, select').attr('disabled',false);
	//$('#fdisplayStringShowBefore').find('input, textarea, button, select').attr('disabled',false);
	$('#fdisplay').find('input, textarea, button, select').attr('disabled',false);
	$('#qpds').find('input, textarea, button, select').attr('disabled',false);
	$('#gift').find('input, textarea, button, select').attr('disabled',false);
	$('#place_show').find('input, textarea, button, select').attr('disabled',false);
	$('#shop_show').find('input, textarea, button, select').attr('disabled',false);
	
	var url = "#cancelPage";
	$.mobile.navigate(url);
	//location.reload();
	//}
}

function cancel_outlet_Back(){
	$("#cancelButton").hide();
	$("#login_image_cancel").show();
	var cancel_reason=$("#cancel_cause").val();
	var imageName=$("#shop_image_name_hidden").val();
	var imagePath=$("#shop_image_div_hidden").val();
	var latitude=$("#lat").val();
	var longitude=$("#long").val();
	//alert(imageName+'====='+imagePath);
	if (cancel_reason==""){
		$("#c_reason").html('Please Select Reason');
		$("#cancelButton").show();
		$("#login_image_cancel").hide();
	}else{
		if (cancel_reason=="Will try later"){
			cancel_outlet();
			document.getElementById('shop_image_div').src = '';
			$("#shop_image_name_hidden").val('');
			$("#cancelButton").show();
			$("#login_image_cancel").hide();
			var url = "#outletPage";
			$.mobile.navigate(url);
		}else{
			if ((imageName.length < 10) || imageName==''){
				$("#c_reason").html('Please Take Picture');
				$("#cancelButton").show();
				$("#login_image_cancel").hide();
			}else{
				var outletID= (localStorage.outletNameID).split('|')[1]	
				//alert(apipath+'cancel_outlet?cm_id='+localStorage.p_repID+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&selectedRoute='+localStorage.selectedRoute+'&routeEx='+localStorage.routeException+'&outlet='+outletID+'&outletEx='+localStorage.outletException+'&cancel_reason='+cancel_reason+'&imageName='+imageName+'&imagePath='+imagePath+'&latitude='+latitude+'&longitude='+longitude);
				$.ajax({
					 type: 'POST',
					 url: apipath+'cancel_outlet?cm_id='+localStorage.p_repID+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&selectedRoute='+localStorage.selectedRoute+'&routeEx='+localStorage.routeException+'&outlet='+outletID+'&outletEx='+localStorage.outletException+'&cancel_reason='+cancel_reason+'&imageName='+imageName+'&imagePath='+imagePath+'&latitude='+latitude+'&longitude='+longitude,
					 success: function(result) {
						$("#cancelButton").show();
						$("#login_image_cancel").hide();
						if (result==''){
							alert ('Sorry Network not available');
						}else{	
							if (result=='FAILED'){									
								$("#error_login").html('Please Try Again');
							}
							if (result=='SUCCESS') {
								cancel_outlet();
								document.getElementById('shop_image_div').src = '';
								$("#shop_image_name_hidden").val('');
								var url = "#outletPage";
								$.mobile.navigate(url);
							}
					    }
					},
					error: function(result) {
					  $("#error_login").html('Network timeout. Please ensure you have good network signal and working Internet.');
					  $("#cancelButton").show();
					  $("#login_image_cancel").hide();
					  var url = "#login";
					  $.mobile.navigate(url);	
					}
				});//end ajax
				upload_shop();
				$("#shop_image_name_hidden").val("");
				$("#shop_image_div_hidden").val("");
				$("#cancelButton").show();
				$("#login_image_cancel").hide();
			} // End else
		} //End else
	} //end else	
}

function menupage(){	
	var check_outlet= localStorage.outletString;
								
	//localStorage.outletString=check_outlet.replace('<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'">','<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'" disabled="True">');
	cancel_outlet();
	var url = "#outletPage";
	$.mobile.navigate(url);
	//location.reload();
	
}

function cancel_outlet(){
	localStorage.show_cancel=0;
	localStorage.outletNameID='';
	
	localStorage.selectedOutlet="";
	localStorage.selected_date="";
	localStorage.outletException="";
	localStorage.outletChannel="";

	localStorage.m_new_string="";
	localStorage.m_new="";
	localStorage.selectedOutlet="";
	//localStorage.outletExStringShow="";
	localStorage.outletException="";
	localStorage.outletChanne="";
	localStorage.outletNameID="";
	localStorage.mhskusTotal="";
	
	localStorage.npdTotal="";
	localStorage.fdisplaySlabTotal="";
	localStorage.fdisplayTotal="";
	localStorage.qpdsSlabTotal="";
	
	localStorage.qpdsTotal="";
	localStorage.giftTotal="";
	localStorage.marchadizingTotal="";
	localStorage.mhskus_data_ready="";
	localStorage.npd_data_ready="";
	localStorage.fdisplay_data_ready="";
	localStorage.qpds_data_ready="";
	localStorage.gift_data_ready="";
	localStorage.mar_data_ready="";
	
	localStorage.shop_data_ready="";
	localStorage.place_data_ready="";
	localStorage.key_data_ready="";	
		
	localStorage.shop_next_flag=0;
	localStorage.before_flag=0;
	localStorage.fd_done_flag=0;
	localStorage.qpds_next_flag=0;
	localStorage.npd_next_flag=0;
	localStorage.mhskus_next_flag=0;
	localStorage.gift_next_flag=0;
	localStorage.place_next_flag=0;
	localStorage.latitude=0;
	localStorage.longitude=0;
	localStorage.latlongSubmit=0;
	localStorage.dataSubmit=0;
	localStorage.fddataSubmit=0;
	localStorage.qpdsdataSubmit=0;
	localStorage.npddataSubmit=0;
	localStorage.giftdataSubmit=0;
	localStorage.shopdataSubmit=0;
	localStorage.placedataSubmit=0;
	localStorage.placeLatLongCount=0;
	localStorage.outletException='undefined';
	$("#outletCancel").hide();
	$("#outletString").show();
	$("#menujpj").show();
	$("#menujpj1").show();
	$("#backjpj").show();
	$("#link_route").show();
	$("#outletWait").show();
	$("#outletButton").hide();
	/*$("#location_button").show();
	$("#sub_button_div").show();
	$("#image_up_button").show();
	$("#NOutlet_button").show();
	$("#usages_button_div").show();*/
	
	$("#outletName_show").html(localStorage.outletNameID);
	
	$('#mhskus').find('input, textarea, button, select').attr('disabled',false);
	$('#npd').find('input, textarea, button, select').attr('disabled',false);
	//$('#fdisplayStringShowBefore').find('input, textarea, button, select').attr('disabled',false);
	$('#fdisplay').find('input, textarea, select').attr('disabled',false);
	$('#qpds').find('input, textarea, button, select').attr('disabled',false);
	$('#gift').find('input, textarea, button, select').attr('disabled',false);
	$('#place_show').find('input, textarea, button, select').attr('disabled',false);
	$('#shop_show').find('input, textarea, button, select').attr('disabled',false);
	
	//location.reload();
}


function syncOutlet() { 
	result_string=localStorage.selected_outletinfo_all_final;
	//alert(result_string);
	if (result_string.length > 50){
			
			var mhskusArray = result_string.split('</mhskusList>');									
			mhskusList = mhskusArray[0].replace("<mhskusList>","");
			
			npd = mhskusArray[1];			
			var npdArray = npd.split('</npdList>');									
			npdList = npdArray[0].replace("<npdList>","");
			//alert(npdList);					
								
			fdisplay = npdArray[1];
			//alert(fdisplay);
			var fdisplayArray = fdisplay.split('</fdisplayList>');									
			fdisplayList = fdisplayArray[0].replace("<fdisplayList>","");
			//alert(fdisplayList);
			//$("#show_result").text(fdisplayList);
			
								
			qpds = fdisplayArray[1];
			var qpdsArray = qpds.split('</qpdsList>');									
			qpdsList = qpdsArray[0].replace("<qpdsList>","");
			//alert(qpdsList);
			
			/*gift = qpdsArray[1];
			var giftArray = gift.split('</giftList>');									
			giftList = giftArray[0].replace("<giftList>","");
			
			marchadizing = giftArray[1];
			var marchadizingArray = marchadizing.split('</marList>');									
			marchadizingList = marchadizingArray[0].replace("<marList>","");
								
			
			//=====marchandizing Item=======
			marchadizingItem = marchadizingArray[1];
			var marchadizingItemArray = marchadizingItem.split('</marItemList>');									
			marchadizingItemList = marchadizingItemArray[0].replace("<marItemList>","");
			
			//=====marchandizing Brand=======
			marchadizingBrand = marchadizingItemArray[1];
			
			var marchadizingBrandArray = marchadizingBrand.split('</marBrandList>');									
			marchadizingBrandList = marchadizingBrandArray[0].replace("<marBrandList>","");*/
			
					
//=====================Create Fixed Display list
			var fdisplaySlabArray = fdisplayList.split('</slab>');
			//alert(fdisplaySlabArray);
			var fdisplaySlabTotal = fdisplaySlabArray.length;
			//alert(fdisplaySlabArray);
			
			var fdisplayStringShow=''
			var fdisplayStringShowBefore=''
			fdisplayStringShow=fdisplayStringShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			
			
			fdisplayStringShowBefore=fdisplayStringShowBefore+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			
			localStorage.fdisplaySlabTotal=fdisplaySlabTotal
			//alert(localStorage.fdisplaySlabTotal);
			if (parseInt(localStorage.fdisplaySlabTotal)==1){
				localStorage.fdSkip=1;
			}
			
			for (var slab=0; slab < fdisplaySlabTotal-1; slab++){
				var fdisplaySlabList = fdisplaySlabArray[slab].replace("<slab>","");
				var fdisplaySlab_1Array = fdisplayList.split('<slab>');
				//alert(fdisplaySlab_1Array+'==='+1);
				var fdisplaySlab_image = fdisplaySlabArray[slab].split('<slab>')[0].split('<fdfd>')[1];
				var fdisplaySlab_name = fdisplaySlabArray[slab].split('<slab>')[0].split('<fdfd>')[0];
				//alert(fdisplaySlab_image+'=='+fdisplaySlab_name);
				var slab_text=slab.toString()
				var fdSL_image_div='fdSL_image_div_'+slab_text
				var fdSL_image_div_hidden='fdSL_image_div_hidden_'+slab_text
				var fdSL_image_name_hidden='fdSL_image_name_hidden_'+slab_text
				//alert(fdSL_image_div_hidden+'==='+fdSL_image_name_hidden);
				var fdSL_image='fdSL_image_'+slab_text
				var fdSL_image_div='fdSL_image_div_'+slab_text
				var fdSLfdisplay='fdSLfdisplay_'+slab_text
				
				//fdisplayStringShow=fdisplayStringShow+'<div id="fddiv_'+slab.toString()+'">'
				fdisplayStringShow=fdisplayStringShow+'</br></br><table width="100%" border="0"> <tr><td style=" font-weight:bold; font-size:28px color:#006A6A; background:#FFECFF">'+fdisplaySlab_name+'</td> </tr></table>';
				fdisplayStringShow=fdisplayStringShow+'<img height="100px" width="100%"  src="'+apipath_image+'static/uni_images/fdisplay/'+fdisplaySlab_image+'" alt="FixedDisplay" />';
				
				fdisplayStringShow=fdisplayStringShow+'<table width="100%" border="0" cellpadding="0" cellspacing="0">'
				
				fdisplayStringShow=fdisplayStringShow+'<tr bgcolor="#9FCED7" ><td width="1%" >&nbsp;</td><td >Item</td> <td width="50px">QTY</td><td></td><td width="50px">Face Up</td><td></td><td width="100px">Order</td></tr>'
				
				var fdisplaySingleArray = fdisplaySlabList.split('rdrd');	
				var fdisplaySingleTotal = fdisplaySingleArray.length;
				var fdisplayTotal='fdisplayTotal'+slab.toString()
				var fdSL_total_hidden='fdSL_total_hidden_'+slab.toString()
				
				localStorage.fdisplayTotal=fdisplaySingleTotal
				//alert(localStorage.fdisplayTotal);
				for (var i=0; i < fdisplaySingleTotal-1; i++){
					var test=fdisplaySingleArray[i].replace(fdisplaySlabArray[slab].split('<slab>')[0],"");
					fdisplayArray = test.split('fdfd');
					//alert(fdisplayArray);				
					slab_fdisplay=fdisplayArray[0]
					itemID=fdisplayArray[1];
					itemName=fdisplayArray[2];
					fdSL_fdisplay=fdisplayArray[3];
					//alert(fdSL_fdisplay);
					var i_text=i.toString()
					var ItemQtyfdisplay='ItemQtyfdisplay_'+slab_text+'_'+i_text
					var Itemfdisplay='Itemfdisplay_'+slab_text+'_'+i_text
					
					var ItemFaceupfdisplay='ItemFaceupfdisplay_'+slab_text+'_'+i_text
					var ItemVisiblefdisplay='ItemVisiblefdisplay_'+slab_text+'_'+i_text
					var slabfdisplay='slabfdisplay_'+slab_text+'_'+i_text
					var fdSLfdisplay='fdSLfdisplay_'+i_text
											
					fdisplayStringShow=fdisplayStringShow+'<tr ><td width="1%" >&nbsp;</td><td width="66%">'+itemName+'<input type="hidden" name="'+ Itemfdisplay +'" id="'+ Itemfdisplay +'" value="'+itemID+'" min="0"> <input type="hidden" name="'+ slabfdisplay +'" id="'+ slabfdisplay +'" value="'+slab_fdisplay+'" min="0"></td>'+
									  '<td width="15%" ><input onClick="checkQtyFd(/'+slab_text+'_'+i_text+'/)" onKeyUp="checkQtyFd(/'+slab_text+'_'+i_text+'/)" type="number" name="'+ItemQtyfdisplay +'" id="'+ ItemQtyfdisplay +'" value="" min="0"></td><td style="padding-right:3px"></td>'+
									  '<td width="15%"><input onKeyUp="checkQtyFd(/'+slab_text+'_'+i_text+'/)" type="number" name="'+ItemFaceupfdisplay +'" id="'+ ItemFaceupfdisplay +'" value="" min="0"></td>'+
									  '<td width="4%"></td><td><label style="padding:8px 2px 8px 2px; height:10px;"><input type="checkbox" name="'+ ItemVisiblefdisplay +'" id="'+ ItemVisiblefdisplay +'" value="" /></label></td></tr>'
					fdisplayStringShow=fdisplayStringShow+'<tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
					
				}
				fdisplayStringShow=fdisplayStringShow+'</table>'
				fdisplayStringShow=fdisplayStringShow+'</div>'	
				//alert(fdisplayStringShow);
				
//====================	before
				fdisplayStringShowBefore=fdisplayStringShowBefore+'</br></br><table width="100%" border="0"> <tr><td style=" font-weight:bold; font-size:28px color:#006A6A; background:#FFECFF">'+fdisplaySlab_name+'</td> </tr></table>';
				fdisplayStringShowBefore=fdisplayStringShowBefore+'<img height="100px" width="100%"  src="'+apipath_image+'static/uni_images/fdisplay/'+fdisplaySlab_image+'" alt="FixedDisplay" />';
				
				fdisplayStringShowBefore=fdisplayStringShowBefore+'<table width="100%" border="0"><tr>'+
					'<td> <a data-role="button" href="#" onClick="get_pic_fdisplay_before('+slab+')" >Take Picture Before </a></td></tr></table>'+ 
					'<img id="'+fdSL_image_div+'_before" height="100px" width="100px"  src="" alt="FixedDisplay" />'+ 
					'<input type="hidden" name="'+fdSL_image_div_hidden+'_before" id="'+fdSL_image_div_hidden+'_before" value="" >'+
					'<input type="hidden" name="'+fdSL_image_name_hidden+'_before" id="'+fdSL_image_name_hidden+'_before" value="" >'
											
//====================	After //fdSL_fdisplay
				fdisplayStringShow=fdisplayStringShow+'<table width="100%" border="0"><tr>'+
					'<input type="hidden" name="'+ fdSLfdisplay +'" id="'+ fdSLfdisplay +'" value="'+fdSL_fdisplay+'" min="0">  '+
					'<td> <a data-role="button" href="#" onClick="get_pic_fdisplay('+slab+')" >Take Picture </a></td></tr></table>'+ 
					'<img id="'+fdSL_image_div+'" height="100px" width="100px"  src="" alt="FixedDisplay" />'+
					'<input type="hidden" name="'+fdSL_image_div_hidden+'" id="'+fdSL_image_div_hidden+'" value="" >'+
					'<input type="hidden" name="'+fdSL_image_name_hidden+'" id="'+fdSL_image_name_hidden+'" value="" >'+
					'<input type="hidden" name="'+fdSL_total_hidden+'" id="'+fdSL_total_hidden+'" value="'+fdisplaySingleTotal+'" >'
										
			}
			
			localStorage.fdisplayStringShowBefore=fdisplayStringShowBefore
			//alert(localStorage.fdisplayStringShowBefore+'==='+1);
			$("#fdisplayStringShowBefore").html(localStorage.fdisplayStringShowBefore);
			
			localStorage.fdisplayStringShow=fdisplayStringShow
			//alert(localStorage.fdisplayStringShow);
			$("#fdisplay").html(localStorage.fdisplayStringShow);
			

//==========Create Promotion Display list	
			var qpdsSingleArray = qpdsList.split('rdrd');	
			var qpdsSingleTotal = qpdsSingleArray.length;			
			
			var qpdsStringShow=''
			qpdsStringShow=qpdsStringShow+'<div>'
			qpdsStringShow=qpdsStringShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			
			localStorage.qpdsTotal=qpdsSingleTotal;
			if (parseInt(localStorage.qpdsTotal)==1){	
				localStorage.qpdsSkip=1;	
			}
			for (var i=0; i < qpdsSingleTotal-1; i++){
				qpdsArray = qpdsSingleArray[i].split('fdfd');
				//alert(qpdsArray);
				localStorage.qpdsArrayTotal=qpdsArray.length;
				itemID=qpdsArray[0];
				itemName=qpdsArray[1];
				minQty_qpds=qpdsArray[2];
				qpds_image=qpdsArray[3];
				qpdsSL=qpdsArray[4];
				//alert(itemID+'=='+itemName+'=='+minQty_qpds+'=='+qpds_image+'=='+qpdsSL);
				var i_text=i.toString()
				var ItemQtyQpds='ItemQtyQpds_'+i_text
				var ItemNameQpds='ItemNameQpds_'+i_text
				var ItemVisibleqpds='ItemVisibleqpds_'+i_text
				var minQtyQpds='minQtyQpds_'+i_text
				
				var qpdsSL_image_div='qpdsSL_image_div_'+i_text
				var qpdsSL_image_div_hidden='qpdsSL_image_div_hidden_'+i_text
				var qpdsSL_image_name_hidden='qpdsSL_image_name_hidden_'+i_text
				var qpdsSL_total_hidden='qpdsSL_total_hidden_'+i_text
				
				qpdsStringShow=qpdsStringShow+'<img height="100px" src="'+apipath_image+'static/uni_images/promo/'+qpds_image+'" alt="QPDS" />';
				qpdsStringShow=qpdsStringShow+'<table width="100%" border="0" cellpadding="0" cellspacing="0">'
				qpdsStringShow=qpdsStringShow+'<tr bgcolor="#9FCED7" ><td width="1%" >&nbsp;</td><td width="80%">Item</td> <td width="15%">QTY</td><td></td><td width="4%">Visible</td></tr>'
				
				/*qpdsStringShow=qpdsStringShow+
					'<tr ><td width="1%" >&nbsp;</td><td width="80%">'+itemName+'<input type="hidden" name="'+ ItemQtyQpds +'" id="'+ ItemQtyQpds +'" value="'+itemID+'" min="0">'+
					'<input type="hidden" name="'+ itemName +'" id="'+ itemName +'" value="'+ItemQtyQpds+'" min="0"> </td>'+
					'<td width="15%"><input onClick="checkQtyQpds('+i+')" onKeyUp="checkQtyQpds(/'+i_text+'/)"  type="number" name="'+ItemQtyQpds +'" id="'+ ItemQtyQpds +'" value="" min="0"></td>'+
					
					'<td width="4%"></td><td><label style="padding:8px 2px 8px 2px; height:10px;"><input type="checkbox" name="'+ ItemVisibleqpds +'" id="'+ ItemVisibleqpds +'" value=""/></label></td></tr>'
				qpdsStringShow=qpdsStringShow+'<tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
				*/
				
				qpdsStringShow=qpdsStringShow+
					'<tr ><td width="1%" >&nbsp;</td><td width="80%">'+itemName+'<input type="hidden" name="'+ ItemNameQpds +'" id="'+ ItemNameQpds +'" value="'+itemID+'" min="0">'+
					'<input type="hidden" name="'+ minQtyQpds +'" id="'+ minQtyQpds +'" value="'+minQty_qpds+'" min="0"> </td>'+
										
					'<td width="15%"><input type="number" name="'+ItemQtyQpds +'" id="'+ ItemQtyQpds +'" value="" min="0"></td>'+
					
					'<td width="4%"></td><td><label style="padding:8px 2px 8px 2px; height:10px;"><input type="checkbox" name="'+ ItemVisibleqpds +'" id="'+ ItemVisibleqpds +'" value=""/></label></td></tr>'
				qpdsStringShow=qpdsStringShow+'<tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
				
				//After================
				qpdsStringShow=qpdsStringShow+
					'<table width="100%" border="0"><tr><td>'+
					'<input type="hidden" name="'+ i_text +'" id="'+ i_text +'" value="'+qpdsSL+'" min="0">'+
					'<a data-role="button" href="#" onClick="get_pic_qpds('+i_text+')" >Take Picture </a></td></tr></table>'
				
				qpdsStringShow=qpdsStringShow+
					/*'<img id="'+qpds_image_div+'" height="100px" width="100px"  src="" alt="Promotion" />'+
					'<input type="hidden" name="'+ qpds_image_div_hidden +'" id="'+ qpds_image_div_hidden +'" value="" >'+
					'<input type="hidden" name="'+ qpdsSL_image_name_hidden +'" id="'+ qpdsSL_image_name_hidden +'" value="" >'+
					'<input type="hidden" name="'+ qpdsSL_total_hidden +'" id="'+ qpdsSL_total_hidden +'" value="'+qpdsSingleTotal+'" >'*/
					
					'<img id="'+qpdsSL_image_div+'" height="100px" width="100px"  src="" alt="Promotion" />'+
					'<input type="hidden" name="'+ qpdsSL_image_div_hidden +'" id="'+ qpdsSL_image_div_hidden +'" value="" >'+
					'<input type="hidden" name="'+ qpdsSL_image_name_hidden +'" id="'+ qpdsSL_image_name_hidden +'" value="" >'+
					'<input type="hidden" name="'+ qpdsSL_total_hidden +'" id="'+ qpdsSL_total_hidden +'" value="'+qpdsSingleTotal+'" >'
					
					
				qpdsStringShow=qpdsStringShow+'<br/>'
				
					
			}
			qpdsStringShow=qpdsStringShow+'</table>'
			qpdsStringShow=qpdsStringShow+'</div>'
			localStorage.qpdsStringShow=qpdsStringShow
			//alert(localStorage.qpdsStringShow);
			$("#qpds").html(localStorage.qpdsStringShow);	
			
				

//==========Create NPD list
			var npdSingleArray = npdList.split('rdrd');	
			//alert(npdSingleArray);
			var npdSingleTotal = npdSingleArray.length;
			var npdStringShow=''
			npdStringShow=npdStringShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			
			localStorage.npdTotal=npdSingleTotal			
			if (parseInt(localStorage.npdTotal)==1){
				localStorage.npdSkip=1;
			}
			
			for (var i=0; i < npdSingleTotal-1; i++){
				npdArray = npdSingleArray[i].split('fdfd');
				localStorage.npdArrayTotal=npdArray.length;
				
				itemID=npdArray[0];
				itemName=npdArray[1];
				minQty_npd=npdArray[2];
				npd_image=npdArray[3];
				
				var i_text=i.toString()
				var ItemQtynpd='ItemQtynpd_'+i_text
				var Itemnpd='Itemnpd_'+i_text
				var minQty='minQty_npd_'+i_text
				
				var npd_image_div='npd_image_div_'+i_text
				var npd_image_div_hidden='npd_image_div_hidden_'+i_text
				var npd_image_name_hidden='npd_image_name_hidden_'+i_text
				
				npdStringShow=npdStringShow+'<img src="'+apipath_image+'static/uni_images/npd/'+npd_image+'" alt="NPD" />';
				npdStringShow=npdStringShow+'<table width="100%" border="0" cellpadding="0" cellspacing="0">'
				npdStringShow=npdStringShow+'<tr bgcolor="#9FCED7" ><td></td><td width="85%">Item</td><td></td><td width="14%">QTY</td></tr><tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td> </td><td ></td><td></td></tr>'
				
				npdStringShow=npdStringShow+
					'<tr ><td width="1%" >&nbsp;</td><td width="85%">'+itemName+'<input type="hidden" name="'+ Itemnpd +'" id="'+ Itemnpd +'" value="'+itemID+'" min="0">'+
					'<input type="hidden" name="'+ minQty +'" id="'+ minQty +'" value="'+minQty_npd+'" min="0"> </td>'+
										
					'<td></td><td width="14%"><input type="number" name="'+ItemQtynpd +'" id="'+ ItemQtynpd +'" value="" min="0"></td><td></td></tr>'
				npdStringShow=npdStringShow+'<tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td></td><td></td><td></td></tr>'
				
				//====================	After
				npdStringShow=npdStringShow+'<table width="100%" border="0"><tr>'+
					'<td> <a data-role="button" href="#" onClick="get_pic_npd('+i_text+')" >Take Picture </a></td></tr></table>'+ 
					'<img id="'+npd_image_div+'" height="100px" width="100px"  src="" alt="NPDPic" />'+
					'<input type="hidden" name="'+ npd_image_div_hidden +'" id="'+ npd_image_div_hidden +'" value="" >'+
					'<input type="hidden" name="'+ npd_image_name_hidden +'" id="'+ npd_image_name_hidden +'" value="" ><br>'
						
			}
			npdStringShow=npdStringShow+'</table>'
			localStorage.npdStringShow=npdStringShow
			//alert(localStorage.npdStringShow);
			$("#npd").html(localStorage.npdStringShow);


//==========Create MHSKUS list
			var mhskusSingleArray = mhskusList.split('rdrd');	
			var mhskusSingleTotal = mhskusSingleArray.length;
			
			var mhskusStringShow=''
			//alert(mhskusSingleTotal);
			mhskusStringShow=mhskusStringShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			mhskusStringShow=mhskusStringShow+'<table  width="100%" border="0" cellpadding="0" cellspacing="0">'
			mhskusStringShow=mhskusStringShow+'<tr bgcolor="#9FCED7"  ><td></td><td>Item</td><td> QTY</td><td ></td></tr><tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td> </td><td ></td></tr>'
			
			localStorage.mhskusTotal=mhskusSingleTotal
			for (var i=0; i < mhskusSingleTotal-1; i++){
				mhskusArray = mhskusSingleArray[i].split('fdfd');
				itemID=mhskusArray[0];
				itemName=mhskusArray[1];
				minQty=mhskusArray[2];
				
				var i_text=i.toString()
				var ItemQtymskus='ItemQtymskus_'+i_text
				var Itemmskus='Itemmskus_'+i_text
				var minQtymskus='minQtymskus_'+i_text
				//alert(ItemQtymskus);
				
				mhskusStringShow=mhskusStringShow+'<tr ><td>&nbsp;</td><td>'+itemName+
				'<input type="hidden" name="'+ Itemmskus +'" id="'+ Itemmskus +'" value="'+itemID+'" min="0">'+
				'<input type="hidden" name="'+ minQtymskus +'" id="'+ minQtymskus +'" value="'+minQty+'" min="0">'+
				'</td><td width="60"><input type="number" name="'+ItemQtymskus +'" id="'+ ItemQtymskus +'" value="" min="0"></td><td width="5px">&nbsp;</td></tr>'
				mhskusStringShow=mhskusStringShow+'<tr height="1px" bgcolor="#CCCCCC" ><td></td><td></td><td> </td><td ></td></tr>'
				
			}
			mhskusStringShow=mhskusStringShow+'</table>'
			
			localStorage.mhskusStringShow=mhskusStringShow
			//alert(localStorage.mhskusStringShow);
			$("#mhskus").html(localStorage.mhskusStringShow);

											
//==========Create Gift Ack list
			//var giftSingleArray = giftList.split('rdrd');	
			//var giftSingleTotal = giftSingleArray.length;
			
			var giftStringShow=''
			giftStringShow=giftStringShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>Select Month: </br> <div id="gift_combo">'
			
			  giftStringShow=giftStringShow +'<select name="gift_month" id="gift_month" >'
			  giftStringShow=giftStringShow +'<option value="No Gift">No Gift</option>'
			  giftStringShow=giftStringShow +'<option value="JANUARY">JANUARY</option>'
			  giftStringShow=giftStringShow +'<option value="FEBRUARY">FEBRUARY</option>'
			  giftStringShow=giftStringShow +'<option value="MARCH">MARCH</option>'
			  giftStringShow=giftStringShow +'<option value="APRIL">APRIL</option>'
			  giftStringShow=giftStringShow +'<option value="MAY">MAY</option>'
			  giftStringShow=giftStringShow +'<option value="JUNE">JUNE</option>'
			  giftStringShow=giftStringShow +'<option value="JULY">JULY</option>'
			  giftStringShow=giftStringShow +'<option value="AUGUST">AUGUST</option>'
			  giftStringShow=giftStringShow +'<option value="SEPTEMBER">SEPTEMBER</option>'
			  giftStringShow=giftStringShow +'<option value="OCTOBER">OCTOBER</option>'
			  giftStringShow=giftStringShow +'<option value="NOVEMBER">NOVEMBER</option>'
			  giftStringShow=giftStringShow +'<option value="DECEMBER">DECEMBER</option></select></div>'
			  giftStringShow=giftStringShow+'</br><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td>'+              
							   '<a data-role="button" href="#" onClick="get_pic_gift();" >Take Picture </a></td> </tr></table>'
			  giftStringShow=giftStringShow+'<img id="gift_image_div"  height="100px" width="100px"  src="" alt="Gift" />'
			  giftStringShow=giftStringShow+
							'<input type="hidden" name="gift_image_div_hidden" id="gift_image_div_hidden" value="" >'+
							'<input type="hidden" name="gift_image_name_hidden" id="gift_image_name_hidden" value="" >'
	
			localStorage.giftStringShow=giftStringShow;
			//alert(localStorage.giftStringShow);
			$("#gift").html(localStorage.giftStringShow);
			
			//==========Create Marchandizing list
			var outletIDnameShow=''
			outletIDnameShow=outletIDnameShow+'<table width="100%" border="0"><tr style="color:#0329C0"> <td colspan="2" style="color:#006A6A; font-size:18px;">'+localStorage.routeIDName+'<br>'+localStorage.outletNameID+'</td></tr><tr > </table></br>'
			localStorage.outletIDnameShow=outletIDnameShow
					
			var startTime=get_date()
			localStorage.startTime=startTime
			
			$("#startTime").val(localStorage.startTime);
			
			$("#outletButton").show();
			$("#outletWait").hide();
		}  
}


function outlet_next_page(){
	shop_ready_data();
	
	var shop_image_name=$("#shop_image_name_hidden").val();
	var shop_image_path=$("#shop_image_div_hidden").val();
	//alert(shop_image_name);
	if (shop_image_name.length < 10){
		var url = "#cancelPage";
		$.mobile.navigate(url);
	}else{
	    //if ((localStorage.routeException_found == '1') && ((localStorage.outletException=='undefined') || (localStorage.outletException==undefined))){
		var current_date=get_date();
		var bak_date1=get_bak_date_one();
		var bak_date2=get_bak_date_two();
		var bak_date3=get_bak_date_three();
		/*if (localStorage.selected_date==current_date){						
			var url = "#outletPage";
			$.mobile.navigate(url);
			$(url).trigger('create');
		}else */
		if ((localStorage.selected_date==bak_date1)||(localStorage.selected_date==bak_date2)||(localStorage.selected_date==bak_date3)){
			var url = "#outletexceptionPage";
			$.mobile.navigate(url);
			$(url).trigger('create');	
		/*}else if (localStorage.selected_date==current_date){						
			var url = "#outletPage";
			$.mobile.navigate(url);
			$(url).trigger('create');*/
		}else if(localStorage.selected_date!=current_date){
			$(".errorChk").text("");				
			$(".sucMsgU").hide();
			$("#btn_submit_usages").hide();
			$("#allHide").hide();
			$("#bufferImageU").hide();
			$("#usageSubmitbufferImage").hide();
			$("#newOutletButton").hide();
			var url = "#page5";
			$.mobile.navigate(url);
			$(url).trigger('create');
		}else{
			//alert(localStorage.fdSkip+'===='+localStorage.qpdsSkip);
			if (localStorage.fdSkip==0){
				var url = "#fixedDisplay";
				$.mobile.navigate(url);
				$(url).trigger('create');
				$('#shop_show').find('input, textarea, select').attr('disabled','disabled');
				$('#shop_show').addClass('disabledAnchor');
				localStorage.shop_next_flag=1;
			}else if (localStorage.qpdsSkip==0){
				var url = "#qpdsPage";
				$.mobile.navigate(url);
				$(url).trigger('create');
				$('#shop_show').find('input, textarea, select').attr('disabled','disabled');
				$('#shop_show').addClass('disabledAnchor');	
				localStorage.shop_next_flag=1;
			}else{
				var url = "#giftAckPage";
				$.mobile.navigate(url);
				$(url).trigger('create');
				$('#shop_show').find('input, textarea, select').attr('disabled','disabled');
				$('#shop_show').addClass('disabledAnchor');	
				localStorage.shop_next_flag=1;
			}
			$(url).trigger('create');
		}
	}
}

function shop_ready_data() { 
	var shop_data="";
	var image_name=$("#shop_image_name_hidden").val();
	var shop_image_path=$("#shop_image_div_hidden").val();
	shop_data=shop_data+image_name+'fdfd'+shop_image_path+'rdrd';
	localStorage.shop_data_ready=shop_data;
	shop_page_set();
}

function shop_page_set() { 
	var shop_data =  localStorage.shop_data_ready.replace("rdrd","");
	var shop_array =  shop_data.split('fdfd');
	var image_name = shop_array[0];
	var shop_image_path = shop_array[1];
	
	$("#shop_image_name_hidden").val(image_name);
	$("#shop_image_div_hidden").val(shop_image_path );
		
	var image = document.getElementById('shop_image_div');
    image.src = shop_image_path;
		
	if (localStorage.shop_next_flag==1){
		$('#shop_show').find('input, textarea, button, select').attr('disabled','disabled');
	    $('#shop_show').addClass('disabledAnchor');	
	}
}


//Shop
function get_pic_shop() {
	var tempTime = $.now();
	shop_image_name=tempTime.toString()+"_"+localStorage.selectedOutlet+"_shop.jpg";
	$("#shop_image_name_hidden").val(shop_image_name);
	navigator.camera.getPicture(onSuccessShop, onFailShop, { quality: 70,
		targetWidth: 450,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}
function onSuccessShop(imageURI) {
	var image = document.getElementById('shop_image_div');
    image.src = imageURI;
    var hidden_path="shop_image_div_hidden";
	$("#"+hidden_path).val(imageURI);
}
function onFailShop(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}

//Fixed Display
function get_pic_fdisplay(id) {
	var div_id="fdSL_image_div_"+id;
	temp_image_div=div_id;
	var hidden_name="fdSL_image_name_hidden_"+id;
	var tempTime = $.now();
	fd_image_name=tempTime.toString()+"_"+localStorage.selectedOutlet+id.toString()+".jpg";
	$("#"+hidden_name).val(fd_image_name);
	navigator.camera.getPicture(onSuccessFd, onFailFd, { quality: 70,
		targetWidth: 450,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}
function onSuccessFd(imageURI) {
	var image = document.getElementById(temp_image_div);
    image.src = imageURI;
    var hidden_path=temp_image_div.replace("fdSL_image_div","fdSL_image_div_hidden");
	$("#"+hidden_path).val(imageURI);
}
function onFailFd(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}
//Fixed Display Before
/*function get_pic_fdisplay_before(id) {
	$('#fddiv_'+id).find('input, textarea, button, select').attr('disabled','disabled');
	var div_id="fdSL_image_div_"+id+"_before";
	temp_image_div=div_id;
	var hidden_name="fdSL_image_name_hidden_" + id ;
	var tempTime = $.now();
	fd_image_name_before=tempTime.toString()+"_before"+localStorage.selectedOutlet+id.toString()+".jpg";
	$("#"+hidden_name+ "_before").val(fd_image_name_before);	
	navigator.camera.getPicture(onSuccessFd_before, onFailFd_before, { quality: 50,
		targetWidth: 300,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
	     //   targetHeight: 512,
}
function onSuccessFd_before(imageURI) {
	var image = document.getElementById(temp_image_div);
    image.src = imageURI;
    var hidden_path_before=temp_image_div.replace("fdSL_image_div","fdSL_image_div_hidden");
	$("#"+hidden_path_before).val(imageURI);
}
function onFailFd_before(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}*/

//QPDS  After
function get_pic_qpds(id) {
	var div_id="qpdsSL_image_div_"+id;
	temp_image_div=div_id;
	var hidden_name="qpdsSL_image_name_hidden_"+id;
	var tempTime = $.now();
	qpds_image_name=tempTime.toString()+"_"+localStorage.selectedOutlet+".jpg";
	$("#"+hidden_name).val(qpds_image_name);
	navigator.camera.getPicture(onSuccessQpds, onFailQpds, {  quality: 70,
		targetWidth: 450,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true});
}
function onSuccessQpds(imageURI) {
	var image = document.getElementById(temp_image_div);
    image.src = imageURI;
    var hidden_path=temp_image_div.replace("qpdsSL_image_div","qpdsSL_image_div_hidden");
	$("#"+hidden_path).val(imageURI);
}
function onFailQpds(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}




function fdisplay_ready_data() { 
	var fdisplay_data=""
	var fdisplay_data_detail="";
	var fdisplay_data_head="";
	var image_flag=0;
	var error_qty_flag=0;

	for (var i=0; i < localStorage.fdisplaySlabTotal-1; i++){
		var fdisplayTotal='fdisplayTotal'+i.toString()
		
		var fdTotal=$("#fdSL_total_hidden_"+i.toString()).val();
		
		//var fdSLfdisplay_image_path=$("#fdSL_image_div_hidden_"+i.toString()).val(); 
		var fdSLfdisplay_image_name=$("#fdSL_image_name_hidden_"+i.toString()).val(); 
		//alert(fdSLfdisplay_image_name);
		if (fdSLfdisplay_image_name.length<10){
			image_flag=1
		}
		//var fdSLfdisplay_image_path_before=$("#fdSL_image_div_hidden_"+i.toString()+"_before").val(); 
		//var fdSLfdisplay_image_name_before=$("#fdSL_image_name_hidden_"+i.toString()+"_before").val();
		//alert(fdSLfdisplay_image_path_before+'=='+fdSLfdisplay_image_name_before);
		//var fdSLfdisplay=$("#fdSLfdisplay_"+i.toString()).val(); 
		//alert(fdSLfdisplay);
		for (var d=0; d < fdTotal-1; d++){
			var ItemQtyfdisplay=$("#ItemQtyfdisplay_"+i.toString()+"_"+d.toString()).val();
			var Itemfdisplay=$("#Itemfdisplay_"+i.toString()+"_"+d.toString()).val();
			var ItemFaceupfdisplay=$("#ItemFaceupfdisplay_"+i.toString()+"_"+d.toString()).val();
			var slabfdisplay=$("#slabfdisplay_"+i.toString()+"_"+d.toString()).val();
			
			var ItemVisiblefdisplay_f="#ItemVisiblefdisplay_"+i.toString()+"_"+d.toString();
			var ItemVisiblefdisplay_g= ($(ItemVisiblefdisplay_f).is(':checked') ? 1 : 0);
			//alert(ItemQtyfdisplay+'=='+Itemfdisplay+'=='+ItemFaceupfdisplay+'=='+slabfdisplay);
			if (ItemVisiblefdisplay_g==0){
				ItemVisiblefdisplay='NO'
			}
			if (ItemVisiblefdisplay_g==1){
				ItemVisiblefdisplay='YES'
			}	
			if  ((ItemQtyfdisplay.length < 1) || (ItemFaceupfdisplay.length < 1) || (ItemVisiblefdisplay=='NO')){
				error_qty_flag=1;
			}
			
			fdisplay_data_detail=fdisplay_data_detail+Itemfdisplay+'fdfd'+ItemQtyfdisplay+'fdfd'+ItemFaceupfdisplay+'fdfd'+ItemVisiblefdisplay+'fdfd'+slabfdisplay+'fdfd'+'rdrd'
			
		}
		//alert(fdisplay_data_detail);
		fdisplay_data_detail=fdisplay_data_detail+'detaildetail'
		//alert(fdisplay_data_detail);
		/*fdisplay_data_head=fdisplay_data_head+slabfdisplay+'fdfd'+fdSLfdisplay+'fdfd'+fdSLfdisplay_image_name+'fdfd'+fdSLfdisplay_image_path+'fdfd'+fdSLfdisplay_image_name_before+'fdfd'+fdSLfdisplay_image_path_before+'rdrd'*/
		fdisplay_data_head=fdisplay_data_head+slabfdisplay+'fdfd'+fdSLfdisplay_image_name+'rdrd'
		//alert(fdisplay_data_head+'===='+'Head');
	}
	fdisplay_data='headstart'+fdisplay_data_head+'headend'+fdisplay_data_detail
	localStorage.fdisplay_data_ready=fdisplay_data;
	//alert(localStorage.fdisplay_data_ready);
	
	fdisplay_page_set()
		//alert(error_qty_flag+'=='+image_flag+'=='+localStorage.qpdsSkip+'=='+localStorage.npdTotal);
	if (error_qty_flag==1){
		var url = "#fixedDisplay";
		$.mobile.navigate(url);
	}else if (image_flag==1){
		var url = "#fixedDisplay";
		$.mobile.navigate(url);
	}else if (localStorage.qpdsSkip==0){
		var url = "#qpdsPage";
		$.mobile.navigate(url);
		$(url).trigger('create');
		//$('#fdisplay').find('input, textarea, select').attr('disabled','disabled');
		//$('#fdisplay').addClass('disabledAnchor');	
		localStorage.fd_done_flag=1;
	}else if (localStorage.npdTotal > 0){
		var url = "#npdPage";
		$.mobile.navigate(url);
	}else{
		var url = "#mhskusPage";
		$.mobile.navigate(url);
	}
}

function fdisplay_page_set() { 
	if (localStorage.fdisplay_data_ready.length > 10){
		//alert(localStorage.fdisplay_data_ready);
		var fdisplay_array =  localStorage.fdisplay_data_ready.split('headend');
		var fdisplay_head=fdisplay_array[0].replace("headstart","");
		
		var fdisplay_detail=fdisplay_array[1];
		//alert(fdisplay_detail);
		var fdisplay_head_array =  fdisplay_head.split('rdrd');
		//alert(fdisplay_head_array);
		for (var i=0; i < localStorage.fdisplaySlabTotal-1; i++){
			var head_s_array=fdisplay_head_array[i].split('fdfd');
			var slabfdisplay =head_s_array[0];
			//var fdisplayTotal=head_s_array[1];
			var fdisplayImg=head_s_array[1];
			//var fdisplayImg_path=head_s_array[3];
			
			//var fdisplayImg_before=head_s_array[4];
			//var fdisplayImg_path_before=head_s_array[5].replace("rdrd","");
			//alert(slabfdisplay+'=='+fdisplayImg);
			//$("#fdSL_image_div_hidden_"+i.toString()).val(fdisplayImg_path);
			$("#fdSL_image_name_hidden_"+i.toString()).val(fdisplayImg);
			
			//$("#fdSL_image_div_hidden_"+i.toString()+"_before").val(fdisplayImg_path_before); 
			//$("#fdSL_image_name_hidden_"+i.toString()+"_before").val(fdisplayImg_before);
				
			var image = document.getElementById('fdSL_image_div_'+i.toString());
			image.src = fdisplayImg;
			
			//var image_before = document.getElementById('fdSL_image_div_'+i.toString()+"_before");
			//image_before.src = fdisplayImg_path_before;
			//alert(fdisplay_detail);	
			var fdisplay_detail_array =  fdisplay_detail.split('detaildetail');
			//alert(fdisplay_detail_array);
			var fdisplay_detail_n=fdisplay_detail_array[i]
			//alert(fdisplay_detail_n);
			var fdisplay_detail_s_array_1 =  fdisplay_detail_n.split('rdrd');
			//alert(fdisplay_detail_s_array_1);
			var fdTotal_detail=fdisplay_detail_s_array_1.length
			
			for (var d=0; d < fdTotal_detail-1; d++){
				var fdisplay_detail_s_array =  fdisplay_detail_s_array_1[d].split('fdfd');
				//alert(fdisplay_detail_s_array);
				var ItemQtyfdisplay= fdisplay_detail_s_array[1];
				var ItemFaceupfdisplay= fdisplay_detail_s_array[2];
				var ItemVisiblefdisplay= fdisplay_detail_s_array[3];
				
				$("#ItemQtyfdisplay_"+i.toString()+"_"+d.toString()).val(ItemQtyfdisplay);
				$("#ItemFaceupfdisplay_"+i.toString()+"_"+d.toString()).val(ItemFaceupfdisplay);
				if (ItemVisiblefdisplay=='YES'){
					$("#ItemVisiblefdisplay_"+i.toString()+"_"+d.toString()).attr('checked',true);
				} //endif
			}//end for
				
		}//endfor
	}//end if

	if (localStorage.fd_done_flag==1){
		//$('#fdisplay').find('input, textarea, select').attr('disabled','disabled');
		//$('#fdisplay').addClass('disabledAnchor');
	}
	/*if (localStorage.before_flag==1){
		$('#fdisplayStringShowBefore').find('input, textarea, button, select').attr('disabled','disabled');
		$('#fdisplayStringShowBefore').addClass('disabledAnchor');
	}*/
}

//===============QPDS data==================
function qpds_ready_data() { 
	var qpds_data=""
	var qpds_data_detail="";
	var qpds_data_head="";
	var qpds_image_flag=0;	
	var error_qty_flag_qpds=0;
	/*for (var i=0; i < localStorage.qpdsSlabTotal-1; i++){
		//var qpdsSL_image_path=$("#qpdsSL_image_div_hidden_"+i.toString()).val(); 
		
		//var qpdsSL_image_path_before=$("#qpdsSL_image_div_hidden_"+i.toString()+"_before").val(); 
		//var qpdsSL_image_name_before=$("#qpdsSL_image_name_hidden_"+i.toString()+"_before").val(); 
		
		var qpdsSL=$("#qpdsSL_"+i.toString()).val();
		var qpdsTotal='qpdsTotal'+i.toString()
		var qpdsTotal_1=$("#qpdsSL_total_hidden_"+i.toString()).val();
		
		if (qpdsSL_image_path.length<10){
			qpds_image_flag=1
		}*/
		
		for (var i=0; i < localStorage.qpdsTotal-1; i++){
			var ItemQtyqpds= $("#ItemQtyQpds_"+i.toString()).val();  
			var Itemqpds= $("#ItemNameQpds_"+i.toString()).val();  
			
			//var ItemFaceupqpds=$("#ItemFaceupqpds_"+i.toString()+"_"+d.toString()).val();   
			//var schemeqpds=$("#schemeqpds_"+i.toString()+"_"+d.toString()).val(); 
			var qpdsSL_image_name=$("#qpdsSL_image_name_hidden_"+i.toString()).val(); 
			//alert(ItemQtyqpds+'==='+Itemqpds+'==='+qpdsSL_image_name);
			var ItemVisibleqpds_f="#ItemVisibleqpds_"+i.toString();
     		var ItemVisibleqpds_g= ($(ItemVisibleqpds_f).is(':checked') ? 1 : 0);
						
			if (ItemVisibleqpds_g==0){
				ItemVisibleqpds='NO'
			}
			if (ItemVisibleqpds_g==1){
				ItemVisibleqpds='YES'
			}			
			if  ((ItemQtyqpds.length < 1) || (ItemVisibleqpds=='NO')){
				error_qty_flag_qpds=1;
			}
			
			if (qpdsSL_image_name.length<10){
				qpds_image_flag=1
			}
			
			qpds_data=qpds_data+Itemqpds+'fdfd'+ItemQtyqpds+'fdfd'+ItemVisibleqpds+'fdfd'+qpdsSL_image_name+'rdrd'
			//alert(qpds_data);
		}
		//qpds_data_detail=qpds_data_detail+'detaildetail'
		//qpds_data_head=qpds_data_head+schemeqpds+'fdfd'+qpdsSL+'fdfd'+qpdsSL_image_name+'rdrd'
	
	//}
	//qpds_data='headstart'+qpds_data_head+'headend'+qpds_data_detail
	localStorage.qpds_data_ready=qpds_data;
	//alert(localStorage.qpds_data_ready);
	qpds_page_set();
	
	if (localStorage.latlongSubmit==1){
		$("#submit_data").html("Location Confirmed");
	}
		
	if (error_qty_flag_qpds==1){
		var url = "#qpdsPage";
		$.mobile.navigate(url);
	}else if (qpds_image_flag==1){
		var url = "#qpdsPage";
		$.mobile.navigate(url);
	}else{
		var url = "#npdPage";
		$.mobile.navigate(url);
		$(url).trigger('create');
		/*$('#qpds').find('input, textarea, button, select').attr('disabled','disabled');
		$('#qpds').addClass('disabledAnchor');	*/
		localStorage.qpds_next_flag=1;
	}
}

function qpds_page_set() { 
	if (localStorage.qpds_data_ready.length > 10){
		/*var qpds_array =  localStorage.qpds_data_ready.split('headend');
		var qpds_head=qpds_array[0].replace("headstart","");
		var qpds_detail=qpds_array[1];*/
		
		var qpds_head_array =  localStorage.qpds_data_ready.split('rdrd');
		for (var i=0; i < localStorage.qpdsTotal-1; i++){
			/*var head_s_array=qpds_head_array[i].split('fdfd');
			var slabqpds =head_s_array[0];
			var qpdsTotal=head_s_array[1];
			
			var qpdsImg=head_s_array[2];
			var qpdsImg_path=head_s_array[3];
			
			$("#qpdsSL_image_name_hidden_"+i.toString()).val(qpdsImg);
			$("#qpdsSL_image_div_hidden_"+i.toString()).val(qpdsImg_path);
					
			var image = document.getElementById('qpdsSL_image_div_'+i.toString());
			image.src = qpdsImg_path;
					
			var qpds_detail_array =  qpds_detail.split('detaildetail');
			var qpds_detail_n =  qpds_detail_array[i];
			var qpds_detail_s_array_1=qpds_detail_n.split('rdrd');
			var qpdsDTotal=qpds_detail_s_array_1.length
				
			for (var d=0; d < qpdsDTotal-1; d++){*/
				var qpds_detail_s_array =  qpds_head_array[i].split('fdfd');
				
				var ItemQtyqpds = qpds_detail_s_array[1];
				//var ItemFaceupqpds = qpds_detail_s_array[2];
				var ItemVisibleqpds = qpds_detail_s_array[2];
				var qpdsImg_path = qpds_detail_s_array[3];
				
				//alert(ItemQtyqpds+'=='+ItemVisibleqpds+'=='+qpdsImg_path);
				
				$("#ItemQtyqpds_"+i.toString()).val(ItemQtyqpds);
				//$("#ItemFaceupqpds_"+i.toString()).val(ItemFaceupqpds);
				
				if (ItemVisibleqpds=='YES'){
					$("#ItemVisibleqpds_"+i.toString()).attr('checked',true);
				}
				
				var image = document.getElementById('qpdsSL_image_div_'+i.toString());
				image.src = qpdsImg_path;
	
			//}
		}
	}// End if
	
	if (localStorage.qpds_next_flag==1){
		/*$('#qpds').find('input, textarea, button, select').attr('disabled','disabled');
		$('#qpds').addClass('disabledAnchor');	*/
	}
}

function checkQtyQpds(i){
	var get_i= i.toString();
	//alert(get_i);
	var get_i_list=get_i.split("_")
	//alert(get_i_list);
	var slab=get_i_list[0].replace("/","")
	var id=get_i_list[1].replace("/","")
	
	var qty=$("#ItemQtyqpds_"+slab.toString()+"_"+id.toString()).val();
	var faceup=$("#ItemFaceupqpds_"+slab.toString()+"_"+id.toString()).val();
	
	if (parseInt(faceup) > parseInt(qty)){
		$("#ItemFaceupqpds_"+slab.toString()+"_"+id.toString()).val("");
	}
}


function npd_ready_data() { 
	var npd_data=""
	var error_flag_qty_npd=0;
	var error_image_flag_npd=0;
	//alert(localStorage.npdTotal);
	for (var i=0; i < localStorage.npdTotal-1; i++){
		var ItemQtynpd=$( "#ItemQtynpd_"+i.toString()).val();
		var Itemnpd=$( "#Itemnpd_"+i.toString()).val();
		var minQty=$( "#minQty_npd_"+i.toString()).val(); 
		var npd_image_div_path=$("#npd_image_div_hidden_"+i.toString()).val(); 
		var npd_image_name_hidden=$("#npd_image_name_hidden_"+i.toString()).val(); 
		//alert(ItemQtynpd+'==='+minQty+'==='+npd_image_name_hidden);
		/*if (ItemQtynpd.length < 1){
			error_flag_qty_npd=1;
		}
		if (npd_image_div_path.length < 1){
			error_image_flag_npd=1;
		}*/
		npd_data=npd_data+Itemnpd+'fdfd'+ItemQtynpd+'fdfd'+minQty+'fdfd'+npd_image_div_path+'fdfd'+npd_image_name_hidden+'rdrd';
	}
	localStorage.npd_data_ready=npd_data
	//alert(localStorage.npd_data_ready);
	npd_page_set();
	///alert(error_flag_qty_npd+'==='+error_image_flag_npd)
	if  ((error_flag_qty_npd==1) || (error_image_flag_npd==1)){
		 var url = "#npdPage";
		$.mobile.navigate(url);
	}else{
		var url = "#mhskusPage";
		$.mobile.navigate(url);
		$(url).trigger('create');
		/*$('#npd').find('input, textarea, button, select').attr('disabled','disabled');
		$('#npd').addClass('disabledAnchor');*/
		localStorage.npd_next_flag=1;
	}
}

function npd_page_set() { 
	var npd_array =  localStorage.npd_data_ready.split('rdrd');
	for (var i=0; i < npd_array.length-1; i++){
		var npd_single_array = npd_array[i].split('fdfd');	
		var itemQty=npd_single_array[1];
		var npd_image_div_path=npd_single_array[3];
		//alert(npd_image_div_path);
		var npd_image_name_hidden=npd_single_array[4];
		
		$("#npd_image_div_hidden_"+i.toString()).val(npd_image_div_path); 
		$("#npd_image_name_hidden_"+i.toString()).val(npd_image_name_hidden); 
		$("#ItemQtynpd_"+i.toString()).val(itemQty);
		
		var image = document.getElementById('npd_image_div_'+i.toString());
		image.src = npd_image_div_path;
	}
	if (localStorage.npd_next_flag==1){
		/*$('#npd').find('input, textarea, button, select').attr('disabled','disabled');
	    $('#npd').addClass('disabledAnchor');	*/
	}
}

function get_pic_npd(id) {	
	var div_id="npd_image_div_"+id;
	temp_image_div=div_id;
	
	var hidden_name="npd_image_name_hidden_" + id ;
	var tempTime = $.now();
	npd_image_name=tempTime.toString()+localStorage.selectedOutlet+id.toString()+"_npd.jpg";
	$("#"+hidden_name).val(npd_image_name);
	
	navigator.camera.getPicture(onSuccessNpd, onFailNpd, { quality: 50,
		targetWidth: 300,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
	     //   targetHeight: 512,
}
function onSuccessNpd(imageURI) {
	var image = document.getElementById(temp_image_div);
    image.src = imageURI;
    var hidden_path=temp_image_div.replace("npd_image_div","npd_image_div_hidden");
	$("#"+hidden_path).val(imageURI);
}
function onFailNpd(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}


function mhskus_ready_data() { 
	var mhskus_data=""
	var error_flag_qty_mhskus=0;
	for (var i=0; i < localStorage.mhskusTotal-1; i++){
		var itemskus=$( "#Itemmskus_"+i.toString()).val();
		var itemQtyskus=$( "#ItemQtymskus_"+i.toString()).val();
		var minQtymskus=$( "#minQtymskus_"+i.toString()).val();
		if (itemQtyskus.length < 1){
			error_flag_qty_mhskus=1
		}
		mhskus_data=mhskus_data+itemskus+'fdfd'+itemQtyskus+'fdfd'+minQtymskus+'rdrd';
	}
	localStorage.mhskus_data_ready=mhskus_data;
	mhskus_page_set();

	//localStorage.mar_distrib_data="";
	if (error_flag_qty_mhskus==1 ){
		var url = "#mhskusPage";
		$.mobile.navigate(url);
	}else{
		var url = "#giftAckPage";
		$.mobile.navigate(url);
		$(url).trigger('create');
		/*$('#mhskus').find('input, textarea, button, select').attr('disabled','disabled');
		$('#mhskus').addClass('disabledAnchor');*/	
		localStorage.mhskus_next_flag=1;
	}
}
function mhskus_page_set() { 
	 var mhskus_array =  localStorage.mhskus_data_ready.split('rdrd');
	 for (var i=0; i < mhskus_array.length-1; i++){
		var mhskus_single_array = mhskus_array[i].split('fdfd');	
		var itemQty=mhskus_single_array[1];
		$("#ItemQtymskus_"+i.toString()).val(itemQty);
	 }
	 if (localStorage.mhskus_next_flag==1){
		/*$('#mhskus').find('input, textarea, button, select').attr('disabled','disabled');
	    $('#mhskus').addClass('disabledAnchor');	*/
	}
}


function gift_ready_data() { 	
	var gift_data="";
	var image_name=$("#gift_image_name_hidden").val();
	var gift_image_path=$("#gift_image_div_hidden").val();
	var gift_month =$("#gift_month").val()
	
	gift_data=gift_data+image_name+'fdfd'+gift_image_path+'fdfd'+gift_month+'rdrd';
	localStorage.gift_data_ready=gift_data
	
	gift_page_set();
	//
	//alert(gift_month);
	if ((image_name.length > 10) && (gift_month !='')){
		var url = "#placePage";
		$.mobile.navigate(url);
		//$(url).trigger('create');
		//$('#gift').addClass('disabledAnchor');	
		localStorage.gift_next_flag=1;
	}else{
		var url = "#giftAckPage";
		$.mobile.navigate(url);
		//$(url).trigger('create');
	}
}

function gift_page_set() { 
	//$("#sub_button").hide();
	//alert(localStorage.gift_data_ready);
	var gift_data =  localStorage.gift_data_ready.replace("rdrd","");
	var gift_array =  gift_data.split('fdfd');
	
	var image_name = gift_array[0];
	var gift_image_path = gift_array[1];
	var gift_month = gift_array[2];
	
	$("#gift_image_name_hidden").val(image_name);
	$("#gift_image_div_hidden").val(gift_image_path);
	
	var giftStringShow_combo=giftStringShow_combo +'<select name="gift_month" id="gift_month" >'
	
	if ((gift_month != '') && (gift_month!=undefined) && (gift_month!='undefined')){
	   giftStringShow_combo=giftStringShow_combo +'<option value="'+gift_month+'">'+gift_month+'</option>'
	}
	giftStringShow_combo=giftStringShow_combo +'<option value="No Gift">No Gift</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="JANUARY">JANUARY</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="FEBRUARY">FEBRUARY</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="MARCH">MARCH</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="APRIL">APRIL</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="MAY">MAY</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="JUNE">JUNE</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="JULY">JULY</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="AUGUST">AUGUST</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="SEPTEMBER">SEPTEMBER</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="OCTOBER">OCTOBER</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="NOVEMBER">NOVEMBER</option>'
	giftStringShow_combo=giftStringShow_combo +'<option value="DECEMBER">DECEMBER</option></select>'
	
	$("#gift_combo").empty();
	$("#gift_combo").append(giftStringShow_combo).trigger('create');
		
	var image = document.getElementById('gift_image_div');
	image.src = gift_image_path;
}

function get_pic_gift() {
	var tempTime = $.now();
	gift_image_name=tempTime.toString()+"_"+localStorage.selectedOutlet+".jpg";
	$("#gift_image_name_hidden").val(gift_image_name);
	navigator.camera.getPicture(onSuccessGift, onFailGift, { quality: 70,
		targetWidth: 450,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}
function onSuccessGift(imageURI) {
	var image = document.getElementById('gift_image_div');
    image.src = imageURI;
    var hidden_path="gift_image_div_hidden";
	$("#"+hidden_path).val(imageURI);
}
function onFailGift(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}


function place_ready_data() { 
	var place_data="";
	var image_name=$("#place_image_name_hidden").val();
	var place_image_path=$("#place_image_div_hidden").val();
	
	var is_near_inFront_actual= ($('#is_near_inFront_actual').is(':checked') ? 1 : 0);
	var is_beside_adjacent_actual= ($('#is_beside_adjacent_actual').is(':checked') ? 1 : 0);
	var is_eyeLevel_actual= ($('#is_eyeLevel_actual').is(':checked') ? 1 : 0);
	var is_clearlyVis_noObs_actual= ($('#is_clearlyVis_noObs_actual').is(':checked') ? 1 : 0);
	
	place_data=place_data+image_name+'fdfd'+place_image_path+'fdfd'+is_near_inFront_actual+'fdfd'+is_beside_adjacent_actual+'fdfd'+is_eyeLevel_actual+'fdfd'+is_clearlyVis_noObs_actual+'rdrd';
	
	localStorage.place_data_ready=place_data
	//alert(localStorage.place_data_ready);
	place_page_set();
	
	if ((image_name.length > 10)){
		var url = "#keyTaskPage";
		$.mobile.navigate(url);
		//$(url).trigger('create');
		//$('#place_combo_show').addClass('disabledAnchor');
		localStorage.place_next_flag=1;
	}else{
		var url = "#placePage";
		$.mobile.navigate(url);
		$(url).trigger('create');		
	}
}

function place_page_set() { 
//alert(localStorage.place_data_ready);
	var place_data =  localStorage.place_data_ready.replace("rdrd","");
	var place_array =  place_data.split('fdfd');
	var image_name = place_array[0];
	var place_image_path = place_array[1];
	var is_near_inFront_actual= place_array[2];
	var is_beside_adjacent_actual= place_array[3];
	var is_eyeLevel_actual= place_array[4];
	var is_clearlyVis_noObs_actual= place_array[5];
	
	$("#place_image_name_hidden").val(image_name);
	$("#place_image_div_hidden").val(place_image_path);
	
	$("#is_near_inFront_actual").val(is_near_inFront_actual);
	$("#is_beside_adjacent_actual").val(is_beside_adjacent_actual);
	$("#is_eyeLevel_actual").val(is_eyeLevel_actual);
	$("#is_clearlyVis_noObs_actual").val(is_clearlyVis_noObs_actual);
	
	if (is_near_inFront_actual==1){
		document.getElementById("is_near_inFront_actual").checked = true;
	}
	if (is_beside_adjacent_actual==1){
		document.getElementById("is_beside_adjacent_actual").checked = true;
	}
	if (is_eyeLevel_actual==1){
		document.getElementById("is_eyeLevel_actual").checked = true;
	}
	if (is_clearlyVis_noObs_actual==1){
		document.getElementById("is_clearlyVis_noObs_actual").checked = true;
	}
	
	var image = document.getElementById('place_image_div');
	image.src = place_image_path;
	
	/*if (localStorage.place_next_flag==1){
		$('#place_show').addClass('disabledAnchor');	
	}*/
	localStorage.submit_count=0;
}

function get_pic_place() {
	var tempTime = $.now();
	place_image_name=tempTime.toString()+"_"+localStorage.selectedOutlet+"_place.jpg";
	$("#place_image_name_hidden").val(place_image_name);
	navigator.camera.getPicture(onSuccessPlace, onFailPlace, { quality: 70,
		targetWidth: 450,
		destinationType: Camera.DestinationType.FILE_URI , correctOrientation: true });
}
function onSuccessPlace(imageURI) {
	var image = document.getElementById('place_image_div');
    image.src = imageURI;
    var hidden_path="place_image_div_hidden";
	$("#"+hidden_path).val(imageURI);
}
function onFailPlace(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}


function task_ready_data() { 
	var key_data=''
	var planKey= ($('#planKey').is(':checked') ? 1 : 0);
	var productKey= ($('#productKey').is(':checked') ? 1 : 0);
	var posmKey= ($('#posmKey').is(':checked') ? 1 : 0);
	var catKey= ($('#catKey').is(':checked') ? 1 : 0);
	
	key_data=key_data+planKey+'fdfd'+productKey+'fdfd'+posmKey+'fdfd'+catKey+'rdrd';
	localStorage.key_data_ready=key_data
	
	keyTaskPage_set();
	
	
	/*$("#sub_button_div").show();
	$("#image_up_button").hide();
	$("#NOutlet_button").hide();
	$("#usages_button_div").hide();*/
	$("#sub_button_div").show();
	$("#submit_data_check").text('');
	$("#submit_data").text('');
	$("#executionSub").hide();
	$("#selectNewOutlet").hide();
	$(".bufferImageSubmit").hide();
	var url = "#submitPage";
	$("#dataerror").text('');
	/*$(".sucMsgU").hide();
	$("#btn_submit_usages").hide();
	$("#allHide").hide();
	$("#bufferImageU").hide();
	$("#usageSubmitbufferImage").hide();
	var url = "#page5";*/
	$.mobile.navigate(url);
}

function keyTaskPage_set() { 
	var key_data =  localStorage.key_data_ready.replace("rdrd","");
	var key_array =  key_data.split('fdfd');

	var planKey= key_array[0];
	var productKey= key_array[1];
	var posmKey= key_array[2];
	var catKey=key_array[3];
	
	if (planKey==1){
		document.getElementById("planKey").checked = true;
	}
	if (productKey==1){
		document.getElementById("productKey").checked = true;
	}
	if (posmKey==1){
		document.getElementById("posmKey").checked = true;
	}
	if (catKey==1){
		document.getElementById("catKey").checked = true;
	}
}


function getlocationand_askhelp() {
    $("#lat").val(0);
	$("#long").val(0);
	var options = { enableHighAccuracy: true,timeout:5000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	$("#location_button").hide();
	$("#submit_data").html("Confirming Location. Please Wait...");
	localStorage.placeLatLongCount=parseInt(localStorage.placeLatLongCount)+1
}
function onSuccess(position) {
	localStorage.latitude=position.coords.latitude;
	localStorage.longitude=position.coords.longitude;
	
	$("#lat").val(localStorage.latitude);
	$("#long").val(localStorage.longitude);
	$("#submit_data").html("Location Confirmed");
	localStorage.latlongSubmit=1;
	buttonCheck();
}
function onError(error) {
	$("#submit_data").html('Please Ensure  Your GPS is On');
	//$("#sub_button").hide();
	$("#location_button").show();
	$("#lat").val(0);
	$("#long").val(0);
	localStorage.latlongSubmit=0;
	buttonCheck();
}



function usages_data(){
	$(".errorChk").text("");				
	$(".sucMsgU").hide();
	$("#btn_submit_usages").hide();
	$("#allHide").hide();
	$("#bufferImageU").hide();
	$("#usageSubmitbufferImage").hide();
	$("#newOutletButton").hide();
	var url = "#page5";
	$.mobile.navigate(url);	
}

//==================upload image===============

//------------------------------------------------------------------------
function upload_fd(){
	//fixed display
	localStorage.step_flag=1; //1 fd , 2 qpds, 3 gift
	file_upload_error = 0;
	
	$( "#sub_fd_button").hide();
	/*$("#submit_data").html('<img height="40px" width="40px" src="loading.gif">');*/
	//$("#submit_data").html('localStorage.fdisplay_data_ready:' + localStorage.fdisplay_data_ready);
	

	if (typeof localStorage.fdisplay_data_ready === "undefined") {
		localStorage.fdisplay_data_ready = "_";
	}
	
	for (var i=0; i < localStorage.fdisplaySlabTotal-1; i++){
		var image_name=$("#fdSL_image_name_hidden_"+i.toString()).val();
		var fdSLfdisplay_image_path=$("#fdSL_image_div_hidden_"+i.toString()).val();
		
		
		//var image_name_before=$("#fdSL_image_name_hidden_"+i.toString() + "_before").val();
		//var fdSLfdisplay_image_path_before=$("#fdSL_image_div_hidden_"+i.toString()+ "_before").val();
		
		
		if (image_name.length >10){
			uploadPhoto(fdSLfdisplay_image_path, image_name);
			//uploadPhoto(fdSLfdisplay_image_path_before, image_name_before);
			localStorage.fddataSubmit=1;
			//if upload is successfull then "file_upload_error" will be 0 , if error 1
		} else {
			localStorage.fddataSubmit=1;
			$("#submit_data").html("Fixed Display Image Not Available");
		}
					
	}//end for
	upload_qpds();

}

function upload_qpds(){
	//QPDS
	localStorage.step_flag=2; //1 fd , 2 qpds, 3 gift
	file_upload_error = 0;
	//$( "#sub_qpds_button").hide();
	
	if (typeof localStorage.qpds_data_ready === "undefined") {
		localStorage.qpds_data_ready ="_";
	}
 	localStorage.qpdsdataSubmit=1;
	if (localStorage.qpds_data_ready.length > 10){	
		for (var i=0; i < localStorage.qpdsSlabTotal-1; i++){
			var image_name=$("#qpdsSL_image_name_hidden_"+i.toString()).val();
			var qpds_image_path=$("#qpdsSL_image_div_hidden_"+i.toString()).val();
			
			//var image_name_before=$("#qpdsSL_image_name_hidden_"+i.toString()+"_before").val();
			//var qpds_image_path_before=$("#qpdsSL_image_div_hidden_"+i.toString()+"_before").val();
			localStorage.qpdsdataSubmit=1;
			if (image_name.length >10){
				uploadPhoto(qpds_image_path, image_name);
				$("#submit_data").html("");	
				}else{
					$("#submit_data").html("Promotion Image Not Available");				
				}
		}//end for
	}//end if
	else{
		 localStorage.qpdsdataSubmit=1;
	}
	 upload_npd();
}

//==============upload npd
function upload_npd(){
	localStorage.step_flag=3; 
	localStorage.npddataSubmit=1;
	if (typeof localStorage.npd_data_ready === "undefined") {
		localStorage.npd_data_ready = "_";
	}
	
	if (localStorage.npdTotal  > 0){
		for (var i=0; i < localStorage.npdTotal-1; i++){
			var image_name=$("#npd_image_name_hidden_"+i.toString()).val();
			var npd_image_path=$("#npd_image_div_hidden_"+i.toString()).val();
			
			if (image_name.length >10){
				uploadPhoto(npd_image_path, image_name);
				$("#submit_data").html("");
			}else{
				$("#submit_data").html("Npd Image Not Available");
			}	
		}//end for
	}else{
		upload_gift_confirm()
		buttonCheck();
	}
}

function upload_gift_confirm(){
	//Gift
	localStorage.giftdataSubmit=1;
	localStorage.step_flag=4; //1 fd , 2 qpds, 3 gift
	file_upload_error = 0;
	$( "#sub_gift_button").hide();
	//$("#submit_data").html('<img height="40px" width="40px" src="loading.gif">');
	//$("#submit_data").html('Gift');
	
	var image_name=$("#gift_image_name_hidden").val();
	var gift_image_path=$("#gift_image_div_hidden").val();
	
	if (image_name.length >10){
		uploadPhoto(gift_image_path, image_name);
		$("#submit_data").html("");

	}else {
		$("#submit_data").html("Gift Image Not Available");
	}
	upload_shop()
}

function upload_shop(){
	localStorage.step_flag=6;
	file_upload_error = 0;
	//$( "#sub_qpds_button").hide();
	localStorage.shopdataSubmit=1;

	var image_name_shop=$("#shop_image_name_hidden").val();
	var shop_image_path=$("#shop_image_div_hidden").val();
	
	if (image_name_shop.length >10){
		uploadPhoto(shop_image_path, image_name_shop);
		$("#submit_data").html("");
	} else {
		$("#submit_data").html("Shop Image Not Available");
	}
	upload_place()
	//buttonCheck();
}

//========================Place upload
function upload_place(){
	localStorage.step_flag=5; 
	localStorage.placedataSubmit=1;
	//step_flag=2; //1 fd , 2 qpds, 3 gift
	file_upload_error = 0;
	//$( "#sub_qpds_button").hide();

	var image_name_place=$("#place_image_name_hidden").val();
	var place_image_path=$("#place_image_div_hidden").val();
	
	if (image_name_place.length >10){
		uploadPhoto(place_image_path, image_name_place);
		$("#submit_data").html("");
	}else{
		$("#submit_data").html("Place Image Not Available");
	}
	buttonCheck();
}

function uploadPhoto(imageURI, imageName) {
	
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

//ft.upload(imageURI, encodeURI("http://127.0.0.1:8000/postit/syncmobile/fileUploader/"),win,fail,options);

 //ft.upload(imageURI, encodeURI("http://e4.businesssolutionapps.com/mrepimage/syncmobile/fileUploader/"),win,fail,options);
// ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/uniext/upload_image/"),win,fail,options);
 ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win,fail,options);
}

function win(r) {
	file_upload_error = 0;
		
	if (localStorage.step_flag==1){ //for fixed display
		$("#submit_data").html("Fixed Display Synced Successfully");
		localStorage.qpdsdataSubmit=1;
		upload_qpds();
		//buttonCheck();
	}
	
	if (localStorage.step_flag==2){ // QPDS
		$("#submit_data").html("Promotion Synced Successfully");
		localStorage.npddataSubmit=1;
		upload_npd()
		//buttonCheck();		
	}	
	if (localStorage.step_flag==3){  // Gift
		$("#submit_data").html("Promotion Synced Successfully");
		localStorage.giftdataSubmit=1;
		upload_gift_confirm();
		//buttonCheck();
	}
	if (localStorage.step_flag==4){  // Gift
		$("#submit_data").html("Gift Synced Successfully");
		localStorage.shopdataSubmit=1;
		upload_shop();
	//	buttonCheck();
	}
	if (localStorage.step_flag==5){  // Gift
		$("#submit_data").html("Place Synced Successfully");
		localStorage.placedataSubmit=1;
		
		upload_place();
		buttonCheck();
	}
	if (localStorage.step_flag==6){  // Gift
		$("#submit_data").html("All Sync Completted");
		localStorage.shopdataSubmit=1;
		cancel_outlet()
		buttonCheck();
	}

	
	localStorage.step_flag=0; //Reset step flag
}

function fail(error) {
	file_upload_error = 1;
	
//	step_flag=0; //1 fd , 2 qpds, 3 gift
	
	if (step_flag==1){ //for fixed display
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.fddataSubmit=0;
		buttonCheck();
	}
	
	if (step_flag==2){ // QPDS
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.qpdsdataSubmit=0;
		buttonCheck();
	}
	
	if (step_flag==3){  // NPD
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.npddataSubmit=0;
		buttonCheck();
	}	
	
	if (step_flag==4){  // Gift
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.giftdataSubmit=0;
		buttonCheck();
	}
	
	if (step_flag==5){  // Place
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.placedataSubmit=0;
		buttonCheck();
	}
	
	if (step_flag==6){  // Shop
		$("#submit_data").html("Network timeout. Please ensure you have good network signal and working Internet.");
		localStorage.shopdataSubmit=0;
		buttonCheck();
	}
	step_flag=0; //Reset step flag
}

function check_step() {
	if (localStorage.step_flag==0){
		upload_fd();
	}
	if (localStorage.step_flag==1){
		upload_qpds();
	}
	if (localStorage.step_flag==2){
		upload_npd();
	}
	if (localStorage.step_flag==3){
		upload_gift_confirm();
	}
	if (localStorage.step_flag==4){
		upload_shop();
	}
	if (localStorage.step_flag==5){
		upload_place();
	}
	if (localStorage.step_flag==6){
		cancel_outlet();
	}
	
		
	var url = "#outletSelectPage";
	$.mobile.navigate(url);
}

function buttonCheck(){	
	/*if ((localStorage.dataSubmit==1) && ((localStorage.fddataSubmit==1) || (localStorage.qpdsdataSubmit==0) || (localStorage.npddataSubmit==0) || (localStorage.giftdataSubmit==0) || (localStorage.placedataSubmit==0) || (localStorage.shopdataSubmit==0))){
		
	$("#sub_button_div").hide();
	$("#image_up_button").hide();
	$("#NOutlet_button").hide();
	
	}*/
	
	//alert();
	/*if ((localStorage.latlongSubmit==0) && (localStorage.placeLatLongCount >3)){
		localStorage.latlongSubmit=1
		//alert('1');
	}
	if ((localStorage.latlongSubmit==0) & (localStorage.dataSubmit==0)){
		$("#location_button").show();
		$("#sub_button_div").hide();

		$("#image_up_button").hide();
		$("#NOutlet_button").hide();
		
		$("#lat").val(0);
		$("#long").val(0);
		//alert('2');
	}
	if ((localStorage.latlongSubmit==1) && (localStorage.dataSubmit==0) && ((localStorage.fddataSubmit==0) || (localStorage.qpdsdataSubmit==0) || (localStorage.npddataSubmit==0) || (localStorage.giftdataSubmit==0) || (localStorage.placedataSubmit==0) || (localStorage.shopdataSubmit==0))){
		$("#location_button").hide();
		$("#sub_button_div").show();
		//$("#usages_button_div").show();
		//alert('3');

		$("#image_up_button").hide();
		$("#NOutlet_button").hide();	
	}
	if ((localStorage.latlongSubmit==1) && (localStorage.dataSubmit==1) && ((localStorage.fddataSubmit==0) || (localStorage.qpdsdataSubmit==0) || (localStorage.npddataSubmit==0) || (localStorage.giftdataSubmit==0) || (localStorage.placedataSubmit==0) || (localStorage.shopdataSubmit==0))){
		$("#location_button").hide();
		$("#sub_button_div").hide();
		//$("#usages_button_div").show();
		//alert('4');
		$("#image_up_button").show();
		$("#NOutlet_button").hide();
	}
	if ((localStorage.latlongSubmit==1) && (localStorage.dataSubmit==1) && (localStorage.fddataSubmit==1) && (localStorage.qpdsdataSubmit==1) && (localStorage.npddataSubmit==1) && (localStorage.giftdataSubmit==1) && (localStorage.placedataSubmit==1) && (localStorage.shopdataSubmit==1)){
		$("#location_button").hide();
		$("#sub_button_div").hide();
		//$("#usages_button_div").show();
		//alert('5');
		$("#image_up_button").hide();
		$("#NOutlet_button").show();
	}*/
}


function submit_data() { 
	$(".bufferImageSubmit").hide();
	$("#submit_data_check").html("");
	var sync_date_get=get_date();
	//var sync_date=sync_date_get.split(' ')[0];
	var sync_y=sync_date_get.split('-')[0];
	var sync_m=sync_date_get.split('-')[1];
	if (sync_m.length==1){sync_m='0'+sync_m}
	var sync_d=sync_date_get.split('-')[2].split(' ')[0];
	if (sync_d.length==1){sync_d='0'+sync_d}
	var sync_date=sync_y +'-'+ sync_m +'-'+sync_d;
	//alert('1');
	if ((localStorage.synced=='YES') & (localStorage.sync_date!=sync_date)){
			//alert('2');		
		cancel_outlet();
		
		localStorage.show_cancel=0;
		localStorage.m_new_string="";
		localStorage.m_new="";
		localStorage.selectedOutlet="";
		localStorage.outletExStringShow="";
		localStorage.outletException="";
		localStorage.outletChanne="";
		localStorage.outletNameID="";
		localStorage.mhskusTotal="";
		
		localStorage.npdTotal="";
		localStorage.fdisplaySlabTotal="";
		localStorage.fdisplayTotal="";
		localStorage.qpdsSlabTotal="";
		
		localStorage.qpdsTotal="";
		localStorage.giftTotal="";
		localStorage.marchadizingTotal="";
		localStorage.mhskus_data_ready="";
		localStorage.npd_data_ready="";
		localStorage.fdisplay_data_ready="";
		localStorage.qpds_data_ready="";
		localStorage.gift_data_ready="";
		localStorage.mar_data_ready="";
		localStorage.key_data_ready="";
		
		//localStorage.sync_date=sync_date;
		//localStorage.synced=='YES';
		
		//distributon
		localStorage.mar_distrib_data=""
		localStorage.merchandisingDistribStr=""
		localStorage.mar_distrib_stock=""
		
		//check_route();
		var url = "#login";
		$.mobile.navigate(url);
		
	//	location.reload()
	}else if ((localStorage.synced=='YES') & (localStorage.selectedOutlet=="")){
		//alert('3');
		cancel_outlet();
		localStorage.show_cancel=0;
		localStorage.m_new_string="";
		localStorage.m_new="";
		localStorage.selectedOutlet="";
		localStorage.outletExStringShow="";
		localStorage.outletException="";
		localStorage.outletChanne="";
		localStorage.outletNameID="";
		localStorage.mhskusTotal="";
		
		localStorage.npdTotal="";
		localStorage.fdisplaySlabTotal="";
		localStorage.fdisplayTotal="";
		localStorage.qpdsSlabTotal="";
		localStorage.qpdsTotal="";
		localStorage.giftTotal="";
		localStorage.marchadizingTotal="";
		localStorage.mhskus_data_ready="";
		localStorage.npd_data_ready="";
		
		localStorage.fdisplay_data_ready="";
		localStorage.qpds_data_ready="";
		localStorage.gift_data_ready="";
		localStorage.mar_data_ready="";
		localStorage.key_data_ready="";
		localStorage.mar_distrib_data=""
		localStorage.merchandisingDistribStr=""
		localStorage.mar_distrib_stock=""
		
		//check_route();
		var url = "#outletPage";
		$.mobile.navigate(url);
	}else{
		//$("#sub_button").hide();
		//alert('5');
		/*$("#submit_data").html('<img height="40px" width="40px" src="loading.gif">');*/
		$(".bufferImageSubmit").show();
		//=========================AJAX Submit==========================	
		var lat=$( "#lat").val();
		var long=$( "#long").val();
		var visitDate=get_date().split(' ')[0];
		var endTime=get_date();
		var giftImage=$( "#gift_image_name_hidden").val();
		var latlong=lat.toString()+","+long.toString()
		
		$("#sub_button_div").hide();
		
		/*if (localStorage.mar_distrib_data==undefined || localStorage.mar_distrib_data=="undefined"){
			localStorage.mar_distrib_data=""
		}*/
		//alert('6');
		var fdisplay_data=localStorage.fdisplay_data_ready.replace('detaildetail','')
		//alert('7');
		var qpds_data=localStorage.qpds_data_ready//.replace('detaildetail','')
		
		//alert(apipath+'syncSubmitData?cm_id='+localStorage.p_repID+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&route='+localStorage.selectedRoute+'&routeEx='+localStorage.routeException+'&outlet='+localStorage.selectedOutlet+'&scheduleDate='+ localStorage.selected_date +'&outletEx='+localStorage.outletException+'&channel='+localStorage.outletChannel+'&latlong='+latlong+'&visitDate='+visitDate+'&startTime='+localStorage.startTime+'&endTime='+endTime+'&giftImage='+giftImage+'&mhskus_data='+localStorage.mhskus_data_ready+'&npd_data='+localStorage.npd_data_ready+'&fdisplay_data='+fdisplay_data+'&qpds_data='+qpds_data+'&gift_data='+localStorage.gift_data_ready+'&place_data='+localStorage.place_data_ready+'&shop_data='+localStorage.shop_data_ready+'&key_data='+localStorage.key_data_ready);
		
		var check_outlet= localStorage.outletString;
		$.ajax({
			type: 'POST',
			url: apipath+'syncSubmitData?cm_id='+localStorage.p_repID+'&cm_pass='+localStorage.p_SyncPass+'&synccode='+localStorage.p_sync_code+'&route='+localStorage.selectedRoute+'&routeEx='+localStorage.routeException+'&outlet='+localStorage.selectedOutlet+'&scheduleDate='+ localStorage.selected_date +'&outletEx='+localStorage.outletException+'&channel='+localStorage.outletChannel+'&latlong='+latlong+'&visitDate='+visitDate+'&startTime='+localStorage.startTime+'&endTime='+endTime+'&giftImage='+giftImage+'&mhskus_data='+localStorage.mhskus_data_ready+'&npd_data='+localStorage.npd_data_ready+'&fdisplay_data='+fdisplay_data+'&qpds_data='+qpds_data+'&gift_data='+localStorage.gift_data_ready+'&place_data='+localStorage.place_data_ready+'&shop_data='+localStorage.shop_data_ready+'&key_data='+localStorage.key_data_ready,
			success: function(result) {
				if (result==''){
					alert ('Sorry Network not available');
				}else{
					if (result!='SUCCESS'){
						$("#submit_data_check").html(result);
						$(".bufferImageSubmit").hide();
						$("#executionSub").show();
						$("#selectNewOutlet").show();
					}
					if (result=='SUCCESS'){	
						$(".bufferImageSubmit").hide();
						$("#executionSub").hide();
						$("#selectNewOutlet").hide();
						//$("#submit_data").html('<img height="40px" width="40px" src="loading.gif">');						
						//alert('9');
						localStorage.dataSubmit=1;
						//buttonCheck();
						//alert('10');
						localStorage.show_cancel=0;

						//localStorage.outletString=check_outlet.replace('<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'">','<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'" disabled="True">');
												
						//$("#outletString").empty();
						//$("#outletString").append(localStorage.outletString).trigger('create');
						
						//$("#submit_data_check").html("Success");
						$("#submit_data").html('');
						localStorage.step_flag=0;
						
						
						// Enable all disable div start
						$('#mhskus').find('input, textarea, button, select').attr('disabled',false);
						$('#npd').find('input, textarea, button, select').attr('disabled',false);
						//$('#fdisplayStringShowBefore').find('input, textarea, button, select').attr('disabled',false);
						$('#fdisplay').find('input, textarea, button, select').attr('disabled',false);
						$('#qpds').find('input, textarea, button, select').attr('disabled',false);
						$('#gift').find('input, textarea, button, select').attr('disabled',false);
						$('#place_show').find('input, textarea, button, select').attr('disabled',false);
						$('#shop_show').find('input, textarea, button, select').attr('disabled',false);
						
						// Enable disable div end
						
						upload_fd();
						//cancel_outlet();
						//alert();
						$("#sub_button_div").show();
						//buttonCheck();
						//var url = "#outletPage";
						var url = "#imageSubmitPage";
						$.mobile.navigate(url);
						//location.reload();
						localStorage.dataSubmit=0
					}	
				}
			}, 
			error: function(result) {			 
				//$("#sub_button").show();
				localStorage.dataSubmit=0;
				localStorage.submit_count=parseInt(localStorage.submit_count)+1
				$("#submit_data_check").html('Please Check Your Internet Connection');
				$("#executionSub").show();
				$("#selectNewOutlet").show();
				$(".bufferImageSubmit").hide();
				/*if (localStorage.submit_count<1){
				 	buttonCheck();
					$("#submit_data").html('');
					var url = "#submitPage";
					$.mobile.navigate(url);	
				}else{
					$("#submit_data").html("Saved Request. Please try later");
				  
				  
				 	//localStorage.outletString=check_outlet.replace('<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'">','<input type="radio" name="RadioOutlet" value="'+localStorage.selectedOutlet+'rdrd'+localStorage.selected_date_get+'" disabled="True">');
				
				
				 	localStorage.saved_req=localStorage.saved_req+'<savedsaved><'+localStorage.selectedOutlet+'><OidOid>'+localStorage.outletIDnameShow+'<showshow>'+apipath+'syncSubmitData?cid='+localStorage.cid+'&cm_id='+localStorage.cm_id+'&cm_pass='+localStorage.cm_pass+'&synccode='+localStorage.synccode+'&route='+localStorage.selectedRoute+'&routeEx='+localStorage.routeException+'&outlet='+localStorage.selectedOutlet+'&scheduleDate='+ localStorage.selected_date +'&outletEx='+localStorage.outletException+'&channel='+localStorage.outletChannel+'&latlong='+latlong+'&visitDate='+visitDate+'&startTime='+localStorage.startTime+'&endTime='+endTime+'&giftImage='+giftImage+'&mhskus_data='+localStorage.mhskus_data_ready+'&npd_data='+localStorage.npd_data_ready+'&fdisplay_data='+localStorage.fdisplay_data_ready+'&qpds_data='+localStorage.qpds_data_ready+'&gift_data='+localStorage.gift_data_ready+'&place_data='+localStorage.place_data_ready+'&shop_data='+localStorage.shop_data_ready+'&key_data='+localStorage.key_data_ready+'&fdisplayTotal='+localStorage.fdisplayTotal+'&qpdsSlabTotal='+localStorage.qpdsSlabTotal+'</'+localStorage.selectedOutlet+'>'
				;
				
					$("#outletString").empty();
					$("#outletString").append(localStorage.outletString).trigger('create');
					
					cancel_outlet();
				
				}*/
		  	}
	  	});//end ajax
	
	}//Check sync date
}

/************************=====================================================================================********************/

/************************usage*page4********************/
var selectOutletTownSup='';
function routeListSup(outletTown){
	/*-------------------------------edit suza 22-07-2019------------------------------*/
	if(localStorage.p_rep_type=='AGENCY'){
		selectOutletTownSup = localStorage.p_select_town;
	}else if(localStorage.p_rep_type=='DFF'){
		selectOutletTownSup = localStorage.p_select_town;
	}else{
		selectOutletTownSup=outletTown;
		}
	/*-------------------------------edit suza 22-07-2019------------------------------*/
	$('.bufferImageSupCall').show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getRouteSup?&townCodeName="+selectOutletTownSup,
																																																													
			success: function(result) {	
				var resultArray = result.split('rdrd');	
				if(resultArray[0]=='Success'){
					$('.bufferImageSupCall').hide();	
					//$('#bufferImageOutlet').hide();			
					routeListSupCall=resultArray[1];
					
					if(routeListSupCall!=''){
					var routeListSupALL=routeListSupCall.split('||');
					var routeStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:400px; overflow:scroll;">';
					for (i=0;i<routeListSupALL.length;i++){								
					routeStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="outletListSup(\''+ routeListSupALL[i]+'\')"><a>'+ routeListSupALL[i]+'</a></li>'
				}
					routeStr +='</ul>';
					routeListSupSTR=routeStr;
					
					$('#routeListSupCall').empty();
					$('#routeListSupCall').append(routeListSupSTR).trigger('create');
					/*$(".placeholder").attr('placeholder',"asad");*/
					$(".townSupCallLebel").html('Town		:		' + selectOutletTownSup.replace('|','-'));
					$(".errorChk").text("");
					url="#pageSupRoute";					
					$.mobile.navigate(url);					
					}else{
						$('.bufferImageSupCall').hide();
						$(".errorChk").text("Route not Available");
					}
				}
			},error: function(result){
				$('.bufferImageSupCall').hide();
				$(".errorChk").text("Please check internet connection");
			}
		});
		
}

function dayCloseFunc(){
	
	url = "#dayClose";
	$.mobile.navigate(url);
	}

var routeNameFixed='';
var outletNameFixed='';
function joinCallFiexDisplay(){
	
	joinCallQueNo1='<fieldset data-role="controlgroup" data-theme="c" data-type="horizontal" data-mini="true"><input type="radio" name="joinNo1" id="radio-choice-h-6a" value="YES" checked="checked"><label for="radio-choice-h-6a">YES</label><input type="radio" name="joinNo1" id="radio-choice-h-6b" value="NO"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#joinCallQueNo1Show").empty();
	$("#joinCallQueNo1Show").append(joinCallQueNo1).trigger('create');
	
	joinCallQueNo2='<fieldset data-role="controlgroup" data-theme="c" data-type="horizontal" data-mini="true"><input type="radio" name="joinNo2" id="radio-choice-h-6a" value="YES" checked="checked"><label for="radio-choice-h-6a">YES</label><input type="radio" name="joinNo2" id="radio-choice-h-6b" value="NO"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#joinCallQueNo2Show").empty();
	$("#joinCallQueNo2Show").append(joinCallQueNo2).trigger('create');
	
	joinCallQueNo3='<fieldset data-role="controlgroup" data-theme="c" data-type="horizontal" data-mini="true"><input type="radio" name="joinNo3" id="radio-choice-h-6a" value="YES" checked="checked"><label for="radio-choice-h-6a">YES</label><input type="radio" name="joinNo3" id="radio-choice-h-6b" value="NO"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#joinCallQueNo3Show").empty();
	$("#joinCallQueNo3Show").append(joinCallQueNo3).trigger('create');
	
	joinCallQueNo4='<fieldset data-role="controlgroup" data-theme="c" data-type="horizontal" data-mini="true"><input type="radio" name="joinNo4" id="radio-choice-h-6a" value="YES" checked="checked"><label for="radio-choice-h-6a">YES</label><input type="radio" name="joinNo4" id="radio-choice-h-6b" value="NO"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#joinCallQueNo4Show").empty();
	$("#joinCallQueNo4Show").append(joinCallQueNo4).trigger('create');
	
	
	
	var getFixedDisplayBefor_name=$("#getFixedDisplayBefor_name").val();
	var getFixedDisplayAfter_name=$("#getFixedDisplayAfter_name").val();
	
	if (getFixedDisplayBefor_name!='' && getFixedDisplayAfter_name!=''){
		$(".errorChk").text("");
		$(".sucMsgJoinCallSub").text("");
		$("#bufferImagejoinCallSubmitDataAll").hide();
		$("#joinCallSubmitDataAll").show();
		url = "#joinCallFxDisplay";
		$.mobile.navigate(url);
	}else{
		$(".errorChk").text("Required Picture");
		url = "#fixwedDisplay";
		$.mobile.navigate(url);
		}
	
	}
	
	
function fixwedDisplayGo(){
	var shopeFornt_name=$("#shopeFornt_name").val()
	if (shopeFornt_name!=''){
		$(".errorChk").text("");
		url = "#fixwedDisplay";
		$.mobile.navigate(url);
	}else{
		$(".sucMsg").text('');
		$(".errorChk").text("Required Shope Fornt Picture");
		 $("#joinCallSubmitDataAll").hide();
		 $(".auditSubmitLocationBufferImage").hide();
		url = "#jointCall";
		$.mobile.navigate(url);
		}
	}
	
function targetSetCMGo(){
	$(".receivePOSMSelectNew").empty();
	$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
	posmCodeCMTarget='';
	posmCodeCMTarget='';
	select_townSupCombo='';
	
	if(localStorage.p_rep_type!='SUPERVISOR'){
	
		var posmCodeCmSup=localStorage.p_posmCodeCmSup.split('fdfd');
		
		var posmStrRec = '<select style="background:none;" id="targetPOSMS" class="auto_break" name="targetPOSMS" onchange="alloDetailsTarget();"><option selected="selected" value="">Select POSM</option>'
	
		for (i=0;i<posmCodeCmSup.length;i++){	
			posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
			posmStrRec += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
		}
		 posmStrRec +='</select>'
		posmStrRec =posmStrRec
		localStorage.p_posmCodeTarget=posmStrRec;
		$("#targetPOSMSelect").empty();
		$("#targetPOSMSelect").append(localStorage.p_posmCodeTarget).trigger('create');
	
		var csmListTools=localStorage.p_csmListTools.split('fdfd');
		var cmListStr = '<select id="csmTargetRecRec" class="auto_break" name="csmTargetRecRec" style="display:inline-block;"><option selected="selected" value="">Select CM</option>'
		for (j=0;j<csmListTools.length;j++){	
			cmListStr += '<option value="'+csmListTools[j]+'">'+csmListTools[j]+'</option>'
		}
		cmListStr+='</select>'
		localStorage.p_cmListTargetsList=cmListStr;
		$("#csmListTargetRecRec").empty();
		$("#csmListTargetRecRec").append(localStorage.p_cmListTargetsList).trigger('create');
		
		//$("#submitDataTarget").hide();
		$(".allHideR").hide();
		$("#bufferImageTarget").hide();
		$("#TargetSubmitbufferImage").hide();
		
		$(".sucMsgTarget").text('');
		url = "#targetSetCM";
		$.mobile.navigate(url);
	}else{
		$(".allHideR").hide();
		$("#bufferImageTarget").hide();
		$("#TargetSubmitbufferImage").hide();
		
		$(".sucMsgTarget").text('');
		url = "#targetSetCM";
		$.mobile.navigate(url);
		}
}	
function goHomePage(){
	//alert(localStorage.p_attendanceCheck+'=='+localStorage.p_rep_type);
	if (localStorage.p_attendanceCheck=='' || localStorage.p_attendanceCheck==undefined){
		$(".errMsg").text("Required Attendence");
	}else if(localStorage.p_rep_type != 'SUPERVISOR'){
		url = "#homePage";					
		$.mobile.navigate(url);
	}else{
		url = "#supHome";					
		$.mobile.navigate(url);
	}
	}

function goSelfiePage(){
	$(".errorChk").text("");
	$(".successMsgATT").text("");
	url = "#salfiePage";
	$.mobile.navigate(url);
	}		
	
function merchandizingToolsSup(){
	$(".receivePOSMSelectNew").empty();
	$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
	posmCodeCMTarget='';
	posmCodeCMTarget='';
	select_townSupCombo='';
	$(".sucMsgTools").text("");
	$(".errorChk").text("");
	$('#toolSubmitbufferImage').hide();
	
	url = "#merchandizingTools";
	$.mobile.navigate(url);
	}

var rName='';
function sRoute(routeName){
	
	rName=routeName;
		
			//alert(apipath+"getOutlet?&routeName="+rName+"&outletSeperator="+outletSeperator+"&townCode="+localStorage.p_select_town);
			
			$('#bufferImageRoute').show();
			$.ajax({
			type: 'POST',
			url:apipath+"getOutlet?&routeName="+rName+"&outletSeperator="+outletSeperator+"&townCode="+localStorage.p_select_town,
																																																													
			success: function(result) {	
				var syncResultArray = result.split('|||');	
				if(syncResultArray[0]=='Success'){
					$('#bufferImageRoute').hide();		
					//$('#bufferImageOutlet').hide();			
					localStorage.p_outletLi=syncResultArray[1];
					if(	localStorage.p_outletLi!=''){
					var outletListaAll=localStorage.p_outletLi.split('rdrd');
					
					var outletStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:400px; overflow:scroll;">';
					for (i=0;i<outletListaAll.length;i++){					
						outletLi=outletListaAll[i].split('|');
						
						outletStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="outlet(\''+ outletLi[0]+'|'+ outletLi[1]+'\')"><a>'+ outletLi[0]+'-'+ outletLi[1]+'</a></li>'
						
					}
					outletStr +='</ul>';
					localStorage.p_outletList=outletStr;		
					$('#outletList').empty();
					$('#outletList').append(localStorage.p_outletList).trigger('create');
					
					$("#townAbc").html('Town	:		' + localStorage.p_select_town.replace('|','-'));
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

var routeNameIdSup='';
function outletListSup(routeNameId){
	
	routeNameIdSup=routeNameId;
		
			//alert(apipath+"getOutletSup?&routeName="+routeNameIdSup+"&townCode="+selectOutletTownSup);
			
			$('.bufferImageSupCall').show();	
			$.ajax({
			type: 'POST',
			url:apipath+"getOutletSup?&routeName="+routeNameIdSup+"&townCode="+selectOutletTownSup,
																																																													
			success: function(result) {	
				var syncResultArray = result.split('|||');	
				if(syncResultArray[0]=='Success'){
					$('.bufferImageSupCall').hide();			
					//$('#bufferImageOutlet').hide();			
					outletListSupCall=syncResultArray[1];
					if(outletListSupCall!=''){
					var outletListaAll=outletListSupCall.split('rdrd');
					
					var outletStr='<ul data-role="listview" class="list" data-filter="true" data-inset="true" style="height:400px; overflow:scroll;">';
					for (i=0;i<outletListaAll.length;i++){					
						outletLi=outletListaAll[i].split('|');
						
						outletStr += '<li style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;" onclick="supCallSubmitPage(\''+ outletLi[0]+'|'+ outletLi[1]+'\')"><a>'+ outletLi[0]+'-'+ outletLi[1]+'</a></li>'
						
					}
					outletStr +='</ul>';
					outletListSupCallSTR=outletStr;		
					$('#outletListSupCall').empty();
					$('#outletListSupCall').append(outletListSupCallSTR).trigger('create');
					
					$(".townSupCallLebel").html('Town	:		' + selectOutletTownSup.replace('|','-'));
					$("#routeSelectSupCall").html('Route	:		' + routeNameIdSup);
					$(".errorChk").text("");			
					url="#pageSupOutlet";					
					$.mobile.navigate(url);		
					}else{
						$('.bufferImageSupCall').hide();
						$(".errorChk").text("Outlet Not Available");
						
						}
				}
			},error: function(result){
				$('.bufferImageSupCall').hide();
				$(".errorChk").text("Please check internet connection");
			}
		})
}
var outletIDNameSupCall='';
function supCallSubmitPage(outletIDNameSup){
	$('#dffsubmittedDetailsData').hide();
	$("#dffsubmitfrom").hide();
	outletIDNameSupCall=outletIDNameSup;
	
	//alert(apipath+"getOutletDFFCheck?&outletCode="+outletIDNameSupCall);
			$.ajax({
			type: 'POST',
			url:apipath+"getOutletDFFCheck?&outletCode="+outletIDNameSupCall,
																																																													
			success: function(result) {	
				var syncResultArray = result.split('rdrd');	
				if(syncResultArray[0]=='Success'){
					$('#dffsubmittedDetailsData').show();
					$("#dffsubmitfrom").hide();
					localStorage.p_outletDetailsDFFCek=syncResultArray[1];
					var posmOutletDetails = localStorage.p_outletDetailsDFFCek.split('fdfd');
									
					var posmAuditOutletStr='<span style="background-color:#409FFF; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
						for (i=0;i<posmOutletDetails.length;i++){					
							posmOutletLi=posmOutletDetails[i].split('|');
							
							posmAuditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; color:#00376F; border:2px solid #409FFF;">'+"Shop Board Available : "+posmOutletLi[0]+' </br> '+"Brand : "+posmOutletLi[1]+' </br> '+"POSM type : "+posmOutletLi[2]+' </br> '+"Board Qty : "+posmOutletLi[3]+' </br> '+"Board Condition : "+posmOutletLi[4]+' </br> '+"Mega Hanger : "+posmOutletLi[5]+' </br> '+"Mega Hanger Condition : "+posmOutletLi[6]+' </br> '+"Plugin Dispenser : "+posmOutletLi[7]+' </br> '+"Plugin Dispenser Condition : "+posmOutletLi[8]+' </br> '+"Mini Solomon : "+posmOutletLi[9]+' </br> '+"Skin Care : "+posmOutletLi[10]+' </br> '+"Skin Care Condition : "+posmOutletLi[11]+' </br> '+"Hair Care : "+posmOutletLi[12]+' </br> '+"Hair Care Condition : "+posmOutletLi[13]+' </br> '+"Drug Store Posm : "+posmOutletLi[14]+' </br> '+"POSM Qty : "+posmOutletLi[15]+' </br> '+"POSM Condition : "+posmOutletLi[16]+' </br> '+"Tax Area : "+posmOutletLi[17]+'</p>'
						}
						//alert(posmAuditOutletStr);
						localStorage.p_posmOuditOutletList=posmAuditOutletStr;
						//alert (localStorage.p_posmOuditOutletList);		
						$('#dffsubmittedDetailsData').empty();
						$('#dffsubmittedDetailsData').append(localStorage.p_posmOuditOutletList).trigger('create');
						if (localStorage.p_outletDetailsDFFCek ==''){
							$('#dffsubmittedDetailsData').hide();
							$("#dffsubmitfrom").show();
							$('#posmOuditOutletList').empty();
						}else{
							$('#dffsubmittedDetailsData').show();
							$("#posmAuditor").show();	
							$("#dffsubmitfrom").hide();
							}
				}else{
					$('.bufferImageSupCall').hide();
					$(".errorChk").text("Please check internet connection");
					}
			}
		});
	
	if(localStorage.p_rep_type == 'SUPERVISOR'){
		$('.bufferImageSupCall').hide();
		$("#townJoinCall").html('Town	:		' + selectOutletTownSup.replace('|','-'));
		$("#routeJoinCallShow").html('Route		:		' + routeNameIdSup);
		$("#outletJoinCallShow").html('Outlet		:	'+ outletIDNameSupCall);
		
		$(".sucMsg").text('');
		$(".sucMsgSupCall").text('');
		
		$("#supCallDataHide").show();
		$("#joinCallSubmitDataAll").hide();
		$(".auditSubmitLocationBufferImage").hide();
		url="#jointCall";
		$.mobile.navigate(url);	
		
	}else if(localStorage.p_rep_type == 'AGENCY'){
		
		$("#routeSelectAbc").html('Route		:		' + routeNameIdSup);
		$("#outletSelectAbc").html('Outlet		:	' + outletIDNameSupCall);
		$("#sucMsgAgency").hide();
		$("#bufferImageAgency").hide();
		$("#btn_submit_Agency").hide();
		$("#recDataAgency").hide();
		$("#allHideAgency").hide();
		$("#auditAgencySubmitBufferImage").hide();
		
		 agencyAuditPaintComboN='<fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="paint" id="radio-choice-h-6a" value="YES"  type="radio"><label for="radio-choice-h-6a">YES</label><input name="paint" id="radio-choice-h-6b"  value="NO" type="radio"><label for="radio-choice-h-6b">NO</label></fieldset>'
		 
		$("#agencyAuditPaintCombo").empty();
		$("#agencyAuditPaintCombo").append(agencyAuditPaintComboN).trigger('create');

		url="#page14";	
		$.mobile.navigate(url);	
			
	}else if (localStorage.p_rep_type =='DFF'){
		$("#townDFFAudit").html('Town	:		' + localStorage.p_select_town.replace('|','-'));
		$("#routeSelectDFF").html('Route		:		' + routeNameIdSup);
		$("#outletSelectDFF").html('Outlet		:	' + outletIDNameSupCall);
		
		var auditorBrand=localStorage.p_posmAll.split('fdfd');
		var brandStr = '<select id="auditorPOSMBrandList" class="auto_break" name="auditorPOSMBrandList"  style="display:inline-block;"><option selected="selected" value="">Select Brand</option>'
		for (i=0;i<auditorBrand.length;i++){	
			brandStr += '<option value="'+auditorBrand[i]+'">'+auditorBrand[i]+'</option>'
		}
		brandStr+='</select>'
		localStorage.p_auditorPOSMBrand=brandStr;
		$("#auditorPOSMBrandListShow").empty();
		$("#auditorPOSMBrandListShow").append(localStorage.p_auditorPOSMBrand).trigger('create');
		
		
		if(localStorage.p_agencyTaxarea!=''){
			var rectaxStrDFF=localStorage.p_agencyTaxarea.split('fdfd');
			var posmStrTaxAreaDFF = '<select id="outletTaxAreaDFFListRec" class="auto_break" name="outletTaxAreaDFFListRec"  style="width:150px; display:inline-block;"><option selected="selected" value="">Select Tax Area</option>'
			for (i=0;i<rectaxStrDFF.length;i++){	
				
				posmStrTaxAreaDFF += '<option value="'+rectaxStrDFF[i]+'">'+rectaxStrDFF[i]+'</option>'
			}
			posmStrTaxAreaDFF+='</select>'
			posmStrTaxAreaDFF =posmStrTaxAreaDFF
			localStorage.p_rectaxStrDFF=posmStrTaxAreaDFF;
			
			$("#TaxAreaDFFRec").empty();
			$("#TaxAreaDFFRec").append(localStorage.p_rectaxStrDFF).trigger('create');	
		}else{
			$("#TaxAreaDFFRec").empty();
			}

		
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
		$.mobile.navigate(url);	
	}

}

function auditorOutlet(){
		$(".errAudit").text("");
		if (localStorage.p_synced!='YES'){
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
						
						localStorage.p_outletLi=syncResultArray[1];
						localStorage.p_aOutletCode=syncResultArray[2];
						localStorage.p_aOutletName=syncResultArray[3];
						localStorage.p_aOutletAddress=syncResultArray[4];
						localStorage.p_aOutletRoute=syncResultArray[5];
						localStorage.p_aTown=syncResultArray[6];
						//localStorage.aBrand=syncResultArray[7];
						localStorage.p_auditTaxArea=syncResultArray[7];
						//alert (localStorage.p_auditTaxArea);
						
						var recTaxArea=localStorage.p_auditTaxArea.split('|');
						var taxStr='<input list="taxArea" name="a_cityCorp" id="a_cityCorp"><datalist id="taxArea">';
						
						for (i=0;i<recTaxArea.length;i++){								
						taxStr += '<option style="background-color:#FFF; border-top-color:#F03; border-bottom-color:#F03;"(\''+ recTaxArea[i]+'\')"><a>'+ recTaxArea[i]+'</a></option>'
					}
						taxStr +='</datalist>';
						localStorage.p_taxAreaListAll=taxStr;
					
					$('#taxAreaListAllRec').empty();
					$('#taxAreaListAllRec').append(localStorage.p_taxAreaListAll).trigger('create');					
						 
						
						if (localStorage.p_aOutletCode !='' || localStorage.p_outletLi!=''){			//
							if (localStorage.p_aOutletCode !=''){
								$("#auditorHead").show();
								$("#auditOutletList").show();
								$('#oCode').text(localStorage.p_aOutletCode+'|'+localStorage.p_aOutletName);
								$('#oAddress').text(localStorage.p_aOutletAddress);
								$('#oRoute').text(localStorage.p_aOutletRoute);
								$('#oTown').text(localStorage.p_aTown);
								
							}else{
								$("#auditorHead").hide();
								$(".errAudit").text("দোকানটি লিষ্টে নাই, সাবমিট করতে চাইলে Next বাটন চাপুন |");
									
							}
							
							if (localStorage.p_outletLi !=''){
								$("#auditOutletList").show();	
								var outletDetails = localStorage.p_outletLi.split('fdfd');
								
								var auditOutletStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
									for (i=0;i<outletDetails.length;i++){					
										outletLi=outletDetails[i].split('|');
										
										auditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Outlet:"+outletLi[0]+' | '+"Brand:"+outletLi[3]+' | '+"POSM Type:"+outletLi[4]+' | '+"Height:"+outletLi[5]+' | '+"Length:"+outletLi[6]+' | '+"Total Light:"+outletLi[1]+' | '+"Defective Light:"+outletLi[2]+'| '+"Tax_Area:"+outletLi[8]+'| '+"Status:"+outletLi[7]+'</p>'
									}
									localStorage.p_auditOutletList=auditOutletStr;		
									$('#auditOutletList').empty();
									$('#auditOutletList').append(localStorage.p_auditOutletList).trigger('create');
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
				localStorage.p_auditorBrand=brandStr;
				$("#auditorBrandListShow").empty();
				$("#auditorBrandListShow").append(localStorage.p_auditorBrand).trigger('create');
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
	
	auditBoardAvailableC='<fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="a_board" id="radio-choice-h-6a" value="1"  type="radio" onchange="boardYesNo();"><label for="radio-choice-h-6a">YES</label><input name="a_board" id="radio-choice-h-6b"  value="0" type="radio" onchange="boardYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
	$("#auditBoardAvailable").empty();
	$("#auditBoardAvailable").append(auditBoardAvailableC).trigger('create');
	
	auditPOSMTypeC='<input type="hidden" id="rowID" name="rowID"/><fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_posm_type" id="radio-choice-h-6a" value="SHOPBOARD_BACKLIT"   type="radio"><label for="radio-choice-h-6a">Lit</label><input name="a_posm_type" id="radio-choice-h-6b"  value="SHOPBOARD_NONLIT" type="radio"><label for="radio-choice-h-6b">Non-Lit</label></fieldset>'
	
	$("#auditPOSMType").empty();
	$("#auditPOSMType").append(auditPOSMTypeC).trigger('create');
	
	auditFasciaStatusC='<fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_fStatus" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="a_fStatus" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#auditFasciaStatus").empty();
	$("#auditFasciaStatus").append(auditFasciaStatusC).trigger('create');
	
	auditProfileBoxStatusC='<fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_paStatus" id="radio-choice-h-6a" value="Good"  type="radio"><label for="radio-choice-h-6a">Good</label><input name="a_paStatus" id="radio-choice-h-6b"  value="Bad" type="radio"><label for="radio-choice-h-6b">Bad</label></fieldset>'
	
	$("#auditProfileBoxStatus").empty();
	$("#auditProfileBoxStatus").append(auditProfileBoxStatusC).trigger('create');
	
	auditStoreTypeC='<fieldset data-theme="c" data-role="controlgroup" data-type="horizontal" data-mini="true"><input name="a_storeType" id="radio-choice-h-6a" value="PS"  type="radio"><label for="radio-choice-h-6a">PS</label><input name="a_storeType" id="radio-choice-h-6b"  value="NPS" type="radio"><label for="radio-choice-h-6b">NPS</label><input name="a_storeType" id="radio-choice-h-6c"  value="DS" type="radio"><label for="radio-choice-h-6c">DS</label></fieldset>'
	
	$("#auditStoreType").empty();
	$("#auditStoreType").append(auditStoreTypeC).trigger('create');
	
	$(".auditSubmitLocationBufferImage").hide();
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
	//alert(apipath+"submitData_auditor?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&a_brand="+a_brand+"&a_posm_type="+a_posm_type+"&a_board="+a_board+"&a_height="+a_height+"&a_length="+a_length+"&a_light="+a_light+"&a_dLight="+a_dLight+"&a_fStatus="+a_fStatus+"&a_paStatus="+a_paStatus+"&a_storeType="+a_storeType+"&a_nShopkeeper="+a_nShopkeeper+"&a_cNoShopkeeper="+a_cNoShopkeeper+"&a_taxArea="+a_taxArea+"&imageName5="+imageName5+"&aud_lat="+aud_lat+"&aud_long="+aud_long+"&auditSerach="+auditSerach+"&remarksAudit="+remarksAudit);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_auditor?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&a_brand="+a_brand+"&a_posm_type="+a_posm_type+"&a_board="+a_board+"&a_height="+a_height+"&a_length="+a_length+"&a_light="+a_light+"&a_dLight="+a_dLight+"&a_fStatus="+a_fStatus+"&a_paStatus="+a_paStatus+"&a_storeType="+a_storeType+"&a_nShopkeeper="+a_nShopkeeper+"&a_cNoShopkeeper="+a_cNoShopkeeper+"&a_taxArea="+a_taxArea+"&imageName5="+imageName5+"&aud_lat="+aud_lat+"&aud_long="+aud_long+"&auditSerach="+auditSerach+"&remarksAudit="+remarksAudit,
																																																													
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
					$("#auditorBrandListShow").append(localStorage.p_auditorBrand).trigger('create');
					
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
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
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
	$(".auditSubmitLocationBufferImage").show();	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess(position) {
	$(".auditSubmitLocationBufferImage").hide();
	$("#aud_lat").val(position.coords.latitude);
	$("#aud_long").val(position.coords.longitude);
	$("#supCall_lat").val(position.coords.latitude);
	$("#supCall_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
	$("#btn_submit_audit").show();
	$("#joinCallSubmitDataAll").show();
}
// onError Callback receives a PositionError object
function onError(error) {
	$(".auditSubmitLocationBufferImage").hide();
   $("#aud_lat").val(0);
   $("#aud_long").val(0);
   $("#supCall_lat").val(0);
   $("#supCall_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
   $("#btn_submit_audit").hide();
   $("#joinCallSubmitDataAll").hide();
}	
//----------------------------------------------
var outlet_codeDFF='';
var outletCodeFxiedDisplayDala='';
function outlet(outletIDName){
		$('#dffsubmittedDetailsData').hide();
		$("#dffsubmitfrom").hide();
	
		outletS=outletIDName.split('|');
		outlet_name=outletS[0]
		outlet_code=outletS[1]
		outletCodeFxiedDisplayDala=outletIDName
		outlet_codeDFF=outletS[1]
		
		$(".errPOSMAudit").text("");
		$(".errposmAudit").text("");
		if (localStorage.p_synced!='YES'){
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
				//alert(apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.p_repID+"&town="+localStorage.p_select_town);
				$.ajax({
				type: 'POST',
				url:apipath+"getOutletPosmAuditor?&posmAuditOutSearch="+posmAuditOutSearch+"&repID="+localStorage.p_repID+"&town="+localStorage.p_select_town,
																																																														
				success: function(result) {	
					var syncResultArray = result.split('rdrd');	
					if(syncResultArray[0]=='Success'){	
						$('#bufferImageOutletposm').hide();
						$("#posmAuditor").show();
						localStorage.p_posmOutletCode=syncResultArray[1];
						localStorage.p_posmOutletName=syncResultArray[2];
						localStorage.p_posmOutletTerritory=syncResultArray[3];
						localStorage.p_posmOutletRoute=syncResultArray[4];
						localStorage.p_posmTown=syncResultArray[5];
						localStorage.p_posmBrand=syncResultArray[6];
						localStorage.p_outletDetailsLi=syncResultArray[7];
						localStorage.p_outletTaxAreaDFF=syncResultArray[8];
						
					/*	if(localStorage.p_outletTaxAreaDFF!=''){
							var rectaxStrDFF=localStorage.p_outletTaxAreaDFF.split('|');
							var posmStrTaxAreaDFF = '<select id="outletTaxAreaDFFListRec" class="auto_break" name="outletTaxAreaDFFListRec"  style="width:150px; display:inline-block;"><option selected="selected" value="">Select Tax Area</option>'
							for (i=0;i<rectaxStrDFF.length;i++){	
								
								posmStrTaxAreaDFF += '<option value="'+rectaxStrDFF[i]+'">'+rectaxStrDFF[i]+'</option>'
							}
							posmStrTaxAreaDFF+='</select>'
							posmStrTaxAreaDFF =posmStrTaxAreaDFF
							localStorage.p_rectaxStrDFF=posmStrTaxAreaDFF;
							
							$("#TaxAreaDFFRec").empty();
							$("#TaxAreaDFFRec").append(localStorage.p_rectaxStrDFF).trigger('create');	
						}else{
							$("#TaxAreaDFFRec").empty();
						}*/
						
						/*var auditorBrand=localStorage.p_posmBrand.split(',');
						var brandStr = '<select id="auditorPOSMBrandList" class="auto_break" name="auditorPOSMBrandList"  style="display:inline-block;"><option selected="selected" value="">Select Brand</option>'
						for (i=0;i<auditorBrand.length;i++){	
							brandStr += '<option value="'+auditorBrand[i]+'">'+auditorBrand[i]+'</option>'
						}
						brandStr+='</select>'
						localStorage.p_auditorPOSMBrand=brandStr;
						$("#auditorPOSMBrandListShow").empty();
						$("#auditorPOSMBrandListShow").append(localStorage.p_auditorPOSMBrand).trigger('create');*/
						
						if (localStorage.p_posmOutletCode==''){
								$('#posmOuditOutletList').hide();
								$("#posmReportAuditSub").hide();
								$("#btn_posm_entry").hide();
								$("#posmAuditor").hide();
								$(".errposmAudit").text("দোকানটি লিষ্টে নাই |");								
							}else{								
								$('#posmOuditOutletList').show();
								$('#posmOutletCode').text(localStorage.p_posmOutletCode+'|'+localStorage.p_posmOutletName);
								$('#posmOutleAddress').text(localStorage.p_posmOutletTerritory);
								$('#posmOutleRoute').text(localStorage.p_posmOutletRoute);
								$('#posmOutleTown').text(localStorage.p_posmTown);
								
								if (localStorage.p_outletDetailsLi ==''){
									
									$('#dffsubmittedDetailsData').hide();
									$("#dffsubmitfrom").show();
									$('#posmOuditOutletList').empty();
								}else{
									
									$('#dffsubmittedDetailsData').show();
									$("#posmAuditor").show();	
									$("#dffsubmitfrom").hide();
									
									/*var posmOutletDetails = localStorage.p_outletDetailsLi.split('fdfd');
									
									var posmAuditOutletStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Submitted Data</span>';
										for (i=0;i<posmOutletDetails.length;i++){					
											posmOutletLi=posmOutletDetails[i].split('|');
											
											posmAuditOutletStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Shop Board Available : "+posmOutletLi[0]+' | '+"Brand : "+posmOutletLi[1]+' | '+"POSM type : "+posmOutletLi[2]+' | '+"Board Qty : "+posmOutletLi[3]+' | '+"Board Condition : "+posmOutletLi[4]+' | '+"Mega Hanger : "+posmOutletLi[5]+' | '+"Mega Hanger Condition : "+posmOutletLi[6]+' | '+"Plugin Dispenser : "+posmOutletLi[7]+' | '+"Plugin Dispenser Condition : "+posmOutletLi[8]+' | '+"Mini Solomon : "+posmOutletLi[9]+' | '+"Skin Care : "+posmOutletLi[10]+' | '+"Skin Care Condition : "+posmOutletLi[11]+' | '+"Hair Care : "+posmOutletLi[12]+' | '+"Hair Care Condition : "+posmOutletLi[13]+' | '+"Drug Store Posm : "+posmOutletLi[14]+' | '+"POSM Qty : "+posmOutletLi[15]+' | '+"POSM Condition : "+posmOutletLi[16]+' | '+"Tax Area : "+posmOutletLi[17]+'</p>'
										}
										//alert(posmAuditOutletStr);
										localStorage.p_posmOuditOutletList=posmAuditOutletStr;
										//alert (localStorage.p_posmOuditOutletList);		
										$('#dffsubmittedDetailsData').empty();
										$('#dffsubmittedDetailsData').append(localStorage.p_posmOuditOutletList).trigger('create');*/
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
			if(localStorage.p_rep_type =='CM'){
				$("#townAusa").html('Town	:		' + localStorage.p_select_town.replace('|','-'));	
				$("#newOutletButton").hide();
				url="#page5";					
			}/*else if (localStorage.p_rep_type =='SUPERVISOR'){
				$("#townJoinCall").html('Town	:		' + localStorage.p_select_town.replace('|','-'));
				$("#routeJoinCallShow").html('Route		:		' + rName);
				$("#outletJoinCallShow").html('Outlet		:	' + outletIDName);
				
				$(".sucMsg").text('');
				$("#outletNameF").val(outletIDName);
				$("#joinCallSubmitDataAll").hide();
				 $(".auditSubmitLocationBufferImage").hide();
				url="#jointCall";
				
			}else if (localStorage.p_rep_type =='DFF'){
				$("#townDFFAudit").html('Town	:		' + localStorage.p_select_town.replace('|','-'));
				$("#routeSelectDFF").html('Route		:		' + rName);
				$("#outletSelectDFF").html('Outlet		:	' + outletIDName);
				
				localStorage.p_auditorPOSMBrand=brandStr;
				$("#auditorPOSMBrandList").empty();
				$("#auditorPOSMBrandList").append(localStorage.p_auditorPOSMBrand).trigger('create');*/
				
				/*boardCresteN = '<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" ><input name="posmBoard" id="radio-choice-h-6a" value="YES"  type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6a">YES</label><input name="posmBoard" id="radio-choice-h-6b"  value="NO" type="radio" onchange="posmboardYesNo();"><label for="radio-choice-h-6b">NO</label></fieldset>'
	
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
				
			}*/
		$.mobile.navigate(url);
}

/*=======================usage page5============================*/
function alloDetailsU(){
	$("#newOutletButton").hide();
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
		
		//alert (apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.p_select_town);
		$("#bufferImageU").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.p_select_town,																																																											
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
					//alert(alc_id);
					var imageUsage=resultArray[6];
					var inagUrl=apipath_image+'static/images/alc_image/'+imageUsage;
					
					var imageUsa = '<img height="100px"  src="'+inagUrl+'" alt="Execution Image" />';
					
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
	$("#newOutletButton").hide();
	$("#btn_submit_usages").hide();
	var d = new Date();	
	var get_time=d.getTime();
	
	town=localStorage.p_select_town.replace('-', '|');	
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
		//alert(apipath+"submitData_usages?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&routeName="+localStorage.p_routeIDName+"&outlet_code="+ localStorage.p_selectedOutlet+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_usages?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&routeName="+localStorage.p_routeIDName+"&outlet_code="+ localStorage.p_selectedOutlet+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName2="+imageName2,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#usagePOSMSelect").empty();
					$("#usagePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');
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
					$("#newOutletButton").show();
					uploadPhotoUsa(imagePathB, imageName2);
					
					$(".sucMsgU").text('Successfully Submitted');
					
					url="#page5";					
					$.mobile.navigate(url);	
				}else if (result=='Faild'){	
						$("#usageSubmitbufferImage").hide();				
						$(".errorChk").text("Usage Qty less then Balance Qty");
						$("#allHide").show();
						$("#btn_submit_usages").show();
						$("#newOutletButton").hide();
				}else{
					$("#usageSubmitbufferImage").hide();
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_usages").show();
					$("#allHide").show();
					$("#newOutletButton").hide();
				}
				
			}//end result
		});//end ajax
		
	}
}


function getUsagesImage() {
	var get_time=$.now();
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
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
			url:apipath+"getAllDataAgncy?&posmCode="+posmCode+"&town="+localStorage.p_select_town,																																																										
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){
						
					
					$("#bufferImageAgency").hide();
					$("#btn_submit_Agency").show();
					$("#recDataAgency").show();
					$("#allHideAgency").show();
					$(".errorChk").text("");
						
					if(localStorage.p_agencyTaxarea!=''){
					var posmagencyTaxarea=localStorage.p_agencyTaxarea.split('fdfd');
					var posmStrTaxArea = '<select id="taxAreaComboSelect" class="auto_break" name="taxAreaComboSelect"><option selected="selected" value="">Select Tax Area</option>'
					for (i=0;i<posmagencyTaxarea.length;i++){	
						
						posmStrTaxArea += '<option value="'+posmagencyTaxarea[i]+'">'+posmagencyTaxarea[i]+'</option>'
					}
					posmStrTaxArea+='</select>'
					posmStrTaxArea =posmStrTaxArea
					localStorage.p_posmagencyTaxarea=posmStrTaxArea;
					
					$("#taxAreaComboSelectRec").empty();
					$("#taxAreaComboSelectRec").append(localStorage.p_posmagencyTaxarea).trigger('create');	
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
	var outletStr = outletIDNameSupCall.split('|');
	var outletName = outletStr[0];
	var outletCode = outletStr[1];

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
	
	var town=localStorage.p_select_town.replace('-', '|');
	
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

		//alert(apipath+"submitData_agency?&syncCode="+localStorage.p_sync_code+"&posmCode="+posmCode+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&routeName="+routeNameIdSup+"&outlet_code="+outletCode+"&outlet_name="+outletName+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_agency?&syncCode="+localStorage.p_sync_code+"&posmCode="+posmCode+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&routeName="+routeNameIdSup+"&outlet_code="+outletCode+"&outlet_name="+outletName+"&posmType="+posmType+"&brandAgency="+brandAgency+"&balanceAgency="+balanceAgency+"&allocationAgency="+allocationAgency+"&aqty="+aqty+"&aset="+aset+"&alight="+alight+"&apaint="+apaint+"&acity="+acity+"&imageName3="+imageName3,																																																												
			success: function(result) {			
				if(result=='Success'){
					
					$("#agencyPOSMrec").empty();
					$("#agencyPOSMrec").append(localStorage.p_posmCode_agency).trigger('create');
					$("#taxAreaComboSelectRec").empty();
					$("#taxAreaComboSelectRec").append(localStorage.p_posmagencyTaxarea).trigger('create');
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
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
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
	$(".receivePOSMSelectNew").empty();
	$(".receivePOSMSelectNew").append(localStorage.p_posmCodeCmSupNewData).trigger('create');
	posmCodeCMTarget='';
	posmCodeCMTarget='';
	select_townSupCombo='';
	$(".errorChkP").text("");			
	url="#page9";				
	$.mobile.navigate(url);	
}

function summaryCM(){
	$("#bufferImageTARvsACH").hide();
	$("#targetVSach").hide();
	$("#psInstallSummary").hide();
	$(".errorChk").text("");
	$("#cmIDNameSummmary").html('Rep	:		' + localStorage.p_repID+','+localStorage.p_repName);				
	url="#pageSummary";				
	$.mobile.navigate(url);	
}
function psVisitSumB(){
	
	$("#targetVSach").hide();
	$("#psInstallSummary").show();
}
function psInsSumB(){
	
	$("#targetVSach").show();
	$("#psInstallSummary").hide();
	$("#bufferImageTARvsACH").show();
	//alert(apipath+"posmInstallationSummary?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&select_town="+localStorage.p_select_town);
	$.ajax({
			type: 'POST',
			url:apipath+"posmInstallationSummary?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&select_town="+localStorage.p_select_town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#bufferImageTARvsACH").hide();
							
				localStorage.p_posmInstallData=getResult[1];	
				
				var stockRPT=localStorage.p_posmInstallData.split('rdrd');			
				var cmRouteSTr='<table id="aaaaaaaa" width="100%">';
					cmRouteSTr += '<tr style="font-size:12px;"><th style="text-align:center;">POSM</th><th>Target</th><th>Today ACH</th><th>Total ACH</th><th>ACH %</th></tr>'
					for (i=0;i<stockRPT.length;i++){	
						stockR=stockRPT[i].split('|');
						posm_code=stockR[0];
						target_qty=stockR[1];
						totalACH=stockR[2];
						ach=stockR[3];
						todayACH=stockR[4];
											
						cmRouteSTr += '<tr style="font-size:11px;"><td>'+posm_code+'</td><td>'+target_qty+'</td><td>'+todayACH+'</td><td>'+totalACH+'</td><td style="text-align:center;">'+ach+'</td></tr>'
					
					}
					cmRouteSTr +='</table>'
					$('#targetVSach').empty();
					$('#targetVSach').append(cmRouteSTr).trigger('create');
					
					
					var repid=localStorage.p_repID;
					$("#townName").html ("Town	:		"+localStorage.p_select_town);
					$("#repID").html ("Rep ID	:		"+repid);
				
			}else{
				
				$("#bufferImageTARvsACH").hide();
				var repid=localStorage.p_repID;
				$("#townName").html ("Town	:		"+localStorage.p_select_town);
				$("#repID").html ("Rep ID	:		"+repid);
				$("#bufferImageStockR").hide();
				$(".errorChk").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChk").text("");			
	url="#pageSummary";				
	$.mobile.navigate(url);

}

function leave(){
	$("#bufferImageLeaveS").hide();
	$("#bufferImageLeaveR").hide();
	$("#bufferImageanualLeave").hide();
	$("#anualLeaveDiv").hide();
	$("#sickLeaveDiv").hide();		
	
	$("#cmIDName").html('Rep	:		' + localStorage.p_repID+','+localStorage.p_repName);	
	$(".errorChk").text("");
	$(".sucChk").text("");			
	url="#leaveHome";				
	$.mobile.navigate(url);	
}
function anualLeave(){
	$(".sucChk").text("");	
	$("#sickLeaveDiv").hide();
		
	$("#bufferImageanualLeave").show();
	//alert(apipath+"getAllDataLeave?&repID="+localStorage.p_repID);
	$.ajax({
			type: 'POST',
			url:apipath+"getAllDataLeave?&repID="+localStorage.p_repID,																																																											
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){	
					$("#anualLeaveDiv").show();
					$("#bufferImageanualLeave").hide();
					var allocated_leave=resultArray[1];	
					var leave_taken=resultArray[2];
					var leave_reamin=resultArray[3];
					
				
					
					$("#allocated_leave").html("Allocated leave:	"+ allocated_leave);
					$("#leave_taken").html("Leave Taken	:	"+leave_taken);
					$("#leave_reamin").html("Leave Remain:	"+leave_reamin);
					
				}else{
					$("#anualLeaveDiv").hide();	
					$("#bufferImageanualLeave").hide();
					$(".errorChk").text("Leave Allocated Empty");
				}
			}
		})	
	
	}
function sickLeave(){
	$(".sucChk").text("");
	$("#anualLeaveDiv").hide();
	
	
	$("#bufferImageanualLeave").show();
	//alert(apipath+"getAllDataLeave?&repID="+localStorage.p_repID);
	$.ajax({
			type: 'POST',
			url:apipath+"getAllDataLeave?&repID="+localStorage.p_repID,																																																											
			success: function(result) {	
				var resultArray = result.split('rdrd');
					recStatus=resultArray[0];
				if (recStatus=='Success'){
					$("#sickLeaveDiv").show();	
					$("#bufferImageanualLeave").hide();
					var allocated_leave=resultArray[4];	
					var leave_taken=resultArray[5];
					var leave_reamin=resultArray[6];
					
					
					
					$("#allocated_leaveSick").html("Allocated leave:	"+ allocated_leave);
					$("#leave_takenSick").html("Leave Taken	:	"+leave_taken);
					$("#leave_reaminSick").html("Leave Remain:	"+leave_reamin);
					
				}else{
					$("#sickLeaveDiv").hide();
					$("#bufferImageanualLeave").hide();
					$(".errorChk").text("Leave Allocated Empty");
				}
			}
		})	
	
			
	
	}



function repoAgency(){
	
	$(".errorChk").text("");			
	url="#reportPageA9";				
	$.mobile.navigate(url);	
}

function anualLeaveSub(){
	
	var fr_dateLeave=$("#fr_dateLeave").val();
	var to_dateLeave=$("#to_dateLeave").val();
	var anual_leave=$("#anual_leave").val();
	if(fr_dateLeave>to_dateLeave){
		$(".errorChk").text("Invalid Date Range");
	}else{
	$('#bufferImageLeaveR').show();
	//alert(apipath+'anualLeaveSubmit?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID+"&fr_dateLeave="+fr_dateLeave+"&to_dateLeave="+to_dateLeave+"&anual_leave="+anual_leave);
$.ajax({
	  url:apipath+'anualLeaveSubmit?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID+"&fr_dateLeave="+fr_dateLeave+"&to_dateLeave="+to_dateLeave+"&anual_leave="+anual_leave,
	 success: function(result) {			
				if(result=='Success'){
					$('#bufferImageLeaveR').hide();
					$("#anualLeaveSub").hide();
					$("#fr_dateLeave").val("");
					$("#to_dateLeave").val("");	
					
					$(".sucChk").text('Successfully Submitted');
					$(".errorChk").text("");
					$("#anualLeaveDiv").hide();
					$("#sickLeaveDiv").hide();
					url="#leaveHome";					
					$.mobile.navigate(url);	
				}else if(result=='failed'){
					$(".errorChk").text("Invalid Date Range");
					$("#bufferImageLeaveR").hide();
					$('#anualLeaveSub').show();
				}else{
					$("#bufferImageLeaveR").hide();
					$(".errorChk").text("Select Date Range");															
					$('#anualLeaveSub').show();
					
					
				}
				
			}//end result
		});//end ajax
		
}
}

function sickLeaveSub(){
	
	var fr_dateLeaveS=$("#fr_dateLeaveS").val();
	var to_dateLeaveS=$("#to_dateLeaveS").val();
	var sick_leave=$("#sick_leave").val();
	if(fr_dateLeaveS>to_dateLeaveS){
		$(".errorChk").text("Invalid Date Range");
	}else{
	$('#bufferImageLeaveS').show();
	//alert(apipath+'sickLeaveSubmit?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID+"&fr_dateLeaveS="+fr_dateLeaveS+"&to_dateLeaveS="+to_dateLeaveS+"&sick_leave="+sick_leave);
$.ajax({
	  url:apipath+'sickLeaveSubmit?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID+"&fr_dateLeaveS="+fr_dateLeaveS+"&to_dateLeaveS="+to_dateLeaveS+"&sick_leave="+sick_leave,
	 success: function(result) {			
				if(result=='Success'){
					$('#bufferImageLeaveS').hide();
					$("#sickLeaveSub").hide();
					$("#fr_dateLeaveS").val("");
					$("#to_dateLeaveS").val("");	
					
					$(".sucChk").text('Successfully Submitted');
					$(".errorChk").text("");$("#anualLeaveDiv").hide();
					$("#sickLeaveDiv").hide();
					url="#leaveHome";							
					$.mobile.navigate(url);	
				}else if(result=='failed'){
					$(".errorChk").text("Invalid Date Range");
					$("#bufferImageLeaveS").hide();
					$('#sickLeaveSub').show();
				}else{
					$("#bufferImageLeaveS").hide();
					$(".errorChk").text("Select Date Range");															
					$('#sickLeaveSub').show();
					
					
				}
				
			}//end result
		});//end ajax
		
	}

}

function recReport(){
	//alert(select_townSupCombo);
	if (localStorage.p_rep_type == 'CM'){
		town=localStorage.p_select_town;
		
	}else{
		town=select_townSupCombo;
	}
	if(town==''){
		$(".errorChkP").text("Select Town");
		
	}else{
	//alert (apipath+"receive_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town)
	$("#bufferImageRecR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"receive_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town,																																																				
			success: function(result) {
				getResult=result.split('||');	
				if(getResult[0]=='Success'){
				$("#bufferImageRecR").hide();				
				localStorage.p_receiveReportR=getResult[1];	
				
				var ReceiveRpt=localStorage.p_receiveReportR.split('rdrd');					
				var rectable='<table id="reccRepp" width="100%">';
					rectable += '<tr style="font-size:12px;" ><th>Date and Time</th><th style="text-align:center;">POSM</th><th>Receive Qty</th><th>Defective Qty</th><th>Stock</th></tr>'
					for (i=0;i<ReceiveRpt.length;i++){	
						recordR=ReceiveRpt[i].split('|');
						dateR=recordR[0];
						brand=recordR[1];
						posmType=recordR[2];
						recQty=recordR[3];
						stock=recordR[4];
						posmCode=recordR[5];
						defectqty=recordR[6];
								
						rectable +='<tr style="font-size:11px;"><td>'+dateR+'</td><td>'+posmCode+'</br>'+posmType+'</br>'+brand+'</td><td style="text-align:center;">'+recQty+'</td><td style="text-align:center;">'+defectqty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					rectable +='</table>'
					$('#receiveReportR').empty();
					$('#receiveReportR').append(rectable).trigger('create');
					var townName=town;
					var repid=localStorage.p_repID;
					$("#townNameR").html ("Town	:		"+townName);
					$("#repIDR").html ("Rep ID	:		"+repid);
					
			}else{
				$("#bufferImageRecR").hide();
				var townName=town;
				var repid=localStorage.p_repID;
				$("#townNameR").html ("Town	:		"+townName);
				$("#repIDR").html ("Rep ID	:		"+repid);
				$(".errorChkP").text("No Record In DataBase");
				}
		}
	});
	
	$(".errorChkP").text("");
	url="#page10";
	$.mobile.navigate(url);
	}
		
}

function recUsage(){
	
	$('#usageReportR').empty();
	var fr_date=$("#fr_date").val();
	var to_date=$("#to_date").val();
	
	if (localStorage.p_rep_type == 'CM'){
		var town=localStorage.p_select_town;
		
	}else{
		var town=select_townSupCombo;
	}
	
	if (town==''){
		$(".errorChkP").text("Select Town");
	}else{
	//alert (apipath+"usage_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&fr_date="+fr_date+"&to_date="+to_date)
	$("#bufferImageUsaR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"usage_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&fr_date="+fr_date+"&to_date="+to_date,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$("#bufferImageUsaR").hide();				
				localStorage.p_usageReportR=getResult[1];
				//alert(localStorage.p_usageReportR);
				var UsageRpt=localStorage.p_usageReportR.split('rdrd');			
				var usatable='<table id="usageRepp" width="100%">';
					usatable +='<tr style="font-size:12px;" ><th>Date and Time</th><th>Outlet Code</th><th>Outlet Name</th><th style="text-align:center;">POSM</th><th>Usage Qty</th></tr>'
					for (i=0;i<UsageRpt.length;i++){	
						usageR=UsageRpt[i].split('|');
						dateU=usageR[0];
						outletcode=usageR[1];
						outletname=usageR[2];
						uposmType=usageR[3];
						Uqty=usageR[4];
						uposmCode=usageR[5];
						brand=usageR[6];
						
						usatable += '<tr style="font-size:11px;"><td>'+dateU+'</td><td>'+outletcode+'</td><td>'+outletname+'</td><td>'+uposmCode+'</br>'+uposmType+'</br>'+brand+'</td><td style="text-align:center;">'+Uqty+'</td></tr>'
					
					}
					usatable +='</table>'
					$('#usageReportR').empty();
					$('#usageReportR').append(usatable).trigger('create');
					//var townName=town;
					var repid=localStorage.p_repID;
					$("#townNameU").html ("Town	:		"+town);
					$("#repIDU").html ("Rep ID	:		"+repid);	
				}else if(getResult[0]=='failed'){
					$("#bufferImageUsaR").hide();
					$(".errorChkP").text(getResult[1]);
			}else{
				$("#bufferImageUsaR").hide();
				//var townName=town;
				var repid=localStorage.p_repID;
				$("#townNameU").html ("Town	:		"+town);
				$("#repIDU").html ("Rep ID	:		"+repid);
				$(".errorChkP").text("No Record In DataBase");
				}
		}
	});

	$(".errorChkP").text("");
	url="#page12";
	$.mobile.navigate(url);
	}
}


function stockReport(){	
	var selectPOSM=$("#selectPOSM").val();
	if (localStorage.p_rep_type == 'CM'){
		var town=localStorage.p_select_town;
	}else{
		var town=select_townSupCombo;
	}
	
	if (town==''){
		$(".errorChkP").text("Select Town");
	}else{
	//alert (apipath+"stock_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&selectPOSM="+posmCodeCMTarget)
	
	$("#bufferImageStockR").show();
	$.ajax({
			type: 'POST',
			url:apipath+"stock_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&selectPOSM="+posmCodeCMTarget,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#bufferImageStockR").hide();				
				localStorage.p_stockReport=getResult[1];	
				
				var stockRPT=localStorage.p_stockReport.split('rdrd');			
				var cmRouteSTr='<table id="stockRepp" width="100%">';
					cmRouteSTr += '<tr style="font-size:12px;"><th style="text-align:center;">POSM</th><th>Allocation</th><th>Receive</th><th>Defective</th><th>Usage</th><th>Stock</th></tr>'
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
											
						cmRouteSTr += '<tr style="font-size:11px;"><td>'+posmCode+'</br>'+posmType+'</br>'+brand+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+receiveQty+'</td><td style="text-align:center;">'+defectiveQty+'</td><td style="text-align:center;">'+usageQty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					cmRouteSTr +='</table>'
					$('#stockReport').empty();
					$('#stockReport').append(cmRouteSTr).trigger('create');
					$('#posmAllStrListAllRec').empty();
					$('#posmAllStrListAllRec').append(localStorage.p_posmAllStr).trigger('create');
					
					var repid=localStorage.p_repID;
					$("#townName").html ("Town	:		"+town);
					$("#repID").html ("Rep ID	:		"+repid);
				
			}else{
				
				$("#bufferImageStockR").hide();
				var repid=localStorage.p_repID;
				$("#townName").html ("Town	:		"+town);
				$("#repID").html ("Rep ID	:		"+repid);
				$("#bufferImageStockR").hide();
				$(".errorChkP").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChkP").text("");			
	url="#page11";				
	$.mobile.navigate(url);
	}
}

function stockOnHand(){
	
	
	var selectPOSM=$("#selectPOSM").val();
	if (localStorage.p_rep_type == 'CM'){
		var town=localStorage.p_select_town;
		
	}else{
		var town=select_townSupCombo;
	}
	
	if (town==''){
		$(".errorChkP").text("Select Town");
	}else{
	//alert (apipath+"onHandstockReport?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&selectPOSM="+posmCodeCMTarget)
	
	$("#bufferImageStockOnHand").show();
	$.ajax({
			type: 'POST',
			url:apipath+"onHandstockReport?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town+"&selectPOSM="+posmCodeCMTarget,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#bufferImageStockOnHand").hide();	
				var stockRPT=getResult[1].split('rdrd');			
				var cmRouteSTr='<table id="stockReppOnHand" width="100%">';
					cmRouteSTr += '<tr style="font-size:12px;"><th style="text-align:center;">POSM</th><th>Allocation</th><th>Receive</th><th>Defective</th><th>Usage</th><th>Stock</th></tr>'
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
											
						cmRouteSTr += '<tr style="font-size:11px;"><td>'+posmCode+'</br>'+posmType+'</br>'+brand+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+receiveQty+'</td><td style="text-align:center;">'+defectiveQty+'</td><td style="text-align:center;">'+usageQty+'</td><td style="text-align:center;">'+stock+'</td></tr>'
					
					}
					cmRouteSTr +='</table>'
					$('#stockReportOnHand').empty();
					$('#stockReportOnHand').append(cmRouteSTr).trigger('create');
					$('#posmAllStrListAllRec').empty();
					$('#posmAllStrListAllRec').append(localStorage.p_posmAllStr).trigger('create');
					
					var repid=localStorage.p_repID;
					$("#selectTownOnHand").html ("Town	:		"+town);
					$("#repIDOnHand").html ("Rep ID	:		"+repid);
				
			}else{
				
				$("#bufferImageStockOnHand").hide();
				var repid=localStorage.p_repID;
				$("#selectTownOnHand").html ("Town	:		"+town);
				$("#repIDOnHand").html ("Rep ID	:		"+repid);
				
				$(".errorChkP").text("No Record In DataBase");
				}
		}
	});

	
	$(".errorChkP").text("");			
	url="#page111";				
	$.mobile.navigate(url);
	}
}


function summary_report(){
	
	var posmCode=$("#posmCodeAgency").val();
	var town=localStorage.p_select_town.replace('-', '|');
	
	//alert (apipath+"agency_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town)
	$('#menuBufferingImage').show();
	$("#bufferImageAgencyA").show();
	$.ajax({
			type: 'POST',
			url:apipath+"agency_report?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				if(getResult[0]=='Success'){
				$('#menuBufferingImage').hide();
				$("#bufferImageAgencyA").hide();				
				localStorage.p_usageReportA=getResult[1];
				var agnRpt=localStorage.p_usageReportA.split('rdrd');
		/*-------------------------------edit suza 22-07-2019------------------------------*/			
				var agentable='<table id="sumRepp" width="100%">';
					agentable +='<tr style="font-size:12px;" ><th>Date and Time</th><th>Outlet</th><th>Tax Area</th><th>POSM</th><th>Usage Qty</th></tr>'
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
						time=agnR[8];
						agentable += '<tr style="font-size:11px;"><td>'+date+'</br>'+time+'</td><td>'+outletid+'</br>'+outletname+'</td><td>'+city_cor+'</td><td>'+posmcode+'</br>'+posmtype+'</br>'+brand+'</td><td style="text-align:center;">'+qty+'</td></tr>'
					
					}
			/*-------------------------------edit suza 22-07-2019------------------------------*/
					agentable +='</table>'
					
					
					$('#usageReportAgency').empty();
					$('#usageReportAgency').append(agentable).trigger('create');
					
					var townName=town;
					var repid=localStorage.p_repID;
					$("#townNameA").html ("Town	:		"+townName);
					$("#repIDA").html ("Rep ID	:		"+repid);
					
				
			}else{
				$("#bufferImageAgencyA").hide();
				var townName=town;
				var repid=localStorage.p_repID;
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
	
	town=localStorage.p_select_town;
	
	//alert (apipath+"stock_RAgency?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town)
	$('#menuBufferingImage').show();
	$("#agencySTRimage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"stock_RAgency?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&townName="+town,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$('#menuBufferingImage').hide();
				$("#agencySTRimage").hide();				
				localStorage.p_stockReportAbc=getResult[1];	
				
				var stockRPA=localStorage.p_stockReportAbc.split('rdrd');
		/*-------------------------------edit suza 22-07-2019------------------------------*/			
				var cmRouteSTA='<table id="stockAgnP" width="100%">';
					cmRouteSTA += '<tr style="font-size:12px;"><th>POSM</th><th>Allocation</th><th>Usage</th><th>Stock</th></tr>'
					for (i=0;i<stockRPA.length;i++){	
						stockR=stockRPA[i].split('|');
						brand=stockR[0];
						posmType=stockR[1];
						posmCode=stockR[2];
						allocation=stockR[3];
						usage=stockR[4];
						balance=stockR[5];	
											
						cmRouteSTA += '<tr style="font-size:11px;"><td>'+posmCode+'</br>'+posmType+'</br>'+brand+'</td><td style="text-align:center;">'+allocation+'</td><td style="text-align:center;">'+usage+'</td><td style="text-align:center;">'+balance+'</td></tr>'
					
					}
				/*-------------------------------edit suza 22-07-2019------------------------------*/	
					cmRouteSTA +='</table>'
					$('#stockAgencyS').empty();
					$('#stockAgencyS').append(cmRouteSTA).trigger('create');
					
					var townName=town;
					var repid=localStorage.p_repID;
					$("#townNameAgen").html ("Town	:		"+townName);
					$("#repIDAgen").html ("Rep ID	:		"+repid);
				
			}else{
				$("#agencySTRimage").hide();
				var townName=town;
				var repid=localStorage.p_repID;
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
	  url:apipath+'get_posm_sup?select_town='+localStorage.p_select_town+"&repID="+localStorage.p_repID,
	  success: function(result) {
		var resultArray = result.split('rdrd');
			if (resultArray[0]=='Success'){	
			$('#menuBufferingImage').hide();
				localStorage.p_posmCodeCmSup=resultArray[1];
				localStorage.p_posmCodeAgency=resultArray[2];				
				localStorage.p_posmCodeCMUsage=resultArray[3];			
							//====CM/Sup	
			var posmCodeCmSup=localStorage.p_posmCodeCMUsage.split('fdfd');
			var posmStr = '<select id="posmCodedef" class="auto_break" name="posmCodedef" onchange="alloDetailsDef();"><option selected="selected" value="">Select POSM</option>'
			for (i=0;i<posmCodeCmSup.length;i++){	
				posmCodeCmSupStr=posmCodeCmSup[i].split('-');								
				posmStr += '<option value='+posmCodeCmSupStr[1]+'>'+posmCodeCmSupStr[0]+'-'+posmCodeCmSupStr[1]+'</option>'
			}
			posmStr +='</select>'
			posmStr =posmStr
			localStorage.p_posmCodeSup=posmStr;	
			
			$("#defectivePOSMSelect").empty();
			$("#defectivePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');	
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
		
		//alert (apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.p_select_town);
		$("#bufferImagedef").show();	
		$.ajax({
			type: 'POST',
			url:apipath+"getAllDataUsage?&posmCode="+posmCode+"&town="+localStorage.p_select_town,																																																											
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
					$("#dalcId").val(alc_id);
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

	town=localStorage.p_select_town.replace('-', '|');

	var uposm_type=$("#defposm_type").val();
	
	var ubrand=$("#defbrand").val();
	var baUsage=$("#defbalance").val();
	var alcId=$("#dalcId").val();
	
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
		//alert(apipath+"submitData_defective?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName6="+imageName6);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_defective?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&town="+town+"&posmCode="+posmCode+"&uposm_type="+uposm_type+"&ubrand="+ubrand+"&baUsage="+baUsage+"&a_qty="+a_qty+"&alcId="+alcId+"&imageName6="+imageName6,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#defectivePOSMSelect").empty();
					$("#defectivePOSMSelect").append(localStorage.p_posmCodeSup).trigger('create');
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
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
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
	
	//alert (apipath+"reports_AuditorAgency?&repID="+localStorage.p_repID)
	$("#agencyAuSTRimage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"reports_AuditorAgency?&repID="+localStorage.p_repID,
																																																													
			success: function(result) {
				//alert(result);
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#agencyAuSTRimage").hide();				
				localStorage.p_stockReportCde=getResult[1];	
				
				var repkRPA=localStorage.p_stockReportCde.split('rdrd');			
				var cmRouteSTAD='<table id="" width="100%">';
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
					
					var repid=localStorage.p_repID;
					$("#repIDAu").html ("Rep ID	:		"+repid);
				
				}else{
				$("#agencyAuSTRimage").hide();
				var repid=localStorage.p_repID;
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
	//alert (apipath+"reports_posmAuditor?&repID="+localStorage.p_repID)
	$("#posmAuditRecordBufferImage").show();
	$.ajax({
			type: 'POST',
			url:apipath+"reports_posmAuditor?&repID="+localStorage.p_repID,
																																																													
			success: function(result) {
				//alert(result);
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				$("#posmAuditRecordBufferImage").hide();				
				localStorage.p_posmAuditRec=getResult[1];	
				
				var repPosmAud=localStorage.p_posmAuditRec.split('rdrd');			
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
					
					var repid=localStorage.p_repID;
					var repName=localStorage.p_repName;
					$("#repIDPosmAud").html ("Rep ID	:		"+repid);
					$("#repNamePosmAud").html ("Rep Name	:		"+repName);
				
				}else{
				$("#posmAuditRecordBufferImage").hide();
				var repid=localStorage.p_repID;
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
	var posmOutletCode=localStorage.p_posmOutletCode;
	var posmOutletName=localStorage.p_posmOutletName;
	
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
	
	var outletStr = outletIDNameSupCall.split('|');
	var outletName = outletStr[0];
	var posmAuditOutSearch = outletStr[1];
	
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
		//alert(apipath+"submitData_PosmAuditor?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&posmBoard="+posmBoard+"&auditorPOSMBrandList="+auditorPOSMBrandList+"&auditPosm_type="+auditPosm_type+"&boardQty="+boardQty+"&boardCondition="+boardCondition+"&megaHanger="+megaHanger+"&megaHangerCondition="+megaHangerCondition+"&plugInDispenser="+plugInDispenser+"&plugInDispenserCondition="+plugInDispenserCondition+"&miniSolomon="+miniSolomon+"&skinCare="+skinCare+"&skinCareCondition="+skinCareCondition+"&hairCare="+hairCare+"&hairCareCondition="+hairCareCondition+"&drugStorePosm="+drugStorePosm+"&posmQty="+posmQty+"&drugStorePosmCondition="+drugStorePosmCondition+"&posmAuditOutSearch="+posmAuditOutSearch+"&cityCorp_DFF="+cityCorp_DFF);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_PosmAuditor?&syncCode="+localStorage.p_sync_code+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&posmBoard="+posmBoard+"&auditorPOSMBrandList="+auditorPOSMBrandList+"&auditPosm_type="+auditPosm_type+"&boardQty="+boardQty+"&boardCondition="+boardCondition+"&megaHanger="+megaHanger+"&megaHangerCondition="+megaHangerCondition+"&plugInDispenser="+plugInDispenser+"&plugInDispenserCondition="+plugInDispenserCondition+"&miniSolomon="+miniSolomon+"&skinCare="+skinCare+"&skinCareCondition="+skinCareCondition+"&hairCare="+hairCare+"&hairCareCondition="+hairCareCondition+"&drugStorePosm="+drugStorePosm+"&posmQty="+posmQty+"&drugStorePosmCondition="+drugStorePosmCondition+"&posmAuditOutSearch="+posmAuditOutSearch+"&cityCorp_DFF="+cityCorp_DFF,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#posmAuditSubmitBufferImage").hide();
					$("#auditorPOSMBrandList").val('');	
					$("#posmAuditOutSearch").val('');	
					$("#boardQty").val('');
					$("#posmQty").val('');
					$("#cityCorp_DFF").val('');
					$("#auditorPOSMBrandListShow").empty();
					$("#auditorPOSMBrandListShow").append(localStorage.p_auditorPOSMBrand).trigger('create');
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
					$("#TaxAreaDFFRec").append(localStorage.p_rectaxStrDFF).trigger('create');
					
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
		
	if (localStorage.p_saveDataDFF==undefined){		
		localStorage.p_saveDataDFF +="rdrd"+localStorage.p_repID+"fdfd"+localStorage.p_repName+"fdfd"+localStorage.p_mobileNo+"fdfd"+posmBoard+"fdfd"+auditorPOSMBrandList+"fdfd"+auditPosm_type+"fdfd"+boardQty+"fdfd"+boardCondition+"fdfd"+megaHanger+"fdfd"+megaHangerCondition+"fdfd"+plugInDispenser+"fdfd"+plugInDispenserCondition+"fdfd"+miniSolomon+"fdfd"+skinCare+"fdfd"+skinCareCondition+"fdfd"+hairCare+"fdfd"+hairCareCondition+"fdfd"+drugStorePosm+"fdfd"+posmQty+"fdfd"+drugStorePosmCondition+"fdfd"+posmAuditOutSearch+"fdfd"+cityCorp_DFF;
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
	
	if (localStorage.p_saveDataDFF !=''){
			
		var saveDataDFF = localStorage.p_saveDataDFF;
		
		var saveDataDFFStr='<span style="background-color:#900; color:#FFF; margin:0px; padding:0px; display:block;">Save Outlet</span>';
			for (i=0;i<saveDataDFF.length;i++){					
				outletSaveLi=saveDataDFF[i].split('fdfd');
				
				saveDataDFFStr += '<p style="margin:0px; padding:0px; background-color:#FFF; border:1px solid #F00;">'+"Outlet:"+outletSaveLi[1]+' | '+"Brand:"+outletSaveLi[15]+' | '+"POSM Type:"+outletSaveLi[16]+' | '+"Height:"+outletSaveLi[17]+' | '+"Length:"+outletSaveLi[18]+' | '+"Total Light:"+outletSaveLi[19]+' | '+"Outlet Code :"+outletSaveLi[20]+'| '+"Tax_Area:"+outletSaveLi[21]+'</p>'
			}
			localStorage.p_saveDataDFFS=saveDataDFFStr;		
			$('#saveDataDFFSList').empty();
			$('#saveDataDFFSList').append(localStorage.p_saveDataDFFS).trigger('create');
	}else{
		$('#saveDataDFFSList').empty();
		
	}
	
	url="#saveDFF";				
	$.mobile.navigate(url);
}


function leaveManageSUP(type){
	var leaveType = type;
	if(leaveType==undefined){
		leaveType=''
	}
	
	$('.leaveCalculateBuffar').show();
	
	//alert(apipath+"leaveManageSUPData?&repID="+localStorage.p_repID+"&leaveType="+leaveType);
	$.ajax({
			type: 'POST',
			url:apipath+"leaveManageSUPData?&repID="+localStorage.p_repID+"&leaveType="+leaveType,
																																																													
			success: function(result) {
				getResult=result.split('||');
				
				if(getResult[0]=='Success'){
				localStorage.p_leaveMng=getResult[1];	
					if(localStorage.p_leaveMng!=''){
					var stockRPA=localStorage.p_leaveMng.split('rdrd');			
					var cmRouteSTA='<table id="leaveTable" width="100%">';
						cmRouteSTA += '<tr style="font-size:12px;"><th>CM ID</th><th>Type</th><th>From Date</th><th>To Date</th><th>Day</th><th>Status</th><th></th><th></th></tr>'
						for (i=0;i<stockRPA.length;i++){	
							leaveData=stockRPA[i].split('|');
							rowIDRecLeave=leaveData[0];
							cmID=leaveData[1];
							frDate=leaveData[2];
							toDate=leaveData[3];
							days=leaveData[4];	
							type=leaveData[5];
							status=leaveData[6];
							if(status!='APPROVED'){
										
							cmRouteSTA += '<tr id="'+rowIDRecLeave+'" style="font-size:12px; font-weight:bold;"><td>'+cmID+'</td><td>'+type+'</td><td>'+frDate+'</td><td>'+toDate+'</td><td style="text-align:center;">'+days+'</td><td style="text-align:center;">'+status+'</td><td style="text-align:center;"><input type="button" onClick="recDeleteFunc(\''+cmID+'|'+rowIDRecLeave+'|'+days+'|'+type+'\')" value="X" style="background-color:#f00; color:#fff;"></td><td style="text-align:center;"><input type="button" onClick="recAcceptFunc(\''+cmID+'|'+rowIDRecLeave+'|'+days+'|'+type+'\')" value="Approve" style="background-color: #0E5887;color: #fff;"></td></tr>'
							}else{
								cmRouteSTA += '<tr id="'+rowIDRecLeave+'" style="font-size:12px;"><td>'+cmID+'</td><td>'+type+'</td><td>'+frDate+'</td><td>'+toDate+'</td><td style="text-align:center;">'+days+'</td><td style="text-align:center;">'+status+'</td></tr>'
								
								}
						}
						cmRouteSTA +='</table>'		
						$("#leaveViewTable").empty();
						$("#leaveViewTable").append(cmRouteSTA);
						$('.leaveCalculateBuffar').hide();
						}else{
							$("#leaveViewTable").empty();
							$(".errorChk").text("No Leave Request");
							$('.leaveCalculateBuffar').hide();
							}
				
			}else{
				
				$(".errorChk").text("No Leave Request");
				$('.leaveCalculateBuffar').hide();
				}
		}
	});
	$(".leaveCalculateBuffar").hide();
	$(".sucMsgL").text('');
	$(".errorChk").text("");
	$("#leaveTypeStrDataSTR").empty();
	$("#leaveTypeStrDataSTR").append(localStorage.p_lListStrRecSupData).trigger('create');			
	url="#leaveMageSUP";				
	$.mobile.navigate(url);

}
	
	


function recAcceptFunc(id){
	var recData= id.split('|');
	var cmID = recData[0];
	var rowId = recData[1];
	var days = recData[2];
	var type = recData[3];
	var chekAccept = confirm();
	
	if(chekAccept==true){
	
		$(".leaveCalculateBuffar").show();
		//alert(apipath+"leaveAcceptDataSubmit?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&rowId="+rowId+"&days="+days+"&cmID="+cmID+"&type="+type);	
			$.ajax({
				type: 'POST',
				url:apipath+"leaveAcceptDataSubmit?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&rowId="+rowId+"&days="+days+"&cmID="+cmID+"&type="+type,
																																																														
				success: function(result) {			
					if(result=='Success'){
						$(".leaveCalculateBuffar").hide();
						$("#recData").val('');
						$("#cmID").val('');
						$("#rowId").val('');
						$("#days").val('');
						$("#chekAccept").val('');
						$(".errorChk").text("");
						$(".sucMsgL").text('Approved Successfully');
						$("#leaveTypeStrDataSTR").empty();
						$("#leaveTypeStrDataSTR").append(localStorage.p_lListStrRecSupData).trigger('create');
		
					}else{
						$(".errorChk").text("Please Check Your Internet Connection");
						$(".leaveCalculateBuffar").hide();
						$(".sucMsgL").text('');
						}
				}
			});
		$("#leaveViewTable").empty();
		leaveManageSUP()
	}else{
		
		$(".errorChk").text("");
		}
}
	
	
function recDeleteFunc(id){
	var recData= id.split('|');
	var cmID = recData[0];
	var rowId = recData[1];
	var days = recData[2];
	var chekDelete = confirm();
	
	if(chekDelete==true){
		
		$(".leaveCalculateBuffar").show();
		//alert(apipath+"leaveDeleteDataSubmit?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&rowId="+rowId+"&days="+days+"&cmID="+cmID);	
			$.ajax({
				type: 'POST',
				url:apipath+"leaveDeleteDataSubmit?&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&rowId="+rowId+"&days="+days+"&cmID="+cmID,
																																																														
				success: function(result) {			
					if(result=='Success'){
						$(".leaveCalculateBuffar").hide();
						$("#recData").val('');
						$("#cmID").val('');
						$("#rowId").val('');
						$("#days").val('');
						$("#chekDelete").val('');
						$(".errorChk").text("");
						$(".sucMsgL").text('Cencel Successfully');
						$("#leaveTypeStrDataSTR").empty();
						$("#leaveTypeStrDataSTR").append(localStorage.p_lListStrRecSupData).trigger('create');
		
					}else{
						$(".errorChk").text("Please Check Your Internet Connection");
						$(".leaveCalculateBuffar").hide();
						$(".sucMsgL").text('');
						}
				}
			});
	
		
	$("#leaveViewTable").empty();
	leaveManageSUP()
	}else{
		
		$(".errorChk").text("");
		}
	
}
	
function getShopeForntImage() {
	var get_time=$.now();
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
	$("#shopeFornt_path").val(image_Name);
	$("#shopeFornt_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccess10, onFail10, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccess10(imageURI) {		
    var image = document.getElementById('shopeForntImageA');
    image.src = imageURI;
	var image_path = "shopeFornt_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFail10(message) {
	image_path="";
	$("#shopeFornt_name").val('');
    alert('Failed because: ' + message);
}

function getFixedDisplayBeforImage() {
	var get_time=$.now();
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
	$("#getFixedDisplayBefor_path").val(image_Name);
	$("#getFixedDisplayBefor_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccess11, onFail11, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccess11(imageURI) {		
    var image = document.getElementById('getFixedDisplayA');
    image.src = imageURI;
	var image_path = "getFixedDisplayBefor_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFail11(message) {
	image_path="";
	$("#getFixedDisplayBefor_name").val('');
    alert('Failed because: ' + message);
}

function getFixedDisplayAfterImage() {
	var get_time=$.now();
	var image_Name = localStorage.p_mobileNo+"_"+get_time+".jpg";
	$("#getFixedDisplayAfter_path").val(image_Name);
	$("#getFixedDisplayAfter_name").val(image_Name);
	
	navigator.camera.getPicture(onSuccess12, onFail12, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccess12(imageURI) {		
    var image = document.getElementById('getFixedDisplayAfterA');
    image.src = imageURI;
	var image_path = "getFixedDisplayAfter_path";	
	$("#"+image_path).val(imageURI);
	
}

function onFail12(message) {
	image_path="";
	$("#getFixedDisplayAfter_name").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoSupCall(imageURI, shopeForntImageA) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=shopeForntImageA;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win10,onfail0,options);
}

function win10(r) {	
	$(".errorChk").text('');
}

function onfail0(r) {
	$(".errorChk").text('');
	//$("#btn_submit_usages").hide();
}



var joinNo1='';
var joinNo2='';
var joinNo3='';
var joinNo4='';

function joinCallSubmitDataAll(){
	
	$("#joinCallSubmitDataAll").hide();
	//alert(outletCodeFxiedDisplayDala);

	joinNo1=$('input[name=joinNo1]:checked').val();
	joinNo2=$('input[name=joinNo2]:checked').val();
	joinNo3=$('input[name=joinNo3]:checked').val();
	joinNo4=$('input[name=joinNo4]:checked').val();
	
	supCall_lat=$("#supCall_lat").val();
	supCall_long=$("#supCall_long").val();
	
	if(joinNo1==undefined || joinNo1==''){
		a_posm_type='';
	}
	if(joinNo2==undefined || joinNo2==''){
		joinNo2='';
	}
	if(joinNo3==undefined || joinNo3==''){
		joinNo3='';
	}
	if(joinNo4==undefined || joinNo4==''){
		joinNo4='';
	}
	
	
	shopeFornt_path=$("#shopeFornt_path").val();
	shopeFornt_name=$("#shopeFornt_name").val();
	getFixedDisplayBefor_path=$("#getFixedDisplayBefor_path").val();
	getFixedDisplayBefor_name=$("#getFixedDisplayBefor_name").val();
	getFixedDisplayAfter_path=$("#getFixedDisplayAfter_path").val();
	getFixedDisplayAfter_name=$("#getFixedDisplayAfter_name").val();
	
	if(shopeFornt_name=='' || shopeFornt_name==undefined){
		$(".errorChk").text("Required Shope Fornt Picture");
		$("#joinCallSubmitDataAll").show();
		
	/*}else if((joinNo1!='') && joinNo2=='' ){
		$(".errorChk").text("Required Ans 2");
		$("#joinCallSubmitDataAll").show();
		
	}else if(joinNo1!='' && joinNo2!='' &&  joinNo3==''){
		$(".errorChk").text("Required Ans 3");
		$("#joinCallSubmitDataAll").show();	
		
	}else if(joinNo1!='' && joinNo2!='' &&  joinNo3!='' && joinNo4==''){
		$(".errorChk").text("Required Ans 4");
		$("#joinCallSubmitDataAll").show();*/
	
	}else if (supCall_lat==0 || supCall_long==0 ){
		$(".errorChk").text("Required Location");
		$("#joinCallSubmitDataAll").show();	
	}else{
	//alert(selectOutletTownSup+'--'+routeNameIdSup+'--'+outletIDNameSupCall);
				
	$("#bufferImagejoinCallSubmitDataAll").show();	
	
	//alert(apipath+"submitData_joinCallAllData?&select_town="+selectOutletTownSup+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&routeNameIdSup="+routeNameIdSup+"&outletIDNameSupCall="+outletIDNameSupCall+"&supCall_lat="+supCall_lat+"&supCall_long="+supCall_long+"&shopeFornt_name="+shopeFornt_name);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_joinCallAllData?&select_town="+selectOutletTownSup+"&repID="+localStorage.p_repID+"&repName="+localStorage.p_repName+"&mobileNo="+localStorage.p_mobileNo+"&routeNameIdSup="+routeNameIdSup+"&outletIDNameSupCall="+outletIDNameSupCall+"&supCall_lat="+supCall_lat+"&supCall_long="+supCall_long+"&shopeFornt_name="+shopeFornt_name,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#bufferImagejoinCallSubmitDataAll").hide();
					$("#supCallDataHide").hide();
					$("#joinCallSubmitDataAll").hide();
					//$('input[name=joinNo1]:checked').val('');
					//$('input[name=joinNo2]:checked').val('');
					//$('input[name=joinNo3]:checked').val('');
					//$('input[name=joinNo4]:checked').val('');
					
					$("#supCall_lat").val(0);
					$("#supCall_long").val(0);
					$(".sucMsgSupCall").text('Successfully Submitted');
					//$("#getFixedDisplayBefor_path").val("");
					//$("#getFixedDisplayBefor_name").val("");
					//$("#getFixedDisplayAfter_path").val("");
					//$("#getFixedDisplayAfter_name").val("");
					
					/*$("#joinCallQueNo1Show").empty();
					$("#joinCallQueNo1Show").append(joinCallQueNo1).trigger('create');
					$("#joinCallQueNo2Show").empty();
					$("#joinCallQueNo2Show").append(joinCallQueNo2).trigger('create');
					$("#joinCallQueNo3Show").empty();
					$("#joinCallQueNo3Show").append(joinCallQueNo3).trigger('create');
					$("#joinCallQueNo4Show").empty();
					$("#joinCallQueNo4Show").append(joinCallQueNo4).trigger('create');
					*/
					
					
					//document.getElementById('myImageD').src = '';
					
					$(".errorChk").text("");
					
					uploadPhotoSupCall(shopeFornt_path, shopeFornt_name);
					
					$("#shopeFornt_path").val("");
					$("#shopeFornt_name").val("");
					document.getElementById('shopeForntImageA').src = '';
						
				}else{
					$("#bufferImagejoinCallSubmitDataAll").hide();
					$(".errorChk").text('Outlet Already Exists')
					$(".sucMsgSupCall").text('');
					$("#joinCallSubmitDataAll").hide();
				}
				
			}//end result
		
		});//end ajax
	}
	
}

