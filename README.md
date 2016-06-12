# Jukebox
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Jukebox</title>
	<link rel="icon" type="image/png" href="images/logo.png">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<div id="right">
<ul class="nav nav-pills">
    <li class="active"><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Developers</a></li>
</ul>
</div>
<div id="left">
 		<img src="images/logo.png" height="100" width="100" align="center"></div>
</div>

<div id="wrapper">
	<div class="container">
 		<div class="jumbotron">
 			<p>This is a Jukebox with the implementation of Object Oriented Javascript. It is able to play mp3 files which has been added from default.</p>
 			<p>Also this application is interactive/dynamic with the user upload functionality. Users can simply browse through  files in their local machine and play using this Jukebox.</p>
 		
 			
  		</div>
 	</div>
 </div>
 <footer class="footer">
      <div class="container">
      <div id="right">

  		<a href="#"><img src="images/facebook.jpg" width="50" height="50" style="padding:5px"></a>

  		<a href="#"><img src="images/twitter.png" width="50" height="50" style="padding:5px"></a>
  		<a href="#"><img src="images/instagram.png" width="50" height="50" style="padding:5px"></a>
  		</div>
      </div>
    </footer>
 <script src="script.js"></script>

</body>
</html>

<!--
<div id="wrapper">
<div class="container">
  <div class="jumbotron">
	<form id="search" align="center" class="form-inline" role="form">
  <div class="form-group">
  <label>Search Movies: </label>
    <input id="s" type="text" size="100" name="s" class="form-control" placeholder="Enter Name" onkeyup="searchMovie()">
  </div>
  <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
</form>
	</div>
	</div>
	<div id="suggestions" class="alert alert-info"></div>
	<hr>
	<div class="panel panel-primary">
      <div class="panel-heading">Results</div>
      <div class="panel-body">
	<div id="images" style="padding-top:4%;" align="center"></div>
	</div>
	</div>
</div>
-->
