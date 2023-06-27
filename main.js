let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #6A4873;"> Me gusta diseñar y la tecnología. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
