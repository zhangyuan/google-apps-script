function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function createPost(text) {
  var userId = 'me';
  var post = {
    object: {
      originalContent : text
    },
    access: {
      items: [{
        type: 'domain'
      }],
      domainRestricted: true
    }
  };

  post = PlusDomains.Activities.insert(post, userId);
  return post;
}

function getPosts() {
  var userId = 'me';
  var pageToken, posts;
  return PlusDomains.Activities.list(userId, 'user', {
    maxResults: 100,
    pageToken: pageToken
  });
}