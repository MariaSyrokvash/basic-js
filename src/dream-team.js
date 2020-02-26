module.exports = function createDreamTeam(members) {
  var nameOfTeam = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      nameOfTeam.push(members[i].trim()[0].toUpperCase());
    }
  }
  return nameOfTeam.sort().join('');
};