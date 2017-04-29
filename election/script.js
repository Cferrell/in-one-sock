  var createpol = function(naming,coloring)
  {
    var pol = {};
    pol.name = naming;
    pol.result = null;
    pol.totalVotes = 0;
    pol.color = coloring;


pol.tallyTotalVotes = function()
{
  this.totalVotes = 0;
    for (var i=0;
       i < this.result.length;
       i++)
       {this.totalVotes = this.totalVotes + this.result[i];
   console.log(this.totalVotes);
  }
};

    return pol;

    };

  var jane = createpol("Jane Doesitall",[132,17,11]);
  var betsy = createpol("Betsy Rocks",[245,141,136]);

  console.log(jane.name);
  console.log(betsy.name);

     jane.result = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
betsy.result = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];


    var setStateResults = function(state)
    {
      theStates[state].winner=null;
      if (jane.result[state] > betsy.result[state])
{theStates[state].winner = jane;
} else if (jane.result[state] < betsy.result[state])
{
  theStates[state].winner = betsy;
}

      var stateWinner = theStates[state].winner;

      if (stateWinner != null)
      {
   winnerName.innerText=theStates[state].winner.name;
        if (stateWinner == jane) {
         theStates[state].rgbColor = jane.color;
    } else {
      theStates[state].rgbColor = betsy.color;
    }
  } else {
    winnerName.innerText = "Draw";
    theStates[state].rgbColor = [11, 32, 57];
  };
      stateName.innerText = theStates[state].nameFull;
      stateAbbrev.innerText = theStates[state].nameAbbrev;
      Name1.innerText = jane.name;
      Results1.innerText = jane.result[state];
      Name2.innerText = betsy.name;
      Results2.innerText = betsy.result[state];
    };

jane.result[9] = 1;
betsy.result[9] = 28;

jane.result[4] = 17;
betsy.result[4] = 38;

jane.result[43] = 11;
betsy.result[43] = 27;

console.log(jane.result);
console.log(betsy.result);

jane.tallyTotalVotes();
betsy.tallyTotalVotes();

console.log(jane.totalVotes);
console.log(betsy.totalVotes);

var winner = "???";

if (jane.totalVotes > betsy.totalVotes)
{
  winner = jane.name;
    }
  else if (betsy.totalVotes > jane.totalVotes)
{
  winner = betsy.name;
  } else
{ winner = "Draw";
}

console.log("And the winner is.." + winner + "!!");

console.log("Jane is color" + jane.color);
console.log("Betsy is color" + betsy.color);

    var countryTable = document.getElementById('countryResults');
  var row = countryTable.children[0].children[0];

row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = betsy.name;
row.children[3].innerText = betsy.totalVotes;
row.children[5].innerText = winner;

var stateTable=document.getElementById('stateResults');
var header = stateTable.children[0].children[0];
var stateName = header.children[0];
var stateAbbrev = header.children[1];
var Name1data = stateTable.children[1].children[0];
var Name1 = Name1data.children[0];
var Results1 = Name1data.children[1];
var Name2data = stateTable.children[1].children[1];
var Name2 = Name2data.children[0];
var Results2 = Name2data.children[1];
var winnerData = stateTable.children[1].children[2];
var winnerName = winnerData.children[1];
