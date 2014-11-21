// Below call is to introduce jQuery but we can just use jQuery call already existing
// <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script><script src='https://rawgithub.com/pthieuklick/genomeprofile/master/index.js'></script>
jQuery('body').find('#originalContent strong').html('I used to be an ASIC Design/Verification Engineer at Qualcomm -- did something like design part of the Snapdragon processor -- but that became really un-fun after a few years. Now I make web sites for pharmaceutical companies, and that\'s way cooler :v');
// jQuery('.box:contains(\'Web Developer\')').find('span:contains(\'Web Developer\')').each(function() {
  // $(this).text('Master Web Developer & Superstar');
// });
debugger;
getCurrentUser();

function getCurrentUser() {
  var getURL = 'http://genome.klick.com/api/User/Current?callback=';
  jQuery.ajax({
    url: getURL,
    dataType: 'jsonp',
  }).done(function(data) {
    var d = data.Entries[0];
    console.log(d);
    user = {
      'First': d.FirstName,
      'Last': d.LastName,
      'UID': d.UserID,
      'Username': d.Username
    }
    console.log(user);
  });
}