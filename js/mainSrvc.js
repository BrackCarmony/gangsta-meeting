angular.module("quickAngular").service("mainSrvc", function(){

  var friends = [{
      name: "Brack",
      city:"Ogden"
    }, {
      name: "Steven",
      city:"Lichensteinsfuasdfkasdf"
    }, {
      name: "Alex",
      city:"Bonney Lake"
    }, {
      name: "Mark1",
      city:"LA"
    }, {
      name: "MarkAlpha",
      city:"Who Knows"
    }, {
      name: "Matt",
      city:"Chicago"
    }, {
      name: "Karam Cream Cheese",
      city:"Bowie"
    }];

    this.getFriends = function(){
      return friends;
    }

    this.removeFriend = function(name){
      for (var i=0;i<friends.length;i++){
        if (friends[i].name === name){
          friends.splice(i,1);
          i--;
        }
      }
    }

    this.addFriend = function(newFriend){
      if (newFriend.name){
          friends.push(newFriend);
      }
    }

    this.removeRandomFriend = function(){
      if (Math.random()<1/6){
        var i = Math.floor(Math.random()*friends.length);
        var deadFriend = friends.splice(i,1)[0];
        console.log(deadFriend);
        alert("No regrets. See you in hell " + deadFriend.name+".");
      }
      else{
        var i = Math.floor(Math.random()*friends.length);
        alert("Click. " + friends[i].name+" dodged a bullet there.");
      }

    }

});
