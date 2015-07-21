Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click [data-login]': function(e, tmpl){
    Meteor.loginWithMeteorDeveloperAccount();
  },
  'click [data-logout]': function(e, tmpl){
    Meteor.logout();
  }
});
