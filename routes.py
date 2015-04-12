from flask import Flask, request, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from sklearn.neighbors import KNeighborsClassifier
import time

app= Flask(__name__)
db= SQLAlchemy(app)

app.config['SQLALCHEMY_DATABASE_URI']= 'mysql://nikhilnathwani:LOLipop001@localhost/nbastats' 

class Team(db.Model):
	__tablename__= 'teams'
	team_id= db.Column(db.Integer, primary_key=True)
	name= db.Column(db.Text)
	year= db.Column(db.Integer)
	players= db.relationship('Player', lazy='dynamic')

class Player(db.Model):
	__tablename__= 'players'
	player_id= db.Column(db.Integer, primary_key=True)
	player= db.Column(db.Text)
	team_id= db.Column(db.Integer, db.ForeignKey('teams.team_id'))
	link= db.Column(db.Text)
	age= db.Column(db.Float)
	g= db.Column(db.Float)
	gs= db.Column(db.Float)
	mp_per_g= db.Column(db.Float)
	fg_per_g= db.Column(db.Float)
	fga_per_g= db.Column(db.Float)
	fg_pct= db.Column(db.Float)
	fg3_per_g= db.Column(db.Float)
	fg3a_per_g= db.Column(db.Float)
	fg3_pct= db.Column(db.Float)
	fg2_per_g= db.Column(db.Float)
	fg2a_per_g= db.Column(db.Float)
	fg2_pct= db.Column(db.Float)
	ft_per_g= db.Column(db.Float)
	fta_per_g= db.Column(db.Float)
	ft_pct= db.Column(db.Float)
	orb_per_g= db.Column(db.Float)
	drb_per_g= db.Column(db.Float)
	trb_per_g= db.Column(db.Float)
	ast_per_g= db.Column(db.Float)
	stl_per_g= db.Column(db.Float)
	blk_per_g= db.Column(db.Float)
	tov_per_g= db.Column(db.Float)
	pf_per_g= db.Column(db.Float)
	pts_per_g= db.Column(db.Float)

@app.route('/teams/', methods=['GET'])
def teams():
	if request.method == 'GET':
		team= request.args.get('team',"BOS")
		year= request.args.get('year',2012)
		print team, year

		query = "SELECT * FROM teams WHERE name=%s AND year=%d" % ("\""+team+"\"",year)
		result= Team.query.from_statement(query).first()

		json_result= {'name': result.name,
					  'year': result.year}

		return jsonify(items=json_result)
	return

'''@app.route('/teams/', methods=['GET'])
def teams():
	if request.method == 'GET':
		team= request.args.get('limit',10)
		off= request.args.get('offset',0)
		results= Team.query.limit(lim).offset(off).all()

		json_results= []
		for result in results:
			d= {'name': result.name,
				'year': result.year}
			json_results.append(d)
		return jsonify(items=json_results)
	return'''

@app.route('/teams/<int:input_id>', methods=['GET'])
def team(input_id):
	if request.method == 'GET':
		result= Team.query.filter_by(team_id=input_id).first()

		json_result= {'name': result.name,
					  'year': result.year}

		return jsonify(items=json_result)
	return

@app.route('/players/', methods=['GET'])
def players():
	if request.method == 'GET':
		team= request.args.get('team',"BOS")
		year= request.args.get('year',2012)
		print team, year

		queryTeams= "SELECT team_id FROM teams WHERE name=%s AND year=%s" % ("\""+team+"\"",year)
		teamResult= Team.query.from_statement(queryTeams).first()

		queryPlayers= "SELECT * FROM players WHERE team_id=%d" % (teamResult.team_id)
		playerResults= Player.query.from_statement(queryPlayers).all()

		json_results= []
		for result in playerResults:
			d= {'player': result.player,
				'team_id': result.team_id,
				'link': result.link,
				'age': result.age,
				'g': result.g,
				'gs': result.gs,
				'mp_per_g': result.mp_per_g,
				'fg_per_g': result.fg_per_g,
				'fga_per_g': result.fga_per_g,
				'fg_pct': result.fg_pct,
				'fg3_per_g': result.fg3_per_g,
				'fg3a_per_g': result.fg3a_per_g,
				'fg3_pct': result.fg3_pct,
				'fg2_per_g': result.fg2_per_g,
				'fg2a_per_g': result.fg2a_per_g,
				'fg2_pct': result.fg2_pct,
				'ft_per_g': result.ft_per_g,
				'fta_per_g': result.fta_per_g,
				'ft_pct': result.ft_pct,
				'orb_per_g': result.orb_per_g,
				'drb_per_g': result.drb_per_g,
				'trb_per_g': result.trb_per_g,
				'ast_per_g': result.ast_per_g,
				'stl_per_g': result.stl_per_g,
				'blk_per_g': result.blk_per_g,
				'tov_per_g': result.tov_per_g,
				'pf_per_g': result.pf_per_g,
				'pts_per_g': result.pts_per_g}
			json_results.append(d)
		return jsonify(items=json_results)
	return

@app.route('/players/<int:input_id>', methods=['GET'])
def player(input_id):
	if request.method == 'GET':
		result= Player.query.filter_by(player_id=input_id).first()

		json_result= {'player': result.player,
					  'team_id': result.team_id,
					  'link': result.link,
					  'age': result.age,
					  'g': result.g,
					  'gs': result.gs,
					  'mp_per_g': result.mp_per_g,
					  'fg_per_g': result.fg_per_g,
					  'fga_per_g': result.fga_per_g,
					  'fg_pct': result.fg_pct,
					  'fg3_per_g': result.fg3_per_g,
					  'fg3a_per_g': result.fg3a_per_g,
					  'fg3_pct': result.fg3_pct,
					  'fg2_per_g': result.fg2_per_g,
					  'fg2a_per_g': result.fg2a_per_g,
					  'fg2_pct': result.fg2_pct,
					  'ft_per_g': result.ft_per_g,
					  'fta_per_g': result.fta_per_g,
					  'ft_pct': result.ft_pct,
					  'orb_per_g': result.orb_per_g,
					  'drb_per_g': result.drb_per_g,
					  'trb_per_g': result.trb_per_g,
					  'ast_per_g': result.ast_per_g,
					  'stl_per_g': result.stl_per_g,
					  'blk_per_g': result.blk_per_g,
					  'tov_per_g': result.tov_per_g,
					  'pf_per_g': result.pf_per_g,
					  'pts_per_g': result.pts_per_g}

		return jsonify(items=json_result)
	return

#returns similarity scores and indices within training set of nearest neighbors
def kNNEngine(k,train,test):
    #create classifier
    clf= KNeighborsClassifier(k)
    clf.fit(train, [0]*len(train)) #2nd attribute is arbitrary feature values

    #get nearest neighbors of my test point
    x= clf.kneighbors(test) #returns array([distances list],[neighbor index list])
    similarity_scores, indices= x[0][0], x[1][0]
    return similarity_scores, indices

@app.route('/knn/', methods=['GET'])
def kNN():
	start= time.time()
	if request.method == 'GET':
		#0) Process input arguments
		team= request.args.get('team',"BOS")
		yr= request.args.get('year',2012)
		year0= request.args.get('year0',1947)
		yearN= request.args.get('yearN',2015)
		stat= request.args.get('stat','pts_per_g')
		time0= time.time()

		#1) Get team_id t of input team. Called "chosenTeam"
		query= "SELECT team_id FROM teams WHERE name=%s AND year=%s" % ("\""+team+"\"",yr)
		result= Team.query.from_statement(query).first()
		chosenTeam= int(result.team_id)
		time1= time.time()

		#2) Get all team_id's != t. List called "otherTeams"
		query= "SELECT team_id FROM teams WHERE team_id!=%d AND year>=%s AND year<=%s" % (chosenTeam,year0,yearN)
		results= Team.query.from_statement(query).all()
		otherTeams= [r.team_id for r in results]
		time2= time.time()

		#3) Get list of "stat" values for each player on "chosenTeam"
		query= "SELECT * FROM players WHERE team_id=%d ORDER BY %s DESC" % (chosenTeam,stat)
		results= Player.query.from_statement(query).all()
		chosenPlayers= [getattr(r,stat) for r in results]
		time3= time.time()

		#4) Get list of "stat" values for each player on each team in "otherTeams"
		otherPlayers= [] #list of JUST the stat values in desc. order
		otherPlayerResults= [] #list of classes containing ALL player info
		#need all training/test sets to have same # attributes (i.e. players),
		#so I need to chop all teams down to having the same # of players as the min
		minNumPlayers= len(chosenPlayers)
		for i in otherTeams:
			query= "SELECT * FROM players WHERE team_id=%d ORDER BY %s DESC" % (i,stat)
			results= Player.query.from_statement(query).all()
			#store full results
			otherPlayerResults.append(results)
			#store just the needed stat for all players
			otherPlayers.append([getattr(r,stat) for r in results])
			if len(results) < minNumPlayers:
				minNumPlayers= len(results)

		#level out the numnber of players on each train/test team
		if minNumPlayers < len(chosenPlayers):
			chosenPlayers= chosenPlayers[:minNumPlayers]
		otherPlayers= [x[:minNumPlayers] for x in otherPlayers]
		time4= time.time()

		#5) Use sklearn to calc similarity scores for each set of players & get nearest neighbors
		dists,inds= kNNEngine(5,otherPlayers,chosenPlayers)
		time5= time.time()

		#6) Throw nearest neighbor info into JSON and return it
		#	Want to know team name&year, simil_score, & players
		json_results= []
		for j,ind in enumerate(inds):
			#query to get team name and year
			query= "SELECT * FROM teams WHERE team_id=%d" % (otherTeams[ind])
			result= Team.query.from_statement(query).first()
			d= {
				'team': result.name,
				'year': result.year,
				'similarity': dists[j],
				'players': []
			}
			for p in otherPlayerResults[ind]:
				d['players'].append(
					{'player': p.player,
					'link': p.link,
					'age': p.age,
					'g': p.g,
					'mp_per_g': p.mp_per_g,
					stat: getattr(p,stat)})
			json_results.append(d)
		time6= time.time()
		print "Total time", time.time()-start
		print "Time0", time0-start
		print "Time1", time1-time0
		print "Time2", time2-time1
		print "Time3", time3-time2
		print "Time4", time4-time3
		print "Time5", time5-time4
		print "Time6", time6-time5
		return jsonify(items=json_results)
	return


if __name__ == '__main__':
	app.run(debug=True)