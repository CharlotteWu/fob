
/*
 * GET home page.
 */

module.exports = function(app){

	app.get('/', function (req,res){
		res.render('index',{title:'HomePage'});
	});

	app.get('/introduce', function (req,res){
		res.render('introduce',{title:'Introduce'});
	});

	app.get('/mv',function (req,res){
		res.render('mv',{title:'Music & Video'});
	});

	app.get('/news',function (req,res){
		res.render('news',{title:'News'})
	});

	app.get('/dz',function (req,res){
		res.render('dz',{title:'Discuss Zone'})
	});

	app.get('/about',function (req,res){
		res.render('about',{title:'About'})
	});
};
 