# V-Rhythm 

V-Rhythm stands for vertical rhythm and it keeps vertical spaces consistent with each other.


## But why?

V-Rhythm makes sure  you never have to worry about the spaces between your headers and paragraphs ever again. Just define your H1 in your css and V-Rhythm takes care of the rest.  


## Installation / Setup

Step by step:

a. 	Download V-Rhythm.js at www.V-Rhythm.com

b. 	Add the v-rhythm.js to you directory, and load it in the bottom of your HTML code 
		(<script src="YOUR/PATH/v-rhythm.js"></script>)

c. Define your H1 in your css and your set up is done!

## Example

Setup index.html:

Setup an html file where the magic has to happen:  

	   		<!doctype html>
			<html>
			
				<head>
				    <title>Hello Text</title>
				</head>
				
				
				<body>
				
				</body>
			
			</html>
	   
	   
Add some articles: 

Make sure you give the article an id of mainArticle and the H1 an id of mainTitle.

	   		<!doctype html>
			<html>
			
				<head>
				    <title>Hello Text</title>
				</head>
				
				
				<body>
					<article class="mainArticle">
						<h1 id="mainTitle">Bijvangst aan schol mag jaar langer terug in zee </h1>
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
						
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
					</article>
				</body>
			
			</html>
			
			
			
Add some style:

Style the articles to your desires.


			<!doctype html>
			<html>
			
				<head>
				    <title>Hello Text</title>
				    
				    <style>
					    .mainArticle h1 {
							font-size: 22px;
						}
						
						article{
							padding: 30px;
							background-color: #eee;
							margin: 50px 0;
						}
						
						p{
							font-weight: 300;
						}
					</style>
					
				</head>
				
				
				<body>
					<article class="mainArticle">
						<h1 id="mainTitle">Bijvangst aan schol mag jaar langer terug in zee </h1>
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
						
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
					</article>
				</body>
			
			</html>
			
			
			
Add v-rhythm.js:

Load v-rhythm.js in the bottom of your HTML code inside your body tag.


			<!doctype html>
			<html>
			
				<head>
				    <title>Hello Text</title>
				    
				    <style>
					    .mainArticle h1 {
							font-size: 22px;
						}
						
						article{
							padding: 30px;
							background-color: #eee;
							margin: 50px 0;
						}
						
						p{
							font-weight: 300;
						}
					</style>
					
				</head>
				
				
				<body>
					<article class="mainArticle">
						<h1 id="mainTitle">Bijvangst aan schol mag jaar langer terug in zee </h1>
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
						
						<p>Nederland heeft de EU-landen rond de Noordzee aan zijn kant gekregen en die vragen de Europese Commissie nu om een jaar respijt, meldt het ministerie van Economische Zaken.</p>
					</article>
					
				<script src="YOUR/PATH/v-rhythm.js"></script>
				</body>
			
			</html>

## And you're done!

## Something wrong?

You can debug the framework with firebug. For more information and tools checkout: https://developers.google.com/web/tools/chrome-devtools

## Author

Kevin Riel

	   

   	   
