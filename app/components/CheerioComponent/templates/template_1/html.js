const TemplateHTML = `
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css">

    </head>
    <body>
        

        <div class="container my-5">
            <div class="row">
                <div class="col-md-4 col-xs-12" id="SidePannel">
                    <div class="card pmd-card bg-sidebar">
                        <!-- <div class="card-header p-0"> -->
                            <img src="https://storage.cloud.google.com/content.netcv.site/images/about.jpg" class="card-image-top img-thumbnail profilePhotoURL" alt="Profile Image">
                            <div class="title mx-auto text-center">
                                <h4 class="fullName" ></h4>
								<span>I am a <span class="txt-rotate profileTags" data-period="2000" data-rotate='[ "developer.", "designer.", "freelancer." ]'></span></span>
                            </div>
                        <!-- </div> -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-user-o align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <p class="profileSummary"></p>
                                    <hr/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-phone align-middle"></span>
                                </div>
                                <div class="col-10 contact">
                                    <h5 class="phone"></h5>
                                    <!--span>Primary</span>
                                    
                                    <h5>2222222222</h5>
                                    <span>Work</span-->
                                    
                                    <hr/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-mail align-middle"></span>
                                </div>
                                <div class="col-10 contact">
                                    <h5 class="email"></h5>
                                    <!--span>Primary</span>
                                    
                                    <h5>abc@mail2.com</h5>
                                    <span>Work</span-->
    
                                    <hr/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-home1 align-middle"></span>
                                </div>
                                <div class="col-10">
									<p><span class="address"></span><span>,&nbsp;</span><span class="city">Dolor</span><span>,&nbsp;</span><span class="state"></span><span>,&nbsp;</span><span class="country"></span>
									</p>
                                    <hr/>
                                </div>
                            </div>
							
							<!-- #####################  Skills  ##################  -->	
                            <div class="row" id="SkillSection">
                                <div class="col-2 text-center">
                                    <span class="icon icon-tools align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <h5>Professional Skills</h2>
									<List class="skillSectionList">
										<h6><span class="skillSectionTitle" style="color: #808080;"></span></h6>
										<listItem class="skill-item">
											<span class="skillItemsName"></span>
											<div class="progress">
												<div class="progress-bar skillItemsLevelProgress" role="progressbar" style="width: 45%"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</listItem>
									</List>
									<hr/>
                                </div>
                            </div>
							
							<!-- #####################  Social  ##################  -->	
                            <div class="row" id="SocialSection">
                                <div class="col">
                                    <div class="social-icons text-center">
									<List class="socialList">
										<listItem class="social-item">
											<a href="#"><span class="icon icon-facebook align-middle"></span></a>
										<listItem>
									</List>
                                    </div>
                                </div>
                            </div>

				<!-- 						<a href="#"><span class="icon icon-facebook align-middle"></span></a>
											<a href="#"><span class="icon icon-googleplus align-middle"></span></a>
											<a href="#"><span class="icon icon-twitter align-middle"></span></a>
											<a href="#"><span class="icon icon-instagram align-middle"></span></a>
											<a href="#"><span class="icon icon-youtube align-middle"></span></a>
											<a href="#"><span class="icon icon-dribble align-middle"></span></a>
											<a href="#"><span class="icon icon-github align-middle"></span></a> -->
							
                            <div class="row" id="CopyrightTOP">
								 <div class="col text-center"><br>Copyright ©2019 All rights reserved <br> Made with <span class="icon icon-heart"> by <a href="gocv.com">GOCV.com</a></div>
                            </div>

                        </div>
                    </div>   
                </div>
                <div class="col-md-8 col-xs-12">
				
					<!-- #####################  Employment  ##################  -->	
                    <section class="mb-3" id="EmploymentSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-briefcase1 align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <h2 class="font-weight-bold"> Work Experience </h2>
									<List class="EmploymentList">
										<listItem class="EmploymentItem">
											<div class="custom-content-wrapper mt-3">
												<h4><node class="employmentPosition"></node><span>&nbsp;@</span><span class="employmentEmployer"></span><span>,&nbsp; </span><span class="employmentState"></span><span>,&nbsp;</span><span class="employmentCountry"></span></span></h4>
												<span class="employmentStart"></span><span>&nbsp;-&nbsp;</span><span class="employmentEnd"></span>
												<p class="employmentSummary"></p>
											</div>
										</listItem>
									</List>
                                </div>
                            </div>
                        </div>
                    </section>
					
					<!-- #####################  Education  ##################  -->					
                    <section class="my-3"  id="EducationSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-study align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <h2 class="font-weight-bold"> Education </h2>
									<List class="EducationtList">
										<listItem class="EducationItem">
											<div class="custom-content-wrapper mt-3">
												<h4><node class="educationTitle"> </node><span>&nbsp;</span><node class="educationFieldOfStudy"></node>
												<span>&nbsp;@</span><span class="educationInstitution"></span><span>,&nbsp; </span><span class="educationState"> </span><span>,&nbsp;</span><span class="educationCountry"></span></h4>
												<span class="educationStart"></span><span>&nbsp;-&nbsp;</span><span class="educationEnd"></span>
												<p class="educationSummary"></p>
											</div>
										</listItem>
									</List>
                                </div>
                            </div>
                        </div>
                    </section>
					
					<!-- #####################  Projects  ##################  -->									
                    <section class="my-3" id="ProjectSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-folder align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <h2 class="font-weight-bold"> Projects </h2>
									<List class="ProjectList">
										<listItem class="ProjectItem">									
											<div class="custom-content-wrapper mt-3">
												<h4 class="projectTitle"></h4>
												<h6 class="projectSummary"></h6>
												<span class="projectStart"></span><span>&nbsp;-&nbsp;</span><span class="projectEnd"></span>
												<p><node class="projectDescription"></node>
												<br/><span>Technologies Used<span>&nbsp;:&nbsp;</span></span><node class="projectTechnoloyUsed"></node></p>
											</div>
										</listItem>
									</List>                                   
                                </div>
                            </div>
                        </div>
                    </section>
				
					<!-- ##################### Accomplishment ##################  -->				
                    <section class="my-3" id="AccomplishmentSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-trophy align-middle"></span>
                                </div>
                                <div class="col-10" >
                                    <h2 class="font-weight-bold"> Accomplishments </h2>
									<List class="AccomplishmentList">
										<listItem class="AccomplishmentItem">										
											<div class="custom-content-wrapper mt-3">
												<h4><node class="accomplishmentTitle"></node><span>&nbsp;-&nbsp;</span><span class="accomplishmentRank"></span></h4>
												<span class="accomplishmentDate"></span>
												<p class="accomplishmentSummary"></p>
											</div>
										</listItem>
									</List> 
                                </div>
                            </div>
                        </div>
                    </section>
					
					<!-- ##################### Research and Publications ##################  -->
					<section class="my-3" id="publicationSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-pen1 align-middle"></span>
                                </div>
                                <div class="col-10" >
                                    <h2 class="font-weight-bold"> Research and Publications  </h2>		
									<List class="PublicationList">						
										<listItem class="PublicationItem">	
											<div class="custom-content-wrapper mt-3">
												<a class="publicationURL" href=""><h4><node class="publicationTitle"></node></h4></a>
												<span class="publicationDate"></span>
												<p class="publicationSummary"></p>
											</div>
										</listItem>
									</List> 
                                </div>
                            </div>
                        </div>
                    </section>
					
					<!-- ##################### Affiliation ##################  -->
					<section class="my-3" id="AffiliationSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-employees align-middle"></span>
                                </div>
                                <div class="col-10" >
                                    <h2 class="font-weight-bold"> Affiliations </h2>
									<List class="AffiliationList">
										<listItem class="AffiliationItem">		
											<div class="custom-content-wrapper mt-3">
												<h4><node class="affiliationOrganization"></node><span>&nbsp;-&nbsp;</span><span class="affiliationRole"></span></h4>
												<span class="affiliationStart"></span><span>&nbsp;-&nbsp;</span><span class="affiliationEnd"></span>
												<p class="affiliationSummary"></p>
											</div>
										</listItem>
									</List> 
                                </div>
                            </div>
                        </div>
                    </section>
					
					<!-- ##################### Interestes ##################  -->
					<section class="my-3" id="interestesSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-trophy align-middle"></span>
                                </div>
                                <div class="col-10" >
                                    <h2 class="font-weight-bold"> Interestes  </h2>
									<div class="custom-content-wrapper mt-3">
										<List class="InteresteList">						
											<listItem class="InteresteItem">			
												<a href="#" data-toggle="tooltip" data-placement="top" title="facebook" ><span class="icon icon-facebook align-middle"></span></a>
											</listItem>
										</List> 
									</div>
                                </div>
                            </div>
                        </div>
                    </section>
					
					<section class="my-3" id="CopyrightBOTTOM">
						<div class="row CopyrightTOP">
							 <div class="col text-center"><br>Copyright ©2019 All rights reserved <br> Made with <i class="icon icon-heart"></i> by <a href="gocv.com">GOCV.com</a></div>
						</div>
					</section>
                </div>
            </div>
        </div>


        <!-- Scripts -->
        <script src="https://resumebuilder.s3.ap-south-1.amazonaws.com/js/jquery-3.3.1.slim.min.js"></script>
        <script src="https://resumebuilder.s3.ap-south-1.amazonaws.com/js/popper.min.js"></script>
        <script src="https://resumebuilder.s3.ap-south-1.amazonaws.com/js/bootstrap.min.js"></script>
        <script src="https://resumebuilder.s3.ap-south-1.amazonaws.com/js/main.js"></script>

    </body>
</html>
`;

export default TemplateHTML;