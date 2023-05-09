<template>
	<div>
    <div class="aw_header">
		<div class="container">
			<div class="aw_logo">
				<router-link
					:to="{
							name: 'home_page',
						}"
				>
					<a href=""><h1>Movies<span>Watch</span></h1></a>
				</router-link>
			</div>
			<div class="aw_search">
				<form action="#" method="post">
					<input type="text" name="Search" placeholder="Search" required="">
					<input type="submit" value="Go">
				</form>
			</div>
			
            <AccoutToggle/>
		</div>
	</div>
    <!-- navbar -->
	<div class="aw_navbar">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="nav navbar-nav">
								<li class="active">
									<router-link
										:to="{
												name: 'home_page',
											}"
									>
										Home
									</router-link>
								</li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">Genres</a>
									<ul class="dropdown-menu multi-column columns-3">
										<li>
										<div class="col-sm-4">
											<ul class="multi-column-dropdown">
												<li><a href="genres.html">Action</a></li>
												<li><a href="genres.html">Biography</a></li>
												<li><a href="genres.html">Crime</a></li>
												<li><a href="genres.html">Family</a></li>
												<li><a href="horror.html">Horror</a></li>
												<li><a href="genres.html">Romance</a></li>
												<li><a href="genres.html">Sports</a></li>
												<li><a href="genres.html">War</a></li>
											</ul>
										</div>
										<div class="col-sm-4">
											<ul class="multi-column-dropdown">
												<li><a href="genres.html">Adventure</a></li>
												<li><a href="comedy.html">Comedy</a></li>
												<li><a href="genres.html">Documentary</a></li>
												<li><a href="genres.html">Fantasy</a></li>
												<li><a href="genres.html">Thriller</a></li>
											</ul>
										</div>
										<div class="col-sm-4">
											<ul class="multi-column-dropdown">
												<li><a href="genres.html">Animation</a></li>
												<li><a href="genres.html">Costume</a></li>
												<li><a href="genres.html">Drama</a></li>
												<li><a href="genres.html">History</a></li>
												<li><a href="genres.html">Musical</a></li>
												<li><a href="genres.html">Psychological</a></li>
											</ul>
										</div>
										<div class="clearfix"></div>
										</li>
									</ul>
								</li>
								<li><a href="series.html">tv - series</a></li>
								<li><a href="news.html">news</a></li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">Country</a>
									<ul class="dropdown-menu multi-column columns-3">
										<li>
											<div class="col-sm-4">
												<ul class="multi-column-dropdown">
													<li><a href="genres.html">Asia</a></li>
													<li><a href="genres.html">France</a></li>
													<li><a href="genres.html">Taiwan</a></li>
													<li><a href="genres.html">United States</a></li>
												</ul>
											</div>
											<div class="col-sm-4">
												<ul class="multi-column-dropdown">
													<li><a href="genres.html">China</a></li>
													<li><a href="genres.html">HongCong</a></li>
													<li><a href="genres.html">Japan</a></li>
													<li><a href="genres.html">Thailand</a></li>
												</ul>
											</div>
											<div class="col-sm-4">
												<ul class="multi-column-dropdown">
													<li><a href="genres.html">Euro</a></li>
													<li><a href="genres.html">India</a></li>
													<li><a href="genres.html">Korea</a></li>
													<li><a href="genres.html">United Kingdom</a></li>
												</ul>
											</div>
											<div class="clearfix"></div>
										</li>
									</ul>
								</li>
								<li><a href="short-codes.html">Short Codes</a></li>
								<li><a href="list.html">A - z list</a></li>
							</ul>
				</div>
			</nav>
		</div>
	</div>
</div>
</template>
<script>
    import  AccoutToggle from "@/components/Account.vue";
	
    export default {
        components: {
            AccoutToggle,
        },
		mounted() {

		}
    }
</script>
<style>
.aw_header .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.aw_logo a{
	display:block;
	text-decoration:none;
}
.aw_logo a h1{
	font-size: 2.8em;
    color: #212121;
    text-transform: uppercase;
    padding-right: 1.5em;
    font-weight: 900;
	padding-bottom: .3em;
}
.aw_logo a h1 span{
	color: #FF8D1B;
    font-size: .3em;
    display: block;
    font-weight: 300;
    letter-spacing: 5px;
    text-align: right;
    line-height: 0;
}
.aw_search{
	float: left; 
    width: 40%;
    /* margin-left: 9em;
	margin-top: .7em; */
}
.aw_search input[type="text"]{
	outline: none;
    border: none;
    background:#EFEFEF;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    color: #999;
    width: 78%;
    float: left;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
.aw_search input[type="submit"]{
	outline: none;
    border: none;
    background: #212121;
    padding: 10px 0;
    font-size: 14px;
    color: #fff;
    width: 22%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
.aw_search input[type="submit"]:hover{
	background:#FF8D1B;
}
/* navbar */

.aw_navbar .navbar {
    padding: 0;
    margin-bottom: 0;
}
.aw_navbar .navbar-nav > li > a:hover, .aw_navbar .navbar-nav > li > a:focus,.aw_navbar .navbar-nav > .open > a, .aw_navbar .navbar-nav > .open > a:hover, .aw_navbar .navbar-nav > .open > a:focus {
    color: #fff;
    background-color: #212121;
}
.navbar-collapse {
    height: 100%;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: #212121;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
}
.navbar-default .navbar-nav > li > a {
    color: #fff;
    text-transform: uppercase;
}
.navbar-default .navbar-nav > li > a {
    color: #777;
}

.navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
    height: 100%;
}
.nav > li > a {
    display: block;
    padding: 15px 15px;
}
.aw_navbar {
    background: #FF8D1B;
}
.aw_navbar .navbar-nav > li > a {
    color: #fff;
    text-transform: uppercase;
}
.navbar-nav > li {
    float: left;
    border-right: 1px dotted #fff;
    width:14.27%;
    text-align: center;
}
.navbar-nav {
    float: none;
    margin: 0;
    width: 100%;
    height: 100%;
}
.aw_navbar .navbar-nav > .active > a, .aw_navbar .navbar-nav > .active > a:hover, .aw_navbar .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: #212121;
}
ul.nav.navbar-nav li.active {
    border-right: none;
}
ul.dropdown-menu.multi-column ul li{
    display:block;
	margin-bottom:.5em;
}
ul.dropdown-menu.multi-column ul li a{
	color:#212121;
}
ul.dropdown-menu.multi-column {
    width: 400px;
    left: 0;
    padding: 1em;
}
ul.dropdown-menu.multi-column ul li a:hover{
	color:#FF8D1B;
}
ul.dropdown-menu {
    transition: 0.3s;
}
.dropdown:hover>.dropdown-menu {
    display: block;
}

</style>