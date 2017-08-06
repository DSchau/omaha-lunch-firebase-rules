const functions = require('firebase-functions');
const admin = require('firebase-admin');

const addTimestamp = require('./add-timestamp');
const markdownToHTML = require('./markdown-to-html');

admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate(event => {
  const user = event.data;
  return admin.database().ref(`/users/${user.uid}`)
    .update(user);
});

exports.addTimestampToPost = addTimestamp({ functions, admin }, `/posts/{postId}/title`);

exports.convertPostToMarkdown = markdownToHTML({ functions, admin }, `/posts/{postId}/text`);

exports.addTimestampToComment = addTimestamp({ functions, admin }, `/comments/{commentId}/title`);

exports.convertCommentToMarkdown = markdownToHTML({ functions, admin }, `/comments/{commentId}/text`);

exports.addCommentToPost = functions.database.ref(`/comments/{commentId}/parent`).onCreate(event => {
  const { commentId } = event.params;
  const parentId = event.data.val();

  // return admin.database().ref(`/posts/${parentId}/comments`)
  //   .push(commentId);
});
