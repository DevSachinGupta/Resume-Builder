const TemplateHTML = `<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">

    </head>
    <body>
        

        <div class="container my-5">
            <div class="row">
                <div class="col-md-4 col-xs-12" id="SidePannel">
                    <div class="card pmd-card bg-sidebar">
                        <!-- <div class="card-header p-0"> -->
                            <img id="personal.photoURL"  src="https://storage.cloud.google.com/content.netcv.site/images/about.jpg" class="card-image-top img-thumbnail profilePhotoURL" alt="Profile Image">
                            <div class="title mx-auto text-center">
                                <h4 id="personal.fullName" class="fullName" ></h4>
								<span>I am a <span id="personal.profileTags" class="txt-rotate profileTags" data-period="2000" data-rotate='[ "developer.", "designer.", "freelancer." ]'></span></span>
                            </div>
                        <!-- </div> -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-user-o align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <p id="personal.brief" class="profileSummary"></p>
                                    <hr/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-2 text-center">
                                    <span class="icon icon-phone align-middle"></span>
                                </div>
                                <div class="col-10 contact">
                                    <h5 id="personal.phone" class="phone"></h5>
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
                                    <h5 id="personal.email" class="email"></h5>
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
									<p>
										<span id="personal.address1" class="address"></span>
										<span>&nbsp;</span>
										<span id="personal.address2" class="address"></span>
										<span>,&nbsp;</span>
										<span id="personal.city" class="city">Dolor</span>
										<span>,&nbsp;</span>
										<span id="personal.state" class="state"></span>
										<span>,&nbsp;</span>
										<span id="personal.country" class="country"></span>
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
										<div id="skills.0" class="skill-item">
											<span id="skills.0.name" class="skillItemsName"></span>
											<div class="progress">
												<div id="skills.0.progress" class="progress-bar skillItemsLevelProgress" role="progressbar" style="width: 45%"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</List>
									<hr/>
                                </div>
                            </div>
							
							<!-- #####################  Social  ##################  -->	
                            <div class="row" id="SocialSection">
                                <div class="col">
                                    <div class="social-icons text-center">
									<List class="socialList">
										<div id="social.0.url" class="social-item">
											<a href="#"><span class="icon icon-facebook align-middle"></span></a>
										</div>
									</List>
                                    </div>
                                </div>
                            </div>
							
                            <div class="row" id="CopyrightTOP">
								 <div class="col text-center"><br>Copyright ©2019 All rights reserved <br> Made with <span class="icon icon-heart"> by <a href="gocv.com">GOCV.com</a></div>
                            </div>

                        </div>
                    </div>   
                </div>
                <div class="col-md-8 col-xs-12">
					
					<!-- #####################  Education  ##################  -->					
                    <section class="my-3"  id="EducationSection">
                        <div class="card pmd-card">
                            <div class="row my-4">
                                <div class="col-2 text-center ">
                                    <span class="icon icon-study align-middle"></span>
                                </div>
                                <div class="col-10">
                                    <h2 class="font-weight-bold"> Education </h2>
                                    <div>
                                    <div id="education_0" class="EducationItem">
										<div class="custom-content-wrapper mt-3">
											<h4>
												<node id="education_0_title" class="educationTitle"> </node>
												<span>&nbsp;</span>
												<node id="education_0_fieldOfStudy" class="educationFieldOfStudy"></node>
												<span>&nbsp;@</span>
												<span id="education_0_institution" class="educationInstitution"></span>
												<span>,&nbsp; </span>
												<span id="education_0_state" class="educationState"> </span>
												<span>,&nbsp;</span>
												<span id="education_0_country" class="educationCountry"></span>
											</h4>
											<span id="education_0_start" class="educationStart"></span>
											<span>&nbsp;-&nbsp;</span>
											<span id="education_0_end" class="educationEnd"></span>
											<p id="education_0_summary" class="educationSummary"></p>
										</div>
                                    </div>
                                    </div>
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
                                    <div>
                                    <div id="project.0">									
										<div class="custom-content-wrapper mt-3">
											<h4 id="project.0.title" class="projectTitle"></h4>
											<h6 id="project.0.summary" class="projectSummary"></h6>
											<span id="project.0.start" class="projectStart"></span>
											<span>&nbsp;-&nbsp;</span>
											<span id="project.0.end" class="projectEnd"></span>
											<p>
												<node id="project.0.description" class="projectDescription"></node>
												<br/>
												<span>Technologies Used<span>&nbsp;:&nbsp;</span></span>
												<node id="project.0.keywords" class="projectTechnoloyUsed"></node>
											</p>
										</div>
                                    </div>
                                    </div>                                
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
										<div id="interest.0"  class="InteresteItem">			
											<a href="#" data-toggle="tooltip" data-placement="top" title="facebook" ><span class="icon icon-facebook align-middle"></span></a>
										</div>
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
        <script src="js/jquery-3.3.1.slim.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>

    </body>
</html>`;

export default TemplateHTML;
