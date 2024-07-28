jQuery(function (): void {
  // ---------- Typewriter effect -------------
  //@ts-ignore
  let typewriter = new Typewriter(app, {
    loop: false,
    delay: 50,
  });

  typewriter
    .pauseFor(750)
    .typeString(
      `class <span class="jaune">Louan</span> <span class="bleu">{</span><br /><span class="ligne">String <span class="gris">job</span> = <span class="bleu">"</span><span class="vert">Développeur Fullstack</span><span class="bleu">";</span></span><br /><span class="ligne">int <span class="gris">âge</span> = <span class="rouge">${getAge()}</span><span class="bleu">;</span></span><br /><span class="ligne bool">boolean <span class="gris">estVéhiculé</span> = <span class="rouge">true</span><span class="bleu">;</span></span><br /><span class="ligne outilsdiv"><span class="outils">String<span class="bleu">[]</span> <span class="gris">autresLangues</span> = </span><div class="te" onclick="openBubble(this, 'normal')"><img width="50" src="image/anglais.png" alt="anglais" title="anglais"><p>Avancé</p></div><div class="te" onclick="openBubble(this, 'normal')"><img width="50" src="image/espagnol.png" alt="Espagnol" title="Espagnol"><p>Notions</p></div><span class="bleu">;</span></span><br /><span class="ligne">String<span class="bleu">[]</span> <span class="gris">passions</span> = <span class="bleu">{"</span><span class="vert">Voile</span><span class="bleu">", "</span><span class="vert">Entrepreneuriat</span><span class="bleu">", "</span><span class="vert">Nouvelles technologies</span><span class="bleu">", "</span><span class="vert">Exploration spatiale</span><span class="bleu">"};</span><br/><span class="bleu">}</span>`
    )
    .start();

  $("#r1").on("click", function () {
    $(".dynamicWindow").fadeOut(10);
    $(".dynamicWindow").queue(function () {
      setTimeout(function () {
        $(".dynamicWindow").dequeue();
      }, 2000);
    });
    $(".dynamicWindow").fadeIn(100);
  });

  function getAge(): number {
    let birth = new Date(2002, 10, 18);
    let diff = Date.now() - birth.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  // -------- Moving fake window management  --------
  dragElement(document.getElementById("movediv"));

  function dragElement(elem: any): void {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    document.getElementById("bord").onmousedown = dragMouseDown;

    function dragMouseDown(e: any): void {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e: any): void {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      console.log(window.innerWidth - elem.offsetLeft - elem.offsetWidth * 0.5);
      elem.style.top = elem.offsetTop - pos2 + "px";
      elem.style.left = elem.offsetLeft - pos1 + "px";
    }

    function closeDragElement(): void {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      if (
        elem.offsetLeft - elem.scrollLeft - elem.offsetWidth * 0.5 <
          0 /* gauche */ ||
        elem.offsetTop - elem.scrollTop - elem.offsetHeight * 0.5 <
          0 /* haut */ ||
        window.innerWidth - elem.offsetLeft - elem.offsetWidth * 0.5 <
          0 /* droite */ ||
        window.innerHeight - elem.offsetTop - elem.offsetHeight * 0.5 <
          0 /* bas */
      ) {
        //si dépasse à gauche
        elem.style.top = 50 + "%";
        elem.style.left = 50 + "%";
      }
    }
  }
});
