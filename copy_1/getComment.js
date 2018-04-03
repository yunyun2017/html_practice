/**
 * Created by huyun on 2018/3/18.
 */
var comments = document.getElementsByClassName('blog_comment_body');
var commentsLength = comments.length;
for(var i = 0;i<commentsLength;i++){
console.log(comments[i].innerHTML);
}