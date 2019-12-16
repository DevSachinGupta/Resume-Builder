var TemplateCSS = `

@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
@font-face { font-family: 'icomoon';src:  url('https://storage.cloud.google.com/content.netcv.site/fonts/icomoon.eot?ys0ipk');src:  url('https://storage.cloud.google.com/content.netcv.site/fonts/icomoon.eot?ys0ipk#iefix') format('embedded-opentype'), url('https://storage.cloud.google.com/content.netcv.site/fonts/icomoon.ttf?ys0ipk') format('truetype'),url('https://storage.cloud.google.com/content.netcv.site/fonts/icomoon.woff?ys0ipk') format('woff'), url('https://storage.cloud.google.com/content.netcv.site/fonts/icomoon.svg?ys0ipk#icomoon') format('svg'); font-weight: normal; font-style: normal; font-display: block; }  
[class^="icon-"], [class*=" icon-"] { font-family: 'icomoon' !important; peak: none; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.icon-bitbucket:before{content:"\e93a";color:#0052cc}.icon-dribble:before{content:"\e93b";color:#ea4c89}.icon-facebook:before{content:"\e93c";color:#4172b8}.icon-git:before{content:"\e93d";color:#f05032}.icon-github:before{content:"\e93e";color:#000000;}.icon-gitlab:before{content:"\e93f";color:#e24329}.icon-googleplus:before{content:"\e940";color:#dc4e41}.icon-instagram:before{content:"\e941";color:#e4405f}.icon-linkedin:before{content:"\e942";color:#0077b5}.icon-skype:before{content:"\e943";color:#00aff0}.icon-twitter:before{content:"\e944";color:#1da1f2}.icon-whatsapp:before{content:"\e953";color:#25d366}.icon-youtube:before{content:"\e954";color:red}.icon-heart:before{content:"\e939";color:#dc4e41;}.icon-smartphone:before{content:"\e900"}.icon-location:before{content:"\e901"}.icon-map:before{content:"\e901"}.icon-youtube-logo:before{content:"\e902"}.icon-jigsaw:before{content:"\e903"}.icon-musical-notes-symbols:before{content:"\e904"}.icon-karaoke:before{content:"\e905"}.icon-karaoke-1:before{content:"\e906"}.icon-music:before{content:"\e907"}.icon-open-book:before{content:"\e908"}.icon-open-book-top-view:before{content:"\e909"}.icon-edit:before{content:"\e90a"}.icon-contract:before{content:"\e90b"}.icon-blogging:before{content:"\e90c"}.icon-blog:before{content:"\e90d"}.icon-ballad:before{content:"\e90e"}.icon-poetry:before{content:"\e90f"}.icon-sketch-1:before{content:"\e910"}.icon-sketch:before{content:"\e911"}.icon-photo-camera:before{content:"\e912"}.icon-camera:before{content:"\e913"}.icon-paint-palette:before{content:"\e914"}.icon-paint-board-and-brush:before{content:"\e915"}.icon-volunteer:before{content:"\e916"}.icon-charity:before{content:"\e917"}.icon-network:before{content:"\e918"}.icon-social-media:before{content:"\e919"}.icon-console:before{content:"\e91a"}.icon-gamepad:before{content:"\e91b"}.icon-football:before{content:"\e91c"}.icon-running:before{content:"\e91d"}.icon-man-cycling:before{content:"\e91e"}.icon-bicycle:before{content:"\e91f"}.icon-swimming-figure:before{content:"\e920"}.icon-swimming-pool:before{content:"\e921"}.icon-adventurer:before{content:"\e922"}.icon-hiking:before{content:"\e923"}.icon-camp:before{content:"\e924"}.icon-tent:before{content:"\e925"}.icon-destination:before{content:"\e926"}.icon-honeymoon:before{content:"\e927"}.icon-cricket:before{content:"\e928"}.icon-cricket-1:before{content:"\e929"}.icon-dance:before{content:"\e92a"}.icon-jumping-dancer:before{content:"\e92b"}.icon-tickets:before{content:"\e92c"}.icon-theatre:before{content:"\e92d"}.icon-theater-masks:before{content:"\e92e"}.icon-movie-camera:before{content:"\e92f"}.icon-youtube1:before{content:"\e930"}.icon-web-programming:before{content:"\e931"}.icon-programming-code:before{content:"\e932"}.icon-cooking:before{content:"\e933"}.icon-cooking-on-fire:before{content:"\e934"}.icon-needle:before{content:"\e935"}.icon-model-craft:before{content:"\e936"}.icon-growth:before{content:"\e937"}.icon-sprout:before{content:"\e938"}.icon-tools2:before{content:"\e945"}.icon-tools:before{content:"\e946"}.icon-study:before{content:"\e947"}.icon-mail:before{content:"\e948"}.icon-mail-envelope-open:before{content:"\e949"}.icon-phone:before{content:"\e94a"}.icon-graduation-cap:before{content:"\e94b"}.icon-calendar-o:before{content:"\e94c"}.icon-home:before{content:"\e94d"}.icon-user-o:before{content:"\e94e"}.icon-briefcase:before{content:"\e94f"}.icon-briefcase1:before{content:"\e950"}.icon-briefcase2:before{content:"\e951"}.icon-trophy:before{content:"\e952"}.icon-whatsapp:before{content:"\e953"}.icon-youtube1:before{content:"\e954"}.icon-employees:before{content:"\e955"}.icon-quality:before{content:"\e956"}.icon-pen:before{content:"\e957"}.icon-pen1:before{content:"\e958"}.icon-codesandbox:before{content:"\edba"}.icon-cpu:before{content:"\edc8"}.icon-folder:before{content:"\ede6"}.icon-home1:before{content:"\edf8"}.icon-layers:before{content:"\edff"}

html, body {
    font-family: 'Poppins', 'Roboto', san	s-serif;
	background-color: #eae8e7;
}
.social-icons {
    font-size: 30px;
}
.social-icons a{
    padding: 5px;
	/* color: #FFF; */
}
.social-icons a:hover,.social-icons a:focus{
    text-decoration: none;
}

.title h1,.title h2,.title h3,.title h4,.title h5,.title h6{
   margin-bottom: 0;
} 
.title span {
    color: #808080;
}
.pmd-card {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.icon {
    font-size: 20px;
}

.top-15 {
    top: 15em;
}

section span.icon {
    font-size: 40px;
}

.custom-content-wrapper {
    padding-right: 10pt;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.custom-content-wrapper:last-child {
    border-bottom: none;
}
.custom-content-wrapper h4 {
    font-size: 15pt;
    line-height: 20pt;
    margin: 0;
}
.custom-content-wrapper h4 span {
    color: #5da4d9;
    font-size: 10pt;
} 
.custom-content-wrapper span {
    color: #5da4d9;
    font-size: 10pt;
} 
.custom-content-wrapper p {
    margin-top: 0px;
    margin-bottom: 25px;
    font-size: 12px;
}
.contact h5 {
    margin: 0;
}
.contact span {
    color: #808080;
    font-size: 8pt;
}
.progress {
	height: 3pt;
}
.progress-bar {
	background-color: #FF5964;
}
.bg-sidebar {
    /* background-color: #35A7FF; */
    /* color: #FFFFFF; */
}

#SkillSection h6 {
    margin-bottom: 0;
    margin-top: 10pt;
    text-transform: capitalize;
}
.txt-rotate {
    text-transform: capitalize;
}

.InteresteList span {
    display: inline-block;
    width: 10%;
	color: #5da4d9 !important; 
}


/* ##  Copyright section  ## */
#CopyrightBOTTOM{
	display: none;
}

@media (max-width: 765px) {
	#CopyrightTOP{
		display:none
	}
	#CopyrightBOTTOM{
		display: block;
	}
	#SidePannel {
		margin-bottom: 1rem!important;
	}
}
`;

export default TemplateCSS;
