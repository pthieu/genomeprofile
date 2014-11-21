// Below call is to introduce jQuery but we can just use jQuery call already existing
// <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script><script src='https://rawgithub.com/pthieuklick/genomeprofile/master/index.js'></script>
jQuery('body').find('#originalContent strong').html('I used to be an ASIC Design/Verification Engineer at Qualcomm -- did something like design part of the Snapdragon processor -- but that became really un-fun after a few years. Now I make web sites for pharmaceutical companies, and that\'s way cooler :v');
// jQuery('.box:contains(\'Web Developer\')').find('span:contains(\'Web Developer\')').each(function() {
// $(this).text('Master Web Developer & Superstar');
// });
var firebaseURL = 'https://cdn.firebase.com/js/client/2.0.4/firebase.js';
jQuery.getScript(firebaseURL, function () {
  trackCurrentUser();
});


function trackCurrentUser() {
  var getURL = 'https://genome.klick.com/api/User/Current';
  jQuery.ajax({
    url: getURL,
    dataType: 'jsonp',
  }).done(function(data) {
    var d = data.Entries[0];
    user = {
      'first': d.FirstName,
      'last': d.LastName,
      'ID': d.UserID,
      'username': d.Username
    }

    //this is the name of the sub-db in our db
    var app = {
      'name': 'genomeprofile'
    }
    //connect to it
    var db = new Firebase('https://sizzling-fire-332.firebaseio.com/' + app.name);
    //db://genomeprofile/visits -- using this to reference the visits object
    var visitsRef = db.child("visits");
    // visits/ID/ -- using this to reference user in visits, will track visits by user ID here
    // var userIDRef =  visitsRef.child(user.ID);
    visitsRef.push(user);

    // this gets current value of reference and incremements by 1
    // var visitsRef = db.child("visits").transaction(function(current_value) {
    //   return (current_value || 0) + 1;
    // });
    //on value change, print value on console.
    //db.on('value', function(ss){
    //    console.log(JSON.stringify(ss.val()));
    //});
  });
}